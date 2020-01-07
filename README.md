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

