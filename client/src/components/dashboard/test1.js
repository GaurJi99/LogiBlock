import React, { Component, useState, useEffect } from "react"
import { loginadmin,rmv,getitems } from "../web3client"

export default function Edit() {
    const [allitems,setallitems] = useState([])
    const [name, setname] = useState("");

    useEffect(()=>{
        loginadmin().then((data) => {
            console.log(data)
            setname(data[0])
        });
        getitems().then((data)=>{
            setallitems(data)
            console.log(data)
        })
    },[])


    function findindex(pid){
            let c = 0
            allitems.map((e)=> {
                if ( e.pid === pid.toString() ){
                    c = c + 1
                }
            })
            console.log(c)
            return c        
        }

    function remove(pid){
        let ind = findindex(pid)
        rmv(ind);
        console.log(allitems);
    }


	return (
		<div>
        <h1>hey my name is khan</h1>
        <button className="btn btncanceladd btn-danger float-end" onClick={()=>remove(0)}>delete</button>

        </div>
	)
}