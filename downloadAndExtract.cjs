const downloadClient = require('minecraft-wrap').downloadClient
const extract = require('extract-zip')
const fs = require('fs-extra')

function getMinecraftFiles (minecraftVersion, temporaryDir, cb) {
  const jarPath = temporaryDir + '/' + minecraftVersion + '.jar'
  const unzippedFilesDir = temporaryDir + '/' + minecraftVersion
  fs.mkdirpSync(unzippedFilesDir)
  downloadClient(minecraftVersion, jarPath, async (err) => {
    if (err) {
      cb(err)
      return
    }
    try {
      await extract(jarPath, { dir: fs.realpathSync(unzippedFilesDir) })
      cb(null, unzippedFilesDir)
    } catch (err) {
      cb(err)
    }
  })
}

getMinecraftFiles("1.20.1", "./_minecraft", console.log);
