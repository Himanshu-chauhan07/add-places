import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import PlaceList from "../components/PlaceList";


const DUMMY_PLACES =[
   
        {
        id: 'p1',
        title: 'Empire State Building',
        description: 'one of the most famous sky scapers in the world',
        imageUrl : 'https://cdn.pixabay.com/photo/2020/10/23/06/23/city-5677823_1280.jpg',
        address : '20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u1'
        },
        {
        id: 'p2',
        title: 'Empire State Building',
        description: 'one of the most famous sky scapers in the world',
        imageUrl : 'https://cdn.pixabay.com/photo/2020/10/23/06/23/city-5677823_1280.jpg',
        address : '20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u2'
        }
    
];

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items={loadedPlaces}/>

}

export default UserPlaces;