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

export const indexLayoutQuery = graphql`
    query IndexLayout {
        site {
            siteMetadata {
                title
                description
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
                            { name: 'description', content: siteMetadata.description || undefined },
                            { name: 'keywords', content: siteMetadata.description || undefined },
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
