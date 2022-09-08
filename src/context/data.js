import React, { useState } from 'react'
import apple from '../assets/apple.jpg';
import { v4 as uuidv4 } from 'uuid';
export const DataContext = React.createContext();
export default function Data(props) {
    const [data, setData] = useState([
        { name: 'apple', image: { apple }, type: 'food', price: '3$', id: uuidv4() },
        { name: 'pizza', image: 'https://www.arhavirestaurantbatumi.com/wp-content/uploads/2021/05/classic-homemade-pizza-dough-close.jpg', type: 'food', price: '10$', id: uuidv4() },
        { name: 'tomato', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg', type: 'food', price: '5$', id: uuidv4() },

        { name: 'TV', image: 'https://images.samsung.com/is/image/samsung/levant-ar-fhd-t5300-ua43t5300auxtw-frontblack-229897491?$650_519_PNG$', type: 'electronic', price: '100$', id: uuidv4() },
        { name: 'PS', image: 'https://pbs.twimg.com/media/FOhjLWSWYAIPqC0.jpg:large', type: 'electronic', price: '500$', id: uuidv4() },
        { name: 'cell phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd61h594jzlN7qMb7gFlznOYlYzUl57-IfQQ&usqp=CAU', type: 'electronic', price: '150$', id: uuidv4() },

        { name: 'fifa', image: 'https://images6.alphacoders.com/115/1157073.png', type: 'game', price: '50$', id: uuidv4() },
        { name: 'LOL', image: 'https://i.pinimg.com/originals/ab/1e/82/ab1e8231b32f4b88b4a9c96532b95749.jpg', type: 'game', price: '20$', id: uuidv4() },
        { name: 'PUPG', image: 'https://lastfm.freetls.fastly.net/i/u/770x0/64a77c99755960f3c0040241fa4281f9.jpg', type: 'game', price: '10$', id: uuidv4() },
    ]);
    const state = {
        data,
        setData
    }
    return (
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    )
}
