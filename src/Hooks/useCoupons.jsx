import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCoupons = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: coupons = [] } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/coupons')
            return res.data
        }
    })
    return [coupons, refetch]
};

export default useCoupons;