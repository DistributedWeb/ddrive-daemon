#!/usr/bin/env node
const hyperfuse = require('ddrive-fuse')

hyperfuse.configure(err => {
  if (err) return process.exit(1)
  return process.exit(0)
})
