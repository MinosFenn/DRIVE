FROM node:16.14.0

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install
ADD . /code



RUN npm run build 
CMD npm start
#CMD ["node", "src/server.js"]
