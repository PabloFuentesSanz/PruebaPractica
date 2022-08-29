import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user";

function TableTransactions() {
  const user = useSelector(selectUser);
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const trans = await axios.get(
      `http://localhost:5000/transactions/${user.publicKey}`
    );
    setTransactions(trans.data);
  };

  useEffect(() => {
    getTransactions();
  }, [user]);

  return (
    <Stack width="90vw" minH="50vh">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>From</Th>
              <Th>To</Th>
              <Th>Amount</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((tran, i) => {
              return (
                <Tr key={i}>
                  <Td>{tran.type}</Td>
                  <Td>{tran.from}</Td>
                  <Td>{tran.to}</Td>
                  <Td>{tran.amount}$</Td>
                  <Td>{tran.date}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default TableTransactions;
