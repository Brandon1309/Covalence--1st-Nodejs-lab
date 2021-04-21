const requestPromise = require("request-promise")
const path = require("path")
const fs = require("fs");
const request = require("request");


let dataPath = path.join(__dirname, "../data.json");
// https://reddit.com/r/popular.json

var options = {
  uri: "https://reddit.com/r/popular.json",
  headers: {
    UserAgent: "Request-Promise"
  },
  json: true
};

let extractedArticles = [];

requestPromise(options)
  .then((data) => {
    for (var i = 0; i < data.data.children.length; i++) {
      const articles = {
        "title": data.data.children[i].data.title,
        "url": data.data.children[i].data.url_overridden_by_dest,
        "author": data.data.children[i].data.author_fullname
      }

      extractedArticles.push(articles)

    }
    console.log(extractedArticles)

    fs.writeFile("./popular-articles.json", JSON.stringify(extractedArticles), (err) => {
      if (err) {
        console.log(error);
      } else {
        console.log("output saved to /popular-articles.json");
      }
    })
  })
  .catch((err) => {
    console.log(err)
  })