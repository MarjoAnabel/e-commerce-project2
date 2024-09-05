import React from 'react'

function NavBar() {
  return (
    <>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">Products</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </a>
              <ul className="dropdown-menu">
               {/*  {token ? (
                  <>
                    <li><a className="dropdown-item" href="#">Account details</a></li>
                    <Profile/>
                    <li><a className="dropdown-item" href="#">Orders</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Log out</a></li>
                    <Logout/>
                  </>
                ) : (				
                  <>
                    <li><a className="dropdown-item" href="#">Log in</a></li>
                    <Login/>
                    <li><a className="dropdown-item" href="#">Sign in</a></li>
                    <SignIn/>
                  </>
                )} */}
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NavBar