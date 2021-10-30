import { useEffect } from "react";
import { useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);
    const [isLoadingService, setIsLoadingService] = useState(true);
    useEffect(() => {
        fetch('https://hotel-grand-park.herokuapp.com/services')
            .then(resp => resp.json())
            .then(data => {
                setServices(data);
                setIsLoadingService(false);
            })
    }, [])
    return { services, setServices, isLoadingService };
}
export default useService;