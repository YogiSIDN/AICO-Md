const axios = require("axios")
const cheerio = require("cheerio")

const getChapter = async (url) => {
    try {
        const res = await axios.get(url);
        const $ = cheerio.load(res.data);

        const images = [];
        const title = $('#Judul h1').first().text().trim();

        $('#Baca_Komik img').each((index, element) => {
            const src = $(element).attr('src');
            images.push(src);
        });

        return {
            title: title,
            images: images
        };
    } catch (e) {
        console.error('Error:', e.message);
        throw e; // Rethrow the error to handle it at a higher level if needed
    }
};



module.exports = { getChapter }