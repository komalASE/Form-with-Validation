import React, { useState } from "react";
import InputField from "./InputField";
import { Form, Col } from "react-bootstrap";
import styles from "./Form.module.css";
import "../index.css";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!state) {
      errors.state = "State is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = { name, gender, phone, state };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Signup successful!");
    }
  };
  const mystyle = {
    color: "black",
    backgroundColor: "transpirent",
    padding: "5px",
    fontFamily: "Arial",
    margin: "10px",
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />

      <InputField
        label="Gender"
        type="radio"
        name="gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <InputField
        label="Phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors.phone}
      />
      <InputField
        label="State"
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        error={errors.state}
      />
      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default SignupForm;
