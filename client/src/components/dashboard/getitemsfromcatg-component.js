import React, { Component, useState } from 'react';
import ReactTable from "react-table";
import Input from "@material-ui/core/Input"
import Header from "./header-component"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useNavigate } from "react-router-dom"
import "../../Components.css"
import DonoughtChart from "../Donought"
import SearchIcon from '@material-ui/icons/Search';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CancelIcon from '@material-ui/icons/Cancel';
import { toast } from "react-toastify"

export default function GetItemsFromCatg() {
    var heading = ['Name', 'City', 'Course'];
    var body1 = [
        {Name: "Kapil", City: "Jaipur", Course: "MCA"},
        {Name: "Aakash", City: "Hisar", Course: "Btech"},
        {Name: "Mani", City: "Ranchi", Course: "MSc"},
        {Name: "Yash", City: "Udaipur", Course: "Mtech"}
    ]
    
    const [newItems, setnewItems] = useState(body1);

    function search(e) {
        if (e.target.value === "") {
            setnewItems(body1)
        }
        else {
            var newbody = [];
            body1.map((item)=> {
                if(item.Name.toLowerCase().includes(e.target.value.toLowerCase())){
                    var obj = {};
                    newbody.push(item.Name, item.City, item.Course)
                }
            })
            setnewItems(newbody)
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
                                    <div className="row">
                                        <div class="input-group">
                                            <input type="search" onChange={search} placeholder="Search items"
                                                className="form-control border-0 rounded rounded-pill" />
                                            <span className="text-muted p-2"><SearchIcon className="icon" /></span>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center align-items-center">
                                        <table style={{ width: 500 }}>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>City</th>
                                                    <th>Course</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {newItems.map(row => <tr>
                                                    <td>{row.Name}</td>
                                                    <td>{row.City}</td>
                                                    <td>{row.Course}</td>
                                                </tr>)}
                                            </tbody>
                                        </table>
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
    );
}

