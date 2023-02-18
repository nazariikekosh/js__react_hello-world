import React, { useState } from "react";
import styles from "../styles/StudentPage.module.css";

const Student = () => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState('');

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.title}>Student Page</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              aut rem, laudantium quia veritatis minima esse iure eos at officia
              odit corporis ab sint repellendus sit eius quibusdam officiis
              possimus!
            </p>
            <div
              className="btn btn-success"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Add +1
            </div>
            <div
              className="btn btn-danger"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              Add -1
            </div>
            <h2>Result: {counter}</h2>
            <form>
                <input type="text" onChange={(e) =>{setName(e.target.value)}} placeholder="name"/>
                <h2>
                    {name}
                </h2>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;