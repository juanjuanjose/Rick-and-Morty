import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  return (
    <div className="card-character">
      <img src={character.image} alt={character.name} />
      <div className="description-card">
        <h2>{character.name}</h2>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
