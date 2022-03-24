#!/bin/bash
npm version patch
npm run build
cp package.json ./dist
cd dist/
npm publish
rm package.json