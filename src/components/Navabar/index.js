import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  chakra,
  Center,
} from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import { FaBitcoin } from "react-icons/fa";
import { useSelector } from "react-redux";
import { reset, selectUser } from "../../features/user";
import { useDispatch } from "react-redux";

const CFaBitcoin = chakra(FaBitcoin);

export default function Navbar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const { logout } = useUser();
  const handleLogOut = () => {
    dispatch(reset());
    logout();
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <CFaBitcoin color="orange.300" fontSize="4xl" />
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center>
                    <Avatar size={"2xl"} mb="3" mt="3" />
                  </Center>
                  <Center mb="3">
                    <p>{user.userName.toUpperCase()}</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
