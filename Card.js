import React,{useState} from "react"
import './Card.css'


function Card({name,about,job}) {
     
    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://media.istockphoto.com/id/536189667/photo/mark-zuckerberg-at-g8-in-deauville-france.jpg?s=612x612&w=0&k=20&c=WeyShTaaylwpoFMdj-0v_C4Tdz9Fvweu-mpxBdS0q9k=" alt='' height="100px" width="100px" />
                </div>
            </div>
            <div className='lower-container'>
                <h1>{name}</h1>
                <h4>{job}</h4>
                <p>{about}</p>
                <button>Download</button>
            </div>
        </div>
    )
}
export default Card