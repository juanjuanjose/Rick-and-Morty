import React from 'react';
import CharacterContainer from './components/CharacterContainer';

const App = () => {
  return (
    <div>
      <header>
        <h1>Character Gallery</h1>
      </header>
      <CharacterContainer />
      <footer>
        <a href="#">Footer Link</a>
      </footer>
    </div>
  );
};

export default App;
