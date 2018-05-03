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
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
          <NavbarItem isDisplay="flex" onClick={this.closeNav}>
            <Link to="/" className="has-text-white">
              Esplaiadapp '18
            </Link>
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive}>
          <Link onClick={this.onClickNav} to="/horari">
            <NavbarItem>Horari</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/espais">
            <NavbarItem>Espais</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/equips-esplais">
            <NavbarItem>Equips d'esplais</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/cançó">
            <NavbarItem>Cançó</NavbarItem>
          </Link>
          <Link onClick={this.onClickNav} to="/guia-moni">
            <NavbarItem>Guia de la moni</NavbarItem>
          </Link>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Navigation
