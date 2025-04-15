# use this node version as the base image
FROM node:22

# go to the app directory
WORKDIR /app

# copy these two files if they are there 
COPY package*.json ./ 

# install the dependencies 
RUN npm install 

# copy the rest of the app into the container
COPY . .

# expose the required port 
EXPOSE 3000

# run the app
CMD ["npm", "start"]