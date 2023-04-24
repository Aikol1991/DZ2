import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



export default function PhotoDetail() {
   const {id} = useParams();
   const [photo, setPhoto] = useState({})
   
   useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(response => response.json())
    .then(data => setPhoto(data))

   }, [])
    

    return(
        <>
            <h2>{photo.title}</h2>
            <p>{photo.url}</p>
        </>
    )
}