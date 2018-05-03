import React from 'react'

import { Section, Content } from 'bloomer'

import Pageheader from '../components/Pageheader'

const AcordsPage = ({ data }) => (
  <div>
    <Pageheader
      title="Acords de convivència"
      subtitle="Per una bona Esplaiada"
    />
    <Section>
      <Content>
        <div
          className="has-text-justified"
          dangerouslySetInnerHTML={{
            __html: data.contentfulAcordsPage.acords.childMarkdownRemark.html,
          }}
        />
      </Content>
    </Section>
  </div>
)

export default AcordsPage

export const query = graphql`
  query AcordsQuery {
    contentfulAcordsPage {
      acords {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
