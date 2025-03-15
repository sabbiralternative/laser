import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosSecure } from "../../lib/AxiosSecure";
import toast from "react-hot-toast";
import { ApiContext } from "../../context/ApiProvider";
import { API } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faKey,
  faMobile,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import useWhatsApp from "../../hooks/whatsapp";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
const Register = () => {
  const dispatch = useDispatch();
  const referralCode = localStorage.getItem("referralCode");
  const { refetch } = useWhatsApp();
  const [userData, setUserData] = useState({
    password: "",
    confirmPassword: "",
    mobileNo: "",
    otp: "",
    referralCode: "",
  });
  const { logo } = useContext(ApiContext);
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    orderId: "",
    otpMethod: "",
  });

  /* Handle register */
  const onSubmit = async () => {
    if (
      userData?.password !== userData?.confirmPassword &&
      userData?.confirmPassword?.length > 0
    ) {
      return toast.error("Password did not match !");
    } else if (userData?.password === "") {
      return toast.error("Password is required !");
    } else if (userData?.confirmPassword === "") {
      return toast.error("Confirm password is required !");
    } else if (userData?.mobileNo === "") {
      toast.error("Mobile no is required !");
    } else if (
      userData?.mobileNo?.length > 10 ||
      userData?.mobileNo?.length < 10
    ) {
      return toast.error("Enter ten digit mobile no !");
    } else if (userData?.otp === "") {
      return toast.error("OTP is required");
    } else if (userData?.otp?.length > 4 || userData?.otp?.length < 4) {
      return toast.error("Enter four digit OTP no");
    } else {
      const registerData = {
        password: userData?.password,
        confirmPassword: userData?.confirmPassword,
        mobile: userData?.mobileNo,
        otp: userData?.otp,
        referralCode: referralCode || userData.referralCode,
        orderId: order.orderId,
        otpMethod: order.otpMethod,
      };

      const { data } = await AxiosSecure.post(API.register, registerData);
      if (data?.success) {
        refetch();
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
        localStorage.setItem("token", data.result.token);

        if (data?.result?.changePassword === true) {
          navigate("/change-password-login");
        } else {
          toast.success(data?.result?.message);
          navigate("/");
        }
      } else {
        toast.error(data?.error?.description);
      }
    }
  };

  /* Get whats app api */
  const getOtp = async () => {
    const otpData = {
      mobile: userData?.mobileNo,
    };

    const res = await AxiosSecure.post(API.otp, otpData);
    const data = res.data;

    if (data?.success) {
      setOrder({
        orderId: data?.result?.orderId,
        otpMethod: "sms",
      });
      toast.error(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  return (
    <div style={{ height: "100%" }} className="login">
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="loginInner1">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                  className="log-logo m-b-20 text-center"
                >
                  <img className="logo-login" src={logo} />
                </div>
                <div className="featured-box-login featured-box-secundary default">
                  <h4 className="text-center">
                    Register
                    <FontAwesomeIcon icon={faHandPointDown} className="ml-2" />
                  </h4>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                    className="ng-dirty ng-touched ng-valid"
                  >
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) =>
                          setUserData({ ...userData, mobileNo: e.target.value })
                        }
                        type="number"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                        placeholder="Mobile No."
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "8px",
                        }}
                        icon={faMobile}
                      />
                      <button
                        style={{ width: "100%" }}
                        onClick={getOtp}
                        className="btn btn-primary btn-block"
                        type="button"
                      >
                        Get OTP
                      </button>
                    </div>
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            password: e.target.value,
                          });
                        }}
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
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            confirmPassword: e.target.value,
                          });
                        }}
                        placeholder="Confirm Password"
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
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            otp: e.target.value,
                          });
                        }}
                        placeholder="OTP"
                        type="text"
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
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            referralCode: e.target.value,
                          });
                        }}
                        placeholder="Referral Code"
                        type="text"
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
                        type="submit"
                        className="btn btn-submit btn-login"
                      >
                        Register
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>
                    <div style={{ color: "black" }} className="mt-2 mb-1">
                      <b>Already have User?</b>{" "}
                      <Link to="/login" className="ms-1">
                        <b>Login here</b>
                      </Link>
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

export default Register;
