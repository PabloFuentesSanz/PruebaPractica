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
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user";
import axios from "axios";
import { getUser } from "../../features/user";
import { useDispatch } from "react-redux";
import { BsPlusCircle } from "react-icons/bs";

const CBsPlusCircle = chakra(BsPlusCircle);

function BuyModal() {
  const user = useSelector(selectUser);
  const [amount, setAmount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();

  const depositMoney = async () => {
    if (amount > 0) {
      await axios.put(`http://localhost:5000/deposit/${user.email}`, {
        amount: amount,
      });
      dispatch(getUser(user.email));

      toast({
        description: "Successful deposit",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        description: "Deposit must be greater than 0$",
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
          <CBsPlusCircle />
        </Button>
        <Text color="orange">Buy</Text>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy Ethereum</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={8} direction="row">
              <Stack>
                <Text>ETH</Text>
                <Input placeholder="ETH" value={amount * 0.000678} disabled />
              </Stack>
              <Stack>
                <Text>USD</Text>
                <Input
                  placeholder="USD"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                />
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" onClick={depositMoney}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BuyModal;
