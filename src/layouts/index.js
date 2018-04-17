import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import Navigation from '../components/Navigation'
import AppFooter from '../components/Footer'

import Config from '../../meta/config'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={Config.siteTitle} />
    <Navigation />

    {children()}

    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
