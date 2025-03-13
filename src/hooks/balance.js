import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../api";
import { logout } from "../redux/features/auth/authSlice";

export const useBalance = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.balance);
      if (res?.data?.success === false && token) {
        dispatch(logout());
      } else if (res?.data?.success && token) {
        const data = res.data?.result;
        return data;
      }
    },
    refetchInterval: 6000,
  });
};

export default useBalance;
