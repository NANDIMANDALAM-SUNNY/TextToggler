import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState("")
    const HandleOnchange1 = (event)=>{
        console.log("looc")
        setText(event.target.value)
        
    }
    const UpperCase=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converterd to upperCase","success");
        
    }
    const LowerCase=()=>{
        let newTextTolower = text.toLowerCase();
        setText(newTextTolower)
        props.showAlert("Converterd to lowerCase","success");
    }
    const ClearText=()=>{
    let newTextToClear = "";
        setText(newTextToClear)
        props.showAlert("Cleared text","success");
        
       
    }
    const RemoveSpaces=()=>{
        let newTextToRemoveSpaces = text.split(/[ ]+/); 
            setText(newTextToRemoveSpaces.join(" "))
            props.showAlert("Removed Extra Spaces","success");
            
           
        }
    return (
   <div className='constainer' style={{color:props.mode==='dark'?'white':'#042743'}}>
   <h1  >{props.heading} </h1>
<div className="mb-3 my-3">
  <textarea className="form-control" onChange={HandleOnchange1} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 mx-1" onClick={UpperCase}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2 mx-1" onClick={LowerCase}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2 mx-1" onClick={RemoveSpaces}>Remove extra spaces</button>
<button className="btn btn-primary mx-2 mx-1" onClick={ClearText}>Clear</button>
        <h2 className='container'>Text Summary</h2>
        <p className='container'>{text.split(" ").length-1} words and {text.length} characters</p>
        <p className='container'>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} Min to read</p>
        <h2 className="my-3 container">
            Preview
        </h2>
        <p className='container'>{text.length>0?text:"Enter something in the above box to preview"}</p>
</div> 
    )
}

