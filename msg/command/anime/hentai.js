/**
 * Random hentai scraper by @moo-d
 */
let axios = require('axios')

async function result() {
  return new Promise(async (resolve, reject) => {
    await axios.get("https://nekos.life/api/v2/img/hentai")
      .then((web) => {
        img = web.data.url
        result = {
          image: img
        }
        resolve(result)
      }).catch(reject)
  })
}

module.exports = { result }
