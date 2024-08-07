import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/CocktailCard";

const CocktailCard = ({ formattedDrink }) => {
    const { id, name, image, info, glass } = formattedDrink;

    return <Wrapper>
        <div className="img-container">
            <img src={image}
                alt={name}
                className="img" />
        </div>

        <div className="footer">
            <h4>{name}</h4>
            <h5>{glass}</h5>
            <p>{info}</p>
            <Link to={`/cocktail/${id}`} className="btn">See details</Link>
        </div>
    </Wrapper>
}

export default CocktailCard