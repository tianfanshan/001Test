import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, } from 'react'
import { UserContext } from '../../context/UserContext/UserStates'

const Header = () => {

    const { token,logout } = useContext(UserContext)

    const logoutUser = () => {
        logout()
    }

  return (
    <nav className="nav">
   
    <div>
      {token ? (
        <>
          <span onClick={logoutUser}>
            <Link to="/">Logout</Link>
          </span>
          <span>
            <Link to="/profile">Profile</Link>
          </span>

        </>
      ) : (
      <>
        <span>

          <Link to="/register">Register</Link>
        </span>
        <span>
          <Link to="/">Login</Link>
        </span>
        <span>
            <Link to='/products'>Products</Link>
          </span>
      </>
      )}
    </div>
  </nav>
  )
}

export default Header