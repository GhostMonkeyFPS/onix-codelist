import {serverQueryContent} from '#content/server'
import {SitemapStream, streamToPromise} from 'sitemap'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {

    const docs = await serverQueryContent(event).find()
    const sitemap = new SitemapStream({
        hostname:  (runtimeConfig.app.cdnURL.length ? runtimeConfig.app.cdnURL : 'https://localhost/').replace(/\/$/gm, '') + '/'
    })

    sitemap.write({
        url: '',
        changefreq: 'weekly'
    })

    for (const doc of docs) {
        sitemap.write({
            url: doc._path.replace(/^\//gm, '') + '/',
            changefreq: 'weekly'
        })
    }
    sitemap.end()

    return streamToPromise(sitemap)
})
