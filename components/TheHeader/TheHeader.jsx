import { Link } from 'react-router-dom'


function TheHeader() {

 return (
   <nav className="header">
     <h1>Header</h1>
     <Link to="/">Login</Link>
     <Link to="/profile">Profile</Link>
   </nav>
 )
}

export default TheHeader