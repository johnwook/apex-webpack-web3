# Apex webpack web3

- Demonstrate how to use [web3.js](https://github.com/ethereum/web3.js/) in [lambda](https://aws.amazon.com/lambda/) with [apex](https://github.com/apex/apex)
  - bundled with [webpack](https://webpack.js.org/)
  - typescript applied

# Usage

## install apex

- [see document](http://apex.run)

## configure apex

in `project.json`

- change `role` to that of yours
- configure aws credentials
- [see document](http://apex.run) for details

## deploy

- `apex deploy`

# Caution

- to make web3.js work, you have to build packages (`npm install`) in lambad-compatible runtime
- I did it in gitlab CI
