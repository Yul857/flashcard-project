import React, { useState, useEffect } from "react";
import { useParams, Switch, Route } from "react-router";
import { readDeck } from "../utils/api";
import { Link } from "react-router-dom";
import DeckComponent from "../Home/DeckComponent"
import CardList from "./CardList";
import Study from "./Study";

function Deck(){
    
    const [deck,setDeck] = useState({cards:[]})
    const {deckId} = useParams();
    
    useEffect(() =>{
        async function getDeck(){
            const response = await readDeck(deckId);
            setDeck(response)
        }
        getDeck();
    },[deckId])

    return (
        <Switch>
            {/* when the path="/decks/:deckId/study", then go to the Study component */}
            <Route path='/decks/:deckId/study'>
                <Study deck={deck} cards={deck.cards} />
            </Route>
            {/* when the path="/decks/:deckId", then render the breadcrumb, DeckComponent and the DeckList */}
            <Route>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                    </ol>
                </nav>
                <div>
                    <DeckComponent deck={deck} />
                </div>
                <h4>Cards</h4>
                <div className="card">
                    <CardList deck={deck} setDeck={setDeck}/>
                </div>
            </Route>
        </Switch>
    )
}
export default Deck