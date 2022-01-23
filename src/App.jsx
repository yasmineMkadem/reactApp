import scrImage from './imageInSrc.jpeg';
import './style.css';

function App() {
  return (
     <div className="App">
      <h1 className="App-header">Yasmine Mkadem</h1>
      <div className="">
      <img src={scrImage} alt="img"/>
      </div>
      <div>
      <img src={process.env.PUBLIC_URL +'/imageInPublic.jpeg'} alt="img"/>
      </div>
      <div>
      <video className='App-video' controls>
      <source src="myVideo.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  );
}

export default App;
