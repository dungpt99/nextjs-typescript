import React, { useState } from "react";
import classNames from "classnames/bind";
import { useRouter } from "next/router";

import styles from "./login.module.scss";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { useAuth } from "../../hooks";
import { LoginForm } from "@/src/components/auth";
import { LoginPayload } from "@/src/models";
import { Box, Paper, Typography } from "@mui/material";

const cx = classNames.bind(styles);

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const { login, logout, profile } = useAuth({
    // revalidateOnMount: false,
  });

  const handleLoginSubmit = async (payload: LoginPayload) => {
    try {
      await login(payload);
      console.log("success");
    } catch (error) {}
  };

  return (
    <Box className={cx("wrapper")}>
      <Paper
        elevation={4}
        sx={{
          mx: "auto",
          mt: 8,
          p: 4,
          maxWidth: "480px",
          textAlign: "center",
        }}
      >
        <Typography component={"h1"} variant={"h5"} mb={3}>
          EZ
        </Typography>
        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>

      {/* <div className={cx("content__button")}>
          <Button handleOnClick={handleLogin} className={cx("content__button--element")}>
            Login
          </Button>
        </div>
        <div className={cx("content__button")}>
          <Button handleOnClick={handleGetProfile} className={cx("content__button--element")}>
            Profile
          </Button>
        </div>
        <div className={cx("content__button")}>
          <Button handleOnClick={handleLogout} className={cx("content__button--element")}>
            Logout
          </Button>
        </div>
        <div>Profile: {JSON.stringify(profile || {}, null, 4)}</div> */}
    </Box>
  );
}
