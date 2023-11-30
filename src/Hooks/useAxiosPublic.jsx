import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://gulshan-pride-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};



export default useAxiosPublic;