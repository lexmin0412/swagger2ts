#! /usr/bin/env node
const { gen } = require('../lib/gen')
const args = process.argv

gen(args[2])
