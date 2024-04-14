import React from "react";
// import axios from 'axios';

const Main = () => {

    const sendEmail = async () => {
        console.log("yoooooo");
        fetch("http://localhost:8080/mail")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    };

    return(
    <div className="Manage">
        <button onClick={sendEmail}>hallo
        </button>
    </div>
    );
}
export default Main;