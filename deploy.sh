#!/usr/bin/env bash

PROJECT_NAME="person"
DROPLET_URL="167.99.251.81"

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* root@$DROPLET_URL:/var/www/$PROJECT_NAME

