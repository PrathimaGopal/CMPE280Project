import "./styles.css";
import images from "./components/images/image";
import ImageCarousel from "./components/imagecarousel";
import NavBeforeLogin from "./components/navBeforeLogin";

function App() {
  return (
    <div className="app">
      <NavBeforeLogin />
      <div className="content">
        <b>
          <u>Welcome to the One Stop Event Shop!!!</u>
        </b>
        <p>
          The most successful event planner of New York is now in
          <b> San Francisco</b>. We assure to provide the best for your event!!!
        </p>
        <p>
          Login and browse our various offerings like decor, food, photography,
          etc.
        </p>
      </div>
      <div className="carousel">
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}

export default App;
