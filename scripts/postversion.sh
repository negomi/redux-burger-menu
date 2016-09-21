#!/bin/bash
npm run build

echo "-- Committing the new version"
git add .
git commit -m $(node -p -e "'v' + require('./package.json').version")

echo "-- Pushing to gh-pages"
# git subtree push --prefix dist origin gh-pages
