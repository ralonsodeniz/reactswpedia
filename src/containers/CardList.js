import React, { Component } from "react";
import Card from "../components/Card";
import "./CardList.css";
import SearchBox from "../components/SearchBox";
import Back from "../components/Back";
import CardDetail from "../components/CardDetail";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      detail: false,
      detailElement: {}
    };
  }

  searchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  activeDetail = async element => {
    this.setState({ detail: true });
    this.setState({ detailElement: element });
  };

  disableDetail = () => {
    this.setState({ detail: false });
    this.setState({ searchField: "" });
  };

  render() {
    const {
      source,
      films,
      people,
      planets,
      species,
      starships,
      vehicles
    } = this.props.state;

    if (source === "") {
      return (
        <div className="cardList tc br--bottom bw1 b--yellow ba pa2 yellow">
          <h1>@</h1>
        </div>
      );
    }
    return (
      <div className="cardList tc br--bottom bw1 b--yellow ba pa2 collapse">
        {!this.state.detail ? (
          <div>
            <div className="search tc flex justify-center">
              <SearchBox onSearchChange={this.searchChange} />
            </div>
            <div className="cardListBody">
              {(() => {
                switch (source) {
                  case "films":
                    return !films.length ? (
                      <p>loading</p>
                    ) : (
                      films.reduce((array, film, filmIndex) => {
                        if (
                          film.title
                            .toLowerCase()
                            .includes(this.state.searchField)
                        ) {
                          array.push(
                            <Card
                              key={filmIndex}
                              source={source}
                              element={film}
                              elementIndex={filmIndex}
                              onActiveDetail={this.activeDetail}
                            />
                          );
                        }
                        return array;
                      }, [])
                    );
                  case "people":
                    return !people.length ? (
                      <p>loading</p>
                    ) : (
                      people.reduce((array, people, peopleIndex) => {
                        if (
                          people.name
                            .toLowerCase()
                            .includes(this.state.searchField)
                        ) {
                          array.push(
                            <Card
                              key={peopleIndex}
                              source={source}
                              element={people}
                              elementIndex={peopleIndex}
                              onActiveDetail={this.activeDetail}
                            />
                          );
                        }
                        return array;
                      }, [])
                    );
                  case "planets":
                    return !planets.length ? (
                      <p>loading</p>
                    ) : (
                      planets.reduce((array, planet, planetIndex) => {
                        if (
                          planet.name
                            .toLowerCase()
                            .includes(this.state.searchField)
                        ) {
                          array.push(
                            <Card
                              key={planetIndex}
                              source={source}
                              element={planet}
                              elementIndex={planetIndex}
                              onActiveDetail={this.activeDetail}
                            />
                          );
                        }
                        return array;
                      }, [])
                    );
                  case "species":
                    return !species.length ? (
                      <p>loading</p>
                    ) : (
                      species.reduce((array, specie, specieIndex) => {
                        if (
                          specie.name
                            .toLowerCase()
                            .includes(this.state.searchField)
                        ) {
                          array.push(
                            <Card
                              key={specieIndex}
                              source={source}
                              element={specie}
                              elementIndex={specieIndex}
                              onActiveDetail={this.activeDetail}
                            />
                          );
                        }
                        return array;
                      }, [])
                    );
                  case "starships":
                    return !starships.length ? (
                      <p>loading</p>
                    ) : (
                      starships.reduce((array, starship, starshipIndex) => {
                        if (
                          starship.name
                            .toLowerCase()
                            .includes(this.state.searchField)
                        ) {
                          array.push(
                            <Card
                              key={starshipIndex}
                              source={source}
                              element={starship}
                              elementIndex={starshipIndex}
                              onActiveDetail={this.activeDetail}
                            />
                          );
                        }
                        return array;
                      }, [])
                    );
                  case "vehicles":
                    return !vehicles.length ? (
                      <p>loading</p>
                    ) : (
                      vehicles.reduce((array, vehicle, vehicleIndex) => {
                        if (
                          vehicle.name
                            .toLowerCase()
                            .includes(this.state.searchField)
                        ) {
                          array.push(
                            <Card
                              key={vehicleIndex}
                              source={source}
                              element={vehicle}
                              elementIndex={vehicleIndex}
                              onActiveDetail={this.activeDetail}
                            />
                          );
                        }
                        return array;
                      }, [])
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        ) : (
          <div>
            <div className="search tc flex justify-center">
              <Back disableDetail={this.disableDetail} />
            </div>
            <CardDetail element={this.state.detailElement} source={source} />
          </div>
        )}
      </div>
    );
  }
}
// remember to put the () before the } that closes js code in the self invoking function for the switch
export default CardList;
