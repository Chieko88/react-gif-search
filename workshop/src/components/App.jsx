// import React from "react";

// const App = () => {
//   return <h1>This is the app </h1>;
// };

import React, { useState } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedGifId = "gG6OcTSRWaSis";
  const [selectedGifId, setSelectedGifId] = useState("gG6OcTSRWaSis");
  // setSelectedGifId("HuVCpmfKheI2Q");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifId={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGifId={setSelectedGifId} />
      </div>
    </div>
    // cant have many div as a same level
  );
};

export default App;
// export { App };
