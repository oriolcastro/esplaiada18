import React from 'react'
import Link from 'gatsby-link'
import YouTubePlayer from 'react-player/lib/players/YouTube'

import {
  Section,
  Container,
  Box,
  Tag,
  Icon,
  Columns,
  Column,
  Title,
  Button,
  Content,
} from 'bloomer'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Pageheader from '../components/Pageheader'

const SongPage = ({ data }) => (
  <div>
    <Pageheader title="La Cançó" subtitle="No podràs parar de cantar" />
    <Section>
      <Content>
        <Title isSize="4">{data.contentfulSong.titol}</Title>
        <div
          className="has-text-justified"
          dangerouslySetInnerHTML={{
            __html: data.contentfulSong.descripcio.childMarkdownRemark.html,
          }}
        />
      </Content>
      <Content>
        <div className="videocontainer">
          <YouTubePlayer
            className="react-player"
            url={data.contentfulSong.videoclip}
            loop="true"
            width="100%"
            height="100%"
            controls="true"
            config={{
              youtube: {
                playerVars: { showinfo: 0, controls: 0 },
              },
            }}
          />
        </div>
      </Content>
      <Columns isCentered isMobile>
        <Column isSize="1/2">
          <Button
            isColor="primary"
            href={data.contentfulSong.fitxer.file.url}
            download
            target="_blank"
          >
            <Icon className="fa fa-download" />
            <p>Baixa't la cançó</p>
          </Button>
        </Column>
      </Columns>
      <Content>
        <OutboundLink
          href="https://www.ailas.cat/"
          target="_blank"
          rel="noopener"
        >
          <p>Coneix al grup d'animació autor de la canço de l'Esplaiada</p>
        </OutboundLink>
      </Content>
      <Content>
        <Title isSize="5">La lletra de la cançó</Title>
        <div
          className="has-text-justified"
          dangerouslySetInnerHTML={{
            __html: data.contentfulSong.lletra.childMarkdownRemark.html,
          }}
        />
      </Content>
    </Section>
  </div>
)

export default SongPage

export const query = graphql`
  query SongQuery {
    contentfulSong {
      titol
      descripcio {
        childMarkdownRemark {
          html
        }
      }
      videoclip
      lletra {
        childMarkdownRemark {
          html
        }
      }
      fitxer {
        file {
          url
        }
      }
    }
  }
`
