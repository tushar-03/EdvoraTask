import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

function Analysis() {
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
        return (<div className=' mt-10 ml-10 mr-10 font-serif'>
            <h1 className='mb-10  underline underline-offset-4 text-5xl'>Analysis on the basis of Product Demand </h1>
            <Paper>
                <Chart
                    data={items}
                >
                    <ArgumentAxis />
                    <ValueAxis />

                    <BarSeries valueField="quantity"
                        argumentField="product_id"
                        color="#82b507" />

                </Chart></Paper>

            <div className='font-serif text-lg mt-5 mb-10 underline underline-offset-4'> This graph shows the demand of product based on the quantities users order and sorted according to productID </div>

        </div>

        );

    }
}



export default Analysis
