import React, { useState } from "react";
import "./App.css";
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler";
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu";
import sahteVeri from "./sahte-veri";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [arama, setArama] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    setGonderiler(
      gonderiler.map((item) => {
        if (gonderiID === item.id) {
          item.likes++;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <AramaÇubuğu setArama={setArama} arama={arama} />
      <Gönderiler
        gonderiyiBegen={gonderiyiBegen}
        gonderiler={gonderiler}
        arama={arama}
      />
    </div>
  );
};
export default App;
