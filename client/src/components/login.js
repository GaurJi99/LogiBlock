import React, { Component } from "react"
import { useState,useEffect } from "react";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"


// toast.configure()

export default function Login({loginadmin}) {
	
	const [idfromlogin , setidfromlogin] = useState("")
	const [passfromlogin , setpassfromlogin] = useState("")

	function matchauth(){
		console.log("matching now")
		loginadmin().then((data)=>{
			console.log(data)

			if (data[0] === idfromlogin && data[1] === passfromlogin){
				console.log("wah bete mauj kardi😜")
			}
			else{
				console.log("aree dada")
			}

		});
		

	}
	
		return (
			<div className='jumbotron-fluid h-100' data-component='login'>
				<div className='column h-100 text-center'>
					<div
						className='position-absolute d-block end-0 m-3 font-color-gray z-top'
						role='button'>
						<CloseIcon />
						
					</div>
					<div className='col-md-12 d-flex h-20'>
						<img
							className='mx-auto my-auto d-block logoimg'
							src='/icons/logo-1.svg'
							alt=''
						/>
					</div>
					<div className='col-md-12' style={{height: '71vh'}}>
						<div className='d-block'>Login to Enterprise Account</div>
						<form className='mx-auto w-55'>
							<Input
								type='id'
								className='font-regular form-control my-2'
								placeholder='User ID'
								onChange={(e) => {
									console.log(e.target.value)
									setidfromlogin(e.target.value)
								}}
							/>
							<Input
								className='font-regular form-control my-2'
								placeholder='Password'
								id='standard-adornment-password'
								onChange={(e) => {
									setpassfromlogin(e.target.value)
								}}
								// endAdornment={
								// 	<InputAdornment position='end'>
								// 		<IconButton
								// 			aria-label='toggle password visibility'
								// 			onClick={(e) => {
								// 				this.setState({
								// 					showPassword: !this.state.showPassword,
								// 				})
								// 			}}>
								// 			{this.state.showPassword ? (
								// 				<Visibility className='font-regular' />
								// 			) : (
								// 				<VisibilityOff className='font-regular' />
								// 			)}
								// 		</IconButton>
								// 	</InputAdornment>
								// }
							/>
							<button
								className='btn btn-primary mt-3 w-100'
								type='button'
								onClick={(e) => {
									matchauth();
								}}>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		)
							}
