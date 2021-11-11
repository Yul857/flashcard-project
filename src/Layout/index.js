import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Homepage from "../Home/Homepage";
import Deck from "../DecksRoute/Deck";
import CreateDeck from "../DecksRoute/CreateDeck";
import EditDeck from "../DecksRoute/EditDeck";
import AddCard from "../DecksRoute/AddCard";
import EditCard from "../DecksRoute/EditCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/decks/new" exact>
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
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
