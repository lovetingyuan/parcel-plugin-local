# parcel-plugin-local
use local js file as parcel plugin

### install
`npm install parcel-plugin-local -D`
or
`yarn add parcel-plugin-local -D`

### usage
place local parcel plugin file in workspace named with `parcel-plugin.js`.

```javascript
// eg: parcel-plugin.js
module.exports = function (bundler) {
  // ...
}
```
or
you can configure local parcel plugin file path with field `localparcelplugin` in `package.json`

```javascript
// eg: package.json
{
  "name": "your-application",
  "version": "1.0.0",
  "localparcelplugin": "./plugins/localplugin.js"
}
```

### What if I want to use a single file as both plugin and asset transformer?
Here is a trick...
```javascript
class AnyExtAsset extends Asset { /* ... */ }
module.exports = function (bundler) {
  if (typeof bundler === 'object') {
    bundler.addAssetType('anyext', __filename)
  } else {
    return new AnyExtAsset(...arguments)
  }
}

```
