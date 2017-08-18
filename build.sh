#!/bin/sh

rm "index.html"
rm "style.css"
rm "client.min.js"

cp "src/index.html" "./"
cp "src/style.css" "./"

echo "Building..."

exec "./node_modules/.bin/webpack"
