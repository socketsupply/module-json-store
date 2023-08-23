import fs from 'socket:fs'

let dataCache
const storeFilePath = './.store.json'

const publicAPI = {
  getItem, setItem, removeItem, clear
}
export default publicAPI
export {
  getItem, setItem, removeItem, clear
}

readStore()

function getItem(name) {
  return dataCache[name]
}

function setItem(name, value) {
  dataCache[name] = value
  return writeStore() && value
}

function removeItem(name) {
  delete dataCache[name]
  return writeStore()
}

function clear() {
  dataCache = {}
  return writeStore()
}

function readStore() {
  try {
    const contents = fs.readFileSync(storeFilePath,'utf-8')
    dataCache = JSON.parse(contents)
  } catch {
    clear()
  }
}

function writeStore() {
  try {
    fs.writeFileSync(
      storeFilePath,
      JSON.stringify(dataCache),
      'utf-8'
    )
    return true
  } catch {
    dataCache = {}
    return false
  }
}
