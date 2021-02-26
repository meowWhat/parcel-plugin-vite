# Start

```bash
  yarn add parcel-plugin-vite --dev
```
# Role

- parcel-plugin-vite will insert declaration expression in the bundled file header
- parcel-plugin-vite will be found to execute automatically, you just need to install them ！

# Example

- in 

```javascript
// someting bundled content 
```
- out

```javascript
var require
var parcelRequire
// someting bundled content
```