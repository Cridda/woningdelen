import { graphql, useStaticQuery } from 'gatsby';
import 'modern-normalize';
import * as React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import LayoutMain from '../components/LayoutMain';
import LayoutRoot from '../components/LayoutRoot';
import Footer from '../components/molecules/Footer';
import { IndexLayoutQuery } from '../generated/graphql';
import '../styles/GlobalStyle';
import logo from './../img/logo.png';

export const indexLayoutQuery = graphql`
    query IndexLayout {
        indexImage: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
                original {
                    src
                }
            }
        }
        site {
            siteMetadata {
                siteUrl
                title
                description
                author {
                    email
                    name
                    url
                }
            }
        }
    }
`;

const IndexLayout: React.FC = ({ children }) => {
    const { site } = useStaticQuery<IndexLayoutQuery>(indexLayoutQuery);
    const siteMetadata = site && site.siteMetadata;

    return (
        <LayoutRoot>
            {siteMetadata && (
                <>
                    <Helmet
                        title={siteMetadata.title || undefined}
                        meta={[
                            { property: 'og:title', content: siteMetadata.title || undefined },
                            {
                                name: 'author',
                                content: siteMetadata.author
                                    ? `${siteMetadata.author.name}, ${siteMetadata.author.email}, ${siteMetadata.author.url}`
                                    : undefined,
                            },
                            { name: 'description', content: siteMetadata.description || undefined },
                            { name: 'og:description', content: siteMetadata.description || undefined },
                            { name: 'og:image', content: `${siteMetadata.siteUrl}${logo}` || undefined },
                            { name: 'keywords', content: siteMetadata.description || undefined },
                        ]}
                        link={[
                            {
                                href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,700&display=swap',
                                rel: 'stylesheet',
                            },
                        ]}
                    />
                    {siteMetadata.title && <Header title={siteMetadata.title} />}
                </>
            )}
            <LayoutMain>{children}</LayoutMain>
            <Footer />
        </LayoutRoot>
    );
};

export default IndexLayout;
