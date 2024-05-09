const url = 'https://api.coincap.io/v2/assets'

fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let btcPrice = Math.round(data.data[0].priceUsd)
    let ethPrice = Math.round(data.data[1].priceUsd)
    document.querySelector('.bitcoin').innerText = `BTC $${btcPrice}`
    document.querySelector('.ethereum').innerText = `ETH $${ethPrice}`



    console.log(data)

  })
  .catch(err => {
    console.log(`error ${err}`)
  });

