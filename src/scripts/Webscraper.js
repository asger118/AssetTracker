const axios = require("axios")
const cheerio = require("cheerio")
const { response } = require("express")
const express = require("express")
const PORT = 3000
let ticker = "JYSK";
let market ="CPH";
let url = "https://www.google.com/finance/quote/"+ ticker + ":" + market;

const app = express()

setInterval(GetTLSAPrice, 10000)
function GetTLSAPrice() {
    axios(url).then(response =>{ 
        const html = response.data
        const $ = cheerio.load(html)
        const prices = []
        $(".YMlKec.fxKbKc", html).each(function() {
            const price = $(this).text()
            const url = $(this).find("div").attr("class")
            prices.push({price, url})
        })
        console.log(prices[0].price);
    }).catch(err => console.log(err))
}



