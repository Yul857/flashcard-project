import { useState } from "react";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { readCard, readDeck, updateCard, createCard } from "../utils/api";

function CardForm({cardId, deckId}){
    //The EditCard and AddCard share the same format of CardForm
    
    const history = useHistory();
    const [form, setForm] = useState({front: "",back: ""})
    const [deck, setDeck] = useState({name:"",id:0, description:""})

    useEffect(() => {
        const getDeck = async () => {
            const theDeck = await readDeck(deckId);
            setDeck(theDeck)
            const theCard = await readCard(cardId)
            setForm(theCard)
        }
        if(cardId){
            getDeck();
        }
    },[deckId, cardId])

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };
    
    const handleCancel = () => {
        //route to the "/decks/:deckId" path
        history.push(`/decks/${deckId}`)
    }
    //When press the submit button, update the card
    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            await updateCard(form)
            history.push(`/decks/${deckId}`) 
        }catch(errors){
            await createCard(deckId, form)
            history.push(`/decks/${deckId}`) 
        }  
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea  
                className="form-control" 
                id="front" 
                name="front" 
                value={form.front}
                placeholder="Front side of card"
                rows="4" 
                required 
                onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea 
                className="form-control" 
                id="back" 
                name="back" 
                value={form.back}
                placeholder="Back side of card" 
                rows="4" 
                required 
                onChange={handleChange} />
        </div>
        <button type="button" className="btn btn-secondary mr-2" onClick={handleCancel} >Cancel</button>
        <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
    )
}

export default CardForm