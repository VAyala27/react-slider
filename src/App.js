import './App.css';
// import CarouselContainer from './Components/CarouselContainer';
import { ImageSlider } from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';

function App() {
  return (
    <div className="App">
      <div className="container">
      <ImageSlider slides={SliderData}/>   
      </div>
    </div>
  );
}

export default App;
