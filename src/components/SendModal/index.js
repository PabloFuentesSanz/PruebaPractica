import React, { useState } from "react";
import {
  Stack,
  Button,
  chakra,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  useToast
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import axios from "axios";
import { getUser } from "../../features/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user";

const CBsArrowUpRight = chakra(BsArrowUpRight);

function SendModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector(selectUser);
  const [amount, setAmount] = useState(0);
  const [publicKey, setPublicKey] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const sendMoney = async () => {

    if(amount > 0 && publicKey != ""){
      if(amount <= user.amount){
        await axios.put(`http://localhost:5000/send/${user.email}`, {
          amount: amount,
          publicKey: publicKey,
        });
        dispatch(getUser(user.email));
        toast({
          description: "Successful transfer ",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }else{
        toast({
          description: "Do not have enough liquidity",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }else{
      toast({
        description: "Required fields must be filled",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Stack align="center">
        <Button colorScheme="orange" onClick={onOpen}>
          <CBsArrowUpRight />
        </Button>
        <Text color="orange">Send</Text>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send Ethereum</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Input
                placeholder="Public Key"
                onChange={(e) => setPublicKey(e.target.value)}
              />
              <Input
                placeholder="USD"
                onChange={(e) => setAmount(e.target.value)}
                type="number"
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" onClick={sendMoney}>Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SendModal;
