import React, { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navabar";
import Wallet from "../../components/Wallet";


function Home() {

  let navigate = useNavigate();
  const { isLogged } = useUser();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  //Dispatch useEffect


  return (
    <>
      <Navbar />
      <Wallet />
    </>
  );
}

export default Home;
