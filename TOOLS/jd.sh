git rm -r docs
jsdoc nvmime.js -d docs
webpack
node TOOLS/npmver.js
git add .
git commit -m "docs"
npm publish
