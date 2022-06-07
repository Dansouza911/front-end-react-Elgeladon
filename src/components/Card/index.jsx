import "./style.css";
import { toast } from "react-hot-toast";

const Card = ({ palette }) => {
  return (
    <div className="card-container">
      <div>
        <p>{`R$${palette.preco.toFixed(2)}`}</p>
        <img src={palette.foto} alt={`Paleta no sabor de ${palette.sabor}`} />
      </div>
      <h3>{palette.sabor}</h3>
      <p>{palette.descricao}</p>
      <button onClick={() => toast.error("Sessão em Construção!")}>
        Comprar
      </button>
    </div>
  );
};

export default Card;
