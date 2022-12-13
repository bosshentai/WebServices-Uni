#!/bin/bash

npm install

npx sequelize-cli db:drop
npx seuqlize-cli db:create


npm run dev