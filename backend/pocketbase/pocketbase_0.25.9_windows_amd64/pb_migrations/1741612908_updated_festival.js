/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1160949648")

  // update collection data
  unmarshal({
    "name": "film"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1160949648")

  // update collection data
  unmarshal({
    "name": "festival"
  }, collection)

  return app.save(collection)
})
