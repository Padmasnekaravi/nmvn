function App()
{
  if(true)
  {
    var v=100
    let l=200
    const c=300
    v++;
    l++;
    console.log("let:"+l);
    //c++;
    console.log("const:"+c);
  }
  return(
    <>
    <h1>variable : global :{v}</h1>
    <h1>does not work let and const : because local</h1>
    </>
  )
}
export default App








/* App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
}
return(<>
<h2> </h2>


)
}

</>
function App()
{
  let myfun=()=>{
   / document.getElementById("res").innerHTML="Congrats you clicked the button";
  }
  return(<>
  <h2>Arrow Function without parameter</h2>
  <h3>Note: onClick c must be caps<br></br> don't use double qutoes</h3>
  <h3>Note: In calling function don't use paranthesis when without passing args</h3>
  <button onClick={myfun}>click me</button>
  <div id="res"></div>
</>)
}
export default App
 /*import myimg from './images/img1.jpg'
function App()
{
  return(<>
  <center>
    <h2>Image Demo using path as expression</h2>
    <img src={myimg} width="75%" height="auto" alt ="path is wrong"></img>
    </center>
    </>)
}
export default App

/*function App()
{
   var a=300
   var b=200
   var c=400
   return(
    <>
    <h2>Biggest Among 2 no's using conditional or ternary operator</h2>
    <h1>Biggest Number:{a>b?a:b}</h1>
    <h1>Biggest number a or b or c:{(a>b && a>c) ?a:(b>c?b:c)}</h1>
    </>
   )
}
export default App
function App(){
  //Javascript learned code
  var a=10
  var b=20
  var c="padma"
  return(<>
  <h1>Total:{a+b}</h1>
  <marquee bgcolor='yellow'><font size='7'>{c}</font></marquee>
    </>)
}
export default App*/

/*import Reaect from "react";

class// Parent extends React.Component
{
  render()
  {
return(<>
<h1>this is parent Class</h1>
<h1>this is parent Class</h1>
<h1>this is parent Class</h1>
</>)
  }
}
class App extends Parent
{
  render()
  {
    return(<>
    <Parent/>
        <h1>welcome is class component</h1>
        <h1>welcome is class component</h1>
        <p>Reprehenderit occaecat eiusmod esse ullamco adipisicing exercitation occaecat aute sint. Fugiat enim eiusmod reprehenderit elit aliqua deserunt nisi irure laborum exercitation elit incididunt. Amet pariatur aute incididunt reprehenderit adipisicing enim nostrud. Laboris adipisicing in est tempor incididunt sit sint reprehenderit labore cillum in. Excepteur pariatur anim nulla ad minim reprehenderit. Laboris enim anim commodo irure id velit excepteur velit eiusmod nostrud occaecat. Laboris aliquip enim deserunt mollit sint laboris do.

Incididunt ex officia ex pariatur incididunt. Veniam pariatur amet minim enim do duis incididunt cupidatat proident. Velit id laboris labore ea dolor non quis nostrud occaecat sint sunt et fugiat ipsum.

Velit commodo duis labore eu ea amet laborum eu cillum eu cupidatat minim consectetur. Enim irure fugiat mollit est proident. Incididunt ipsum ad tempor ea ex adipisicing veniam. Aute consectetur labore excepteur labore et eu labore proident voluptate amet elit voluptate Lorem mollit. Nostrud est deserunt nulla velit velit qui adipisicing adipisicing.

Sunt irure nulla eu culpa. Deserunt aliquip nulla Lorem qui fugiat labore consequat cupidatat enim tempor excepteur consequat enim ex. Aute Lorem ex proident incididunt veniam aliqua aute id ex in labore reprehenderit. Ad laborum veniam labore ad est nisi.</p>
      </>)
  }
}
export default App
/*function App()
{
  return(
    <div>
    <h1>Welcome TO React Js</h1>
        <h1>Welcome TO React Js</h1>
            <
            
            h1>Welcome TO React Js</h1>
                <h1>Welcome TO React Js</h1>
            </div>
  )
}
export default App*/
 

/*import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
