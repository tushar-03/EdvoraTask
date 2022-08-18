import React, { useEffect, useState } from 'react'
import Userid from './Userid';

function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://assessment.api.vweb.app/users")
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
        return (
            <div className=''>
                <h1 className=' text-5xl mt-10 mb-10 font-serif underline underline-offset-4 '>List of Users </h1>
                <div className='ml-20 mt-20 columns-2'>

                    {items.map(item => (<span key={item.product_id}>
                        <Userid name={item.name} />
                    </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default Users
