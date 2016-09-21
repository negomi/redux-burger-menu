#!/bin/bash
npm run build

echo "-- Committing the new version"
git add .
git commit -m $(node -p -e "require('./package.json').version")

echo "-- Pushing to gh-pages"
git subtree push --prefix dist origin gh-pages

echo "-- Pushing to master"
git push origin master

echo "-- Publishing on npm"
npm publish
