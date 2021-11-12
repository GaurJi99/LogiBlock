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

export default function AddQnty() {
    const [qnty, setqnty] = useState("")

    const history = useNavigate();

    const routeChange = () => {
        let path = `/dashboard`;
        history(path);
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
                                            QUANTITY
                                        </div>
                                        <Input
                                            type='id'
                                            className='form-control inputformat inputcatg'
                                            onChange={(e) => {
                                                setqnty(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row addcancelbtns">
                                        <div className="">
                                            <button className="btn btncanceladd btn-danger float-end" onClick={(e) => { routeChange() }}><span><CancelIcon />&nbsp;Cancel</span></button>
                                            <button className="btn btncanceladd btn-success float-end mx-3"><span><ControlPointIcon />&nbsp;Add</span></button>
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