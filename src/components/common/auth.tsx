import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks";

export interface IAuthProps {
  children: any;
}

export default function Auth(props: IAuthProps) {
  const { profile, error, firstLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!firstLoading && !profile?.data?.username) {
      router.push("/login");
    }
  }, [router, profile, firstLoading]);

  if (!profile?.data?.username) return <p>Loading...</p>;

  return <div>{props.children}</div>;
}
