import { Link } from "react-router-dom"
import React from "react"


function Card({card, handleDelete, deck}){
    
    //The card has the component of front text, back text, edit button and delete button
    return (
        <div className="list-group-item list-group-item-action flex-column align-items-start" id={card.id} >
           <div className="row">
               <div className="col-md-10">
                   <div className="row">
                       {/* Display the front and back text on the card */}
                       <div className="col">{card.front}</div>
                       <div className="col">{card.back}</div>
                   </div>
               </div>
               <div className="col text-right">
                   {/* When I press the Edit button, it will route to the editCard screen */}
                   <Link className="btn btn-secondary mr-2" to={`/decks/${deck.id}/cards/${card.id}/edit`}>Edit</Link>
                   <button className="btn btn-danger" onClick={() => handleDelete(card.id)}>Delete</button>
               </div>
           </div>
        </div>
    )
}

export default Card