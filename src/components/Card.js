import React from "react";

const Card = props => {
  // to be able to use the callback function with a parameter from the parent we need to use an auxiliary function because if not it would be run once it reads the dom code
  return (
    <div
      className="card tc bg-light-green dib br3 ma2 grow bw2 shadow-5 pa2"
      onClick={() => props.onActiveDetail(props.element)}
    >
      {(() => {
        switch (props.source) {
          case "films":
            return <h2>{props.element.title.toLowerCase()}</h2>;
          case "people":
            return <h2>{props.element.name.toLowerCase()}</h2>;
          case "planets":
            return <h2>{props.element.name.toLowerCase()}</h2>;
          case "species":
            return <h2>{props.element.name.toLowerCase()}</h2>;
          case "starships":
            return <h2>{props.element.name.toLowerCase()}</h2>;
          case "vehicles":
            return <h2>{props.element.name.toLowerCase()}</h2>;
          default:
            return null;
        }
      })()}
    </div>
  );
};
export default Card;
