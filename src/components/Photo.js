import { Link } from "react-router-dom"



export function Photo ({photo}) {
    return(
        <div>
            <h5>{photo.title}</h5>
            <Link to={`/photos/${photo.id}`}>detailed</Link>
            <p>-------------------------------------------</p>
        </div>
    )
}