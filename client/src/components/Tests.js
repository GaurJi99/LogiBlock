import React, { Component } from "react"
import { useState,useEffect } from "react";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import { useNavigate } from "react-router-dom"
import { getallitems } from "../web3client";


// toast.configure()

export default function Tests() {

    getallitems().then((data)=>{
        console.log(data)

    });
return(

    <div>Are wah maza aa gaya!!</div>
)




}