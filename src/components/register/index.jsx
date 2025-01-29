import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialRegisterFormData = {
  name: "",
  email: "",
  password: "",
};

function RegisterComponent() {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData
  );

  function handleRegisterOnSubmit(event) {
    event.preventDefault();

    console.log(registerFormData);

    setRegisterFormData(initialRegisterFormData);
  }

  return (
    <div>
      <h1>Register Page/Component</h1>

      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  );
}

// function RegisterComponent() {
//   const registerFormElements = [
//     { label: "Username", type: "text", name: "username" },
//     { label: "Password", type: "password", name: "password" },
//   ];

  // return (
  //   <div>
  //     {registerFormElements.map((element) => (
  //       <input
  //         key={element.name}
  //         type={element.type}
  //         placeholder={element.label}
  //         name={element.name}
  //       />
  //     ))}
  //   </div>
  // );

export default RegisterComponent;
