# PS5 Web Scraper

This is small project I put together to help my friends get their pre-order of the Playstation 5 before its release date. The initial demand was crazy and people were scrambling so I built this tool to give my friends a hand. 

The code is written in typescript but is then compiled into plain javascript to deploy on gcp

## Installing / Getting started

Make sure you have node,npm and typescript installed. I developed this on a Mac so there instructions are just for Mac OS

```shell
brew install node@10 # Will install node and npm
npm install #Will install the packages you need
```


### Initial Configuration

#### Email Configuration
There's two files you need to update in order to get the emailer to work correctly.

1. In the project root directory you should add a `.env.yaml` file that includes your email address and password you will use to send your notifications. *This isn't tracked by git so you will need to create the file*
```
email=name@domain.co.uk
password=password
```
2. The config.json includes three sections that need to be updated. 
   * The urls of the sites you want to crawl. At the moment it's capable of scraping Amazon,Game & Shopto
   * The outgoing smtp settings needed to send your emails
   * The details you want to include in the email. This includes the mailing list, subject and sender


## Developing

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/ShahnurIslam/ps5_scraper
npm install
npm start #to run the scraper
npm build #Will compile the code into javascript in the directory build
```


### Deploying / Publishing

#### Local deployment
To dockerise and run the container

```shell
docker build -t ps5_scraper . #Builds the image
docker run ps5_scraper # run the scraper
```


#### Google Cloud Deployment

You can run all these commands locally to get this deployed to GCP but you'll need the gcloud sdk installed which can be done from [here](https://cloud.google.com/sdk/docs/install)

You'll then need a project setup on GCP and billing setup as well as the below enabled
* Cloud Function
* Topics
* Cloud Scheduler

Set your project in the terminal:

`gcloud config set project <project name>`

1. Create a pub/sub topic we can use to trigger the function
   `gcloud pubsub topics create scrapr`
2. Then npm deploy will deploy the scraper to google cloud function
3. You can then schedule the scraper to run at certain times. This will run eevery day at 4.40pm
    `gcloud scheduler jobs create pubsub trigger-bot --schedule= 40 16 * * *  --topic=scrapr`



## Contributing


"If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome."

If there's anything else the developer needs to know (e.g. the code style
guide), you should link it here. If there's a lot of things to take into
consideration, it is common to separate this section to its own file called
`CONTRIBUTING.md` (or similar). If so, you should say that it exists here.

## Links

Even though this information can be found inside the project on machine-readable
format like in a .json file, it's good to include a summary of most useful
links to humans using your project. You can include links like:

- Project homepage: https://github.com/ShahnurIslam/ps5_scraper
- Repository: https://github.com/ShahnurIslam/ps5_scraper
- Issue tracker: https://github.com/ShahnurIslam/ps5_scraperissues
  - In case of sensitive bugs like security vulnerabilities, please contact
    shahnurislam@hotmail.co.uk directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!



## Licensing

"The code in this project is licensed under MIT license."