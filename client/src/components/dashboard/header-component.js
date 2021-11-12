import React, { useState, useEffect } from "react"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
import SimpleStorageContract from "../../contracts/SimpleStorage.json";
import getWeb3 from "../../getWeb3";
import App from "../../App"
import { loginadmin } from "../../web3client"
import { logo } from "../../images/logo192.png"
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export default function Header() {
    const [idfromlogin, setidfromlogin] = useState()
    const [passfromlogin, setpassfromlogin] = useState()

    const [category, setCategory] = useState("")
    const history = useNavigate();

    const routeChange1 = () => {
        let path = `/dashboard/add-item`;
        history(path);
    }

    const routeChange2 = () => {
        let path = `/dashboard/add-catg`;
        history(path);
    }

    const routeChange3 = () => {
        let path = `/dashboard`;
        history(path);
    }
    const [name, setname] = useState("");
    function getname() {
        console.log("matching now")
        loginadmin().then((data) => {
            console.log(data)
            setname(data[0])

        });
    }
    getname();


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <nav className='navbar navbar-expand-lg navbar-light px-md-2'>
                        <div className="container-fluid py-0 px-lg-0 px-md-0 px-3">
                            <a role="button" className="navbar-brand" onClick={(e) => { routeChange3() }}><img src={logo} width="80px" />LogiBlock</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="mx-lg-3 my-lg-0 my-3">
                                        <span className="nav-item">{name}</span>
                                    </li>
                                    <li className="mx-lg-3 my-lg-0 my-3">
                                        <a role="button" className="nav-item text-decoration-none text-dark" onClick={()=>{ setidfromlogin(""); setpassfromlogin("");}} href="/">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                </div>
                <div className="selectcatgcontainer container-fluid">
                    <div className="row align-items-center px-md-3 px-2 pt-3">
                        <div className="col-xl-10 col-12 mb-xl-0 mb-2">
                            <FormControl
                                variant='outlined'
                                className='my-2 full-width border-clip-label inputcategory'
                                style={{ width: "100%" }}>
                                <InputLabel className="labelinput" htmlFor='demo-simple-select-outlined-label'>
                                    Select Category...
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-outlined-label'
                                    id='demo-simple-select-outlined'
                                    className="inputcategory"
                                    onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}>
                                    {/* {educationData?.branches &&
                        educationData?.branches.map((col) => {
                            return <MenuItem className='educationdetails' value={col.id}>{col.name}</MenuItem>
                        })} */}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-9 mb-lg-0 mb-5 float-end">
                            <button className="btn btn-danger btnadd btn1" onClick={(e) => { routeChange1() }}><span><ControlPointIcon/>&nbsp;ITEM</span></button>
                            <button className="btn btn-primary btnadd" onClick={(e) => { routeChange2() }}><span><ControlPointIcon/>&nbsp;CATG.</span></button>
                        </div>
                    </div>
                </div>

            

        </>
    )
}