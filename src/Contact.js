import "./Contact.css";
import Zuri from "./img/zuri.png";
import ing from "./img/ing.png";
const Contact = () => {
  return <>
    <form action="">
        <div className="contact">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className="text">
            <div id="first__name">
                <h4>First name</h4>
                <input type="text" className="first__input" placeholder="Enter your first name" required/>
            </div>
            <div id="last__name">
                <h4>Last name</h4>
                <input type="text" className="last__input" placeholder="Enter your last name" required/>
            </div>
        </div>

        <div id="email">
            <h4>Email</h4>
            <input type="text" className="email__input" placeholder="yourname@email.com" required/>
        </div>

        <div className="group">
        <h4>Message</h4>
           <textarea name="" id="message" cols="70" rows="8" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>

        <div className="check">
            <input type="checkbox" className="check__box" name="" id="" />
            <h5>You agree to providing your data to Alexander who may contact you.</h5>
        </div>
        <button id="btn__submit">Send message</button>
        <div className="footer">
      <img src={Zuri} alt="zuri__img" />
      <h3>HNG Internship 9 Frontend Task</h3>
      <img src={ing} alt="" />
    </div>
    </form>
  </>;
};

export default Contact;
