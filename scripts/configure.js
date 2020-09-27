#!/usr/bin/env node
const dwebfuse = require('ddrive-fuse')

dwebfuse.configure(err => {
  if (err) return process.exit(1)
  return process.exit(0)
})
