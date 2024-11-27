import React, { useState } from "react";
import InputText from "../../components/Input/InputText";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom-v6";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const userLoginValidation = (key, value) => {
    console.log("emailValidator.validate(value)");
    switch (key) {
      case "email": {
        if (!value.trimStart()) {
          return "please enter email";
        }
        return "";
      }
      case "password": {
        if (!value.trimStart()) {
          return "please enter password";
        }
        return "";
      }
      default:
        return "";
    }
  };
  const onHandlerChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const invalidData = {};
  const onSubmit = () => {
    Object.keys(userData).forEach((key) => {
      const errorValue = userLoginValidation(key, userData[key]);
      if (errorValue) {
        invalidData[key] = errorValue;
      }
    });
    if (Object.keys(invalidData).length) {
      setError(invalidData);
    } else {
      navigate("/dashboard");
      setError({});
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-grey-400 text-white-50 w-[402px] py-10 pl-5 pr-7">
        <div className="text-lg pb-5 font-bold">User Login</div>
        <div>
          <InputText
            label="Email"
            placeholder="Enter Email"
            name="email"
            value={userData.email}
            onChange={onHandlerChange}
          />
          {!userData.email.trimStart() && error.email ? (
            <div className="text-orange-400">{error.email}</div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-5">
          <InputText
            label="Password"
            placeholder="Enter Password"
            name="password"
            value={userData.password}
            onChange={onHandlerChange}
          />
          {!userData.password.trimStart() && error.password ? (
            <div className="text-orange-400">{error.password}</div>
          ) : (
            ""
          )}
        </div>

        <div className="mt-10">
          <PrimaryButton
            className="w-full"
            text="Login"
            type="submit"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
