import { axiosInstance } from "../axios";

export const useApiQuery = () => {
  const _token = window.localStorage.getItem("FCMB-TOKEN") || "";
  return async (path: string, token?: string) => {
    return await axiosInstance.get(path, {
      headers: { Authorization: token || _token },
    });
  };
};
