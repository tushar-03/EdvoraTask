import React from 'react'

function ProductComponent(props) {
    return (
        <div className='mt-5 inline-flex flex-row  bg-white text-black sm:container sm:mx-auto  h-auto border-dashed border-black p-6 border-2 '>
            <div className='box-content text-lg space-x-10'><span>Product Id - </span> <span>{props.id}</span>
                <span>Product Name - </span>
                <span>{props.name}</span>
                <span>Stock - </span>
                <span>{props.stock}</span>
                <span>Price - </span>
                <span>{props.price}</span></div>
        </div>
    )
}

export default ProductComponent
