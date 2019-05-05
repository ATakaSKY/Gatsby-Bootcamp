module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'Aakash Thakur'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: 'dzw5babpykmq',
                accessToken: 'v0JFamtzlIca2RRTuDcfBwErXUZTCcYKBpc-jt4WB5s',
            },
        },
        `gatsby-plugin-playground`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}