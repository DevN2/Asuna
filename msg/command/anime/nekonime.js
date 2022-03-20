/**
 * Nekonime Scrapper By @moo-d
 */
const axios = require("axios");
const cheerio = require("cheerio");

async function result() {
  return new Promise(async(resolve, reject) => {
    await axios.get("https://nekos.life")
      .then(({ data }) => {
        $ = cheerio.load(data)
        const result = {
          image: $("div.w3-modal > div > img").attr("src")
        }
        resolve(result)
      }).catch(reject)
  })
}

module.exports = { result }
