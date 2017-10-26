## simple docker-compose weather app

Simple dockerized weather app.

to run: `docker-compose up`

then visit  `localhost:8080`

The app requires an API key from WU https://www.wunderground.com/weather/api/

Once you obtain one, add it to the `api/Dockerfile`

### API

To run standalone:

`docker build --tag <username/api> .`

`docker run -p <host>:3000 <username>/api-test`

### Website

This is served by nginx so first build using `npm run-script build`

To run standalone:

`docker build --tag <username/bestestapp> .`

`docker run -p <host>:3000 <username/bestestapp>`


