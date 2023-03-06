import { Box, TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { useController, Control } from "react-hook-form";

export type IInputFieldProps = TextFieldProps & {
  name: string;
  label?: string;
  control: Control<any>;
};

export function InputField({
  name,
  control,
  type,
  value: externalValue,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  ...rest
}: IInputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...rest}
      type={type}
      fullWidth
      size={"small"}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
    />
  );
}
