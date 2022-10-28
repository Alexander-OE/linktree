import "./App.css";
import profile from "./img/profile.png";
import slack from "./img/slack.png";
import github from "./img/github.png";
import Zuri from "./img/zuri.png";
import ing from "./img/ing.png";


function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={profile} alt="profile__img" id="profile__img" />
        <h1>Egbe Alexander Ogbeide</h1>
      </div>

      <ul>
        <li id="twitter">
          <a href="https://twitter.com/zeta_dev">Twitter Link</a>
        </li>
        <li id="btn__zuri">
          <a href="https://training.zuri.team/">Zuri Team</a>
        </li>
        <li id="books">
          <a href="https://books.zuri.team/">Zuri Books</a>
        </li>
        <li id="book__python">
          <a href="https://books.zuri.team/python-for-beginners?ref_id=kehlani">Python Books for complete beginners🔥</a>
        </li>
        <li id="pitch">
          <a href="https://background.zuri.team">Background Check for Coders</a>
        </li>
        <li id="book__design">
          <a href="https://books.zuri.team/design-rules">Design Books</a>
        </li>
      </ul>
      <div className="icons">
        <img src={slack} alt="slack__img" />
        <img src={github} alt="github__img" className="git" />
      </div>

      <div className="footer">
        <img src={Zuri} alt="zuri__img" />
        <h3>HNG Internship 9 Frontend Task</h3>
        <img src={ing} alt="" />
      </div>
    </div>
  );
}

export default App;
