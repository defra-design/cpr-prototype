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

  "protoVer": "v3", // Update the prototype version here. This will also change the urls e.g. /epr/v1/home
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
  "orgNation": "England",
  "orgActivity": "brandowner,importer,seller",
  "orgTurnover": "5,500,000",
  "producerType1": "yes",
  "producerType2": "yes",
  "producerType3": "no",
  "producerType4": "no",
  "producerType5": "no",
  "producerTypeSeller": "yes",
  "govGateEmail": "johnsmith@acmeorg.co.uk",
  "defraIdCompaniesHouseNumber": "01234567",
  "defraIdCompanyPhone": "01234 567899",
  "defraIdCompanyEmail": "info@acmeorg.co.uk",
  "defraIdFirstName": "John",
  "defraIdSurname": "Smith",
  "defraIdPersonalPhone": "07711223344",
  "defraIdSecurityWord": "pancakes",
  "defraIdSecurityHint": "My favourite food",
  "correspondenceAddress1": "Unit 24",
  "correspondenceAddress2": "Industrial Estate",
  "correspondenceAddress3": "",
  "correspondenceAddress4": "",
  "correspondenceAddressTown": "Sheffield",
  "correspondenceAddressCounty": "",
  "correspondenceAddressPostcode": "S12 3RP",
  "correspondencePhone": "0114 5567 890",
  "correspondenceEmail": "sheffield@acmeorg.co.uk",
  "sub1CompanyName": "Subsidiary One Ltd",
  "sub1CompanyPhone": "0113 0948 333",
  "sub1CompanyEmail": "enquiries@subsidiary.com",
  "sub2CompanyName": "Subsidiary Two Ltd",
  "sub2CompanyPhone": "01423 555 787",
  "sub2CompanyEmail": "hello@subsidiarytwo.com",
  "orgDescription": "producer,retailer",
  "reported1": "no",
  "reported2": "no",
  "reported3": "no",
  "reported4": "no",
  "reportProducer": "null",
  "reportRetailer": "null",
  "existingEpr": "no",
  "thresholdMet": "no"
}
