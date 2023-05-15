# Kadaster Demo

Because of legal reasons we cannot use the Kadaster API. So we need to use a third party one that satisfies are needs.

# Mopsus

Mopsus is a platform for real estate data. It has an api that has WOZ info, sustainability advice, Kadaster data, and other relevant data the Kadaster api provides.

The API service is quite expensive. Pay per use is 0,47EUR per credit.

## Object API

This is an example of a request for the Object data API

More info([Object data API - Altum AI](https://docs.altum.ai/apis/object-data-api))

```json
Data {
  Output: {
    BagID: '0363010000854460',
    PostCode: '1013LB',
    HouseNumber: 24,
    HouseAddition: null,
    ValuationDate: 20230513,
    City: 'Amsterdam',
    Street: 'Vierwindenstraat',
    HouseTypeGeneric: 'Bovenwoning',
    HouseTypeSpecific: null,
    TypeHouseConstruction: null,
    BuildingStatus: 'Pand in gebruik',
    InnerSurfaceArea: 75,
    OuterSurfaceArea: 1323,
    BuildYear: 1991,
    Volume: 225,
    Rooms: 2,
    NumberOfBathrooms: 1,
    GardenOrientation: null,
    GardenSize: null,
    GardenLocation: null,
    Monument: '0',
    MonumentDescription: 'Geen monument / Onbekend',
    Longitude: 4.888429478058957,
    Latitude: 52.38779455604598,
    NeighbourhoodCode: 'BU03630503',
    NeighbourhoodName: 'Westelijke eilanden',
    MunicipalityCode: 363,
    MunicipalityName: 'Amsterdam',
    Province: 'Noord-Holland',
    Description: null
  }
}
```

## Enegry label

The object api doesn't get any data about the energy label.
