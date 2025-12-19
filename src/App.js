import { aadhar, accno, place, sname } from "./mycomponents/commonvar"
import Padmasneka from "./mycomponents/Padmasneka"

function App()
{
  return(
    <>
    <Padmasneka/>
    <h1>This is default App components</h1>
    <h3>my name is :{sname}</h3>
    <h3>my city :{place}</h3>
    <h3>my aadhar :{aadhar}</h3>
    <h3>my accno:{accno}</h3>
    </>
  )
}
export default App



/*function App()
{
  var arr=[11,22,33,44,55,66,77,88,99,13,29,101,345,126,321]
  var ma=arr[0]
  var s=0
  var order=arr
  var fans=""
  return(<>
<h1>React loop map method</h1>
<h2>old model</h2>
{arr[0]}
{arr[1]}
{arr[2]}
{arr[3]}
{arr[4]}
{arr[5]}
{arr[6]}
{arr[7]}
{arr[8]}  
<h2>New model Map(loop)</h2>
{arr.map((v)=><>
{v}<br></br>
</>)}

<h2>New model Map(loop)</h2>
<ol type="I">
{arr.map((v)=><li>{v}</li>)}
</ol>

<h2>Task sum of array</h2>
<div style={{display:"none"}}>
{arr.map((item)=><>{s=s+item}<br></br></>)}
</div>
<h3>sum of array:{s}</h3>

<h3>Max of array</h3>
<div> {arr.map((v)=><>{ma<v && <>{ma=v}</>}</>)}
</div>
<h3>max of array:{ma}</h3>

<h2>Ascending Order</h2>
<div style={{display:"none"}}>{order.sort((x,y)=>(x-y)
)}</div>
{order.map((item)=><>{item}+</>)}

<h2>descending Order</h2>
<div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
{order.map((item=><>{item} </>))}

<h3>Adding Element in an array</h3>
<div style={{display:"none"}}>{order.push(899)}</div>
{order.map((item)=><>{item} ,</>)}
<br></br>

<h3>Remove last element in an array</h3>
<div style={{display:"none"}}>{order.pop()}</div>
<div style={{display:"none"}}>{order.pop()}</div>
<div style={{display:"none"}}>{order.pop()}</div>
{order.map((item)=><>{item},</>)}

<h2>remove last comma or plus</h2>
<div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
{fans.slice(0,-1)}
</>)}
export default App




/*function App()
{
  var arr=[11,22,33,44,55,66]
  var[v1,
    ,v2,...v3]=arr
  return(<>.
  <h2>spread operator</h2>
  <h3>index 1:{v1}</h3>
  <h3>index 5:{v2}</h3>
  <h3>index 6:{v3}</h3>
  
  </>)
}
export default App

/*function App()
{
var res="pass"
var avg=89
return(<>
<h1>React nested ifelse statement</h1> 
<h2>{
  (res==="pass" &&
  ((avg>=85 && "outstanding")||
 (avg>=75 && "excellent") ||
  (avg>=65 && "very good")||
  "fair"))||"no grade because fail"}
  </h2>
</>)
}
export default App



/*function App()
{
var unit=130
  return(<>
  <h1>EB bill</h1>
  <h3>{(unit<=100 && "Rs.0")||
  (unit>=101 && unit<=125 && "Rs.50")|| // default value 50
  (unit>=126 && unit<=200 && "Rs."+(unit-100)*2)||
  (unit>=201 && unit<=300 && "Rs."+(200+(unit-200)*3))||
  (unit>=301 && unit<=400 &&"Rs."+(500+(unit-300)*4))||
  "₹"+(900+(unit-400)*5)
  }</h3>
</>)
}
export default App

/*function App()
{
  var avg=73
  return(<>
  <h1>React simple if else if statement</h1>
  <h2>{(avg>=84 && "outstanding")|| (avg>=75 && "Excellent")||(avg>=65 && "very good")||
  (avg>=56 && "fair")}</h2>
  </>)
}
export default App

/*function App()
{
  var num=10
  return(<>
  <h2>{(num>8 && "+ve")||"-ve"}</h2>
 </>)
}
export default App
/*function App()
{
  var num=10
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(num % 2===0 && "even")||"odd"}</h2>
 </>)
}
export default App

/*function App()
{
  var age=25
  return(<>
  <h1>{(age>20 && "eligible")||" not eligible"}</h1>
  </>)
}
export default App
/*function App()
{
  var mark=85
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(mark>34 && "PASS")||"FAIL"}</h2>
 </>)
}
export default App
/y*function App()
{
  var mark=10
  return(<>
  <h1>React simple if statement</h1>
  <h2>{mark>34 && "PASS"}</h2>
 </>)
}
export default App





/*function App()
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
/* function App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
}
return(<>
<h2>Arrow function with parmeter</h2>
<h3> note: onClick c must be caps<br></br>don't use double qutoes</h3>
<h3> note: In calling function must be use parenthesis rgs</h3>
<button onClick={()=>myfun(10,20,30)}>clickme</button>
<div id="res"></div>
</>)
}
export default App




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
          className="App-link"  href="https://reactjs.org"
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
