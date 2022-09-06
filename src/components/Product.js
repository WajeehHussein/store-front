import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/data';


function Product() {
    const data = useContext(DataContext);
    // const { id } = useParams()
    // const [product, setProduct] = useState([]);


    const ShowProduct = () => {
        console.log(data.data);
        return (
            <>
                <div className='col-md-6'>
                    <img src={data.data.image} alt={data.data.name} />
                </div>
            </>
        )
    }
    return (
        <div className='container'>
            <div className='row'>
                {<ShowProduct />}
            </div>
        </div>
    )
}

export default Product