import React, { useEffect, useState } from "react";
import InputArea from "./InputArea";

export const Body = () => {
  const [input, inputArea] = useState({
    name: "",
    email: "",
    address: "",
    age: 0,
  });

  //retrieve the list from localStorage if it exists
  const [list, listed] = useState(() => {
    const savedList = localStorage.getItem("list");
    return savedList ? JSON.parse(savedList) : [];
  });

  //function to handle inputChanges
  function Change(event) {
    const { name, value } = event.target;
    inputArea((prevValue) => ({ ...prevValue, [name]: value }));
  }

  useEffect(() => {
    localStorage.setItem("list1", JSON.stringify(list));
  }, [list]);

  function Click() {
   
    if(input.name=="" || input.email == "" || input.address == "" || input.age == ""){
      return alert("Please fill the form",  inputArea({ name: "", email: "" ,
      address: "",
      age: 0,}))
    }
    else{
      const newList = [...list, input];
      listed(newList);
      //storing in local storage
      localStorage.setItem("list", JSON.stringify(newList));
      inputArea({ name: "", email: "" });
  

    }

    
    
  }

  function Deleted(id) {
    const newList = list.filter((item, index) => id !== index);
    listed(newList);

    localStorage.setItem("list", JSON.stringify(newList));
  }

  const [change, changed] = useState(false);
  function Over() {
    changed(true);
  }

  function Out() {
    changed(false);
  }

  //forage
  // const[age, setAge] = useState(0)
  // const count = 0;
  function Increase() {
    inputArea((prevvalue) => ({ ...prevvalue, age: prevvalue.age + 1 }));
  }

  function Decrease() {
    inputArea((prevvalue) => ({
      ...prevvalue,
      age: prevvalue.age > 0 ? prevvalue.age - 1 : 0,
    }));
  }

  return (
    <div className="main">
      <div className="top">
        <h1 id="heading">Bio Data</h1>
        <div className="card">
          <div className="inputField">
            <input
              name="name"
              value={input.name}
              onChange={Change}
              placeholder="Name"
            ></input>
            <input
              name="email"
              value={input.email}
              onChange={Change}
              placeholder="Email"
            ></input>
            <input
              name="address"
              onChange={Change}
              value={input.address}
              placeholder="Address"
            ></input>

            <div className="age">
              <h2>Age: {input.age}</h2>
            </div>
            <div className="agebutton">
              <button onClick={Increase}>+</button>
              <button onClick={Decrease}>-</button>
            </div>

            <button
              className="submit"
              style={{ backgroundColor: change ? "#F4D9D0" : "white" }}
              onMouseOver={Over}
              onMouseOut={Out}
              onClick={Click}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="notes">
        {list.map((item, index) => (
          <InputArea
            key={index}
            id={index}
            name={item.name}
            email={item.email}
            address={item.address}
            age={item.age}
            unChecked={Deleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
