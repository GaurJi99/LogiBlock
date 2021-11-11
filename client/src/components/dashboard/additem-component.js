import Input from "@material-ui/core/Input"
import React, { useState, useEffect } from "react"
import Header from "./header-component"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useNavigate } from "react-router-dom"

export default function AddItem() {
    const [proid, setproid] = useState("")
    const [proname, setproname] = useState("")
    const [catg, setcatg] = useState("")
    const [qnty, setqnty] = useState(null)

    const history = useNavigate();

	const routeChange = () => {
		let path = `/dashboard`;
		history(path);
	}
    return (
        <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <Input
                            type='id'
                            style={{ borderTop: "0", borderLeft: "0", borderRight: "0" }}
                            className='font-regular form-control my-2'
                            placeholder='Product ID'
                            onChange={(e) => {
                                setproid(e.target.value)
                            }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <Input
                            type='name'
                            style={{ borderTop: "0", borderLeft: "0", borderRight: "0" }}
                            className='font-regular form-control my-2'
                            placeholder='Product Name'
                            onChange={(e) => {
                                setproname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <FormControl
                            variant='outlined'
                            className='my-2 full-width border-clip-label'
                            style={{ width: "100%"}}>
                            <InputLabel className='inputcategory' htmlFor='demo-simple-select-outlined-label'>
                                Category
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-outlined-label'
                                id='demo-simple-select-outlined'
                                style={{borderTop: "0", borderLeft: "0", borderRight: "0"}}
                                onChange={(e) => {
                                    setcatg(e.target.value)
                                }}>
                                {/* {educationData?.branches &&
                        educationData?.branches.map((col) => {
                            return <MenuItem className='educationdetails' value={col.id}>{col.name}</MenuItem>
                        })} */}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-lg-6">
                        <Input
                            type='quantity'
                            style={{ borderTop: "0", borderLeft: "0", borderRight: "0" }}
                            className='font-regular form-control my-2'
                            placeholder='Quantity'
                            onChange={(e) => {
                                setqnty(e.target.value)
                            }}
                        />
                    </div>
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
