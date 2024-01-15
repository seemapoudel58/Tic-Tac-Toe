import React from "react";
 

const Square = (props)=>{
     return(
        <div 
        onClick={props.onClick}
        style={{
            border:"2px solid", 
            height:"100px", 
            width:"100%",
            display:'flex',
            alignItems:"center",
            justifyContent:'center',
        }}
        className="square">
            <h4>{props.value}</h4>
        </div>
     )
}

export default Square;