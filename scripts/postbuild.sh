#!/bin/bash

cd dist
rm index.html
rm favicon.ico
mv images/* .
rm -r images
