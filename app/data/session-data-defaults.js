/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Update the prototype version here. This will also change the urls e.g. /epr/v1/home
  "protoVer": "v2",
  "intro1": "no",
  "intro2": "no",
  "declared": "no",
  "applied": "no",
  "paid": "no",
  "submitted": "no",
  "registered": "no",
  "reported": "no",
  "sub1": "null",
  "sub2": "null",
  "reportBrandowner": "null",
  "reportImporter": "null",
  "reportDistributor": "null",
  "reportOnlinemarketplace": "null",
  "reportSeller": "null",
  "reportServiceprovider": "null",
  "orgActivity": "brandowner,importer,seller"

}
