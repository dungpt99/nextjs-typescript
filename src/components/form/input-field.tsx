import { Box } from "@mui/material";
import React from "react";
import { useController, Control } from "react-hook-form";

export interface IInputFieldProps {
  name: string;
  label?: string;
  control: Control<any>;
}

export function InputField({ name, label, control }: IInputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <Box onClick={() => onChange(value + 1)} ref={ref}>
      {name}:{value}
    </Box>
  );
}
