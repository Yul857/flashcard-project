import { Link, useParams } from "react-router-dom"
import { useHistory } from "react-router"
import React, {useState, useEffect} from "react"
import { readCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

export default function EditCard(){
    
    const history = useHistory();
    const {deckId, cardId} = useParams();
    const [deck, setDeck] = useState({name:"",id:0, description:""})
    const [form, setForm] = useState( {front: "", back: ""})


    useEffect(() => {
        const getDeck = async () => {
            const theDeck = await readDeck(deckId);
            setDeck(theDeck)
            const theCard = await readCard(cardId)
            setForm(theCard)
        }
        getDeck();
    },[deckId, cardId])

    //The EditCard screen has the breadcrumb compoonent, the "Edit Card" text and the CardForm component
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>
            <h2>Edit Card</h2>
            <CardForm cardId={cardId} deckId={deckId}/>
        </>
    )
}