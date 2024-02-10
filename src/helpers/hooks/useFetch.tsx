import { useEffect, useState } from "react";


const useFetch: Function = (url: string) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | unknown >("");
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCGE2aflejm1_kULkePqulz0fQMAV0yxCE`)
                const data = await response.json()
                setData(data)
                
            } catch (error) {
                setError(error)
                console.log(error);
                
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, loading, error}
}

export default useFetch