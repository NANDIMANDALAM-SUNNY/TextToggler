import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import logo from './images/logo.jpg';
export default function About(props) {
    // const logo = require('../logo.svg')
    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // });
    
    let myStyle = {
        color:props.mode === 'dark'?'white':'#042743',
        backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white',
        border:'1px solid',
        borderColor:props.mode === 'dark'?'white':'#042743',
        borderRadius:'10px'
    }
    
    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3 aboutheading" style={{backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white',}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                          Analyze your text
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextToggler gives you a way to analyze your text quickly and efficiently.</strong> 
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Free to use
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextToggler is a free chracter counter tool that provies instant character count & word statistics for a given text.</strong>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Author
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>N.Sunny</strong>
                            <img src={logo} className="container-fluid authorimage"  alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
