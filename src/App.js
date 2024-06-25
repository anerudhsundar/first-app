import ProfilePic from "./ane_profile_pic.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={ProfilePic} style={{height: 150, width: 150, borderRadius:70}}/>
      <h1>Anerudh Sundar</h1>  
      <p>anerudhsundar@gmail.com</p>
      <p>+91 9962597999</p>
      <p>Velammal International School (12th)</p>
      <p>GTA Vidhya Mandir (10th)</p>
      <p>I am here to learn React and Javascript</p>
    </div>
  );
}

export default App;
