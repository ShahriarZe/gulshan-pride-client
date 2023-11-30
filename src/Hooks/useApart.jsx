import { useEffect, useState } from "react";

const useApart = () => {

    const [apart, setApart] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://gulshan-pride-server.vercel.app/aparts')
            .then(res => res.json())
            .then(data => {
                setApart(data)
                setLoading(false)
            })
    }, [])
    return [apart, loading]
}

export default useApart;