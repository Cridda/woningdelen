'use strict';

module.exports = {
    siteMetadata: {
        title: 'Woningendelen | Een woning delen met anderen kan ook makkelijk zijn',
        description:
            'Woningendelen is een bedrijf dat zich in Amsterdam heeft gevistgd om de huiszoekende mensen te helpen',
        keywords: 'woning, delen, Amsterdam, goedkoop, samen, student, consumenten',
        siteUrl: 'https://www.woningendelen.nl',
        author: {
            name: 'Chris Neven',
            url: 'https://twitter.com/chrisneven',
            email: 'c.k.neven@live.nl',
        },
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/img/`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1rem',
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1920,
                            quality: 100,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://www.woningendelen.nl',
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Woning & Delen`,
                short_name: `Woningendelen`,
                start_url: `/`,
                background_color: `#3b465a`,
                theme_color: `#f9ea1d`,
                display: `standalone`,
                icon: 'src/img/favicon.png',
            },
        },
    ],
};
