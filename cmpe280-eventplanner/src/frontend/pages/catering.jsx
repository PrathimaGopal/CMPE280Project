import './styles.css';
import RenderCatering from '../components/cateringComponent/renderCatering';

export default function Catering(props) {
  return (
    <div className="app">
      <RenderCatering />
      {props.event1}
    </div>
  );
}
