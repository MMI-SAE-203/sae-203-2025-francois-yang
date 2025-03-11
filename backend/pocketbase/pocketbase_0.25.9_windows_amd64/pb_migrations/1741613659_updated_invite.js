/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date3467569840",
    "max": "",
    "min": "",
    "name": "date_naissance",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": true,
    "id": "date3467569840",
    "max": "",
    "min": "",
    "name": "date_naissance",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
