import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'

import './all.sass'

import Navigation from '../components/Navigation'
import AppFooter from '../components/Footer'
import AnalyticsComponent from '../components/AnalyticsComponent'

import Config from '../../meta/config'

const TemplateWrapper = ({ children }) => (
  <div className="my-site">
    <Helmet>
      <title>{Config.siteTitle}</title>
      <meta name="description" content={Config.siteDescription} />
      <meta name="keywords" content="Esplai, Esplac, Lleure" />
      <meta name="msapplication-TileColor" content="#00A2A7" />
      <meta name="theme-color" content="#00A2A7" />
      <meta property="og:locale" content="ca_ES" />
      <meta property="og:image" content="/img/og-image.jpg" />
      <meta property="og:image:height" content="301" />
      <meta property="og:image:width" content="576" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={Config.siteDescription} />
      <meta property="og:title" content={Config.siteTitle} />
      <meta property="og:url" content={Config.siteUrl} />
      <meta name="twitter:card" content="img/og-image.jpg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('/icons/apple-touch-icon.png')}
      />
    </Helmet>
    <Navigation />
    <div className="my-site-content">{children()}</div>

    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
