import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
      props.showalert("converted to uppercase")
        console.log("Uppercase was clicked")
        const newtext=text.toUpperCase();
        setText(newtext)
             }
             const handleloclick=()=>{
                props.showalert("converted to uppercase")
                console.log("Uppercase was clicked")
                const newtext=text.toLowerCase();
                setText(newtext)
                     }
             const handlechange=(e)=>{
                setText(e.target.value)
             }
             const[text,setText]=useState("enter the text here");
  return (
  
      <>
  <div className="container mb-3">
    <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
   
    <textarea name="textarea" onChange={handlechange} value={text} id="mybox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='light'?'black':'white'}} className='form-control' rows="8"></textarea>
    <button className="btn btn-primary my-4 " onClick={handleUpclick}>Convert to uppercase</button>
    <button className="btn btn-primary my-4 mx-5 " onClick={handleloclick}>Convert to lowercase</button>
    </div>
    <div className="container my-3">
        <h1 style={{color: props.mode==='light'?'black':'white'}}>Text Summary</h1>
        <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>


   
    
  )
}
