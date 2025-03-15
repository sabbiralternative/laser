import { useContext } from "react";
import { ApiContext } from "../../context/ApiProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Settings } from "../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faKey,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const { logo } = useContext(ApiContext);
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
    };
    const data = await handleLogin(loginData).unwrap();

    if (data.success) {
      const token = data?.result?.token;
      const bonusToken = data?.result?.bonusToken;
      const user = data?.result?.loginName;
      const game = data?.result?.buttonValue?.game;
      const memberId = data?.result?.memberId;
      dispatch(setUser({ user, token }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (data?.result?.changePassword) {
        navigate("/force-change-password");
      } else {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(data?.error);
    }
  };

  const loginWithDemo = async () => {
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();
    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
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
                    LOGIN
                    <FontAwesomeIcon
                      icon={faHandPointDown}
                      style={{ marginLeft: "4px" }}
                    />
                  </h4>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                    className="ng-dirty ng-touched ng-valid"
                  >
                    <div className="form-group m-b-20">
                      <input
                        {...register("username", { required: true })}
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
                          top: "8px",
                        }}
                        icon={faUser}
                      />
                    </div>
                    <div className="form-group m-b-20">
                      <input
                        {...register("password", { required: true })}
                        placeholder="Password"
                        type="password"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "8px",
                        }}
                        icon={faKey}
                      />
                    </div>
                    <div className="form-group text-center mb-1">
                      <button
                        style={{ display: "block" }}
                        type="submit"
                        className="btn btn-submit btn-login"
                      >
                        Login
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>
                    <div className="form-group text-center mb-0">
                      <button
                        style={{ display: "block" }}
                        onClick={loginWithDemo}
                        type="button"
                        className="btn btn-submit btn-login"
                      >
                        Login with Demo ID
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>
                    {Settings.registration && (
                      <div className="form-group text-center mt-2">
                        <button
                          style={{ display: "block" }}
                          onClick={() => navigate("/register")}
                          type="button"
                          className="btn btn-submit btn-login"
                        >
                          Register
                          <FontAwesomeIcon
                            icon={faSignInAlt}
                            className="ml-2"
                          />
                        </button>
                      </div>
                    )}

                    <div className="form-group text-center mt-0">
                      <button
                        style={{ display: "block" }}
                        onClick={() => navigate("/forgot-password")}
                        type="button"
                        className="btn btn-submit btn-login"
                      >
                        Forgot Password
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

export default Login;
