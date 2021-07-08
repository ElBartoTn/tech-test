FROM node:12.18.3
LABEL version="1.0"
LABEL description="This is the base docker image for the react app "
LABEL maintainer = ["zied.guettari@gmail.com"]
RUN mkdir /srv/example
WORKDIR /srv/example
COPY package.json ./
RUN npm install --silent  
COPY . .
CMD ["npm", "start"]