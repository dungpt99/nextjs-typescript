import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";

export interface ILoginFormProps {}

export function LoginForm(props: ILoginFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: 1,
      password: 5,
    },
  });

  function handleLoginSubmit(values: any) {
    console.log(values);
  }

  return (
    <Box component={"form"} onSubmit={handleLoginSubmit}>
      <InputField name="username" control={control} />
      <InputField name="password" control={control} />
    </Box>
  );
}
