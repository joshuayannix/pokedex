import React from 'react';

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// negative slice starts from the end of the sequence
// so slice(-3) will take the last 3 digits
let padToThree = num => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends React.Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc}/>
        </div>
        <div className="Pokecard-data">{this.props.type}</div>
        <div className="Pokecard-data">{this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;