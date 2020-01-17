const path = require('path')
const fs = require('fs')
const name = require('./package.json').name

const workspace = process.cwd()

const err = msg => new Error(`[${name}]: ${msg}.`)

let localPluginPath

const defaultPluginPath = path.join(workspace, 'parcel-plugin.js')

let workspacepkg

try {
  workspacepkg = require(path.join(workspace, 'package.json'))
} catch (err) {}

if (workspacepkg && typeof workspacepkg.localparcelplugin === 'string') {
  localPluginPath = path.join(workspace, workspacepkg.localparcelplugin)
}

module.exports = function localPlugin (bundler) {
  if (localPluginPath) { // user assign
    try {
      require.resolve(localPluginPath)
    } catch (e) {
      throw err(`${localPluginPath} is invalid, ${e.message}`)
    }
  } else {
    if (!fs.existsSync(defaultPluginPath)) return
    localPluginPath = defaultPluginPath
  }

  const localPlugin = require(localPluginPath)
  if (typeof localPlugin !== 'function') {
    throw err(`${localPluginPath} must export a function as default value`)
  }
  return localPlugin(bundler)
}
