import React, { Component } from 'react'
import Link from 'gatsby-link'
import FaCloudDownload from 'react-icons/lib/fa/cloud-download'

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
    this.state = { navOpen: false, installIcon: true }
    this.onClickNav = this.onClickNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.toogleInstallIcon = this.toogleInstallIcon.bind(this)
  }

  onClickNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }
  closeNav() {
    if (this.state.navOpen) {
      return this.setState(prevState => ({
        navOpen: !prevState.navOpen,
      }))
    }
    return this.setState(prevState => ({
      navOpen: prevState.navOpen,
    }))
  }
  toogleInstallIcon() {
    this.setState(prevState => ({
      installIcon: !prevState.installIcon,
    }))
  }

  componentDidMount() {
    let deferredPrompt

    window.addEventListener('beforeinstallprompt', e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      this.toogleInstallIcon()
    })

    btnInstall.addEventListener('click', e => {
      // hide our user interface that shows our A2HS button
      this.toogleInstallIcon() // Show the prompt
      deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
        } else {
          console.log('User dismissed the A2HS prompt')
        }
        deferredPrompt = null
      })
    })
  }

  render() {
    return (
      <Navbar className="has-background-primary is-fixed-top">
        <NavbarBrand className="has-text-white">
          <NavbarBurger
            isActive={this.state.navOpen}
            onClick={this.onClickNav}
          />
          <NavbarItem onClick={this.closeNav} className="my-navbar-title">
            <Link to="/" className="has-text-white">
              Esplaiadapp '18
            </Link>
          </NavbarItem>
          <NavbarItem id="btnInstall" isHidden={this.state.installIcon}>
            <FaCloudDownload width="1.5em" height="1.5em" fill="white" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu isActive={this.state.navOpen}>
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
