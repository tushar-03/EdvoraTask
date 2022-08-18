import React, { useEffect, useState } from 'react'
import Orderlist from './Orderlist'

function Orders() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://assessment.api.vweb.app/orders")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (<div>
            <h1 className=' text-5xl mt-10 mb-10 font-serif underline underline-offset-4 '>Past Orders</h1>
            <ul>
                {items.map(item => (<li className='' key={item.order_id}>
                    <Orderlist
                        id={item.order_id}
                        quantity={item.quantity}
                        userid={item.user_id}
                        date={item.order_date}
                    /></li>
                ))}
            </ul></div>
        );
    }
}

export default Orders
