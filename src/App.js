import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import { ChakraProvider } from "@chakra-ui/react";

import {UserContextProvider} from "./context/UserContext";

function App() {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                element={<route.component /> }
              />
            ))
            }
          </Routes>
        </Router>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default App;
