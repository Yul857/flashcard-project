import DeckList from "./DeckList";
import { Link, Switch, Route } from "react-router-dom";
import React from "react";

function Homepage() {
  //The Homepage component returns the "Create Deck" button and the DeckList Component
  return (
    <>
      <Link className="btn btn-secondary mb-2" to="/decks/new">
        Create Deck
      </Link>
      <DeckList />
    </>
  );
}

export default Homepage
