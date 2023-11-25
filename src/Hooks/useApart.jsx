import { useEffect, useState } from "react";

const useApart = () => {

    const [apart, setApart] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/aparts')
            .then(res => res.json())
            .then(data => {
                setApart(data)
                setLoading(false)
            })
    }, [])
    return [apart, loading]
}

export default useApart;