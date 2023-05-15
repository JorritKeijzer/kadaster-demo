# Kadaster API

## Overview

Candidates as replacement for the Kadaster API.

- Mopsus — Platform for real estate data that provides paid APIs for all our needs regarding Kadaster data, Energy, House Object data, and WOZ
- EP-online — A database for all energy labels in the NL created by the RVO and free to use that provides an API for energy labels based on address data.
- Matrixian — Another real estate data platform with an API that has Energy, House Object data, and WOZ
- Huispedia — Provides a paid API with Kadaster data, Energy, House Object data, and WOZ

# Mopsus

URL: https://altum.ai
DOCS: https://docs.altum.ai/

Mopsus (by altum.ai) is a platform for real estate data. It has an api that provides WOZ info and value, sustainability advice, Kadaster data, and other relevant data the Kadaster api provides.

The API service is quite expensive. Pay per use is 0,47EUR per credit.

## Example request

This is an example of a request for the Object data API using address data. More info in documentation [Object data API - Altum AI](https://docs.altum.ai/apis/object-data-api)

Below there is the output for the address `Vierwindenstraat 24, 1013LB, Amsterdam`.

```javascript
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
```

# EP Online - Energy labels

URL: https://ep-online.nl
DOCS: https://public.ep-online.nl/swagger/index.html

The object api doesn't get any data about the energy label - you can call another API using Mopses, but this will cost credits. Based on address data you can get the energylabel, amongst other data which may be relevant from their api.

## Example request

Below there is the output for the address `Vierwindenstraat 24, 1013LB, Amsterdam`.

```javascript
  Output: {
    gebouwklasse: 'W',
    isOpBasisVanReferentiegebouw: false,
    opnamedatum: '2021-05-25T00:00:00',
    status: 'Bestaand',
    opnametype: 'Basisopname',
    berekeningstype: 'NTA_8800:2020_w_b',
    labelLetter: 'C',
    metingGeldigTot: '2031-05-25T00:00:00',
    registratiedatum: '2021-11-24T11:54:03.597',
    postcode: '1013LB',
    huisnummer: 24,
    huisletter: '',
    huisnummertoevoeging: '',
    detailaanduiding: '',
    bagVerblijfsobjectId: '0363010000854460',
    bagPandIds: [ '0363100012171275' ],
    gebouwtype: 'Appartement',
    gebouwsubtype: 'Hoekvloer',
    isVereenvoudigdLabel: false,
    gebruiksoppervlakte: 78.7,
    energiebehoefte: 146.27,
    primaireFossieleEnergie: 213.95,
    primaireFossieleEnergieEMGForfaitair: 213.95,
    aandeelHernieuwbareEnergie: 0,
    aandeelHernieuwbareEnergieEMGForfaitair: 0,
    toJuli: 1.45,
    nettoWarmtevraagTbvEPV: 147.12,
    afschrift: true
  }
```

# Matrixian

URL: https://www.matrixian.com/
DOCS: https://www.matrixian.com/apis-documentatie/

## Example request

Below there is the output for the address `Vierwindenstraat 24, 1013LB, Amsterdam` on the "Woningdetails API". It comes with a lot of relevant data like _energy label_, number of rooms and type of room. But they do not provide an API for WOZ, on their website, and in the docs they say they provide it, but I can't find any endpoint in the docs, nor on the platform.

```javascript
Output: {
  houseNumber: 24,
  houseNumberExt: null,
  postalCode: '1013LB',
  houseLetter: null,
  buildYear: 1991,
  useSurface: 79,
  parcelSurface: 0,
  livingSurface: 75,
  otherIndoorSpace: 4,
  objectType: 'Benedenwoning',
  energyLabel: 'C',
  numberOfBathrooms: 1,
  numberOfBedrooms: 1,
  numberOfRooms: 2,
  numberOfToilets: 1,
  externalStorageSpace: 4,
  attachedOutdoorSpace: null,
  volume: 225,
  description: 'Fantastisch 3-kamer appartement van ca. 75m2 gelegen op de begane grond in het centrum van Amsterdam! OMGEVING: De woning is gelegen nabij de Zoutkeetsgracht, één van de leukste locaties van Amsterdam, met uitzicht op het Realeneiland. Je stapt de deur uit en staat midden in het stadse leven. Het openbaar vervoer is in ruime mate beschikbaar. Het Centraal Station is op circa 10 minuten lopen en diverse buslijnen brengen jou naar alle delen van de stad. Met de fiets ben jij in een mum van tijd op de populaire uitgaanspleinen. INDELING: Entree op de begane grond, badkamer met wastafel en een douche, separaat toilet met fonteintje, slaapkamer, ruime woonkamer met toegang tot het balkon en een keuken met een standaard keukenblok. Separate berging gelegen in de onderbouw. BIJZONDERHEDEN: - De woning wordt verhuurd "as is"; - Geen verhuur aan studenten!; - De servicekosten bedragen circa € 19,85 per maand; - Garantstellingen worden niet geaccepteerd; - De inkomenseis is: het (gezamenlijk) NETTO maandinkomen moet minimaal 2,5x de maandhuur bedragen. - 1500,- EUR waarborg; - De woning mag door maximaal 2 VOLWASSENEN bewoond worden (kinderen zijn welkom); - De huur is exclusief gas, water en licht; - Uittreksel bevolkingsregister is verplicht in het aanvraagdossier; - Verhuurder rekent eenmalig € 16,50 contractkosten; - Alle maten op de plattegrond zijn indicatief; - Oplevering per direct, verhuur voor minimaal een jaar. -------------------------------------------------------------------------------------------------------------------------------------------------- ENGLISH TRANSLATION: Please note our terms & conditions first! PLEASE NOTE: - The house is rented "as is"; - No students allowed; - The monthly service costs are € 19,85 each month; - No financial guarantees allowed; - Your (combined) monthly NET income has to be at least 2,5 times the rent; - 1500,- EUR as warrant; - Maximum of two adults (children are welcome); - Gas, water and electricity are excluded; - Available immediately, contract of a one year minimum; - Excerpt of population register needed for application; - All measurements on the floor plan are indicative; - The land lord charges one-time € 16,50 contract costs. !!No exceptions will be made!!'
}

```

# Huispedia

URL: https://huispedia.nl/producten/api
DOCS: NA

Huispedia provides an api for WOZ and House Object details. It seems to be used by some big banks in the NL but we'd need to contact them for a quote on API costs.
