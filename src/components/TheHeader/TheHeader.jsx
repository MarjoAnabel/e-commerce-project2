import { Link, useNavigate } from 'react-router-dom'

import { useContext } from 'react'
// import { UserContext } from '../../context/UserContext/UserState'
// import { ShoppingCartOutlined } from '@ant-design/icons'

import NavBar from '../NavBar/NavBar'
import Cart from '../Cart/Cart'
import Products from '../Products/Products'

function TheHeader() {

	const navigate = useNavigate()
	// const { token, logout } = useContext(UserContext)

	const logoutUser = () => {
		logout()

		setTimeout(() => {
			navigate('/')
		}, 2000)
	}
	const token=1
	/* return(
		<>
		<div>Hola?</div>
		{token ? (
			<>
			  <button onClick={logoutUser}>
				<Link to="/">Logout</Link>
			  </button>
			  <Link to="/profile">Profile</Link>
			  <Link to="/products">Products</Link>
			  <Link to="/cart">
				<ShoppingCartOutlined />
			  </Link>
			</>
		   ) : (
			<Link to="/">Login</Link>
		   )}
		   </>
		   
	) */
	return(
		<>
			<div className="header navbar bg-body-tertiary fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#"><div>LOGO</div></a>
					<Cart/>	
					<NavBar/>
				</div>
			</div>
			<Products/>
		</>
	)
	//  return(
	// 	<>
	// 		<div className="header">
	// 			<NavBar/>
	// 			<div>Logo</div>
	// 			{token ? (
	// 				<>
	// 					<Profile/>
	// 					<Logout/>
	// 				</>
	// 			) : (
	// 				<>
	// 					<Login/>
	// 					<SignIn/>
	// 				</>
	// 			)}
	// 			<Cart/>

	// const navigate = useNavigate()
	// const { token, logout } = useContext(UserContext)

	// const logoutUser = () => {
	// 	logout()

	// 	setTimeout(() => {
	// 		navigate('/')
	// 	}, 2000)
	// }
	
	// return(
	// 	<>
	// 		<div className="header">
	// 			<NavBar/>
	// 			<div>Logo</div>
	// 			{token ? (
	// 				<>
	// 					<Profile/>
	// 					<Logout/>
	// 				</>
	// 			) : (
	// 				<>
	// 					<Login/>
	// 					<SignIn/>
	// 				</>
	// 			)}
	// 			<Cart/>
	// 		</div>
	// 	</>
	// )		
}

export default TheHeader
