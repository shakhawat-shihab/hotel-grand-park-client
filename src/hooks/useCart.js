import { useEffect } from "react";
import { useState } from "react";
import { getDataFromDb } from "../dB";


const useCart = () => {
    const savedService = getDataFromDb();
    const [cart, setCart] = useState([]);
    const [isLoadingCart, setIsLoadingCart] = useState(true);
    useEffect(() => {
        const keys = Object.keys(savedService);
        // console.log(keys);
        //     fetch('/rooms.json')
        //         .then(resp => resp.json())
        //         .then(data => {
        //             const temp = [];
        //             for (const key in savedService) {
        //                 const newData = data.find(x => x.id === key);
        //                 newData.count = savedService[key];
        //                 temp.push(newData);
        //             }
        //             setCart(temp);
        //         })
        // }, [])
        fetch('https://hotel-grand-park.herokuapp.com/service/byId', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(resp => resp.json())
            .then(data => {
                const temp = [];
                for (const key in savedService) {
                    const newData = data.find(x => x.id === key);
                    newData.count = savedService[key];
                    temp.push(newData);
                }
                setCart(temp);
                setIsLoadingCart(false);
            })
    }, [])

    return { cart, setCart, isLoadingCart };
}
export default useCart;