import ProductItem from "./components/product-item";
import App from "../../App";
import "./style.css";
import { useEffect, useState } from "react";

const initialState = true;

const dummyProductData = ["Product1", "Product2", "Product3"];

function ProductList({ name, city, listOfProducts }) {
  const [flag, setFlag] = useState(initialState);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  function handleToggleText() {
    setFlag(!flag);
  }

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    setFlag(!flag);
    console.log("run only once page load");

    return () => {
      console.log("component is unmounted -> some side effects here also")
    };
  }, []); //this will only run on page load once

  useEffect(() => {
    console.log("count changes");
    if (count === 10) setChangeStyle(true);
  }, [count]);

  console.log(changeStyle);

  // const { name, city } = props;
  return (
    <div>
      <h3 className="title">E-Commerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {/* <ProductItem /> */}
      {flag ? (
        <h4>
          {name} and {city}
        </h4>
      ) : (
        <h4>Hello</h4>
      )}

      <div>
        <button
          style={{
            backgroundColor: changeStyle ? "black" : "white",
            color: changeStyle ? "white" : "black",
          }}
          onClick={handleIncreaseCount}
        >
          Increase Count
        </button>
        <p>Count is {count}</p>
      </div>

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
