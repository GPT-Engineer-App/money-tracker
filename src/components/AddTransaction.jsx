import React, { useState } from "react";
import { Box, Button, Input, Select, Stack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const AddTransaction = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTransaction = () => {
    // For demonstration purposes, we're just console logging the new transaction
    console.log({ date, amount, type, category });
    // Here you would typically handle the state update or API call to add the new transaction
  };

  return (
    <Box>
      <Stack spacing={4} direction="row" align="center" mb={4}>
        <Input placeholder="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Select placeholder="Type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
        <Select placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="groceries">Groceries</option>
          <option value="bills">Bills</option>
          {/* Add more categories as needed */}
        </Select>
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddTransaction}>
          Add Transaction
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTransaction;
