import React, { Component, useState, useEffect } from "react"
import Header from "./dashboard/header-component"
import DonoughtChart from "../components/Donought"
import { loginadmin } from "../web3client"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
import "../Components.css"

toast.configure()

export default function Dashboard() {
    const [name, setname] = useState("");
    function getname() {
        console.log("matching now")
        loginadmin().then((data) => {
            console.log(data)
            setname(data[0])

        });
    }
    getname();
    const history = useNavigate();
    const routeChange = () => {
        let path = `/`;
        history(path);
    }
    return(
        <>
        {name? (
        <>
        <Header/>
        <div className="chartrowdashboard overflow-hidden">
        <DonoughtChart/>
        </div>
        
        </>
        ): 
        (
        routeChange()
        )
        }
        </>
    )
}