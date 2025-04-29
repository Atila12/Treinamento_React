import { useState, useEffect } from "react";

 // custom hook

 export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState (false);

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        }
        fetchData();
    }, [url, callFetch]);

    //Refatorando post
    useEffect(() => {
        const httpResquest = async() =>{

        if(method === "POST") {

            let fetchOptions = [url, config];

            const res = await fetch(...fetchOptions);

            const json = await res.json();

            setCallFetch(json);
        }
    }

    httpResquest();

    }, [config, method, url])

    return { data, httpConfig };

 };