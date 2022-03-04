
import './App.css';
import imagen from "./dessin/imagen.jpeg"

function App() {
  return (
    <div className="App">
  <h1>hello aba</h1>
  <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

 <h1 className="title-red">Abba</h1>

 <br />
 {/*insere une image a partir du public*/}

 <img src= {imagen}style={{width:"25%",height:"90%"}}/>
 

 <br / >
{/*insere une image a partir de src*/}
 <img src="/imagess.jpeg"  />

</div>

<video width="500" height="500" controls>

 <source src="preview.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
