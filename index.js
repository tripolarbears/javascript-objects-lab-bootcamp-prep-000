var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, key)
}


function destructivelyDeleteFromObjectByKey(Object, key) {
  delete Object.key;
  return Object;
}