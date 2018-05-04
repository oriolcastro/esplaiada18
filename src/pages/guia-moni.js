import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import {
  Section,
  Container,
  Box,
  Tag,
  Icon,
  Columns,
  Column,
  Title,
  Content,
  Subtitle,
  Button,
} from 'bloomer'

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
            <Title isSize="4">Telefons de contacte</Title>
            {data.contentfulGuiaMoniPage.contactes.map((contacte, id) => (
              <Content>
                <Button href={contacte.link} isFullWidth isColor="primary">
                  <Icon className="fa fa-phone" />
                  <p>
                    {contacte.nom} - {contacte.mobil}
                  </p>
                </Button>
              </Content>
            ))}
          </Content>

          <Content>
            <Title isSize="4">Que hem de dur a les motxilles?</Title>
            <Title isSize="6">Motxilla Esplai</Title>
            <Img sizes={data.contentfulGuiaMoniPage.motxillaEsplai.sizes} />
            <Title isSize="6">Motxilla Individual</Title>
            <Img sizes={data.contentfulGuiaMoniPage.motxillaIndividual.sizes} />
          </Content>

          <Title isSize="4">Incidències més comunes i com afrontar-les</Title>
          {data.contentfulGuiaMoniPage.incidencies.map((incidencia, id) => (
            <Content>
              <Box key={incidencia.id}>
                <Title isSize="5">{incidencia.tipus}</Title>
                <Content>
                  <div
                    className="has-text-justified"
                    dangerouslySetInnerHTML={{
                      __html: incidencia.procediment.childMarkdownRemark.html,
                    }}
                  />
                </Content>
              </Box>
            </Content>
          ))}
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
