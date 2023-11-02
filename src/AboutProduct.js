import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";

function AboutProduct() {

    const navigate = useNavigate();
    const { title } = useParams();
    return (
        <div>
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index} className="contTwo">
                        <img 
                            src={elem.image}
                            alt="product"
                            width="350px"
                            height="500px"
                        />
                        <div className="contInfo">
                            <h3>{elem.name}</h3>
                            <h4>{elem.price}</h4>
                            <button onClick={() => navigate(-1)} className="changeBack"> 
                                Go Back
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}


export default AboutProduct;