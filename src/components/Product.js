import { connect } from 'react-redux';
import { addCart } from '../redux/action';
import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { DataContext } from '../context/data';


function Product() {
    const data = useContext(DataContext);
    const ShowProduct = (props) => {
        console.log('data.data[0]', data.data[0]);
        return (
            <>
                <div className='col-md-6 container'>
                    <img src={data.data[0].image} alt={data.data[0].name} height='400px' width='400px' />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{data.data[0].details}</h4>
                    <h1 className='display-5'>{data.data[0].name}</h1>
                    <p className='lead fw-bolder'>Price {data.data[0].price}</p>
                    <div className='d-flex '>
                        <button className='btn btn-outline-dark' onClick={() => props.addCart(data.data[0].id)}>Add to Cart {props.myCounter}</button>
                        <Nav.Link className='nav' href="/cart">
                            <button className='btn btn-dark ms-5 px-3 py-2' >Go to cart</button>
                        </Nav.Link>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='container py-5'>
            <div className='row py-4'>
                {<ShowProduct />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myCounter: state.cart,

})

const mapDispatchToProps = { addCart };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
// export default Product;
