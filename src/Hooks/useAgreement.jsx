import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useAgreement = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { refetch, data: agreement = [] } = useQuery({
        queryKey: ['agreement', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/agreements?email=${user?.email}`)
            return res.data
        }
    })
    return [agreement,refetch]
};

export default useAgreement;