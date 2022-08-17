import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((toys) => {
        setToys(toys);
      });
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(deletedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id);
    setToys(updatedToys);
  }

  function handleLikes(updatedToy) {
    const updatedToys = toys.map((toy) => {
      return toy.id === updatedToy.id ? updatedToy : toy;
    });
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleLikes}
      />
    </>
  );
}

export default App;
