import React, { useContext, useState } from 'react'
import { DataContext } from '../context/data';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export const Categories = () => {
    const data = useContext(DataContext);

    const [filter, setFilter] = useState([]);

    const filerProducts = (item) => {
        const items = data.data.filter(x => x.type === item);
        setFilter(items);
    }
    const showDetails = (product) => {
        const item = data.data.filter((ele) => ele.id === product);
        data.setData(item)
    }
    const ShowProducts = () => {
        return (
            <>

                <div className='d-flex justify-content-center'>
                    <Button className='me-2' variant="dark" onClick={() => setFilter(data.data)}>All</Button>
                    <Button className='me-2' variant="dark" onClick={() => filerProducts('food')}>food</Button>
                    <Button className='me-2' variant="dark" onClick={() => filerProducts('electronic')}>electronic</Button>
                    <Button className='me-2' variant="dark" onClick={() => filerProducts('game')}>game</Button>
                </div>
                {
                    filter.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                <Card style={{ width: '18rem' }} className='col-md-3 mb-4 m-3'>
                                    <Card.Img variant="top" src={item.image} alt={item.name} height='250px' />
                                    <Card.Body>
                                        <Card.Title>{item.name.substring(0, 12)}...</Card.Title>

                                        <Card.Text className='lead fw-bold'>
                                            Price: {item.price}
                                        </Card.Text>
                                        <div className='d-flex align-items-center'>
                                            <Button variant="success" className='m-1'>Add to cart</Button>
                                            <NavLink to={`/product/${item.id}`}><Button variant='dark' onClick={() => showDetails(item.id)}>Show details</Button> </NavLink>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </React.Fragment>
                        )
                    })
                }
            </>
        )
    }
    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>
                        Browse our Categories
                    </h1>
                    <hr />
                </div>
            </div>
            <div className='row justify-content-center'>
                <ShowProducts />
            </div>
        </div>
    )
}
