To compile code into build
tsc

To run code we use `npm start`

To build the docker container we use 
`docker build -t ps5_scraper .`

To run we use 
`docker run --env-file .env node_test5`

Gcloud deployment
`tsc`
`cd build`
`gcloud functions deploy runBot --trigger-topic scrapr --runtime nodejs10 --env-vars-file .env.yaml`