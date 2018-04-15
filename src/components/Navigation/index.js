import React, {Component} from 'react';
import Link from 'gatsby-link'
import { Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd } from 'bloomer'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {isActive:false};
    this.onClickNav = this.onClickNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  onClickNav() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }
  closeNav(){
    if (this.state.isActive) {
      return this.setState(prevState => ({
        isActive: !prevState.isActive
      }));
    };
    return this.setState(prevState => ({
      isActive: prevState.isActive
    }));
  }

  render() {
    return (
      <Navbar className='has-background-info'>
        <NavbarBrand className='has-text-white'>
          <NavbarItem onClick={this.closeNav}><Link to='/' className='has-text-white'>Esplaiada 2018</Link></NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav}></NavbarBurger>
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive}>
          <NavbarItem><Link onClick={this.onClickNav} to='/page-2'>Programa</Link></NavbarItem>
          <NavbarItem><Link onClick={this.onClickNav} to='/page-2'>Ubicacions</Link></NavbarItem>
          <NavbarItem><Link onClick={this.onClickNav} to='/page-2'>Cançó</Link></NavbarItem>
          <NavbarItem><Link onClick={this.onClickNav} to='/page-2'>Documentació</Link></NavbarItem>
          <NavbarItem><Link onClick={this.onClickNav} to='/page-2'>Activitats</Link></NavbarItem>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Navigation
