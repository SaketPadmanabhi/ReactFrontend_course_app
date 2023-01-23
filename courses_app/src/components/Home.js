import React, { useEffect } from "react";
import { Jumbotron, Container, Button } from "reactstrap";

function Home() {
    useEffect(()=>{
        document.title="Learn Coding || Saket"
    },[])
    return (
        <div className="text-center" style={{backgroundColor:'#D3D3D3', padding:50}}>
                <h1>"Learn Coding"</h1>
                <p>"This is my first spring boot application with front end on react js"</p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>  
        </div>
    );
}

export default Home;