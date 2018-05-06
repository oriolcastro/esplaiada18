import React from 'react'
import { Container, Section, Content } from 'bloomer'

import Pageheader from '../components/Pageheader'

export default ({ data }) => (
  <div>
    <Pageheader title={data.contentfulIncidencia.tipus} />
    <Section>
      <Container>
        <Content>
          <div
            className="has-text-justified"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulIncidencia.procediment.childMarkdownRemark.html,
            }}
          />
        </Content>
      </Container>
    </Section>
  </div>
)

export const query = graphql`
  query IncidenciaPageQuery($slug: String!) {
    contentfulIncidencia(slug: { eq: $slug }) {
      tipus
      procediment {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
