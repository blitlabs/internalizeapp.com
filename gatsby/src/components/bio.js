/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <a href="https://apps.apple.com/app/internalize/id6446457429" title="Internalize App" target="_blank">
      <div className="bio">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/app-screen.png"
          width={320}
          quality={95}
          alt="App Icon"
        />
        <p>
          <strong>Internalize</strong> is the app that helps you focus on what's within your control and achieve the impossible.
          <a className="btn btn-primary" role="button">Download Internalize</a>
        </p>
      </div>
    </a>
  )
}

export default Bio
