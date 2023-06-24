import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate("");
  const[loggedUser, setLoggedUser] = useState(false)
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      setLoggedUser(loggedInUser);
      navigate("/dashboard")
    }
  }, [loggedUser]);
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>this page will house a demo of the website...</p>
        <a href='/dashboard'>dash</a>
      </div>
    );

}
export default Home;
