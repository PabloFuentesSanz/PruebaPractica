import React, {useEffect } from 'react'
import AuthForm from "../../components/AuthForm";
import {registerWithEmail} from "../../firebase/firebaseConf"
import { useToast } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import {useNavigate} from "react-router-dom"
import axios from "axios"


function Register() {
  const toast = useToast();
  const { isLogged, login } = useUser();
  let navigate = useNavigate();

  const handleSubmit = (e, user) => {
    e.preventDefault()
    registerWithEmail(user.email, user.password).then((userCredential) => {
      toast({
        title: "Account created",
        description: "We've created your account for you",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      login(user);
      console.log(user)
      axios.post("http://localhost:5000/createUser", user);
    })
    .catch((error) => {
      toast({
        title: "ERROR",
        description: "Email already exists",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    });
  }



  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged]);


  return (
    <AuthForm type="register" onClick={handleSubmit}/>
  )
}

export default Register