import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  const toyDisplay = toys.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
        onDeleteToy={onDeleteToy}
        onUpdateToy={onUpdateToy}
      />
    );
  });

  return <div id="toy-collection">{toyDisplay}</div>;
}

export default ToyContainer;
