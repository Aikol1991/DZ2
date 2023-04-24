import React, { useEffect, useState } from 'react'
import { Photo } from '../components/Photo';

function Photos(props) {
    const [photos, setPhotos] = useState([]);

    const getPhotos = async() => {
        const response = await fetch ('https://jsonplaceholder.typicode.com/photos')
        const photos = await response.json()
        setPhotos(photos)
    }

    useEffect( () => {
        getPhotos()
    }, [])

    return(
        <div>
             <h1>Photos</h1>

             {
                photos.map(photo => <Photo key={photo.id} photo={photo}/>)
             }
        </div>
    )
}

export default Photos;