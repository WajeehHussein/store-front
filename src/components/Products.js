import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import apple from '../assets/apple.jpg';
import { v4 as uuidv4 } from 'uuid';

export const Products = () => {
    const [data, setData] = useState([
        { name: 'apple', image: { apple }, type: 'food', price: '3$', id: uuidv4() },
        { name: 'pizza', image: '', type: 'food', price: '10$', id: uuidv4() },
        { name: 'tomato', image: '', type: 'food', price: '5$', id: uuidv4() },

        { name: 'TV', image: '', type: 'electronic', price: '100$', id: uuidv4() },
        { name: 'PS', image: '', type: 'electronic', price: '500$', id: uuidv4() },
        { name: 'cell phone', image: '', type: 'electronic', price: '150$', id: uuidv4() },

        { name: 'fifa', image: '', type: 'game', price: '50$', id: uuidv4() },
        { name: 'LOL', image: '', type: 'game', price: '20$', id: uuidv4() },
        { name: 'PUPG', image: '', type: 'game', price: '10$', id: uuidv4() },
    ]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true)
    //     if (show) {
    //         setLoading(false)
    //     }
    // })
    // const Loading = () => {
    //     return (
    //         <>
    //             <Spinner animation="border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </Spinner>
    //         </>
    //     )
    // }
    const filerProducts = (item) => {
        const items = data.filter(x => x.type === item);
        setFilter(items);
    }
    const ShowProducts = () => {
        return (
            <>

                <div className='d-flex justify-content-center'>
                    <Button className='me-2' variant="dark" onClick={() => setFilter(data)}>All</Button>
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
                                        <Button variant="success" className='m-1'>Add to cart</Button>
                                        <Button variant="dark">Show details</Button>
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
