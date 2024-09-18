"use client";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isValid }) => (
          <div className="login">
            <h2>Login</h2>
            <form noValidate onSubmit={handleSubmit}>
              <div className="form-handler">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Enter email address"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="form-handler">
                <label htmlFor="password">Enter Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Enter password"
                  id="password"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              {/* <button type="submit" disabled={!isValid}> */}
              <button type="submit">
                Login
              </button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
