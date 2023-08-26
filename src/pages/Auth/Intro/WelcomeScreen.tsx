import ButtonAuthGoogle from "../../../components/Button/Auth/AuthGoogle";
import ButtonAuth from "../../../components/Button/Auth/AuthNormal";
import "./WelcomeScreen.css";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Intro({}: Props) {
  const navigate = useNavigate();
 
  return (
    <>
      <div className="logo-app">GetHealth</div>
      <div className="auth-page">
        <div className="intro-container ">
          <div className="intro-header">
            <h1>Welcome to GetHealth</h1>
            <div className="body-p5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
          </div>
          <div className="intro-option">
            <h3>Register</h3>
            <ButtonAuthGoogle
              onClick={() => {
                navigate("/xxxx");
              }}
            />
            <ButtonAuth
              onClick={() => {
                navigate("/register");
              }}
            />

            <div className="login-frame">
              <div className="body-p6">Already have an account?</div>
              <a
                onClick={() => {
                  navigate("/login");
                }}
              >
                <div className="body-p6 login-text">Log In</div>
              </a>
            </div>
          </div>
          <div className="intro-footer">
            <div className="body-p8">
              By continuing, you acknowledge that you have read, understood, and
              agree to GetHealths Terms & Conditions and Privacy Policy.
            </div>
            <div className="body-p9">© 2023 GetHealth</div>
          </div>
        </div>
      </div>
    </>
  );
}