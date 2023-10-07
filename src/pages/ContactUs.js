import classes from "./CotactUs.module.css";
import { useState } from "react";

const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameHanlder = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const formHandler = async (event) => {
    event.preventDefault();

    const contactData = {
      name: name,
      email: email,
      phone: phone,
    };

    const response = await fetch(
      "https://dummy-react-app-e1574-default-rtdb.firebaseio.com/movies/-Ng9sVMIOzCvMpH3aa7P/e-commerce/contact-us.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.ok) {
      alert("we will contact you soon");
    }
    const data = await response.json();

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={formHandler} className={classes.form}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={nameHanlder} />
        <label htmlFor="email">E-Mail</label>
        <input id="email" type="email" value={email} onChange={emailHandler} />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" value={phone} onChange={phoneHandler} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ContactUs;
