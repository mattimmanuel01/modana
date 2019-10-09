import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const Header = ({ siteTitle }) => (
  <>
  <style type="text/css">
    {`
    .bg-lightlight {
      -webkit-box-shadow:0 3px 3px -2px rgba(0,0,0,.2);;
      -moz-box-shadow: 0 3px 3px -2px rgba(0,0,0,.2);;
      box-shadow: 0 3px 3px -2px rgba(0,0,0,.2);
      background-color:'white'!important;
    }
    .btn {
      margin-left:10px;
      margin-right:10px;
      margin top:10px;
      margin-bottom:10px;
    } 
    .navbar-light .navbar-nav .nav-link {
      color: rgb(36, 49, 116);
      font-weight:bold;
      font-size:14px;
      }
    .btn-EnButton{
      color: #6c757d;
      border-color: #6c757d;
      border-radius:17px;
      font-size:14px;
    }
    .btn-EnButton:hover{
      color:#40a9ff;
      background-color: #fff;
      border-color: #40a9ff;
      border-radius:21px;
    }

    .btn-daftarButton{
      color: #6c757d;
      border-color: #6c757d;
      border-radius:17px;
      font-size:14px;
    }
    .btn-daftarButton:hover{
      color:#40a9ff;
      background-color: #fff;
      border-color: #40a9ff;
      border-radius:21px;
    }
    .btn-MasukButton{
      color: #6c757d;
      border-color: #6c757d;
      border-radius:17px;
      font-size:14px;
    }
    .btn-MasukButton:hover{
      color:#40a9ff;
      background-color: #fff;
      border-color: #40a9ff;
      border-radius:21px;
    }
    `}
  </style>

<Navbar bg="lightlight" expand="lg"  style={{paddingLeft:`10%`, paddingRight: `10%`,paddingTop: `10px`,paddingBottom: `10px`,}}>
  <Navbar.Brand href="#home">Modana</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Layanan" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">HR</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Payroll</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Lending</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Tentang Kami</Nav.Link>
      <Nav.Link href="#link">Pusat Bantuan</Nav.Link>
    </Nav>
    <Nav style={{paddingTop:`5px`}}>
        <Button variant="EnButton">EN</Button>
        <Button variant="daftarButton"> Daftar</Button>
        <Button variant="MasukButton">Masuk</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
  
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
