import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
export const DataContext = React.createContext();
export default function Data(props) {
    const [data, setData] = useState([
        { name: 'apple', image: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg', type: 'food', price: '$3', id: uuidv4(), qty: 1, details: 'An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.' },
        { name: 'pizza', image: 'https://www.arhavirestaurantbatumi.com/wp-content/uploads/2021/05/classic-homemade-pizza-dough-close.jpg', type: 'food', price: '$10', id: uuidv4(), qty: 1, details: 'PIZZA  is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.' },
        { name: 'tomato', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg', type: 'food', price: '$5', id: uuidv4(), qty: 1, details: 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.' },

        { name: 'TV', image: 'https://images.samsung.com/is/image/samsung/levant-ar-fhd-t5300-ua43t5300auxtw-frontblack-229897491?$650_519_PNG$', type: 'electronic', price: '$100', id: uuidv4(), qty: 1, details: ' The most common source of LDTV programming is the Internet, where mass distribution of higher-resolution video files could overwhelm computer servers and take too long to download.' },
        { name: 'PS', image: 'https://pbs.twimg.com/media/FOhjLWSWYAIPqC0.jpg:large', type: 'electronic', price: '$500', id: uuidv4(), qty: 1, details: 'The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. ' },
        { name: 'cell phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd61h594jzlN7qMb7gFlznOYlYzUl57-IfQQ&usqp=CAU', type: 'electronic', price: '$150', id: uuidv4(), qty: 1, details: 'A mobile phone, cellular phone, cell phone, cellphone, handphone, hand phone or pocket phone' },

        { name: 'fifa', image: 'https://images6.alphacoders.com/115/1157073.png', type: 'game', price: '$50', id: uuidv4(), qty: 1, details: 'FIFA, also known as FIFA Football and set to be known as EA Sports FC from 2022' },
        { name: 'LOL', image: 'https://i.pinimg.com/originals/ab/1e/82/ab1e8231b32f4b88b4a9c96532b95749.jpg', type: 'game', price: '$20', id: uuidv4(), qty: 1, details: 'League of Legends (LoL), commonly referred to as League, is a 2009' },
        { name: 'PUPG', image: 'https://lastfm.freetls.fastly.net/i/u/770x0/64a77c99755960f3c0040241fa4281f9.jpg', type: 'game', price: '$10', id: uuidv4(), qty: 1, details: 'PUBG: Battlegrounds (previously known as PlayerUnknowns Battlegrounds) is a battle royale game developed ' },
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
