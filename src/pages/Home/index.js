import React, { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navabar";

function Home() {
  let navigate = useNavigate();

  const { isLogged } = useUser();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <>
      <Navbar />
    </>
  );
}

export default Home;
