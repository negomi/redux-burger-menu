#!/bin/bash
echo "-- Building docs files to dist directory"
rm -rf dist
NODE_ENV=production webpack --config webpack.production.config.js --progress -p

echo "-- Copying additional files to dist directory"
cp docs/index.html dist
