import { useForm } from "react-hook-form";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [handleChangePassword] = useChangePasswordMutation();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      dispatch(logout());
      navigate("/");
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };
  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="ng-star-inserted">
              <div className="container-fluid">
                <div className="row my-1">
                  <div className="col-md-12">
                    <div className="userTables">
                      <h2 className="ng-star-inserted">change password</h2>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="new-cp-form ng-untouched ng-pristine ng-invalid"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor
                                className="text-capitalize font-weight-bold mb-0"
                              >
                                old password
                              </label>
                              <input
                                {...register("password", { required: true })}
                                type="password"
                                id
                                className="form-control ng-untouched ng-pristine ng-invalid"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor
                                className="text-capitalize font-weight-bold mb-0"
                              >
                                new password
                              </label>
                              <input
                                {...register("newPassword", {
                                  required: true,
                                })}
                                type="password"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor
                                className="text-capitalize font-weight-bold mb-0"
                              >
                                confirm password
                              </label>
                              <input
                                {...register("newPasswordConfirm", {
                                  required: true,
                                })}
                                type="password"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                              />
                            </div>
                            <div className="form-group mt-2">
                              <button type="submit" className="btn cp-btn">
                                change password
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
