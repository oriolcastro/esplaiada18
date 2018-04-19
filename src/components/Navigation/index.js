import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
} from 'bloomer'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
    this.onClickNav = this.onClickNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  onClickNav() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }
  closeNav() {
    if (this.state.isActive) {
      return this.setState(prevState => ({
        isActive: !prevState.isActive,
      }))
    }
    return this.setState(prevState => ({
      isActive: prevState.isActive,
    }))
  }

  render() {
    return (
      <Navbar className="has-background-primary is-fixed-top">
        <NavbarBrand className="has-text-white">
          <NavbarItem onClick={this.closeNav}>
            <Link to="/" className="has-text-white">
              Esplaiada 2018
            </Link>
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive}>
          <Link onClick={this.onClickNav} to="/horari">
            <NavbarItem>Horari</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/mapa">
            <NavbarItem>Mapa</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/activitats">
            <NavbarItem>Activitats</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/cançó">
            <NavbarItem>Cançó</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/documentació">
            <NavbarItem>Documentació</NavbarItem>
          </Link>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Navigation
