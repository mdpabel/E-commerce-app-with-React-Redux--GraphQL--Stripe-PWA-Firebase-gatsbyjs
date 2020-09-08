import React, { useState } from "react";

function Hooks() {
  const [name, setName] = useState("MD Pabel");
  const [age, setAge] = useState("23");

  const handleClick = () => setName("updated");

  return (
    <div className="text-center">
      <div className="bg-danger py-5 m-5 ">
        {name} <br /> {age}{" "}
      </div>
      <button onClick={handleClick} className="btn btn-primary">
        Update Name
      </button>
      <br />
      <br />
      <button onClick={() => setAge("Updated")} className="btn btn-success">
        Update Age
      </button>
    </div>
  );
}

export default Hooks;
