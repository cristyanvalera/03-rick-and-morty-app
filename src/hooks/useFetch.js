import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
    const [apiData, setApiData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const getApi = url => {
        axios.get(url)
            .then(response => {
                setHasError(false);
                setApiData(response.data);
            })
            .catch(error => {
                setHasError(true);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };

    return [apiData, getApi, isLoading, hasError];
}
