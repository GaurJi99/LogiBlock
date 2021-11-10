import React, { Component } from "react"
import Link from "next/link"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import loginService from "../../../../service/login-service"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from "js-cookie"

toast.configure()

export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showPassword: false,
			userid: "",
			password: "",
		}
	}
	// handleLogin = (e) => {
	// 	e.preventDefault()
	// 	e.target.disabled = true
	// 	if (!this.ValidateEmail(this.state.email)) {			
	// 		toast.error("Please enter a valid email address", {
	// 			position: toast.POSITION.TOP_CENTER,
	// 		})
	// 		e.target.disabled = false
			
	// 		return
	// 	}
	// 	if (!this.ValidatePassword(this.state.password)) {			
	// 		toast.error("Please enter a password with more than 6 characters", {
	// 			position: toast.POSITION.TOP_CENTER,
	// 		})
	// 		e.target.disabled = false
			
	// 		return
	// 	}
	// 	let data = {
	// 		email: this.state.email,
	// 		password: this.state.password,
	// 	}
	// 	loginService
	// 		.login(data)
	// 		.then(this.props.handleShow())
	// 		.then((res) => {
	// 			let data = res.data.data
	// 			let accessToken = data.access_token
	// 			toast.success("Welcome to SkillPad!", {
	// 				position: toast.POSITION.TOP_CENTER,
	// 			})
	// 			Cookies.set("token", accessToken, { expires: 1 / 2, secure: true })
	// 			this.props.onLoginCallback()
	// 		})
	// 		.catch((error) => {
	// 			this.props.handleHide()
	// 			console.log(error)
	// 			toast.error(
	// 				error?.response?.data?.message
	// 					? error.response.data.message
	// 					: "Invalid credentials",
	// 				{ position: toast.POSITION.TOP_CENTER }
	// 			)
	// 			e.target.disabled = false
	// 		})
			
			
	// }
	// ValidatePassword(password) {
	// 	return /^[a-zA-Z0-9.!#$%&'*+@/=?^_`():;,"<>{|}~-]{6,}$/.test(password)
	// }
	
	render() {
		return (
			<div className='jumbotron-fluid h-100' data-component='login'>
				<div className='column h-100 text-center'>
					<div
						className='position-absolute d-block end-0 m-3 font-color-gray z-top'
						role='button'>
						<Link href='/'>
							<CloseIcon />
						</Link>
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
								value={this.state.userid}
								onChange={(e) => {
									this.setState({ userid: e.target.value })
								}}
							/>
							<Input
								className='font-regular form-control my-2'
								placeholder='Password'
								id='standard-adornment-password'
								type={this.state.showPassword ? "text" : "password"}
								value={this.state.password}
								onChange={(e) => {
									this.setState({ password: e.target.value })
								}}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={(e) => {
												this.setState({
													showPassword: !this.state.showPassword,
												})
											}}>
											{this.state.showPassword ? (
												<Visibility className='font-regular' />
											) : (
												<VisibilityOff className='font-regular' />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
							<button
								className='btn btn-primary mt-3 w-100'
								type='button'
								onClick={(e) => {
									// add function here
								}}>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
