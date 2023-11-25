import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAgreement = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { refetch, data: agreement = [] } = useQuery({
        queryKey: ['agreement', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agreements?email=${user?.email}`)
            return res.data
        }
    })
    return [agreement,refetch]
};

export default useAgreement;