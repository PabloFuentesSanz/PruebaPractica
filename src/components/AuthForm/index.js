import { useState } from "react";
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
} from "@chakra-ui/react";

import { FaUserAlt, FaLock, FaBitcoin } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaBitcoin = chakra(FaBitcoin);
const CAiFillEye = chakra(AiFillEye);
const CAiFillEyeInvisible = chakra(AiFillEyeInvisible);

function AuthForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = props.type === "login";
  let switchAuthLink;

  if (login) {
    switchAuthLink = (
      <Box>
        Don't have an account?{" "}
        <Link color="orange.500" href="/register">
          Sign Up
        </Link>
      </Box>
    );
  } else {
    switchAuthLink = (
      <Box>
        Already have an account?{" "}
        <Link color="orange.500" href="/">
          Sign In
        </Link>
      </Box>
    );
  }

  //Fuctions
  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <Stack mb="4" justifyContent="center" alignItems="center">
        <CFaBitcoin color="orange.300" fontSize="6xl" mb="4" />
        <Box minW={{ base: "90%", md: "500px" }}>
          <form>
            <Stack spacing={5} p="2rem" backgroundColor="white" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <InputRightElement
                    width="4.5rem"
                    onClick={handleShowClick}
                    fontSize="2xl"
                  >
                    {showPassword ? (
                      <CAiFillEyeInvisible color="gray.300" />
                    ) : (
                      <CAiFillEye color="gray.300" />
                    )}
                  </InputRightElement>
                </InputGroup>
                {login ? (
                  <FormHelperText textAlign="right">
                    <Link>Forgot password?</Link>
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme="orange"
                width="full"
                onClick={(e) => props.onClick(e, user)}
              >
                {login ? "Login" : "Register"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>

      {switchAuthLink}
    </Flex>
  );
}

export default AuthForm;
