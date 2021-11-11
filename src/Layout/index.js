import React from "react";
import {Switch, Route} from "react-router-dom"
import Header from "./Header";
import NotFound from "./NotFound";
import Homepage from "../Home/Homepage"
import Decks from "../DecksRoute/Decks"
import NewDeck from "../DecksRoute/NewDeck";
import Edit from "../DecksRoute/Edit";
import NewCard from "../DecksRoute/NewCard";
import EditCard from "../DecksRoute/EditCard";

function Layout() {
  
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/decks/new' exact>
            <NewDeck />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <NewCard />
          </Route>
          <Route path='/decks/:deckId/edit'>
              <Edit />
          </Route>
          <Route path='/decks/:deckId' >
            <Decks />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
