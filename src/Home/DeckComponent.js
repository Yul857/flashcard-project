   
import { Link, Switch, Route, useHistory } from "react-router-dom"
import React from "react"
import { deleteDeck } from "../utils/api"

function DeckComponent({deck, handleDelete}){
    
    const history = useHistory();

    const handleSingleDelete = async() => {
        const confirmDelete = window.confirm("delete this deck?\n\nYou will not be able to recover it.");
        //If the user press the confirm delete button, then delete the dect that he close
        if(confirmDelete){
            await deleteDeck(deck.id)
            history.push('/')
        }
    }

    /*The deck component contains the deck name, card length, deck's description. If the path="/", 
    then show view, study and delete button. If the path="/decks/:deckId", 
    then show the Edit, study, Add card and delete button*/
    
    return (
        <div className="list-group-item" id={deck.id} key={deck.id}>
            <div className="d-flex justify-content-between">
              <h5 className="mb-1">{deck.name}</h5>
              <p>{deck.cards.length} cards</p>
            </div>
            <p>{deck.description}</p>
            <Switch>
                <Route path="/" exact>
                    <>
                        <Link className="btn btn-secondary mr-2" to={`/decks/${deck.id}`}>view</Link>
                        <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>study</Link>
                        <button className="btn btn-danger float-right" onClick={handleDelete}>Delete</button>
                    </>
                </Route>
                <Route path="/decks/:deckId">
                     <>
                        <Link className="btn btn-secondary mr-2" to={`/decks/${deck.id}/edit`}>Edit</Link>
                        <Link className="btn btn-primary mr-2" to={`/decks/${deck.id}/study`}>study</Link>
                        <Link className="btn btn-primary" to={`/decks/${deck.id}/cards/new`}>Add Card</Link>
                        <button className="btn btn-danger float-right" onClick={handleSingleDelete}>Delete</button>
                    </>
                </Route>
            </Switch>
        </div>
    )
}
export default DeckComponent