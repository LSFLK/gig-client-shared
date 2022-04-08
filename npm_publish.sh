#!/bin/bash
npm run test && npm run build && npm version patch && cp package.json ./dist && cd dist/ && npm publish --access public && rm package.json