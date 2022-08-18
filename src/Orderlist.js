import React from 'react'

function Orderlist(props) {
    return (
        <div>
            <div className='mt-5 inline-flex flex-row  bg-white text-black sm:container sm:mx-auto border-dashed border-black h-auto  p-6 border-2 '>
                <div className='box-content text-lg space-x-10'><span>Product Id - </span> <span>{props.id}</span>
                    <span>Date </span>
                    <span>{props.date}</span>
                    <span>Order-id</span>
                    <span>{props.id}</span>
                    <span>Quantity </span>
                    <span>{props.quantity}</span></div>
            </div>
        </div>
    )
}

export default Orderlist
