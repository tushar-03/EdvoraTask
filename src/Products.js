import React, { useEffect, useState } from 'react'
import ProductComponent from './ProductComponent';

function Products() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://assessment.api.vweb.app/products")
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
            <h1 className=' text-5xl mt-10 mb-10 font-serif underline underline-offset-4 '>List of Products </h1>
            <ul>
                {items.map(item => (<li className=' colomns-3 ' key={item.product_id}>
                    <ProductComponent
                        id={item.product_id}
                        name={item.name}
                        stock={item.stock}
                        price={item.selling_price}
                    /></li>
                ))}
            </ul></div>
        );
    }
}

export default Products
