#!/bin/bash
npm run build

echo "-- Switching to dist branch"
git checkout dist || git checkout -b dist
git fetch
git reset --hard origin/dist

echo "-- Committing the new version"
cp -a ./dist/ .
git add .
git commit -m $(node -p -e "require('./package.json').version")
