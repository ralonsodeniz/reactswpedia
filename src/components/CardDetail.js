import React from "react";
const CardDetail = ({ element, source }) => {
  return (
    <div className="cardListBody tc bg-light-green dib br3 ma2 bw2 shadow-5 pa2">
      {(() => {
        switch (source) {
          case "films":
            return (
              <div>
                <p>{`title: ${element.title}`}</p>
                <p>{`episode: ${element.episode_id}`}</p>
                <p>{`opening crawl: ${element.opening_crawl}`}</p>
                <p>{`director: ${element.director}`}</p>
                <p>{`producer: ${element.producer}`}</p>
                <p>{`release date: ${element.release_date}`}</p>
              </div>
            );
          case "people":
            return (
              <div>
                <p>{`name: ${element.name}`}</p>
                <p>{`gender: ${element.gender}`}</p>
                <p>{`birth year: ${element.birth_year}`}</p>
                <p>{`eye color: ${element.eye_color}`}</p>
                <p>{`hair color: ${element.hair_color}`}</p>
                <p>{`height: ${element.height} cm`}</p>
                <p>{`mass: ${element.mass} kg`}</p>
                <p>{`skin color: ${element.skin_color}`}</p>
              </div>
            );
          case "planets":
            return (
              <div>
                <p>{`name: ${element.name}`}</p>
                <p>{`rotation period: ${element.rotation_period} days`}</p>
                <p>{`orbital period: ${element.orbital_period} days`}</p>
                <p>{`diameter: ${element.diameter} km`}</p>
                <p>{`climate: ${element.climate}`}</p>
                <p>{`gravity: ${element.gravity}`}</p>
                <p>{`terrain: ${element.terrain}`}</p>
                <p>{`surface water: ${element.surface_water}`}</p>
                <p>{`population: ${element.population}`}</p>
              </div>
            );
          case "species":
            return (
              <div>
                <p>{`name: ${element.name}`}</p>
                <p>{`classification: ${element.classification}`}</p>
                <p>{`designation: ${element.designation}`}</p>
                <p>{`average_height: ${element.average_height} cm`}</p>
                <p>{`skin colors: ${element.skin_colors}`}</p>
                <p>{`hair colors: ${element.hair_colors}`}</p>
                <p>{`eye colors: ${element.eye_colors}`}</p>
                <p>{`average lifespan: ${element.average_lifespan} years`}</p>
                <p>{`language: ${element.language}`}</p>
              </div>
            );
          case "starships":
            return (
              <div>
                <p>{`name: ${element.name}`}</p>
                <p>{`model: ${element.model}`}</p>
                <p>{`manufacturer: ${element.manufacturer}`}</p>
                <p>{`starship class: ${element.starship_class}`}</p>
                <p>{`cost in credits: ${element.cost_in_credits}`}</p>
                <p>{`length: ${element.length} m`}</p>
                <p>{`max atmosphering speed: ${
                  element.max_atmosphering_speed
                }`}</p>
                <p>{`passengers: ${element.passengers}`}</p>
                <p>{`cargo capacity: ${element.cargo_capacity}`}</p>
                <p>{`consumables: ${element.consumables}`}</p>
                <p>{`hyperdrive rating: ${element.hyperdrive_rating}`}</p>
                <p>{`MGLT: ${element.MGLT}`}</p>
              </div>
            );
          case "vehicles":
            return (
              <div>
                <p>{`name: ${element.name}`}</p>
                <p>{`model: ${element.model}`}</p>
                <p>{`manufacturer: ${element.manufacturer}`}</p>
                <p>{`vehicle class: ${element.vehicle_class}`}</p>
                <p>{`cost in credits: ${element.cost_in_credits}`}</p>
                <p>{`length: ${element.length} m`}</p>
                <p>{`max atmosphering speed: ${
                  element.max_atmosphering_speed
                }`}</p>
                <p>{`passengers: ${element.passengers}`}</p>
                <p>{`cargo capacity: ${element.cargo_capacity}`}</p>
                <p>{`consumables: ${element.consumables}`}</p>
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};
export default CardDetail;
