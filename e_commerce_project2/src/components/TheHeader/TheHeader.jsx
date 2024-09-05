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

	/* return (
		<nav className="header">
			<h1>Header</h1>
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
		</nav>
	) */
	/* function MobileNav() {
		return(
			<div className="display-mobile-nav">
				<div className="mobile-nav-links">
					{isSignedIn ? (
						<UserProfile signIn={signIn} getUserData={getUserData} />
					) : (
						""
					)}
					<Link to="/">
						<p>Home</p>
					</Link>
					<Link to="/orders">
						<p>My Orders</p>
					</Link>
					<Link to="/wishlist">
						<p>Wishlist</p>
					</Link>
				</div>
				<div className="close-mobile-menu" onClick={handleMobileMenu}>
					<CloseIcon />
				</div>
		</div>
		)
	} */

		
}

export default TheHeader
