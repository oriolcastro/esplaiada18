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

import Pageheader from '../components/Pageheader'

const SongPage = ({ data }) => (
  <div>
    <Pageheader title="La Cançó" subtitle="No podràs parar de cantar" />
    <Section>
      <Content>
        <Title isSize="4">{data.datoCmsSong.titol}</Title>
        <div
          className="has-text-justified"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsSong.descripcioNode.childMarkdownRemark.html,
          }}
        />
      </Content>
      <Content>
        <div className="videocontainer">
          <YouTubePlayer
            className="react-player"
            url={data.datoCmsSong.videoclip.url}
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
            href={data.datoCmsSong.fitxer.url}
            download
            target="_blank"
          >
            <Icon className="fa fa-download" />
            <p>Baixa't la cançó</p>
          </Button>
        </Column>
      </Columns>
      <Content>
        <Title isSize="6">La lletra de la cançó</Title>
        <div
          className="has-text-justified"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsSong.lletraNode.childMarkdownRemark.html,
          }}
        />
      </Content>
    </Section>
  </div>
)

export default SongPage

export const query = graphql`
  query SongQuery {
    datoCmsSong {
      titol
      descripcioNode {
        childMarkdownRemark {
          html
        }
      }
      videoclip {
        url
        title
        width
        height
        provider
        providerUid
        thumbnailUrl
      }
      lletraNode {
        childMarkdownRemark {
          html
        }
      }
      fitxer {
        url
      }
    }
  }
`
