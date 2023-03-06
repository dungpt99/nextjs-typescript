import { LoginPayload } from "@/src/models";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, CircularProgress, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export interface ILoginFormProps {
  onSubmit: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: ILoginFormProps) {
  const schema = yup.object().shape({
    username: yup.string().required("Please enter username").min(4, "User required"),
    password: yup.string().required("Please enter password").min(6, "Password required"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  async function handleLoginSubmit(payload: LoginPayload) {
    console.log(payload);
    await onSubmit?.(payload);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box component={"form"} onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" control={control} label="Username" sx={{ mb: 3 }} />
      <InputField
        label="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress color="inherit" size={"1em"} /> : null}
        type="submit"
        variant="contained"
        sx={{ mt: 3 }}
      >
        Login
      </Button>
    </Box>
  );
}
