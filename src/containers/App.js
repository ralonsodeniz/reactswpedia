import React, { Component } from "react";
import "./App.css";
import Button from "../components/Button";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      processing: "",
      source: "",
      films: [],
      people: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: []
    };
  }

  fetchSource = async () => {
    const sourceArray = await fetch(
      `https://swapi.co/api/${this.state.source}/`
    );
    const sourceObj = await sourceArray.json();
    this.setState({ [this.state.source]: sourceObj.results });
  };

  onButtonClick = async event => {
    this.setState({ processing: true });
    await this.setState({ source: event.target.value });
    switch (this.state.source) {
      case "films":
        if (!this.state.films.length) {
          await this.fetchSource(event);
        }
        break;
      case "people":
        if (!this.state.people.length) {
          await this.fetchSource(event);
        }
        break;
      case "planets":
        if (!this.state.planets.length) {
          await this.fetchSource(event);
        }
        break;
      case "species":
        if (!this.state.species.length) {
          await this.fetchSource(event);
        }
        break;
      case "starships":
        if (!this.state.starships.length) {
          await this.fetchSource(event);
        }
        break;
      case "vehicles":
        if (!this.state.vehicles.length) {
          await this.fetchSource(event);
        }
        break;
      default:
        break;
    }
    this.setState({ processing: false });
  };

  render() {
    return (
      <div className="flex flex-column swPedia">
        <header>
          <div className="header tc w-100 br--bottom bw1 b--yellow ba pa2 collapse">
            <h1 className="f1 yellow"># SWPEDiA $</h1>
            <a
              className="light-blue"
              href="https://swapi.co/"
              target="_blank"
              rel="noopener noreferrer external"
            >
              sourced by swapi
            </a>
            <div className="navBar mt3 flex flex-colum flex-wrap justify-center">
              <Button
                value="films"
                onClick={this.onButtonClick}
                disabled={this.state.processing}
              />
              <Button
                value="people"
                onClick={this.onButtonClick}
                disabled={this.state.processing}
              />
              <Button
                value="planets"
                onClick={this.onButtonClick}
                disabled={this.state.processing}
              />
              <Button
                value="species"
                onClick={this.onButtonClick}
                disabled={this.state.processing}
              />
              <Button
                value="starships"
                onClick={this.onButtonClick}
                disabled={this.state.processing}
              />
              <Button
                value="vehicles"
                onClick={this.onButtonClick}
                disabled={this.state.processing}
              />
            </div>
          </div>
        </header>
        <section>
          <CardList state={this.state} />
        </section>
      </div>
    );
  }
}

export default App;
