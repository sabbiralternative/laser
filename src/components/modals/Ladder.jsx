import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const Ladder = ({ setLadderData, ladderData }) => {
  const { getLanguage } = useLanguage();
  const ladderRef = useRef();

  useCloseModalClickOutside(ladderRef, () => {
    setLadderData([]);
  });
  return (
    <>
      <div className="modal-backdrop fade in show"></div>
      <div
        role="dialog"
        tabIndex={-1}
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
      >
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
        <div role="document" className="bookModal modal-dialog">
          <div className="modal-content" ref={ladderRef}>
            <div className="modal-header">
              <h6 className="modal-title">Book</h6>
              <button
                onClick={() => setLadderData([])}
                type="button"
                aria-label="Close"
                className="btn-close close pull-right"
              >
                <i className="mdi mdi-close" />
              </button>
            </div>
            <div className="modal-body">
              <div className="col-md-12">
                <table>
                  <thead>
                    <tr>
                      <th>{getLanguage(LanguageKey.RUN)}</th>
                      <th>{getLanguage(LanguageKey.AMOUNT)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ladderData?.map((item, i) => {
                      return (
                        <tr key={i} className="ng-star-inserted">
                          <td>
                            {item?.start}-{item?.end}
                          </td>
                          <td
                            className={` ${
                              item?.exposure > 0 ? "text-green" : "text-red"
                            }`}
                          >
                            {item?.exposure}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default Ladder;
