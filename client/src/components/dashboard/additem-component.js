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
import { toast } from "react-toastify"
import { getallcat,setitem,getitems} from "../../web3client"


toast.configure()

export default function AddItem() {
    const [proid, setproid] = useState(null)
    const [proname, setproname] = useState("")
    const [catg, setcatg] = useState("")
    const [qnty, setqnty] = useState(null)
    const [allcat,setallcat] = useState([])
    const [allitems,setallitems] = useState([])

    useEffect(()=>{
        getallcat().then((data) => {
            setallcat(data)
        });
        getitems().then((data) => {
            setallitems(data)
            console.log(data)
        });


    },[])

    function add_item() {
        if (!validateproid()) return
        if (!validateproname()) return
        if (!validatecatg()) return
        if (!validateqnty()) return
        let a = proid.toString();
        if(allitems[0].pid.includes(a)){
            toast.error("ZYADA SHAN PATI NAI")
        }
        else{

            setitem(proid,proname,qnty,catg).then((data) => {
               console.log(data)
               toast.success("item " +proname +" added successfully😁")
            });
        }
	}
    
    const history = useNavigate();

    const routeChange = () => {
        let path = `/dashboard`;
        history(path);
    }
    function validateproid() {
		if (proid === null || isNaN(proid)) {
			toast.warning("Please enter a valid Product ID😤")
			return false
		}
		return true
	}
    function validateproname() {
		if (proname === "") {
			toast.warning("Please enter the Product Name")
			return false
		}
		return true
	}
    function validatecatg() {
		if (catg === "") {
			toast.warning("Please enter the category")
			return false
		}
		return true
	}
    function validateqnty() {
		if (qnty === null || isNaN(qnty)) {
			toast.warning("Please enter a valid quantity")
			return false
		}
		return true
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
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Input
                                                type='id'
                                                className='form-control inputformat mb-lg-5 mb-4'
                                                placeholder='Product ID'
                                                onChange={(e) => {
                                                    setproid(parseInt(e.target.value))
                                                }}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <Input
                                                type='name'
                                                className='form-control inputformat mb-lg-5 mb-sm-5 mb-4'
                                                placeholder='Product Name'
                                                onChange={(e) => {
                                                    setproname(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <FormControl
                                                variant='outlined'
                                                className='full-width border-clip-label inputformat mb-lg-5 mb-4'
                                                style={{ width: "100%" }}>
                                                <InputLabel className='inputcategory' htmlFor='demo-simple-select-outlined-label'>
                                                    Category
                                                </InputLabel>
                                                <Select
                                                    labelId='demo-simple-select-outlined-label'
                                                    id='demo-simple-select-outlined'
                                                    onChange={(e) => {
                                                        setcatg(e.target.value)
                                                    }}>
                                                    {
                                                        allcat.map((catg) => {
                                                            return <MenuItem className='catall' value={catg}>{catg}</MenuItem>
                                                        })}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="col-lg-6">
                                            <Input
                                                type='quantity'
                                                className='form-control inputformat mb-lg-5 mb-4'
                                                placeholder='Quantity'
                                                onChange={(e) => {
                                                    setqnty(parseInt(e.target.value))
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row addcancelbtns">
                                        <div className="">
                                            <button className="btn btncanceladd btn-danger float-end" onClick={(e) => { routeChange() }}><span><CancelIcon/>&nbsp;Cancel</span></button>
                                            <button className="btn btncanceladd btn-success float-end mx-3" onClick={(e) => { add_item() }}><span><ControlPointIcon/>&nbsp;Add</span></button>
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
