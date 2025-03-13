import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import toast from "react-hot-toast";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";

const ForceChangePassword = ({ setForceChangePassword }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [handleChangePassword] = useChangePasswordMutation();
  useCloseModalClickOutside(modalRef, () => {
    setForceChangePassword(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Change password login api */
  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
    };
    const data = await handleChangePassword(payload);
    if (data.success) {
      toast.success(data?.result?.message);
      dispatch(logout());
      setForceChangePassword(false);
    } else {
      toast.error(data?.error?.oldPassword[0]?.description);
    }
  };

  return (
    <div
      role="dialog"
      aria-labelledby="dialog-static-name"
      className="modal fade in show"
      aria-hidden="false"
      aria-modal="true"
      style={{ display: "block" }}
    >
      <div
        className="modal-dialog land-login-modal"
        style={{ marginTop: "243.812px" }}
      >
        <div className="modal-content" ref={modalRef}>
          <div className="modal-header">
            <h5 id="change-password" className="modal-title pull-left">
              Change Password
            </h5>
            <button
              onClick={() => setForceChangePassword(false)}
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="close"
            >
              <i className="mdi mdi-close" />
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-change-pwd">
              <div className="container-fluid">
                <div className="row my-1">
                  <div className="col-md-12">
                    <div className="userTables">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="new-cp-form ng-dirty ng-touched ng-submitted ng-invalid"
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
                                className="form-control ng-dirty ng-touched is-invalid ng-invalid"
                              />

                              {errors.password?.type === "required" && (
                                <div className="invalid-feedback ng-star-inserted">
                                  <div className="ng-star-inserted">
                                    The Old Password field is required
                                  </div>
                                </div>
                              )}
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
                                  pattern:
                                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                                })}
                                type="password"
                                className="form-control ng-dirty ng-touched is-invalid ng-invalid"
                              />
                              {errors.newPassword?.type === "required" && (
                                <div className="invalid-feedback ng-star-inserted">
                                  <div className="ng-star-inserted">
                                    The New Password field is required
                                  </div>
                                </div>
                              )}
                              {errors.newPassword?.type === "pattern" && (
                                <div className="invalid-feedback ng-star-inserted">
                                  <div className="ng-star-inserted">
                                    New Password must contain at least: 1
                                    uppercase letter, 1 lowercase letter, 1
                                    number
                                  </div>
                                </div>
                              )}
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
                                  pattern:
                                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                                })}
                                type="password"
                                className="form-control ng-dirty ng-touched ng-invalid is-invalid"
                              />
                              {errors.newPasswordConfirm?.type ===
                                "required" && (
                                <div className="invalid-feedback ng-star-inserted">
                                  <div className="ng-star-inserted">
                                    New Password Confirmation is required.
                                  </div>
                                </div>
                              )}
                              {errors.newPasswordConfirm?.type ===
                                "pattern" && (
                                <div className="invalid-feedback ng-star-inserted">
                                  <div className="ng-star-inserted">
                                    New Password Confirmation must contain at
                                    least: 1 uppercase letter, 1 lowercase
                                    letter, 1 number
                                  </div>
                                </div>
                              )}
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

export default ForceChangePassword;
