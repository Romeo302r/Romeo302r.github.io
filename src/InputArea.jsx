import React from "react";
import { useNavigate } from "react-router-dom";

const InputArea = (props) => {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/edit/${props.id}`)} className="components">
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.address}</p>
      <p>Age: {props.age}</p>
      <button
        onClick={() => {
          props.unChecked(props.id);
        }}
      >
        Delete
      </button>
      <button onClick={() => navigate(`/edit/${props.id}`)}>Edit</button>
    </div>
  );
};

export default InputArea;
