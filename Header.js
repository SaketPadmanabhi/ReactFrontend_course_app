import React from "react";

function Header({name},{title}){
    return(
        <div style={{backgroundColor: "yellow", padding:20,width:400}}>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <p>"This is for learning purpose"</p>
        </div>
    )
}

export default Header;