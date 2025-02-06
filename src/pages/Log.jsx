import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { getExistingUserApi, userRegisterApi, userLoginApi } from "../services/allApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Log() {
  const [authstatus, setAuthStatus] = useState(false);
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const nav = useNavigate();

  const handleRegister = async () => {
    const { email, username, password } = user;
    console.log(user);
    if (!email || !user || !password) {
      toast.warning("enter valid inputs");
    } else {
      const result = await getExistingUserApi(email);
      console.log(result);
      if (result.data.length > 0) {
        toast.info("User email already exists");
      } else {
        const result = await userRegisterApi(user);
        if (result.status == 201) {
          toast.success("user registartion successfull");
          setUser({
            email: "",
            username: "",
            password: "",
          });
          changestatus();
        } else {
          toast.error("registration failed");
          console.log(result);
          setUser({
            email: "",
            username: "",
            password: "",
          });
        }
      }
    }
  };

  const handleLogin = async () => {
    const { email, username, password } = user;

    if (!email || !password) {
      toast.warning("enter valid inputs");
    } else {
      const result = await userLoginApi(email, password);
      if (result.status == 200) {
        if (result.data.length > 0) {
          toast.success("login success");
          nav("/dash");
        } else {
          toast.error("login failed..invalid email or password");
        }
      } else {
        toast.warning("something went wrong");
      }
    }
  };

  const changestatus = () => {
    setAuthStatus(!authstatus);
  };

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div
          className="container-fluiud d-flex justify-content-center align-items-center "
          style={{ height: "80vh" }}
        >
          <div className="w-50 border shadow bg-light border-3 border-dark p-3 ">
            <Row>
              <Col>
                <img
                  src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
                  className="w-100 h-100"
                  alt=""
                />
              </Col>
              <Col style={{ backgroundColor: "black" }} className="text-light">
                {authstatus ? <h3>Register</h3> : <h3>Login</h3>}

                <div className="my-4 text-dark">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />
                  </FloatingLabel>
                  {authstatus && (
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Username"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="username"
                        onChange={(e) => {
                          setUser({ ...user, username: e.target.value });
                        }}
                      />
                    </FloatingLabel>
                  )}
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />
                  </FloatingLabel>
                </div>
                <div className="d-flex justify-content-between">
                  {authstatus ? (
                    <button
                      className="btn btn-success"
                      onClick={handleRegister}
                    >
                      Register{" "}
                    </button>
                  ) : (
                    <button className="btn btn-link" onClick={handleLogin}>Login</button>
                  )}

                  {authstatus ? (
                    <button className="btn btn-link" onClick={changestatus}>
                      Already a user
                    </button>
                  ) : (
                    <button className="btn btn-link" onClick={changestatus}>
                      New user?
                    </button>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Log;
