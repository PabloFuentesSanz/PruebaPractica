import React, { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import { registerWithEmail } from "../../firebase/firebaseConf";
import { useToast } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import { getUser } from "../../features/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

function Register() {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLogged, login } = useUser();
  let navigate = useNavigate();

  const handleSubmit = (e, user) => {
    e.preventDefault();
    registerWithEmail(user.email, user.password)
      .then((userCredential) => {
        toast({
          title: "Account created",
          description: "We've created your account for you",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        axios
          .post("http://localhost:5000/createUser", {
            email: user.email,
            password: user.password,
          })
          .then(() => {
            dispatch(getUser(user.email));
            login(user);
          });
      })
      .catch((error) => {
        toast({
          title: "ERROR",
          description: "Email invalid email or password",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged]);

  return <AuthForm type="register" onClick={handleSubmit} />;
}

export default Register;
