# SvwsOpenApi.SchuelerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSchuelerKatalogFahrschuelerart**](SchuelerApi.md#getSchuelerKatalogFahrschuelerart) | **GET** /db/{schema}/api/schueler/schueler/katalog/fahrschuelerart | Gibt den Katalog der Fahrschülerarten zurück.
[**getSchuelerKatalogFoerderschwerpunkt**](SchuelerApi.md#getSchuelerKatalogFoerderschwerpunkt) | **GET** /db/{schema}/api/schueler/schueler/katalog/foerderschwerpunkte | Gibt den Katalog der Förderschwerpunkte zurück.
[**getSchuelerListe**](SchuelerApi.md#getSchuelerListe) | **GET** /db/{schema}/api/schueler/liste | Gibt eine sortierte Übersicht von allen Schülern zurück.
[**getSchuelerStammdaten**](SchuelerApi.md#getSchuelerStammdaten) | **GET** /db/{schema}/api/schueler/{id}/stammdaten | Liefert zu der ID des Schülers die zugehörigen Stammdaten.
[**setSchuelerAlleVornamen**](SchuelerApi.md#setSchuelerAlleVornamen) | **PUT** /db/{schema}/api/schueler/{id}/alleVornamen | Schreibt alle Vornamen des Schülers mit der angebebenen ID.
[**setSchuelerAnmeldedatum**](SchuelerApi.md#setSchuelerAnmeldedatum) | **PUT** /db/{schema}/api/schueler/{id}/anmeldedatum | Schreibt das Anmeldedatum des Schülers mit der angebebenen ID.
[**setSchuelerAufnahmedatum**](SchuelerApi.md#setSchuelerAufnahmedatum) | **PUT** /db/{schema}/api/schueler/{id}/aufnahmedatum | Schreibt das Aufnahmedatum des Schülers mit der angebebenen ID.
[**setSchuelerBemerkungen**](SchuelerApi.md#setSchuelerBemerkungen) | **PUT** /db/{schema}/api/schueler/{id}/bemerkungen | Schreibt die Bemerkungen zum Schüler mit der angebebenen ID.
[**setSchuelerDruckeKonfessionAufZeugnisse**](SchuelerApi.md#setSchuelerDruckeKonfessionAufZeugnisse) | **PUT** /db/{schema}/api/schueler/{id}/drucke_konfession_auf_zeugnisse | Schreibt ob in Bezug auf den Schüler mit der angebebenen ID die Konfession auf Zeugnisse gedruckt werden soll oder nicht.
[**setSchuelerEmailPrivat**](SchuelerApi.md#setSchuelerEmailPrivat) | **PUT** /db/{schema}/api/schueler/{id}/email_privat | Schreibt die private E-Mail-Adresse des Schülers mit der angebebenen ID.
[**setSchuelerEmailSchule**](SchuelerApi.md#setSchuelerEmailSchule) | **PUT** /db/{schema}/api/schueler/{id}/email_schule | Schreibt die dienstliche E-Mail-Adresse des Schülers mit der angebebenen ID.
[**setSchuelerErhaeltMeisterBAFOEG**](SchuelerApi.md#setSchuelerErhaeltMeisterBAFOEG) | **PUT** /db/{schema}/api/schueler/{id}/erhaelt_meister_bafoeg | Schreibt ob der Schüler mit der angebebenen ID Meister-BAFöG erhält oder nicht.
[**setSchuelerErhaeltSchuelerBAFOEG**](SchuelerApi.md#setSchuelerErhaeltSchuelerBAFOEG) | **PUT** /db/{schema}/api/schueler/{id}/erhaelt_schueler_bafoeg | Schreibt ob der Schüler mit der angebebenen ID Schüler-BAFöG erhält oder nicht.
[**setSchuelerFahrschuelerArtID**](SchuelerApi.md#setSchuelerFahrschuelerArtID) | **PUT** /db/{schema}/api/schueler/{id}/fahrschueler_art_id | Schreibt die ID der Fahrschülerart des Schülers mit der angebebenen ID.
[**setSchuelerFoerderschwerpunkt2ID**](SchuelerApi.md#setSchuelerFoerderschwerpunkt2ID) | **PUT** /db/{schema}/api/schueler/{id}/foerderschwerpunkt2_id | Schreibt die ID eines zweiten Förderschwerpunktes des Schülers mit der angebebenen ID.
[**setSchuelerFoerderschwerpunktID**](SchuelerApi.md#setSchuelerFoerderschwerpunktID) | **PUT** /db/{schema}/api/schueler/{id}/foerderschwerpunkt_id | Schreibt die ID des Hauptförderschwerpunktes des Schülers mit der angebebenen ID.
[**setSchuelerFoto**](SchuelerApi.md#setSchuelerFoto) | **PUT** /db/{schema}/api/schueler/{id}/foto | Schreibt das Base64-JPG-kodierte Foto des Schülers mit der angebebenen ID.
[**setSchuelerGeburtsdatum**](SchuelerApi.md#setSchuelerGeburtsdatum) | **PUT** /db/{schema}/api/schueler/{id}/geburtsdatum | Schreibt das Geburtsdatum des Schülers mit der angebebenen ID.
[**setSchuelerGeburtsland**](SchuelerApi.md#setSchuelerGeburtsland) | **PUT** /db/{schema}/api/schueler/{id}/geburtsland | Schreibt das Geburtsland des Schülers mit der angebebenen ID.
[**setSchuelerGeburtslandMutter**](SchuelerApi.md#setSchuelerGeburtslandMutter) | **PUT** /db/{schema}/api/schueler/{id}/geburtsland_mutter | Schreibt das Geburtsland der Mutter des Schülers mit der angebebenen ID.
[**setSchuelerGeburtslandVater**](SchuelerApi.md#setSchuelerGeburtslandVater) | **PUT** /db/{schema}/api/schueler/{id}/geburtsland_vater | Schreibt das Geburtsland des Vaters des Schülers mit der angebebenen ID.
[**setSchuelerGeburtsname**](SchuelerApi.md#setSchuelerGeburtsname) | **PUT** /db/{schema}/api/schueler/{id}/geburtsname | Schreibt den Geburtsnamen des Schülers mit der angebebenen ID.
[**setSchuelerGeburtsort**](SchuelerApi.md#setSchuelerGeburtsort) | **PUT** /db/{schema}/api/schueler/{id}/geburtsort | Schreibt den Geburtsort des Schülers mit der angebebenen ID.
[**setSchuelerGeschlecht**](SchuelerApi.md#setSchuelerGeschlecht) | **PUT** /db/{schema}/api/schueler/{id}/geschlecht | Schreibt das Geschlecht des Schülers mit der angebebenen ID.
[**setSchuelerHaltestelleID**](SchuelerApi.md#setSchuelerHaltestelleID) | **PUT** /db/{schema}/api/schueler/{id}/haltestelleID | Schreibt die ID der Haltestelle, an der der Schüler mit der angebebenen ID einsteigt.
[**setSchuelerHatMasernimpfnachweis**](SchuelerApi.md#setSchuelerHatMasernimpfnachweis) | **PUT** /db/{schema}/api/schueler/{id}/hat_masernimpfnachweis | Schreibt ob der Schüler mit der angebebenen ID einen Masernimpfnachweis erbracht hat oder nicht.
[**setSchuelerHatMigrationshintergrund**](SchuelerApi.md#setSchuelerHatMigrationshintergrund) | **PUT** /db/{schema}/api/schueler/{id}/hat_migrationshintergrund | Schreibt ob bei dem Schüler mit der angebebenen ID ein Migrationshintergrund vorliegt.
[**setSchuelerIstAOSF**](SchuelerApi.md#setSchuelerIstAOSF) | **PUT** /db/{schema}/api/schueler/{id}/ist_aosf | Schreibt ob der Schüler eine sonderpädagogische Förderung nach AO-SF erhält oder nicht.
[**setSchuelerIstBerufsschulpflichtErfuellt**](SchuelerApi.md#setSchuelerIstBerufsschulpflichtErfuellt) | **PUT** /db/{schema}/api/schueler/{id}/ist_berufsschulpflicht_erfuellt | Schreibt ob der Schüler mit der angebebenen ID seine Berufsschulpflicht bereits erfüllt hat oder nicht.
[**setSchuelerIstDuplikat**](SchuelerApi.md#setSchuelerIstDuplikat) | **PUT** /db/{schema}/api/schueler/{id}/ist_duplikat | Schreibt ob es sich beim Schülerdatensatz mit der angebebenen ID um ein Duplikat handelt oder nicht.
[**setSchuelerIstLernenZieldifferent**](SchuelerApi.md#setSchuelerIstLernenZieldifferent) | **PUT** /db/{schema}/api/schueler/{id}/ist_lernen_zieldifferent | Schreibt ob der Schüler zieldifferent unterrichtet wird oder nicht.
[**setSchuelerIstSchulpflichtErfuellt**](SchuelerApi.md#setSchuelerIstSchulpflichtErfuellt) | **PUT** /db/{schema}/api/schueler/{id}/ist_schulpflicht_erfuellt | Schreibt ob der Schüler mit der angebebenen ID seine Schulpflicht bereits erfüllt hat oder nicht.
[**setSchuelerIstVolljaehrig**](SchuelerApi.md#setSchuelerIstVolljaehrig) | **PUT** /db/{schema}/api/schueler/{id}/ist_volljaehrig | Schreibt ob der Schüler mit der angebebenen ID volljährig ist oder nicht.
[**setSchuelerKeineAuskunftAnDritte**](SchuelerApi.md#setSchuelerKeineAuskunftAnDritte) | **PUT** /db/{schema}/api/schueler/{id}/keine_auskunft_an_dritte | Schreibt ob in Bezug auf den Schüler mit der angebebenen ID keine Auskunft an dritte erteilt werden darf.
[**setSchuelerNachname**](SchuelerApi.md#setSchuelerNachname) | **PUT** /db/{schema}/api/schueler/{id}/nachname | Schreibt den Nachnamen des Schülers mit der angebebenen ID.
[**setSchuelerOrtsteilID**](SchuelerApi.md#setSchuelerOrtsteilID) | **PUT** /db/{schema}/api/schueler/{id}/ortsteil_id | Schreibt die ID des Ortsteils des Wohnortes des Schülers mit der angebebenen Schüler-ID.
[**setSchuelerReligionID**](SchuelerApi.md#setSchuelerReligionID) | **PUT** /db/{schema}/api/schueler/{id}/religion_id | Schreibt die ID der Religion des Schülers mit der angebebenen ID.
[**setSchuelerReligionabmeldung**](SchuelerApi.md#setSchuelerReligionabmeldung) | **PUT** /db/{schema}/api/schueler/{id}/religionabmeldung | Schreibt das Datum der Religionsabmeldung des Schülers mit der angebebenen ID.
[**setSchuelerReligionanmeldung**](SchuelerApi.md#setSchuelerReligionanmeldung) | **PUT** /db/{schema}/api/schueler/{id}/religionanmeldung | Schreibt das Datum der Religionsanmeldung des Schülers mit der angebebenen ID.
[**setSchuelerStaatsangehoerigkeit2ID**](SchuelerApi.md#setSchuelerStaatsangehoerigkeit2ID) | **PUT** /db/{schema}/api/schueler/{id}/staatsangehoerigkeit2ID | Schreibt die ID der zweiten Staatsangehörigkeit des Schülers mit der angebebenen ID.
[**setSchuelerStaatsangehoerigkeitID**](SchuelerApi.md#setSchuelerStaatsangehoerigkeitID) | **PUT** /db/{schema}/api/schueler/{id}/staatsangehoerigkeitID | Schreibt die ID der Staatsangehörigkeit des Schülers mit der angebebenen ID.
[**setSchuelerStatus**](SchuelerApi.md#setSchuelerStatus) | **PUT** /db/{schema}/api/schueler/{id}/status | Legt den Status des Schülers mit der angebebenen ID fest.
[**setSchuelerStrasse**](SchuelerApi.md#setSchuelerStrasse) | **PUT** /db/{schema}/api/schueler/{id}/strasse | Schreibt die Strasse des Wohnortes des Schülers mit der angebebenen ID.
[**setSchuelerTelefon**](SchuelerApi.md#setSchuelerTelefon) | **PUT** /db/{schema}/api/schueler/{id}/telefon | Schreibt die Telefonnummer des Schülers mit der angebebenen ID.
[**setSchuelerTelefonMobil**](SchuelerApi.md#setSchuelerTelefonMobil) | **PUT** /db/{schema}/api/schueler/{id}/telefon_mobil | Schreibt die mobile Telefonnummer des Schülers mit der angebebenen ID.
[**setSchuelerVerkehrspracheFamilie**](SchuelerApi.md#setSchuelerVerkehrspracheFamilie) | **PUT** /db/{schema}/api/schueler/{id}/verkehrsprache_familie | Schreibt die Verkehrsprache in der Familie des Schülers mit der angebebenen ID.
[**setSchuelerVorname**](SchuelerApi.md#setSchuelerVorname) | **PUT** /db/{schema}/api/schueler/{id}/vorname | Schreibt den Vornamen des Schülers mit der angebebenen ID.
[**setSchuelerWohnortID**](SchuelerApi.md#setSchuelerWohnortID) | **PUT** /db/{schema}/api/schueler/{id}/wohnort_id | Schreibt die ID des Wohnortes des Schülers mit der angebebenen Schüler-ID.
[**setSchuelerZusatzNachname**](SchuelerApi.md#setSchuelerZusatzNachname) | **PUT** /db/{schema}/api/schueler/{id}/zusatzNachname | Schreibt den Zusatz zum Nachnamen des Schülers mit der angebebenen ID.
[**setSchuelerZuzugsjahr**](SchuelerApi.md#setSchuelerZuzugsjahr) | **PUT** /db/{schema}/api/schueler/{id}/zuzugsjahr | Schreibt das Zuzugsjahr des Schülers mit der angebebenen ID.



## getSchuelerKatalogFahrschuelerart

> [KatalogEintrag] getSchuelerKatalogFahrschuelerart(schema)

Gibt den Katalog der Fahrschülerarten zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Fahrschülerarten unter Angabe der ID, eines Kürzels und der Bezeichnung. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
apiInstance.getSchuelerKatalogFahrschuelerart(schema).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 

### Return type

[**[KatalogEintrag]**](KatalogEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSchuelerKatalogFoerderschwerpunkt

> [KatalogEintrag] getSchuelerKatalogFoerderschwerpunkt(schema)

Gibt den Katalog der Förderschwerpunkte zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Förderschwerpunkte unter Angabe der ID, eines Kürzels und der Bezeichnung. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
apiInstance.getSchuelerKatalogFoerderschwerpunkt(schema).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 

### Return type

[**[KatalogEintrag]**](KatalogEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSchuelerListe

> [SchuelerlisteEintrag] getSchuelerListe(schema)

Gibt eine sortierte Übersicht von allen Schülern zurück.

Erstellt eine Liste aller in der Datenbank vorhanden Schüler unter Angabe der ID, des Vor- und Nachnamens, der Klasse, des Jahrgangs, sein Status (z.B. aktiv), einer Sortierreihenfolge, ob sie in der Anwendung sichtbar bzw. änderbar sein sollen. Die schüler sind anhand der Klasse, des Nchnamens und des Vornamens sortiert.Es wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
apiInstance.getSchuelerListe(schema).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 

### Return type

[**[SchuelerlisteEintrag]**](SchuelerlisteEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSchuelerStammdaten

> SchuelerStammdaten getSchuelerStammdaten(schema, id)

Liefert zu der ID des Schülers die zugehörigen Stammdaten.

Liest die Stammdaten des Schülers zu der angegebenen ID aus der Datenbank und liefert diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
apiInstance.getSchuelerStammdaten(schema, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**SchuelerStammdaten**](SchuelerStammdaten.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setSchuelerAlleVornamen

> setSchuelerAlleVornamen(schema, id, body)

Schreibt alle Vornamen des Schülers mit der angebebenen ID.

Schreibt alle Vornamen des Schülers mit der angebebenen ID in die Datenbank, sofern mehrere Vornamen vorliegen. Vor dem Schreiben wird geprüft, ob der Schülers in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Alle Vornamen des Schülers
apiInstance.setSchuelerAlleVornamen(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Alle Vornamen des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerAnmeldedatum

> setSchuelerAnmeldedatum(schema, id, body)

Schreibt das Anmeldedatum des Schülers mit der angebebenen ID.

Schreibt das Anmeldedatum des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Anmeldedatum des Schülers
apiInstance.setSchuelerAnmeldedatum(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Anmeldedatum des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerAufnahmedatum

> setSchuelerAufnahmedatum(schema, id, body)

Schreibt das Aufnahmedatum des Schülers mit der angebebenen ID.

Schreibt das Aufnahmedatum des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Aufnahmedatum des Schülers
apiInstance.setSchuelerAufnahmedatum(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Aufnahmedatum des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerBemerkungen

> setSchuelerBemerkungen(schema, id, opts)

Schreibt die Bemerkungen zum Schüler mit der angebebenen ID.

Schreibt die Bemerkungen zum Schüler mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Bemerkungen zum Schüler
};
apiInstance.setSchuelerBemerkungen(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die Bemerkungen zum Schüler | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerDruckeKonfessionAufZeugnisse

> setSchuelerDruckeKonfessionAufZeugnisse(schema, id, body)

Schreibt ob in Bezug auf den Schüler mit der angebebenen ID die Konfession auf Zeugnisse gedruckt werden soll oder nicht.

Schreibt ob der Schüler mit der angebebenen ID die Konfession auf Zeugnisse gedruckt werden soll oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob in Bezug auf den Schüler die Konfession auf Zeugnisse gedruckt werden soll oder nicht.
apiInstance.setSchuelerDruckeKonfessionAufZeugnisse(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob in Bezug auf den Schüler die Konfession auf Zeugnisse gedruckt werden soll oder nicht. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerEmailPrivat

> setSchuelerEmailPrivat(schema, id, opts)

Schreibt die private E-Mail-Adresse des Schülers mit der angebebenen ID.

Schreibt die private E-Mail-Adresse des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die private E-Mail-Adresse des Schülers
};
apiInstance.setSchuelerEmailPrivat(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die private E-Mail-Adresse des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerEmailSchule

> setSchuelerEmailSchule(schema, id, opts)

Schreibt die dienstliche E-Mail-Adresse des Schülers mit der angebebenen ID.

Schreibt die dienstliche E-Mail-Adresse des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die dienstliche E-Mail-Adresse des Schülers
};
apiInstance.setSchuelerEmailSchule(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die dienstliche E-Mail-Adresse des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerErhaeltMeisterBAFOEG

> setSchuelerErhaeltMeisterBAFOEG(schema, id, body)

Schreibt ob der Schüler mit der angebebenen ID Meister-BAFöG erhält oder nicht.

Schreibt ob der Schüler mit der angebebenen ID Meister-BAFöG erhält oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schüler Meister-BAFöG erhält oder nicht.
apiInstance.setSchuelerErhaeltMeisterBAFOEG(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schüler Meister-BAFöG erhält oder nicht. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerErhaeltSchuelerBAFOEG

> setSchuelerErhaeltSchuelerBAFOEG(schema, id, body)

Schreibt ob der Schüler mit der angebebenen ID Schüler-BAFöG erhält oder nicht.

Schreibt ob der Schüler mit der angebebenen ID Schüler-BAFöG erhält oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schüler Schüler-BAFöG erhält oder nicht.
apiInstance.setSchuelerErhaeltSchuelerBAFOEG(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schüler Schüler-BAFöG erhält oder nicht. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerFahrschuelerArtID

> setSchuelerFahrschuelerArtID(schema, id, opts)

Schreibt die ID der Fahrschülerart des Schülers mit der angebebenen ID.

Schreibt die ID der Fahrschülerart des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID der Fahrschülerart des Schülers
};
apiInstance.setSchuelerFahrschuelerArtID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Number**| Die ID der Fahrschülerart des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setSchuelerFoerderschwerpunkt2ID

> setSchuelerFoerderschwerpunkt2ID(schema, id, opts)

Schreibt die ID eines zweiten Förderschwerpunktes des Schülers mit der angebebenen ID.

Schreibt die ID eines zweiten Förderschwerpunktes des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID eines zweiten Förderschwerpunktes des Schülers
};
apiInstance.setSchuelerFoerderschwerpunkt2ID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Number**| Die ID eines zweiten Förderschwerpunktes des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setSchuelerFoerderschwerpunktID

> setSchuelerFoerderschwerpunktID(schema, id, opts)

Schreibt die ID des Hauptförderschwerpunktes des Schülers mit der angebebenen ID.

Schreibt die ID des Hauptförderschwerpunktes des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID des Hauptförderschwerpunktes des Schülers
};
apiInstance.setSchuelerFoerderschwerpunktID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Number**| Die ID des Hauptförderschwerpunktes des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setSchuelerFoto

> setSchuelerFoto(schema, id, body)

Schreibt das Base64-JPG-kodierte Foto des Schülers mit der angebebenen ID.

Schreibt das Base64-JPG-kodierte Foto des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Base64-JPG-kodierte Foto des Schülers
apiInstance.setSchuelerFoto(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Base64-JPG-kodierte Foto des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerGeburtsdatum

> setSchuelerGeburtsdatum(schema, id, body)

Schreibt das Geburtsdatum des Schülers mit der angebebenen ID.

Schreibt das Geburtsdatum des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Geburtsdatum des Schülers
apiInstance.setSchuelerGeburtsdatum(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Geburtsdatum des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerGeburtsland

> setSchuelerGeburtsland(schema, id, opts)

Schreibt das Geburtsland des Schülers mit der angebebenen ID.

Schreibt das Geburtsland des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Das Geburtsland des Schülers
};
apiInstance.setSchuelerGeburtsland(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Geburtsland des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerGeburtslandMutter

> setSchuelerGeburtslandMutter(schema, id, opts)

Schreibt das Geburtsland der Mutter des Schülers mit der angebebenen ID.

Schreibt das Geburtsland der Mutter des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Das Geburtsland der Mutter des Schülers
};
apiInstance.setSchuelerGeburtslandMutter(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Geburtsland der Mutter des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerGeburtslandVater

> setSchuelerGeburtslandVater(schema, id, opts)

Schreibt das Geburtsland des Vaters des Schülers mit der angebebenen ID.

Schreibt das Geburtsland des Vaters des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Das Geburtsland des Vaters des Schülers
};
apiInstance.setSchuelerGeburtslandVater(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Geburtsland des Vaters des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerGeburtsname

> setSchuelerGeburtsname(schema, id, body)

Schreibt den Geburtsnamen des Schülers mit der angebebenen ID.

Schreibt den Geburtsnamen des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schülers in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Geburtsname des Schülers
apiInstance.setSchuelerGeburtsname(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Der Geburtsname des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerGeburtsort

> setSchuelerGeburtsort(schema, id, body)

Schreibt den Geburtsort des Schülers mit der angebebenen ID.

Schreibt den Geburtsort des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Geburtsort des Schülers
apiInstance.setSchuelerGeburtsort(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Der Geburtsort des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerGeschlecht

> setSchuelerGeschlecht(schema, id, body)

Schreibt das Geschlecht des Schülers mit der angebebenen ID.

Schreibt das Geschlecht des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Geschlecht des Schülers
apiInstance.setSchuelerGeschlecht(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Geschlecht des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerHaltestelleID

> setSchuelerHaltestelleID(schema, id, opts)

Schreibt die ID der Haltestelle, an der der Schüler mit der angebebenen ID einsteigt.

Schreibt die ID der Haltestelle, an der der Schüler mit der angebebenen ID einsteigt, in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID der Haltestelle
};
apiInstance.setSchuelerHaltestelleID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Number**| Die ID der Haltestelle | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerHatMasernimpfnachweis

> setSchuelerHatMasernimpfnachweis(schema, id, body)

Schreibt ob der Schüler mit der angebebenen ID einen Masernimpfnachweis erbracht hat oder nicht.

Schreibt ob der Schüler mit der angebebenen ID einen Masernimpfnachweis erbracht hat oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schüler einen Masernimpfnachweis erbracht hat.
apiInstance.setSchuelerHatMasernimpfnachweis(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schüler einen Masernimpfnachweis erbracht hat. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerHatMigrationshintergrund

> setSchuelerHatMigrationshintergrund(schema, id, body)

Schreibt ob bei dem Schüler mit der angebebenen ID ein Migrationshintergrund vorliegt.

Schreibt ob bei dem Schüler mit der angebebenen ID ein Migrationshintergrund vorliegt in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schüler einen Migrationshintegrund hat.
apiInstance.setSchuelerHatMigrationshintergrund(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schüler einen Migrationshintegrund hat. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerIstAOSF

> setSchuelerIstAOSF(schema, id, body)

Schreibt ob der Schüler eine sonderpädagogische Förderung nach AO-SF erhält oder nicht.

Schreibt ob der Schüler eine sonderpädagogische Förderung nach AO-SF erhält oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information zur sonderpädagogischen Fördernung nach AO-SF.
apiInstance.setSchuelerIstAOSF(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information zur sonderpädagogischen Fördernung nach AO-SF. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerIstBerufsschulpflichtErfuellt

> setSchuelerIstBerufsschulpflichtErfuellt(schema, id, body)

Schreibt ob der Schüler mit der angebebenen ID seine Berufsschulpflicht bereits erfüllt hat oder nicht.

Schreibt ob der Schüler mit der angebebenen ID seine Berufsschulpflicht bereits erfüllt hat oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schüler seine Berufsschulpflicht erfüllt hat.
apiInstance.setSchuelerIstBerufsschulpflichtErfuellt(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schüler seine Berufsschulpflicht erfüllt hat. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerIstDuplikat

> setSchuelerIstDuplikat(schema, id, body)

Schreibt ob es sich beim Schülerdatensatz mit der angebebenen ID um ein Duplikat handelt oder nicht.

Schreibt ob es sich beim Schülerdatensatz mit der angebebenen ID um ein Duplikat handelt oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schülerdatensatz ein Duplikat ist oder nicht.
apiInstance.setSchuelerIstDuplikat(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schülerdatensatz ein Duplikat ist oder nicht. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerIstLernenZieldifferent

> setSchuelerIstLernenZieldifferent(schema, id, body)

Schreibt ob der Schüler zieldifferent unterrichtet wird oder nicht.

Schreibt ob der Schüler zieldifferent unterrichtet wird oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information zum zieldifferenten Lernen.
apiInstance.setSchuelerIstLernenZieldifferent(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information zum zieldifferenten Lernen. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerIstSchulpflichtErfuellt

> setSchuelerIstSchulpflichtErfuellt(schema, id, body)

Schreibt ob der Schüler mit der angebebenen ID seine Schulpflicht bereits erfüllt hat oder nicht.

Schreibt ob der Schüler mit der angebebenen ID seine Schulpflicht bereits erfüllt hat oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schüler seine Schulfplicht erfüllt hat.
apiInstance.setSchuelerIstSchulpflichtErfuellt(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schüler seine Schulfplicht erfüllt hat. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerIstVolljaehrig

> setSchuelerIstVolljaehrig(schema, id, body)

Schreibt ob der Schüler mit der angebebenen ID volljährig ist oder nicht.

Schreibt ob der Schüler mit der angebebenen ID volljährig ist oder nicht in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob der Schüler volljährig ist.
apiInstance.setSchuelerIstVolljaehrig(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob der Schüler volljährig ist. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerKeineAuskunftAnDritte

> setSchuelerKeineAuskunftAnDritte(schema, id, body)

Schreibt ob in Bezug auf den Schüler mit der angebebenen ID keine Auskunft an dritte erteilt werden darf.

Schreibt ob der Schüler mit der angebebenen ID keine Auskunft an dritte erteilt werden darf in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = true; // Boolean | Die Information, ob in Bezug auf den Schüler eine Auskunft an Dritte erteilt werden darf.
apiInstance.setSchuelerKeineAuskunftAnDritte(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Boolean**| Die Information, ob in Bezug auf den Schüler eine Auskunft an Dritte erteilt werden darf. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerNachname

> setSchuelerNachname(schema, id, body)

Schreibt den Nachnamen des Schülers mit der angebebenen ID.

Schreibt den Nachnamen des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Nachname des Schülers
apiInstance.setSchuelerNachname(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Der Nachname des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerOrtsteilID

> setSchuelerOrtsteilID(schema, id, opts)

Schreibt die ID des Ortsteils des Wohnortes des Schülers mit der angebebenen Schüler-ID.

Schreibt die ID des Ortsteils des Wohnortes des Schülers mit der angebebenen Schüler-ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt. Außerdem wird geprüft, ob die Ortsteil-ID gültig ist und dem Wohnort des Schülers zugeordnet werden kann. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID des Ortsteils des Wohnortes des Schülers
};
apiInstance.setSchuelerOrtsteilID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Number**| Die ID des Ortsteils des Wohnortes des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setSchuelerReligionID

> setSchuelerReligionID(schema, id, opts)

Schreibt die ID der Religion des Schülers mit der angebebenen ID.

Schreibt die ID der Religion des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID der Religion des Schülers
};
apiInstance.setSchuelerReligionID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Number**| Die ID der Religion des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setSchuelerReligionabmeldung

> setSchuelerReligionabmeldung(schema, id, body)

Schreibt das Datum der Religionsabmeldung des Schülers mit der angebebenen ID.

Schreibt das Datum der Religionsabmeldung des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Datum der Religionsabmeldung des Schülers
apiInstance.setSchuelerReligionabmeldung(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Datum der Religionsabmeldung des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerReligionanmeldung

> setSchuelerReligionanmeldung(schema, id, body)

Schreibt das Datum der Religionsanmeldung des Schülers mit der angebebenen ID.

Schreibt das Datum der Religionsanmeldung des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Datum der Religionsanmeldung des Schülers
apiInstance.setSchuelerReligionanmeldung(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Datum der Religionsanmeldung des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerStaatsangehoerigkeit2ID

> setSchuelerStaatsangehoerigkeit2ID(schema, id, opts)

Schreibt die ID der zweiten Staatsangehörigkeit des Schülers mit der angebebenen ID.

Schreibt die ID der zweiten Staatsangehörigkeit des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die ID der zweiten Staatsangehörigkeit des Schülers
};
apiInstance.setSchuelerStaatsangehoerigkeit2ID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die ID der zweiten Staatsangehörigkeit des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerStaatsangehoerigkeitID

> setSchuelerStaatsangehoerigkeitID(schema, id, opts)

Schreibt die ID der Staatsangehörigkeit des Schülers mit der angebebenen ID.

Schreibt die ID der Staatsangehörigkeit des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die ID der Staatsangehörigkeit des Schülers
};
apiInstance.setSchuelerStaatsangehoerigkeitID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die ID der Staatsangehörigkeit des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerStatus

> setSchuelerStatus(schema, id, body)

Legt den Status des Schülers mit der angebebenen ID fest.

Schreibt den Status des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob die ID in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Status
apiInstance.setSchuelerStatus(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Der Status | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerStrasse

> setSchuelerStrasse(schema, id, opts)

Schreibt die Strasse des Wohnortes des Schülers mit der angebebenen ID.

Schreibt die Strasse (mit Hausnummer) des Wohnortes des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Strasse des Wohnortes des Schülers
};
apiInstance.setSchuelerStrasse(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die Strasse des Wohnortes des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerTelefon

> setSchuelerTelefon(schema, id, opts)

Schreibt die Telefonnummer des Schülers mit der angebebenen ID.

Schreibt die Telefonnummer des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Telefonnummer des Schülers
};
apiInstance.setSchuelerTelefon(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die Telefonnummer des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerTelefonMobil

> setSchuelerTelefonMobil(schema, id, opts)

Schreibt die mobile Telefonnummer des Schülers mit der angebebenen ID.

Schreibt die mobile Telefonnummer des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die mobile Telefonnummer des Schülers
};
apiInstance.setSchuelerTelefonMobil(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die mobile Telefonnummer des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerVerkehrspracheFamilie

> setSchuelerVerkehrspracheFamilie(schema, id, opts)

Schreibt die Verkehrsprache in der Familie des Schülers mit der angebebenen ID.

Schreibt die Verkehrsprache in der Familie des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Verkehrsprache in der Familie
};
apiInstance.setSchuelerVerkehrspracheFamilie(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Die Verkehrsprache in der Familie | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerVorname

> setSchuelerVorname(schema, id, body)

Schreibt den Vornamen des Schülers mit der angebebenen ID.

Schreibt den Vornamen des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schülers in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Vorname des Schülers
apiInstance.setSchuelerVorname(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Der Vorname des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerWohnortID

> setSchuelerWohnortID(schema, id, opts)

Schreibt die ID des Wohnortes des Schülers mit der angebebenen Schüler-ID.

Schreibt die ID des Wohnortes des Schülers mit der angebebenen Schüler-ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt. Bei setzen eines neuen Wohnortes wird der dem Schüler zugeordnete Ortsteil automatisch gelöscht. Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID des Wohnortes des Schülers
};
apiInstance.setSchuelerWohnortID(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **Number**| Die ID des Wohnortes des Schülers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setSchuelerZusatzNachname

> setSchuelerZusatzNachname(schema, id, body)

Schreibt den Zusatz zum Nachnamen des Schülers mit der angebebenen ID.

Schreibt den Zusatz zum Nachnamen des Schülers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Schülers in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Zusatz zum Nachnamen des Schülers
apiInstance.setSchuelerZusatzNachname(schema, id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Der Zusatz zum Nachnamen des Schülers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setSchuelerZuzugsjahr

> setSchuelerZuzugsjahr(schema, id, opts)

Schreibt das Zuzugsjahr des Schülers mit der angebebenen ID.

Schreibt das Zuzugsjahr des Schülers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Schüler in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Schülerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Das Zuzugsjahr
};
apiInstance.setSchuelerZuzugsjahr(schema, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **id** | **Number**|  | 
 **body** | **String**| Das Zuzugsjahr | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined

