import { data } from './data';
import { useState } from 'react';
import Clothes from './Clothes';
import Buttons from './Buttons';


function Shop() {
    const [clothes, setClothes] = useState(data);
  
    const chosenClothes = (searchTerm) => {
        const newClothes = data.filter(element => element.searchTerm === searchTerm);
        setClothes (newClothes);
    }
  
  
    return (
      <div>
        <div className='cont'>
          <h2 className='back'>Standart Free Shipping</h2>
        </div>
        <Buttons filteredClothes={chosenClothes} data={data} setClothes={setClothes}/>
        <Clothes itemsForSale={clothes}/>
      </div>
    );
  }
  
  export default Shop;