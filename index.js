const fs = require('fs')

module.exports = function (bundler) {
  bundler.on('bundled', async bundle => {
    const { name } = bundle
    fs.writeFileSync(
      name,
      'var require\nvar parcelRequire\n' + fs.readFileSync(name)
    )
  })
}
