import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import Select from "react-select";

interface optionType {
  readonly value: string;
  readonly label: string;
}
const optionsValue: readonly optionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Forms = () => {
  const [selectVal, setSelectVal] = useState([]);

  const handleSelect = (selected: any) => {
    setSelectVal(selected);
  };
  console.log(selectVal);
  return (
    <Card>
      <CardHeader>Hello</CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Select Fruits</FormLabel>
          <Select
            onChange={handleSelect}
            isMulti
            value={selectVal}
            options={optionsValue}
          />
        </FormControl>
      </CardBody>
    </Card>
  );
};

export default Forms;
