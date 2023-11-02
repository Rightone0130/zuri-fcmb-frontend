import { axiosInstance } from "../axios";

export const useApiMutation = () => {
  const _token = window.localStorage.getItem("FCMB-TOKEN") || "";
  return async (path: string, data: any, token?: string) => {
    return await axiosInstance.post(path, data, {
      headers: { Authorization: token || _token },
    });
  };
};
