// import React from "react";

// const App = () => {
//   return <h1>This is the app </h1>;
// };

import React from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';


const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif />
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
    // cant have many div as a same level
  );
};

export default App;
// export { App };
