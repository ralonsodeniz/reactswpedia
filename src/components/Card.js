import React, { Component } from "react";

class Card extends Component {
  updateElement = () => {
    // to be able to use the callback function with a parameter from the parent we need to use an auxiliary function
    this.props.onActiveDetail(this.props.element);
  };

  render() {
    return (
      <div
        className="card tc bg-light-green dib br3 ma2 grow bw2 shadow-5 pa2"
        onClick={this.updateElement}
      >
        {(() => {
          switch (this.props.source) {
            case "films":
              return <h2>{this.props.element.title.toLowerCase()}</h2>;
            case "people":
              return <h2>{this.props.element.name.toLowerCase()}</h2>;
            case "planets":
              return <h2>{this.props.element.name.toLowerCase()}</h2>;
            case "species":
              return <h2>{this.props.element.name.toLowerCase()}</h2>;
            case "starships":
              return <h2>{this.props.element.name.toLowerCase()}</h2>;
            case "vehicles":
              return <h2>{this.props.element.name.toLowerCase()}</h2>;
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}
export default Card;
