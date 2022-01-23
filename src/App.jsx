import scrImage from './imageInSrc.jpeg';
import './style.css';

function App() {
  return (
     <div className="App">
      <h1 className="App-header">Yasmine Mkadem</h1>
      <img src={scrImage} alt="img"/>
      <img src={'..public/imageInPublic.jpeg'} alt="img"/>
      <div>
      <video className='App-video' controls>
      <source src="myVideo.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  );
}

export default App;
