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
<!-- 
![Logo of the project](https://raw.githubusercontent.com/jehna/readme-best-practices/master/sample-logo.png) -->

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

Some projects require initial configuration (e.g. access tokens or keys, `npm i`).
This is the section where you would document those requirements.

## Developing

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/awesome-project.git
cd awesome-project/
packagemanager install
```

And state what happens step-by-step.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing

In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy awesome-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Features

What's all the bells and whistles this project can perform?
* What's the main functionality
* You can also do another thing
* If you get really randy, you can even do this

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

#### Argument 1
Type: `String`  
Default: `'default value'`

State what an argument does and how you can use it. If needed, you can provide
an example below.

Example:
```bash
awesome-project "Some other value"  # Prints "You're nailing this readme!"
```


## Contributing

When you publish something open source, one of the greatest motivations is that
anyone can just jump in and start contributing to your project.

These paragraphs are meant to welcome those kind souls to feel that they are
needed. You should state something like:

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