const Discord = require('discord.js');

const feed = document.getElementById('feed')
const aboutCurrentDev = document.getElementById('about-current-dev')
const modal = document.getElementById('modal')

fetch('https://newsdata.io/api/1/news?apikey=pub_37020dad134a463f0666e9f1a5eba6e8b2a34&q=coding%20%20AND%20computer&language=en&category=technology')
.then(res => res.json())
.then(data => {
    const articles = data.results.map(article => {
        return (
        `<a href=${article.link} target="_blank">
            <h4>${article.title}</h4>
        </a>`
        )
    })
    feed.innerHTML += articles.join('')
})



