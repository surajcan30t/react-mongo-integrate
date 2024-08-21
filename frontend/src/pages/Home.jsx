// import React from 'react'

import { useState } from "react";

const Home = () => {

    const [values, setValues] = useState({
        username: "",
        registrationID: NaN,
        password: "",
      });
    
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues((prev) => ({ ...prev, [name]: value }));
      };
    
      const register = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          if (res.status === 200) {
            setValues({
              username: "",
              registrationID: NaN,
              password: "",
            });
            // alert("User Registered");
          } else {
            setValues({
              username: "",
              registrationID: NaN,
              password: "",
            });
            alert("There Was An Error Uploading Your Request");
          }
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <div>
        <div className="w-screen h-screen bg-slate-950 text-yellow-200 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Registration</h1>
          <div className="w-auto h-auto m-2 p-2 border border-white rounded-3xl">
            <form className="p-3">
              <div className="flex flex-col">
                <label htmlFor="username">Name</label>
                <input
                  placeholder="Your Name"
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                  className="text-black p-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="registrationID">Registration ID</label>
                <input
                  placeholder="Registration ID"
                  type="number"
                  id="registrationID"
                  name="registrationID"
                  onChange={handleChange}
                  value={values.registrationID}
                  className="text-black p-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="password"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className="text-black p-2 rounded-sm"
                />
              </div>
              <button
                onClick={register}
                type="submit"
                className="bg-yellow-200 text-slate-950 p-2 rounded mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Home