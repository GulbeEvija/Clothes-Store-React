import { Link } from 'react-router-dom';

function Clothes({itemsForSale}) {
    return (
        <div className="products">
            {itemsForSale.map (( item => {
                const {id, name, searchTerm, price, image} = item;
            return (
                <div key={id} className="product-card"> 
                <Link to={`/about/${item.title}`}>
                    <img src={image} alt="Clothes" width="400px" height="500px"/>
                </Link>
                    <div className="product-info">
                        <h3>{name}</h3>
                        <h4> $ {price}</h4>
                    </div>
                </div>
            )
            }))}

        </div>
    );
}

export default Clothes;