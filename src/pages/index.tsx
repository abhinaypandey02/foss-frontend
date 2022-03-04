import * as React from "react"
import {useEffect, useState} from "react";
import {getLeaderboard} from "../backend/endpoint";
import "./index.scss";
import {graphql, useStaticQuery} from "gatsby";
import BackgroundImage from 'gatsby-background-image'
import SEO from "../components/SEO";
const IndexPage = () => {
    const [standings, setStandings] = useState<{
        [key: string]: number
    }>({});

    useEffect(() => {
        getLeaderboard().then(result=>setStandings(result));

    }, [])

    const data = useStaticQuery(graphql`
        query MyQuery {
            allImageSharp(filter: {fluid: {originalName: {eq: "bg.jpg"}}}) {
                edges {
                    node {
                        fluid(quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        }   
    `)

    const imageData = data.allImageSharp.edges[0].node.fluid;

    return (<BackgroundImage fluid={imageData} id={"main-container"}>
        <SEO/>
        <div className="headerContainer">
            <h2>IIITL FOSS Weekend</h2>
            <h4>Leaderboard</h4>
        </div>

        <div className="round">
            <div id="table-container">
                <table>
                    <tr id="header-tr">
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    {Object.keys(standings).map((k, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{k}</td>
                        <td>{standings[k]}</td>
                    </tr>)}
                </table>
            </div>
        </div>


        </BackgroundImage>)
}

export default IndexPage
