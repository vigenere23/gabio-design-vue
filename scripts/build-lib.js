/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const process = require('child_process')

const rootDir = path.join(__dirname, '../')
const libPath = path.join(rootDir, './lib')
const styleSrcPath = path.join(rootDir, './src/styles')
const styleOutPath = path.join(rootDir, './lib/styles')

fs.rmdir(libPath, () => {
  process.exec('tsc -p src')
  process.exec(`cp -r ${styleSrcPath} ${styleOutPath}`)
})
