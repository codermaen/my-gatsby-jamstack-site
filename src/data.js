const axios = require("axios");
const countries = require("./countries.json");


async function getNews(country) {
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${'45512bf52fe44ac888e6bfb092b69da0'}&pageSize=5`);
        return {
            "country": country,
            "articles": response.data.articles
        }
    } catch (error) {
        console.error(error);
    }
}


module.exports = async function () {

    var newsPromises = countries.map(getNews);
    return Promise.all(newsPromises).then(newsObjects => {
        console.log('newsObjects:', newsObjects);
        return [].concat.apply([], newsObjects);
    });

};