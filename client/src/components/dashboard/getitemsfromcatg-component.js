import React, { Component, useState, Fragment, useEffect, useParams, useHistory } from 'react';
import ReactDOM from 'react-dom';
import Header from "./header-component"
import "../../Components.css"
import DonoughtChart from "../Donought"
import SearchIcon from '@material-ui/icons/Search';
import Modal from 'react-modal';
import Input from "@material-ui/core/Input"
import { getitems, rmv, edititem } from '../../web3client';
import { toast } from "react-toastify"

toast.configure()

export default function GetItemsFromCatg() {
    var body1 = [
        { Name: "Kapil", City: "Jaipur", Course: "MCA" },
        { Name: "Aakash", City: "Hisar", Course: "Btech" },
        { Name: "Mani", City: "Ranchi", Course: "MSc" },
        { Name: "Yash", City: "Udaipur", Course: "Mtech" }
    ]

    const [allitems, setallitems] = useState([])
    useEffect(() => {
        getitems().then((data) => {
            setallitems(data)
        });


    }, [])
    console.log("old arr is", allitems)
    const [newItems, setnewItems] = useState(allitems);
    const [proiddel, setproiddel] = useState(null);
    const [proiddel1, setproiddel1] = useState(null);
    const [qnty1, setqnty1] = useState(null);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen1, setIsOpen1] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function openModal1() {
        setIsOpen1(true);
    }
    function closeModal1() {
        setIsOpen1(false);
    }
    function findindexandremove(pid) {
        let ans;
        for (var i = 0; i < allitems.length; i++) {
            if (allitems[i].pid === pid.toString()) {
                ans = i;
                break;
            }
        }
        rmv(ans);
    }

    function findindexandedit(pid, qnty) {
        let ans;
        for (var i = 0; i < allitems.length; i++) {
            if (allitems[i].pid === pid.toString()) {
                ans = i;
                break;
            }
        }
        edititem(ans, qnty)
    }
    return (
        <>
            <Header />
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="modalcomponent"
                >
                    <div className="catgheading">
                        Product ID
                    </div>
                    <Input
                        type='id'
                        className='form-control inputformat inputcatg'
                        onChange={(e) => {
                            setproiddel(e.target.value)
                        }}
                    />
                    <button onClick={() => findindexandremove(proiddel)}>Save</button>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen1}
                    onRequestClose={closeModal1}
                    contentLabel="Example Modal"
                    className="modalcomponent"
                >
                    <div className="catgheading">
                        Product ID
                    </div>
                    <Input
                        type='id'
                        className='form-control inputformat inputcatg'
                        onChange={(e) => {
                            setproiddel1(e.target.value)
                        }}
                    />
                    <div className="catgheading">
                        Quantity
                    </div>
                    <Input
                        type='id'
                        className='form-control inputformat inputcatg'
                        onChange={(e) => {
                            setqnty1(e.target.value)
                        }}
                    />
                    <button onClick={() => findindexandedit(proiddel1, qnty1)}>Save</button>
                </Modal>
            </div>
            <div className="additemcomponent">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-8">
                            <div className="additem">
                                <div className="container-fluid">
                                    <div className="row justify-content-center align-items-center">
                                        <table className="justify-content-center text-center align-items-center">
                                            <thead>
                                                <tr>
                                                    <th>ProductID</th>
                                                    <th>Product Name</th>
                                                    <th>Quantity</th>
                                                    <th>Category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    allitems.map((item) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td>{item.pid}</td>
                                                                    <td>{item.pname}</td>
                                                                    <td>{item.qty}</td>
                                                                    <td>{item.catg}</td>
                                                                    {/* <td>
                                                                        <button className="btn btn-success">Edit</button>&nbsp;
                                                                        <button className="btn btn-danger">Delete</button>
                                                                    </td> */}
                                                                </tr>
                                                            </>
                                                        )

                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        <div className="row addcancelbtns">
                                            <div className="">
                                                <button className="btn btncanceladd btn-danger float-end" onClick={openModal}><span>Delete</span></button>
                                                <button className="btn btncanceladd btn-success float-end mx-3" onClick={openModal1}><span>Edit</span></button>
                                            </div>
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
    );
}
