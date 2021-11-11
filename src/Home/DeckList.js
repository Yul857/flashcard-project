import React, { useEffect, useState } from "react";
import {listDecks,deleteDeck} from "../utils/api/index.js"
import DeckComponent from "./DeckComponent.js"

export default function DeckList(){

    const [decks,setDecks] = useState([])
    const handleDelete = (event) =>{
        const confirmDelete = window.confirm("delete this deck?\n\nYou will not be able to recover it.");
        //If the user press the confirm delete button, then delete the dect that he close
        if(confirmDelete){
            const id = event.target.parentNode.id;
            async function deleteTheDeck(){
                await deleteDeck(id);
                const decksToDisplay = await listDecks();
                setDecks(decksToDisplay)
            }
            deleteTheDeck();
        }
    }

    //Rerender the decksList every time the lenght of the decks changed
    useEffect(() =>{
        async function getDecks(){
            const response = await listDecks();
            setDecks(response)
        }
        getDecks();
    },[decks.length])

    //Map the decks into DeckComponent with deck.id Key
     const listOfDecks = decks.map(deck => {
         return <DeckComponent deck={deck} handleDelete={handleDelete} key={deck.id} />
     })

    return (
        <div className="card">
            {listOfDecks}
        </div>
    )
}