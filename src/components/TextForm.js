import React,{useState} from 'react'

function TextForm(props) {

    const[text,setText]=useState("Enter the text here:");


const handleUpClick=()=>{
console.log("button was clicked"+ text);
let newText=text.toUpperCase();
setText(newText);
props.haha("Coverted to UpperCase !","success");
}


const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.haha("Coverted to LowerCase !","success");
        }
        

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.haha("Listen Carefully !","success");
}
    const handleOnChange=(event)=>{
    console.log("On change");
setText(event.target.value);
    }
   
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control"  id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview!"}</p>
    </div>
    
    </>
  )
}

export default TextForm