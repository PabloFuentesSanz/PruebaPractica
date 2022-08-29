import React, { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import { loginWithEmail } from "../../firebase/firebaseConf";
import { useToast } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/user";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const toast = useToast();
  const { isLogged, login } = useUser();
  let navigate = useNavigate();

  const handleSubmit = (e, user) => {
    e.preventDefault();
    loginWithEmail(user.email, user.password)
      .then((userCredential) => {
        toast({
          title: "Succesful Login",
          description: "Enjoy the experience",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getUser(user.email));
        login(user);
      })
      .catch((error) => {
        toast({
          title: "ERROR",
          description: "Incorrect email or password",
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

  return <AuthForm type="login" onClick={handleSubmit} />;
};

export default Login;
