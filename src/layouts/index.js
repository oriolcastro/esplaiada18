import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './all.sass'

import Navigation from '../components/Navigation'
import AppFooter from '../components/Footer'

import Config from '../../meta/config'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{Config.siteTitle}</title>
      <meta name="description" content={Config.siteDescription} />
    </Helmet>
    <Navigation />

    {children()}

    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
