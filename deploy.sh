#!/usr/bin/env sh

set -e

npm run build

cd dist

git add -A
git commit -m "New Deployment"
git push -f https://github.com/Augustinh987/portfolio.git main:gh-pages

cd -