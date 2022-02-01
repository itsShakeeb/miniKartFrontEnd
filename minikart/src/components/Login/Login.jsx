import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import debounce from "lodash.debounce";

import * as Action from "../../redux/actions";
import * as validation from "../../utils/apiService/validation/validation";
import InputField from "../../reusable/InputField";
import ProgressButton from "../../reusable/ProgressButton";

const Login = (props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loginPending, setLoginPending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    const data = {
      email,
      password,
    };

    const { isValid, errors } = validation.loginAllFieldValidation(data);
    if (!isValid) {
      setFormErrors(errors);
      alert("Field Detail Not valid");
    } else {
      doLogin();
    }
  };

  const doLogin = async () => {
    const { email, password } = user;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    setLoginPending(true);
    dispatch(
      Action.loginAction(formData, (res) => {
        if (res === true) {
          props.authVerification();
          setLoginPending(false);
        } else {
          const { key, msg } = res;
          setFormErrors((prevState) => ({
            ...prevState,
            [key]: [msg],
          }));
          setLoginPending(false);
        }
      })
    );
  };

  const onChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    debouncingSingleField(name, value);
  };

  const debouncingSingleField = debounce((key, value) => {
    const { isValid, errors } = validation.loginSingleFieldValidation({
      key,
      value,
    });
    if (!isValid) {
      setFormErrors({ ...formErrors, [key]: errors[key] });
    } else {
      setFormErrors({ ...formErrors, [key]: null });
    }
  }, 1000);

  const { email, password } = user;
  return (
    <div className="login">
      <Form onSubmit={onSubmit} noValidate className="login-form">
        <InputField
          value={email}
          name="email"
          onChange={onChange}
          placeholder="Email"
          className="w-100"
          type="email"
          error={formErrors["email"]}
        />
        <InputField
          value={password}
          name="password"
          type="password"
          onChange={onChange}
          placeholder="Password"
          className="w-100"
          error={formErrors["password"]}
        />
        {loginPending ? (
          <ProgressButton variant="success" message="Sign In..." css="w-100" />
        ) : (
          <Button variant="success" type="submit" className="w-100">
            Sign In
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Login;
