import { useState, useEffect } from "react";

// custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //LOADING
    const [loading, setLoading] = useState(false);

    // tratando erro
    const [error, setError] = useState(null);

    //DESAFIO 

    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                }
            });
            setMethod(method);
            setItemId(data);
        }
    };
    useEffect(() => {

        const fetchData = async () => {

            // loading

            setLoading(true);

            try {

                const res = await fetch(url);

                const json = await res.json();

                setData(json);

            } catch (error) {
                console.log(error.message);

                setError("Houve algum erro ao carregar os dados!")
            }

            setLoading(false);
        };
        fetchData();
    }, [url, callFetch]);

    //Refatorando post
    useEffect(() => {
        const httpResquest = async () => {

            let json

            if (method === "POST") {

                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                json = await res.json();


            } else if (method === "DELETE") {

                const deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl, config);

                json = await res.json();

            }
            setCallFetch(json);
        };

        httpResquest();

    }, [config, method, url]);

    return { data, httpConfig, loading, error }
};
