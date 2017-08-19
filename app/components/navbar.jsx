import React from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

var navbar = {
  backgroundColor: '#f5f5f5'
}

export default class ZNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render () {
    return (
      <Navbar color='faded' light toggleable style={navbar}>
        <NavbarToggler right onClick={this.toggleNavbar} />
        <NavbarBrand href='/'>
          <img src="https://myhush.org/favicon.ico" height={42} />&nbsp;myhushwallet.io
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/faq.html'>
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/guide.html'>
                GETTING STARTED
              </NavLink>
            </NavItem>                       
          </Nav>
        </Collapse>
      </Navbar>  
    )
  }
}
