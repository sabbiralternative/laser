import { useEditButtonValuesMutation } from "../../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setShowEditStake } from "../../../redux/features/global/globalSlice";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const EditStake = () => {
  const { getLanguage } = useLanguage();
  const dispatch = useDispatch();
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.label),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      dispatch(setShowEditStake(false));
    }
  };
  return (
    <div id="collapseSetting" className="collapse show">
      <div>
        <div style={{ position: "relative" }}>
          <form onSubmit={handleSubmit(onSubmit)} className="stakeDiv">
            <h3>{getLanguage(LanguageKey.STAKE)} </h3>
            <dl id className="setting-block stake-setting">
              {stakes?.map((stake, i) => {
                return (
                  <dd
                    {...register(`buttonGameValues.${i}.label`)}
                    key={i}
                    className="ng-star-inserted"
                  >
                    <input
                      defaultValue={stake?.label}
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                );
              })}

              <dd className="col-stake_edit">
                <button type="submit" id="save" className="btn-send ui-link">
                  {getLanguage(LanguageKey.SAVE)}
                </button>
              </dd>
            </dl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStake;
