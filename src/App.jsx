import "./App.css";
import ClassBasedComponent from "./components/class-based-components";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
import FormComponent from "./components/form";
import FunctionalComponent from "./components/functional-component";
import LoginComponent from "./components/login";
import ProductList from "./components/products";
import RegisterComponent from "./components/register";
import UseReducerExample from "./components/use-reducer-example";
import Users from "./components/users";
// import ProductList from "./components/ProductList";

const dummyProductData = ["Product1", "Product2", "Product3"];

function App() {
  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent /> */}
      {/* <ProductList
        listOfProducts={dummyProductData}
        name="Pradeep"
        city="Ajmer"
      /> */}
      {/* <Users /> */}
      {/* <UseReducerExample /> */}
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}
      {/* <FormComponent /> */}
      <div style={{ display: "flex", gap: "20px" }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  );
}

export default App;
