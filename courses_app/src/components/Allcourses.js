import React, { useState,useEffect } from "react";
import { Button } from "reactstrap";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses=()=>{

    useEffect(()=> {
        document.title="All Courses";
    }, []);
    
    //function to call server
    const getAllCoursesFromserver=()=>{
        axios.get(`${base_url}/courses`).then((Response)=>{
          //  console.log(Response)
            console.log(Response.data)
            toast.success("couses has been loaded",{position:"bottom-center"})
            setCourses(Response.data)
        },(Error)=>{
            console.log(Error)
            toast.error("something went wrong",{position:"bottom-center"})
        })
    }

    useEffect(()=> {
        getAllCoursesFromserver();
    }, []);

    const [courses, setCourses]=useState( [])


    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>
            {
                courses.length>0? courses.map((item)=><Course key={item.id} course={item} />) : "No Course"
            }
        </div>
    );
};

export default Allcourses;