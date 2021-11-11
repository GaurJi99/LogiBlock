import Input from "@material-ui/core/Input"
import React, { useState, useEffect } from "react"
import Header from "./header-component"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useNavigate } from "react-router-dom"

export default function AddCatg() {
    const [catg, setcatg] = useState("")

    const history = useNavigate();

	const routeChange = () => {
		let path = `/dashboard`;
		history(path);
	}
    return (
        
        <>
            <Header/>
            <div className="container-fluid">
                <div className="row p-5">
                    <Input
                        type='id'
                        style={{ borderTop: "0", borderLeft: "0", borderRight: "0" }}
                        className='font-regular form-control my-2'
                        placeholder='Category Name'
                        onChange={(e) => {
                            setcatg(e.target.value)
                        }}
                    />
                </div>
                <div className="row">
                    <div className="">
                        <button className="btn btn-sm btn-danger float-end" onClick={(e)=>{routeChange()}}>Cancel</button>
                        <button className="btn btn-sm btn-success float-end">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}