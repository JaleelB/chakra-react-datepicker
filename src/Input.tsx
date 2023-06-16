import { Input } from "@chakra-ui/react";
import React from "react";
import { ForwardedRef } from "react";

interface CustomInputProps {
    value: string;
    onClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    
    ({ value, onClick, onChange }, ref: ForwardedRef<HTMLInputElement>) => (
      <Input
        onClick={onClick}
        onChange={onChange}
        ref={ref}
        value={value}
        placeholder={value ? value : "Select a date"}
      />
    )
);
  
export default CustomInput;
