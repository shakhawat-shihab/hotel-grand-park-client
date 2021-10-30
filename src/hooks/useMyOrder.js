import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "./useAuth";


const useMyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [isLoadingMyOrder, setIsLoadingMyOrder] = useState(true);
    useEffect(() => {
        //find orders having users email address
        fetch('https://hotel-grand-park.herokuapp.com/myOrder', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log('data ', data);
                let newArr = [];
                for (const iterator of data) {
                    //get all the products detail from an order by product ids in the order
                    const ids = Object.keys(iterator.product);
                    //find the first order's product using the ids
                    axios.post('https://hotel-grand-park.herokuapp.com/service/byId', ids)
                        .then(res => {
                            // we have products (in item property) and count (in product property)
                            //merge the count property to corresponding items prorperty
                            iterator.items = res.data;
                            let index = 0;
                            // console.log('iterator ', iterator);
                            for (const item of iterator.items) {
                                //console.log(iterator.product[item.id])
                                iterator.items[index].count = iterator.product[item.id];
                                index++;
                            }
                        });
                    newArr.push(iterator);
                }
                setMyOrder(newArr);
                setIsLoadingMyOrder(false);
            })
    }, [])

    return { myOrder, setMyOrder, isLoadingMyOrder };
}
export default useMyOrder;