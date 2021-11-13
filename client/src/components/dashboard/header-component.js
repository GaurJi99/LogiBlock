import React, { useState, useEffect } from "react"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonIcon from '@material-ui/icons/Person';
import Select from "@material-ui/core/Select"
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router-dom"
import { getallcat, loginadmin, getitems } from "../../web3client"
import { logo } from "../../images/logo192.png"
import ControlPointIcon from '@material-ui/icons/ControlPoint'; 





export default function Header() {
    const [idfromlogin, setidfromlogin] = useState()
    const [passfromlogin, setpassfromlogin] = useState()
    const [allcat,setallcat] = useState([])

    const [category, setCategory] = useState("")
    const history = useNavigate();

    const [allitems, setallitems] = useState([])

    useEffect(()=>{
        loginadmin().then((data) => {
            console.log(data)
            setname(data[0])

        });
        
        getitems().then((data) => {
            setallitems(data)
        });
        getallcat().then((data) => {
            setallcat(data)
        });

    },[])


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
    const routeChange4 = () => {
        let path = `/dashboard/items-shown/`;
        history(path);
    }
    const [name, setname] = useState("");
    
    

    function searchitem(catgegory){
        let arr = [];
        allitems.forEach(comparefunc)

        function comparefunc(v){

            if (v.catg === catgegory){
                arr.push(v);
                
            }
        }
        console.log(arr);
        return arr;
    }




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <nav className='navbar navbar-expand-lg navbar-light px-md-2'>
                        <div className="container-fluid py-0 px-lg-0 px-md-0 px-3">
                            <a role="button" className="navbar-brand" onClick={(e) => { routeChange3() }}><img src={require('../../images/logo192.png')} width="40px" />&nbsp;LogiBlock</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="mx-lg-3 my-lg-0 my-3">
                                        <span className="nav-item"><PersonIcon fontSize={"large"}/>{name}</span>
                                    </li>
                                    <li className="mx-lg-3 my-lg-0 my-3">
                                        <a role="button" className="nav-item text-decoration-none text-dark" onClick={()=>{ setidfromlogin(""); setpassfromlogin("");}} href="/"><PowerSettingsNewIcon fontSize={"large"}/></a>
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
                                className='my-2 full-width inputcategory'
                                style={{ width: "100%" }}>
                                <InputLabel className="labelinput">
                                    Select Category...
                                </InputLabel>
                                <Select
                                    className="inputcategory"
                                    onChange={(e) => {
                                        setCategory(e.target.value) 
                                        routeChange4()
                                    }}>
                                    {
                        allcat.map((catg) => {
                            return <MenuItem className='catall' value={catg}>{catg}</MenuItem>
                        })}
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