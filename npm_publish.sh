#!/bin/bash
cp package.json ./dist
cd dist/
npm publish
rm package.json