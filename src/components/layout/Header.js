import styled from 'styled-components';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <NavWrapper className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link class="navbar-brand ms-3" to="#">
            <img src="/logo192.png" alt="Avatar Logo" style={{width:"40px"}} className="rounded-pill" /> 
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
    </NavWrapper>  
  )
}

const NavWrapper = styled.nav`
    .nav-pills {
      background:white;
      border-radius:5px;
      &:hover{
          background:gray;
          color:white;
      }
    }
    .nav-link {
      color:black;
      &:hover{
          color:white;
      }
    }
`

export default Header