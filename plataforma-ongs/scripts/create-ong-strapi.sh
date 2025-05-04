#!/bin/bash
ONG_NAME=$1
cp -r ../strapi-template ../strapi-$ONG_NAME
cd ../strapi-$ONG_NAME
cp .env.example .env
# Edite .env para nome do banco, usuário, porta, etc.
yarn install
yarn develop
