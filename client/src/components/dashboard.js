import React, { Component, useState, useEffect } from "react"
import Header from "./dashboard/header-component"
import DonoughtChart from "../components/Donought"
import { loginadmin,getitems} from "../web3client"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
import "../Components.css"

toast.configure()

export default function Dashboard() {
    const [name, setname] = useState("");
    const [allitems,setallitems] = useState([])

    useEffect(()=>{
        loginadmin().then((data) => {
            console.log(data)
            setname(data[0])
        });
        getitems().then((data)=>{
            setallitems(data)
        })
    },[])


    function searchitem(catgegory){
        allitems.forEach(comparefunc)

        function comparefunc(v){

            if (v.catg === catgegory){
                console.log("wah!!😁")
            }
        }
    }
    console.log(allitems);

    return(
        <>
        <Header/>
        <div className="chartrowdashboard overflow-hidden">
        <DonoughtChart/>
        </div>

        <div>
        <button className="btn btncanceladd btn-danger float-end" onClick={()=>searchitem("fam")}>Hey</button>

        </div>
        </>
    )
}