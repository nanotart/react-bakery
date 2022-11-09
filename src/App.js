import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import React from "react";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [currTotal, setTotal] = useState(0);
  const [list, setList] = useState([]);

  const handleTotalAndList = (item) => {
    let new_total = item.price + currTotal
    setTotal(new_total)
    setList([...list, item.name])
  }

  return (
    <div className="App">
      <h1>Sedong's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <>
          <div>
            <p>{index + 1}: {item.name}: {item.price}
            <button type="button" onClick={() => handleTotalAndList(item)} style={styles.button}>Add To Cart</button>
            </p>
          
            <img style={styles.image} alt="imager" src={item.image}></img>
          </div>
        </>
      ))}

      <div>
        <h2>Cart</h2>
        <p>Total: {currTotal}</p>
        {list.map((item) => {
          return (
            <p>{item}</p>
          )
        })}
      </div>

    </div>
  );
}

let styles = {
  button: {
    padding: 10,
    marginLeft: 8,
  },
  container: {
    justifyContent: 'space-between',
  },
  image: {
    width: '30%',
    height: '30%',
    marginLeft: 60,
  },
}

export default App;
