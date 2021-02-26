const fs = require('fs')
const readline = require('readline')

module.exports = function (bundler) {
  bundler.on('bundled', async bundle => {
    const { name } = bundle
    const fileSteram = fs.createReadStream(name)
    const r1 = readline.createInterface({
      input: fileSteram,
      crlfDelay: Infinity
    })
    const result = []
    let isHeader = false
    for await (const line of r1) {
      if (isHeader === false) {
        if (line.length > 0 && line[0] !== '/') {
          isHeader = true
          result.push('var require', 'var parcelRequire')
        }
      }
      result.push(line)
    }
    fs.writeFileSync(
      name,
      result.join('\n')
    )
  })
}
