const Express = require('express')
const fetch = require('isomorphic-fetch')

const PORT = 3000
const HOST = '0.0.0.0'
const APIKEY  = process.env.APIKEY || 'a09ca28ba9260a47'
const app = Express()

const location = {
  latitude: 47.1585,
  longitude: 27.6014,
  name: 'Iasi, Romania',
  url: `http://api.wunderground.com/api/${APIKEY}/forecast/q/zmw:00000.133.15090.json`
}

app.get('/', (req, res) => {
  res.status(200)
})

app.use((req, res, next) => {
  const origin = req.get('origin');
  
  // TODO Add origin validation
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
})

app.use('/today', (req, res, next) => {
    const { url } = location

    const forecast = fetch(url).then((res) => res.json()
    ).then(body => {
      res.status(200).json(body.forecast.simpleforecast)
    })

})

app.get('/', (req, res) => res.end(200))

app.listen(PORT, HOST)
console.log(`API is running on http://${HOST}:${PORT}`)
// iasi romania 47.1585° N, 27.6014° E

