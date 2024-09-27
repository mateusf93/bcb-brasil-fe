FROM node:20
WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g @angular/cli

CMD ["npm", "run", "serve:ssr:bcbbrasil-fe"]
