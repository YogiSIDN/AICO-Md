const axios = require('axios');
const cheerio = require('cheerio');

function somoskudasai(url) {
    return axios.get(url).then(res => {
        let $ = cheerio.load(res.data);
        let data = [];
        $('article').each((i, element) => {
            let header = $(element).find('header');
            let figure = $(element).find('figure');
            let title = $(header).find('h2').text();
            let tag = $(header).find('.typ').text();
            let date = $(header).find('.db').text().trim();
            let link = $(element).find('a').attr('href');
            let img = $(figure).find('img').attr('src');

            data.push({
                title,
                tag,
                date,
                link,
                img
            });
        });

        return data;
    }).catch(error => {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    });
}

function ch(code) {
    return axios.get('https://cin.mom/v/' + code).then(res => {
        let $ = cheerio.load(res.data)
        let data = []
        const jsonString = $('script:contains("pageProps")').html();
        const jsonData = JSON.parse(jsonString.match(/\{.*\}/s)[0]);

        // MASUKAN DB
        const id = jsonData.props.pageProps.data.id
        const title = jsonData.props.pageProps.data.title
        const thumbnail = jsonData.props.pageProps.data.images.thumbnail.t
        const tag = jsonData.props.pageProps.data.tags
        const pagesUrl = jsonData.props.pageProps.data.images.pages.map(page => page.t)

        // PUSH DB
        data.push({
            id: id,
            title: {
                english: title.english,
                japanese: title.japanese,
                pretty: title.pretty
            },
            thumbnail: thumbnail,
            tag: tag,
            pages: pagesUrl
        })
        return data
    })
}

module.exports.ch = ch
module.exports.somoskudasai = somoskudasai