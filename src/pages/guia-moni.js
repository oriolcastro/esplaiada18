import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import FaPhone from 'react-icons/lib/fa/phone'

import { Section, Title, Content, Button } from 'bloomer'

import Pageheader from '../components/Pageheader'

class GuiaMoniPage extends Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <Pageheader
          title="Guia de la moni"
          subtitle="Per al bon funcionament de l'Esplaiada..."
        />
        <Section>
          <Content>
            <div
              class="has-text-justified"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulGuiaMoniPage.header.childMarkdownRemark.html,
              }}
            />
          </Content>
          <Content>
            <Title isSize="4">Acords de convivència</Title>
            <Link to="/acords-convivencia">
              <Button isColor="primary" isFullWidth>
                Consulta els acords de l'Esplaiada '18
              </Button>
            </Link>
          </Content>
          <Content>
            <Title isSize="4">Telefons de contacte</Title>
            {data.contentfulGuiaMoniPage.contactes.map((contacte, id) => (
              <Content>
                <Button href={contacte.link} isFullWidth isColor="primary">
                  <span className="my-icon-container">
                    <FaPhone height="1.25em" width="1.25em" />
                  </span>
                  <p>
                    {contacte.nom} - {contacte.mobil}
                  </p>
                </Button>
              </Content>
            ))}
          </Content>
          <Title isSize="4">Incidències més comunes i com afrontar-les</Title>
          <Content>
            <ul>
              {data.contentfulGuiaMoniPage.incidencies.map((incidencia, id) => (
                <li key={incidencia.id}>
                  <Link to={incidencia.slug}>{incidencia.tipus}</Link>
                </li>
              ))}
            </ul>
          </Content>
          <Content>
            <Title isSize="4">Que hem de dur a les motxilles?</Title>
            <Title isSize="6">Motxilla Esplai</Title>
            <Img sizes={data.contentfulGuiaMoniPage.motxillaEsplai.sizes} />
            <Title isSize="6">Motxilla Individual</Title>
            <Img sizes={data.contentfulGuiaMoniPage.motxillaIndividual.sizes} />
          </Content>
        </Section>
      </div>
    )
  }
}

export default GuiaMoniPage

export const query = graphql`
  query GuiaMoniQuery {
    contentfulGuiaMoniPage {
      header {
        childMarkdownRemark {
          html
        }
      }
      incidencies {
        tipus
        slug
        procediment {
          childMarkdownRemark {
            html
          }
        }
      }
      contactes {
        nom
        mobil
        link
      }
      motxillaEsplai {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
      motxillaIndividual {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`
