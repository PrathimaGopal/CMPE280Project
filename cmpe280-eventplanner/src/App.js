import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <div className="title"> Blissful Event Planet </div>
        <br/><br/>
        <nav className="tabs">
          <Link to="/home">Home</Link> {" "}
          <Link to="/event">Event</Link>{" "}
          <Link to="/catering">Catering</Link>{" "}
          <Link to="/decoration">Decoration</Link>{" "}
          <Link to="/others">Others</Link> {" "}
          <Link to="/contact">Contact Us</Link>{" "}
          <Link to="/review">Reviews</Link> {" "}
          <Link to="/login">Login</Link>{" "}
          <Link to="/newuser">New User</Link>
        </nav>
      </div>

      <hr></hr>
    </div>
  );
}

export default App;
