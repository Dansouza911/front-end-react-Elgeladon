import "./style.css";
import palettesAll from "../../mock/paletas";
import { useState } from "react";
import Card from "../Card";

const Home = () => {
  const [palette, setPallete] = useState(palettesAll);

  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <div>
        {palette.map((element, index) => {
          return <Card key={index} palette={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;
