import { useEffect } from "react";
import { useState } from "react";
import { getDataFromDb } from "../dB";


const useCart = () => {
    const savedService = getDataFromDb();
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/rooms.json')
            .then(resp => resp.json())
            .then(data => {
                const temp = [];
                for (const key in savedService) {
                    const newData = data.find(x => x.id === key);
                    newData.count = savedService[key];
                    temp.push(newData);
                }
                setCart(temp);
            })
    }, [])
    return { cart, setCart };
}
export default useCart;