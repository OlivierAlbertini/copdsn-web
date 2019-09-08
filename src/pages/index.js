import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Card from '../components/card/card';
import Section from '../components/section/section';
import Wave from '../components/wave';
import styled from 'styled-components';

import './index.css';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  @media (max-width: 800px) {
	grid-template-columns: repeat(1, 1fr);
  }
`
const Page = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const { edges } = data.allMarkdownRemark
  return (
    <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="Logos">
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-node.png" width="50" alt="node" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-python.png" width="50" alt="python" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-react.png" width="50" alt="react" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-sketch.png" width="50" alt="sketch" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-swift.png" width="50" alt="swift" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-xcode.png" width="50" alt="xcode" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-airflow.png" width="50" alt="airflow" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-rabbitmq.png" width="45" alt="rabbitmq" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-csharp.png" width="48" alt="csharp" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-mongodb.png" width="50" alt="mongodb" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-docker.png" width="60" alt="docker" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-elastic.png" width="40" alt="elastic" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Interviews</h2>
      <div className="CardGroup">
      {edges.map(edge => {
          const {frontmatter} = edge.node
          const slug = frontmatter.path;
          return (
            <Link key={slug} to={slug} >
            <Card
              key={slug}
              title={frontmatter.title}
              text={frontmatter.description}
              image={frontmatter.imageCardUrl || "https://s3.ca-central-1.amazonaws.com/public-images-blog/wallpaper2.jpg"} />
            </Link>
          )
        })}
      </div>
    </div>
    {/* <Section
      image="https://s3.ca-central-1.amazonaws.com/public-images-blog/wallpaper2.jpg"
      logo="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-node.png"
      title="NodeJs 8"
      text="In this section we will speak about NodeJS and his recent releases!"
    /> */}
    {/* <SectionCaption>4 articles</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup> */}
  </div>
  )
}

const Home = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  date
                  imageCardUrl
                }
              }
            }
          }
        }
      `}
      render={data => <Page data={data} />}
    />
  )
}

const Layout = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default Layout 