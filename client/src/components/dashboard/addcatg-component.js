import Input from "@material-ui/core/Input"
import React, { useState, useEffect } from "react"
import Header from "./header-component"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useNavigate } from "react-router-dom"
import "../../Components.css"
import DonoughtChart from "../Donought"
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CancelIcon from '@material-ui/icons/Cancel';
import { addcat ,getallcat } from "../../web3client"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"

toast.configure()

export default function AddCatg() {
    const [catg, setcatg] = useState("")
    const [allcat,setallcat] = useState([])


    
    const history = useNavigate();
    useEffect(()=>{
        getallcat().then((data) => {
            setallcat(data)
        }).catch((err)=>{
            console.log("Error is " + err)
        })
    },[])
    

    const routeChange = () => {
        let path = `/dashboard`;
        history(path);
    }

    

    function validatecatg() {
		if (catg === "") {
			toast.warning("Cannot add empty category🤢")
			return false
		}
		return true
	}

    

    function add_cat() {
        if (!validatecatg()) return
        if(allcat.includes(catg)){
            toast.error("ZYADA SHAN PATI NAI")
        }
        else{
            addcat(catg).then((data) => {
               console.log(data)
            });
            toast.success(catg+" added successfully😁")
        }
	}


    return (

        <>
            <Header />
            <div className="additemcomponent">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-8">
                            <div className="additem">
                                <div className="container-fluid">
                                    <div className="row justify-content-center align-items-center text-center addcatgrow">
                                        <div className="catgheading">
                                            Category Name
                                        </div>
                                        <Input
                                            type='id'
                                            className='form-control inputformat inputcatg'
                                            onChange={(e) => {
                                                setcatg(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row addcancelbtns">
                                        <div className="">
                                            <button className="btn btncanceladd btn-danger float-end" onClick={(e) => { routeChange() }}><span><CancelIcon />&nbsp;Cancel</span></button>
                                            <button className="btn btncanceladd btn-success float-end mx-3" onClick={(e) => { add_cat() }} ><span><ControlPointIcon />&nbsp;Add</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <DonoughtChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}