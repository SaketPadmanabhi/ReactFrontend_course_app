import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";


const Addcourses=()=>{
    useEffect(()=>{
        document.title="Add Course || Saket"
    },[])

    const [course,setCourses] = useState({});

    const handleForm = (e) => {
        console.log(course);
        e.preventDefault()
    }
    return(
        <div>
            <h1 className="text-center py my-3" >Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type = "text" placeholder="Enter ID here" name="userId" id="userId" onChange={(e)=>{
                        setCourses({...course}, id=e.target.value)
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type = "text" placeholder="Enter title here" name="title" id="title" onChange={(e)=>{
                        setCourses({...course}, title=e.target.value)
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type = "textarea" placeholder="Enter description here" name="description" id="descripion" onChange={(e)=>{
                        
                    }} style={{height:50}} />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>

            </Form>
        </div>
    );
};

export default Addcourses;