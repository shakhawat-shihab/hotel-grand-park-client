import { useEffect } from "react";
import { useState } from "react";


const useAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [isLoadingAllOrder, setIsLoadingAllOrder] = useState(true);
    useEffect(() => {
        fetch('https://hotel-grand-park.herokuapp.com/orders')
            .then(resp => resp.json())
            .then(data => {
                setAllOrder(data);
                setIsLoadingAllOrder(false);
            })
    }, [])

    return { allOrder, setAllOrder, isLoadingAllOrder };
}
export default useAllOrder;