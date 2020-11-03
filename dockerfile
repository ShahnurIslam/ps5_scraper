FROM node:alpine

# Create our working directory
WORKDIR /usr/ps5_scraper

# Copy over the package.json to this directory
COPY package.json .

#Install our packages
RUN npm install

# Add the current contents of our code to this directory
ADD . /usr/ps5_scraper/

# Start the code
CMD [ "npm", "start" ]