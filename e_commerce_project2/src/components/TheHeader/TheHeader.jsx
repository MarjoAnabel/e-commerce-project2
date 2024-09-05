import { Link, useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../../context/UserContext/UserState'
/* import { ShoppingCartOutlined } from '@ant-design/icons' */
import NavBar from '../NavBar/NavBar'
import Cart from '../Cart/Cart'

function TheHeader() {
	// const navigate = useNavigate()
	// const { token, logout } = useContext(UserContext)

	// const logoutUser = () => {
	// 	logout()

	// 	setTimeout(() => {
	// 		navigate('/')
	// 	}, 2000)
	// }
	return(
		<>
			<div className="header navbar bg-body-tertiary fixed-top">
				<div class="container-fluid">
					<a class="navbar-brand" href="#"><div>LOGO</div></a>
					<Cart/>	
					<NavBar/>
				</div>
			</div>
		</>
	)
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
