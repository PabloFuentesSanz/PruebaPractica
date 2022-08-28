import React from "react";
import {
  chakra,
  Flex,
  Text,
  useClipboard,
  Box,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineCopy } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user";

const CAiOutlineCopy = chakra(AiOutlineCopy);

function PublicKey() {
  const user = useSelector(selectUser);

  const toast = useToast();
  const { onCopy } = useClipboard(user.publicKey);
  const handleCopy = () => {
    onCopy();
    toast({
      description: "Public key copied to clipboard",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <>
      <Text noOfLines="1" fontSize="md" color="gray.500">
        Public Key
      </Text>
      <Flex color="gray.400" borderBottom="1px" borderColor="orange.500" pb="5">
        <Box w="70%" ml="10">
          <Text noOfLines="1" fontSize="md">
            {user.publicKey}
          </Text>
        </Box>
        <CAiOutlineCopy fontSize="lg" onClick={handleCopy} mt="1" ml="4" />
      </Flex>
    </>
  );
}

export default PublicKey;
