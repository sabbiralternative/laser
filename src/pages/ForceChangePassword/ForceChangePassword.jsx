import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiProvider";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const ForceChangePassword = () => {
  const { getLanguage } = useLanguage();
  const { logo } = useContext(ApiContext);
  const navigate = useNavigate();
  const [handleChangePassword] = useChangePasswordMutation();

  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
    };
    const data = await handleChangePassword(payload);
    if (data.success) {
      toast.success(data?.result?.message);
      localStorage.clear();
      navigate("/login");
    } else {
      toast.error(data?.error?.oldPassword[0]?.description);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="loginInner1">
                <div className="log-logo m-b-20 text-center">
                  <img className="logo-login" src={logo} />
                </div>
                <div className="featured-box-login featured-box-secundary default">
                  <h4 className="text-center">
                    {getLanguage(LanguageKey.CHANGE_PASSWORD)}
                    <FontAwesomeIcon icon={faHandPointDown} className="ml-2" />
                  </h4>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                    className="ng-dirty ng-touched ng-valid"
                  >
                    <div className="form-group m-b-20">
                      <label className="form-label text-start w-100">
                        {getLanguage(LanguageKey.OLD_PASSWORD)}:
                      </label>
                      <input
                        {...register("password", { required: true })}
                        type="text"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                        placeholder="User Name"
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "35px",
                        }}
                        icon={faKey}
                      />
                    </div>
                    <div className="form-group m-b-20">
                      <label className="form-label text-start w-100">
                        {getLanguage(LanguageKey.NEW_PASSWORD)}:
                      </label>
                      <input
                        {...register("newPassword", {
                          required: true,
                        })}
                        type="text"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                        placeholder="New Password"
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "35px",
                        }}
                        icon={faKey}
                      />
                    </div>
                    <div className="form-group m-b-20">
                      <label className="form-label text-start w-100">
                        {getLanguage(LanguageKey.CONFIRM_PASSWORD)}:
                      </label>
                      <input
                        {...register("newPasswordConfirm", {
                          required: true,
                        })}
                        type="text"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                        placeholder="Confirm Password"
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "35px",
                        }}
                        icon={faKey}
                      />
                    </div>

                    <div className="form-group text-center mb-1">
                      <button
                        type="submit"
                        className="btn btn-submit btn-login"
                      >
                        {getLanguage(LanguageKey.CHANGE_PASSWORD)}
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>

                    <div className="form-group text-center mt-0">
                      <button
                        onClick={() => navigate("/forgot-password")}
                        type="button"
                        className="btn btn-submit btn-login"
                      >
                        {getLanguage(LanguageKey.FORGOT_PASSWORD)}
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>

                    <small
                      style={{ color: "black" }}
                      className="recaptchaTerms"
                    >
                      This site is protected by reCAPTCHA and the Google
                      <a>Privacy Policy</a>
                      and
                      <a>Terms of Service</a> apply.
                    </small>
                  </form>
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
