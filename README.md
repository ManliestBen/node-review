# node-review
## Setup instructions:
### Navigate to your code directory
### Use the express generator to create app scaffolding:
```
express -e node-review
```
### Navigate inside the directory and install node modules:
```
cd node-review
npm i
```
### If you want to pull code as I push to my repository, initialize the directory as a git and add my repository as a stream:
```
git init
git remote add origin https://github.com/ManliestBen/node-review.git
```
### This will allow you to sync your code by typing:
```
git fetch --all
git reset --hard origin/master
```