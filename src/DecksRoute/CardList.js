import React from "react"
import { deleteCard, readDeck } from "../utils/api";
import Card from "./Card";

function CardList({deck, setDeck}){

    //destructure the cards from the variable "deck"
    const {cards} = deck;

    const handleDelete = async (id) =>{
        const confirmDelete = window.confirm("delete this card?\n\nYou will not be able to recover it.");
        if(confirmDelete){
            await deleteCard(id);
            const newDeck = await readDeck(deck.id)
            setDeck(newDeck)
        }
    }
    //Map all the cards into the Card component with card.id Key
     const listOfCards = cards.map(card => {
         return <Card card={card} key={card.id} deck={deck} handleDelete={handleDelete}/>
     })

    return (
        <div className="card">
            {listOfCards}
        </div>
    )
}

export default CardList