import React from "react";

const Card = ({ source, element, elementIndex, activeDetail }) => {
  return (
    <div
      className="card tc bg-light-green dib br3 ma2 grow bw2 shadow-5 pa2"
      onClick={activeDetail}
    >
      {(() => {
        switch (source) {
          case "films":
            return <h2>{element.title.toLowerCase()}</h2>;
          case "people":
            return <h2>{element.name.toLowerCase()}</h2>;
          case "planets":
            return <h2>{element.name.toLowerCase()}</h2>;
          case "species":
            return <h2>{element.name.toLowerCase()}</h2>;
          case "starships":
            return <h2>{element.name.toLowerCase()}</h2>;
          case "vehicles":
            return <h2>{element.name.toLowerCase()}</h2>;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Card;
