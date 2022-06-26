import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';


function App() {

   const [link,setLink]=useState('');
  const [format,setFormat]=useState('360');

  
  var str = "https://loader.to/api/button/?url="+link+"&f="+format+"";
  return (
    <div className="App">
        <div className="header">
          <h1>UTube Downloader</h1>
        </div>


        <div className="f1-cont" >
          <div className="item1">
          <label htmlFor="inp">URL</label>
          <input type="text" id="inp" name="inp" placeholder="https://youtu.be/BdAvLX4QNTA" onChange={(event)=>{
            setLink(event.target.value);
          }}></input>
          <select class="form-control formte" onChange={(event)=>{
            setFormat(event.target.value);
          }} > 
              {/* <option value="mp4a">144 Mp4</option>  */}

              <option value="360">360 Mp4</option> 

              <option value="480">480 Mp4</option> 

              <option value="720">720 Mp4</option> 

              <option value="1080">1080 Mp4</option> 

              <option value="4k">4k Mp4</option> 

              <option value="8k">8k Mp4</option> 
              <option value="mp3">Mp3</option>

            </select> 

            
            
        

          </div>

          <div className="item2">
          <div className="btn">
              <iframe src={str}>
              </iframe>
            </div>
          </div>

        </div>

        
    </div>
  );
}

export default App;
