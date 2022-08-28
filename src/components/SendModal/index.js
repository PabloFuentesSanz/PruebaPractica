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

  const sendMoney = async () => {
    if(amount > 0 && publicKey != ""){
      console.log(publicKey)
      await axios.put(`http://localhost:5000/send/${user.email}`, {
        amount: amount,
        publicKey: publicKey,
      });
      dispatch(getUser(user.email));

    }else{

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
