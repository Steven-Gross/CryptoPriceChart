const url = 'https://api.coincap.io/v2/assets'

fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let currency0Price = Math.round(data.data[0].priceUsd)
    let currency0Symbol = data.data[0].symbol
    let currency1Price = Math.round(data.data[1].priceUsd)
    let currency1Symbol = data.data[1].symbol
    let currency2Price = Math.round(data.data[2].priceUsd)
    let currency2Symbol = data.data[2].symbol
    document.querySelector('.currency0').innerText = `${currency0Symbol} $${currency0Price}`
    document.querySelector('.currency1').innerText = `${currency1Symbol} $${currency1Price}`
    document.querySelector('.currency2').innerText = `${currency2Symbol} $${currency2Price}`
    console.log(data)

  })
  .catch(err => {
    console.log(`error ${err}`)
  });

