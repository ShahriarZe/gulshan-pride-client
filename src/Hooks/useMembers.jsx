import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMembers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: members = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    return [members, refetch]
};

export default useMembers;