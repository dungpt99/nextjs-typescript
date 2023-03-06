import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
import { authApi } from "../../api-client/auth-api";
import { LoginPayload } from "../models";

export function useAuth(options?: Partial<PublicConfiguration>) {
  //profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000, // 1 hour
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);

    await mutate();
  }
  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }
  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
