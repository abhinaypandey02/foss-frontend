
import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet"
import {useLocation} from "@reach/router"

export default function SEO(props: { title?: string, description?: string}) {
    const {pathname} = useLocation()
    const {site} = useStaticQuery(query);
    const {
        defaultTitle, defaultDescription, siteUrl,
    } = site.siteMetadata
    const seo = {
        title: props.title || defaultTitle,
        description: props.description || defaultDescription,
        url: `${siteUrl}${pathname}`,
    }
    return <Helmet title={seo.title} htmlAttributes={{
        lang: 'en',
    }}>
        <meta name="description" content={seo.description}/>
        {seo.url && <meta property="og:url" content={seo.url}/>}
        {seo.title && <meta property="og:title" content={seo.title}/>}
        {seo.description && (<meta property="og:description" content={seo.description}/>)}
        <meta name="keywords" content="FOSS, FOSS Weekend, IIITL, Open source"/>
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.position" content="26.78586;81.032656" />
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="7 days"/>
        <meta charSet="UTF-8"/>
    </Helmet>
}
const query = graphql`
query {
        site
        {
            siteMetadata
            {
                defaultTitle: title
                defaultDescription: description
                siteUrl
            }
        }
    }
`
