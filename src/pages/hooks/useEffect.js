import React, { useState, useEffect } from "react";
import axios from "axios";

const Hooks = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Bret");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      setUser(data[0]);
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div className="card">
      <div className="card-body text-center m-5 p-5 bg-dark">
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        {user ? (
          <div className="text-white">
            <p>name : {user.name}</p>
            <p>email : {user.email}</p>
          </div>
        ) : (
          <p className="text-center text-white">Nothing to found</p>
        )}
      </div>
    </div>
  );
};

export default Hooks;
