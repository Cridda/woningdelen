'use strict';

module.exports = {
    siteMetadata: {
        title: 'Woningendelen | Een woning delen met anderen kan ook makkelijk zijn',
        description: 'Woningendelen is een bedrijf dat zich in Amsterdam heeft gevistgd om de huiszoekende mensen te helpen',
        keywords: 'woning, delen, Amsterdam, goedkoop, samen, student, consumenten',
        siteUrl: 'https://woningdelen.netlify.nl',
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
              path: `${__dirname}/src/img/`
            }
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
                            maxWidth: 1140,
                            quality: 90,
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
                siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ],
};
