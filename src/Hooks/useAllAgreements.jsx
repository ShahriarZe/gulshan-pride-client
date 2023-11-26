import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllAgreements = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: allAgreements = [] } = useQuery({
        queryKey: ['allAgreements'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allAgreements')
            return res.data
        }
    })
    return [allAgreements, refetch]
};

export default useAllAgreements;








