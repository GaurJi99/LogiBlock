import React, { Component } from "react"
import { useState, useEffect } from "react";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import { useNavigate } from "react-router-dom"
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";
import { loginadmin } from "../web3client";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
import "../Components.css"

toast.configure()

export default function Login() {

	const [idfromlogin, setidfromlogin] = useState("")
	const [passfromlogin, setpassfromlogin] = useState("")
	const [showpassword, setshowpassword] = useState(false)

	const history = useNavigate();

	const routeChange = () => {
		let path = `/dashboard`;
		history(path);
	}
	function matchauth() {
		console.log("matching now")
		if (!validateID()) return
		if (!validatePassword()) return
		loginadmin().then((data) => {
			console.log(data)

			if (data[0] === idfromlogin && data[1] === passfromlogin) {
				console.log("wah bete mauj kardi😜")
				toast.success("Logged in successfully!!")
				routeChange();
			}
			else {
				console.log("aree dada")
				toast.error("Invalid Credentials!!")
			}
		});
	}

	function validateID() {
		if (idfromlogin === "") {
			toast.warning("Please enter the User ID")
			return false
		}
		return true
	}
	function validatePassword() {
		if (passfromlogin === "") {
			toast.warning("Please enter the password")
			return false
		}
		return true
	}

	return (
		<div className="logincomponent">
			<div className='container-fluid'>
				<div className='row justify-content-center my-auto text-center'>
					<div className='col-xl-4 col-lg-5 col-md-6 col-sm-9 col-12 formcol'>
						<div className='loginheading mb-4'>Login</div>
						<form className=''>
							<Input
								type='id'
								className='form-control mb-4 inputformat'
								placeholder='User ID'
								onChange={(e) => {
									setidfromlogin(e.target.value)
								}}
							/>
							<Input
								className='form-control mb-4 inputformat'
								placeholder='Password'
								id='standard-adornment-password'
								type={showpassword ? "text" : "password"}
								onChange={(e) => {
									setpassfromlogin(e.target.value)
								}}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={(e) => {
												setshowpassword(!showpassword)
											}}>
											{showpassword ? (
												<Visibility className='font-regular' />
											) : (
												<VisibilityOff className='font-regular' />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
							<button
								className='btn btn-primary btnlogin mt-5 w-100 text-dark'
								type='button'
								onClick={(e) => {
									matchauth();
								}}>
								LOGIN
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
