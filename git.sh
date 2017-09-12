#!/usr/bin/env bash
echo "Start to publish..."
echo "delete pages";
rm -rf pages
echo "delete pages success";
npm run build:github
git add .
if [ $1 ]
    then
    git commit -am $1
fi
git commit -am 'gh'
git subtree pull --prefix pages yuan gh-pages
git subtree push --prefix pages yuan gh-pages
git pull yuan master
git push yuan master
echo "Success";
