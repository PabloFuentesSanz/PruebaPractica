import React from "react";
import {
  Text,
  Stack,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  chakra,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import PublicKey from "../PublicKey";
import BuyModal from "../BuyModal";
import TableTransactions from "../TableTransactions";
import SendModal from "../SendModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user";
const CFaEthereum = chakra(FaEthereum);

function Wallet() {
  const user = useSelector(selectUser);

  return (
    <Tabs isFitted variant="unstyled">
      <TabPanels>
        <TabPanel>
          <Stack justifyContent="center" alignItems="center">
            <PublicKey />
          </Stack>
          <Flex
            flexDirection="column"
            width="100wh"
            minH={{ base: "74.8vh", md: "78vh" }}
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing="5" justifyContent="center" alignItems="center">
              <CFaEthereum fontSize="50" />
              <Stack spacing="1" justifyContent="center" alignItems="center">
                <Text fontSize="5xl">{`${user.amount * 0.000678} ETH`}</Text>
                <Text fontSize="lg">{`$ ${user.amount} USD`}</Text>
              </Stack>
            </Stack>
            <Stack spacing={8} direction="row" align="center" mt="8">
              <BuyModal></BuyModal>
              <SendModal></SendModal>
            </Stack>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Stack justifyContent="center" alignItems="center">
            <PublicKey />
          </Stack>
          <Flex
            flexDirection="column"
            width="100wh"
            minH={{ base: "74.8vh", md: "78vh" }}
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing="1" justifyContent="center" alignItems="center">
              <Text fontSize="5xl">Transactions</Text>
              <TableTransactions />
            </Stack>
          </Flex>
        </TabPanel>
      </TabPanels>
      <TabList>
        <Tab _selected={{ color: "white", bg: "orange.500" }}>Wallet</Tab>
        <Tab _selected={{ color: "white", bg: "orange.500" }}>Activity</Tab>
      </TabList>
    </Tabs>
  );
}

export default Wallet;
