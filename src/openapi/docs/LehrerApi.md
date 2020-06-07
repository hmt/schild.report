# SvwsOpenApi.LehrerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLehrerKatalogAbgangsgrund**](LehrerApi.md#getLehrerKatalogAbgangsgrund) | **GET** /db/{schema}/api/lehrer/lehrer/katalog/abgangsgrund | Gibt den Katalog der Lehrerabgangsgründe zurück.
[**getLehrerKatalogBeschaeftigungsart**](LehrerApi.md#getLehrerKatalogBeschaeftigungsart) | **GET** /db/{schema}/api/lehrer/lehrer/katalog/beschaeftigungsart | Gibt den Katalog der Beschäftigungsarten zurück.
[**getLehrerKatalogEinsatzstatus**](LehrerApi.md#getLehrerKatalogEinsatzstatus) | **GET** /db/{schema}/api/lehrer/lehrer/katalog/einsatzstatus | Gibt den Katalog des Einsatzstatus zurück.
[**getLehrerKatalogLeitungsfunktion**](LehrerApi.md#getLehrerKatalogLeitungsfunktion) | **GET** /db/{schema}/api/lehrer/lehrer/katalog/leitungsfunktion | Gibt den Katalog der Lehrerleitungsfunktionen zurück.
[**getLehrerKatalogRechtsverhaeltnis**](LehrerApi.md#getLehrerKatalogRechtsverhaeltnis) | **GET** /db/{schema}/api/lehrer/lehrer/katalog/rechtsverhaeltnis | Gibt den Katalog des Rechtsverhältnisse zurück.
[**getLehrerKatalogZugangsgrund**](LehrerApi.md#getLehrerKatalogZugangsgrund) | **GET** /db/{schema}/api/lehrer/lehrer/katalog/zugangsgrund | Gibt den Katalog der Lehrerzugangsgründe zurück.
[**getLehrerListe**](LehrerApi.md#getLehrerListe) | **GET** /db/{schema}/api/lehrer/liste | Gibt eine Übersicht von allen Lehrern zurück.
[**getLehrerPersonaldaten**](LehrerApi.md#getLehrerPersonaldaten) | **GET** /db/{schema}/api/lehrer/{id}/personaldaten | Liefert zu der ID des Lehrer die zugehörigen Personaldaten.
[**getLehrerStammdaten**](LehrerApi.md#getLehrerStammdaten) | **GET** /db/{schema}/api/lehrer/{id}/stammdaten | Liefert zu der ID des Lehrer die zugehörigen Stammdaten.
[**setLehrerAbgangsdatum**](LehrerApi.md#setLehrerAbgangsdatum) | **PUT** /db/{schema}/api/lehrer/{id}/abgangsdatum | Schreibt das Abgangsdatum des Lehrers mit der angebebenen ID.
[**setLehrerAbgangsgrund**](LehrerApi.md#setLehrerAbgangsgrund) | **PUT** /db/{schema}/api/lehrer/{id}/abgangsgrund | Schreibt den Abgangsgrund des Lehrers mit der angebebenen ID.
[**setLehrerAmtsbezeichnung**](LehrerApi.md#setLehrerAmtsbezeichnung) | **PUT** /db/{schema}/api/lehrer/{id}/amtsbezeichnung | Schreibt die Amtsbezeichnung des Lehrers mit der angebebenen ID.
[**setLehrerAnrede**](LehrerApi.md#setLehrerAnrede) | **PUT** /db/{schema}/api/lehrer/{id}/anrede | Schreibt die Anrede für den Lehrer mit der angebebenen ID.
[**setLehrerBeschaeftigungsart**](LehrerApi.md#setLehrerBeschaeftigungsart) | **PUT** /db/{schema}/api/lehrer/{id}/beschaeftigungsart | Schreibt die Beschäftigungsart des Lehrers mit der angebebenen ID.
[**setLehrerEinsatzstatus**](LehrerApi.md#setLehrerEinsatzstatus) | **PUT** /db/{schema}/api/lehrer/{id}/einsatzstatus | Schreibt den Einsatzstatus des Lehrers mit der angebebenen ID.
[**setLehrerEmailDienstlich**](LehrerApi.md#setLehrerEmailDienstlich) | **PUT** /db/{schema}/api/lehrer/{id}/email_dienst | Schreibt die dienstliche E-Mail-Adresse des Lehrers mit der angebebenen ID.
[**setLehrerEmailPrivat**](LehrerApi.md#setLehrerEmailPrivat) | **PUT** /db/{schema}/api/lehrer/{id}/email_privat | Schreibt die private E-Mail-Adresse des Lehrers mit der angebebenen ID.
[**setLehrerFoto**](LehrerApi.md#setLehrerFoto) | **PUT** /db/{schema}/api/lehrer/{id}/foto | Schreibt das Base64-JPG-kodierte Foto des Lehrers mit der angebebenen ID.
[**setLehrerGeburtsdatum**](LehrerApi.md#setLehrerGeburtsdatum) | **PUT** /db/{schema}/api/lehrer/{id}/geburtsdatum | Schreibt das Geburtsdatum des Lehrers mit der angebebenen ID.
[**setLehrerGeschlecht**](LehrerApi.md#setLehrerGeschlecht) | **PUT** /db/{schema}/api/lehrer/{id}/geschlecht | Schreibt das Geschlecht des Lehrers mit der angebebenen ID.
[**setLehrerIdentNrTeil1**](LehrerApi.md#setLehrerIdentNrTeil1) | **PUT** /db/{schema}/api/lehrer/{id}/identNrTeil1 | Schreibt den ersten Teil der Lehrer-Ident-Nummer des Lehrers mit der angebebenen ID.
[**setLehrerIdentNrTeil2SerNr**](LehrerApi.md#setLehrerIdentNrTeil2SerNr) | **PUT** /db/{schema}/api/lehrer/{id}/identNrTeil2SerNr | Schreibt den zweiten Teil der Lehrer-Ident-Nummer des Lehrers mit der angebebenen ID.
[**setLehrerKuerzel**](LehrerApi.md#setLehrerKuerzel) | **PUT** /db/{schema}/api/lehrer/{id}/kuerzel | Schreibt das Kürzel des Lehrers mit der angebebenen ID.
[**setLehrerLbvPersonalnummer**](LehrerApi.md#setLehrerLbvPersonalnummer) | **PUT** /db/{schema}/api/lehrer/{id}/lbv_personalnummer | Schreibt die LBV-Personalnummer des Lehrers mit der angebebenen ID.
[**setLehrerLbvVerguetungsschluessel**](LehrerApi.md#setLehrerLbvVerguetungsschluessel) | **PUT** /db/{schema}/api/lehrer/{id}/lbv_verguetungsschluessel | Schreibt die LBV-Vergütungsschlüssel des Lehrers mit der angebebenen ID.
[**setLehrerLeitungsfunktion**](LehrerApi.md#setLehrerLeitungsfunktion) | **PUT** /db/{schema}/api/lehrer/{id}/leitungsfunktion | Schreibt die Leitungsfunktion des Lehrers mit der angebebenen ID.
[**setLehrerMasernImpfnachweis**](LehrerApi.md#setLehrerMasernImpfnachweis) | **PUT** /db/{schema}/api/lehrer/{id}/masern_impf_nachweis | Schreibt die Information, ob der Lehrer mit der angebebenen ID einen Impfnachweise erbracht hat.
[**setLehrerNachname**](LehrerApi.md#setLehrerNachname) | **PUT** /db/{schema}/api/lehrer/{id}/nachname | Schreibt den Nachnamen des Lehrers mit der angebebenen ID.
[**setLehrerOrtsteilID**](LehrerApi.md#setLehrerOrtsteilID) | **PUT** /db/{schema}/api/lehrer/{id}/ortsteil_id | Schreibt die ID des Ortsteils des Wohnortes des Lehrers mit der angebebenen Lehrer-ID.
[**setLehrerPersonalTyp**](LehrerApi.md#setLehrerPersonalTyp) | **PUT** /db/{schema}/api/lehrer/{id}/personal_typ | Legt den Personal-Typ für die angebebenen ID fest.
[**setLehrerPersonalaktennummer**](LehrerApi.md#setLehrerPersonalaktennummer) | **PUT** /db/{schema}/api/lehrer/{id}/personalaktennummer | Schreibt die Personalaktennummer des Lehrers mit der angebebenen ID.
[**setLehrerPflichtstundensoll**](LehrerApi.md#setLehrerPflichtstundensoll) | **PUT** /db/{schema}/api/lehrer/{id}/pflichtstunden_soll | Schreibt den Pflichtstundensoll des Lehrers mit der angebebenen ID.
[**setLehrerRechtsverhaeltnis**](LehrerApi.md#setLehrerRechtsverhaeltnis) | **PUT** /db/{schema}/api/lehrer/{id}/rechtsverhaeltnis | Schreibt das Rechtverhältnis des Lehrers mit der angebebenen ID.
[**setLehrerStaatsangehoerigkeitID**](LehrerApi.md#setLehrerStaatsangehoerigkeitID) | **PUT** /db/{schema}/api/lehrer/{id}/staatsangehoerigkeitID | Schreibt die Staatsangehörigkeits-ID des Lehrers mit der angebebenen ID.
[**setLehrerStammschulnummer**](LehrerApi.md#setLehrerStammschulnummer) | **PUT** /db/{schema}/api/lehrer/{id}/stammschulnummer | Schreibt die Stammschulnummer des Lehrers mit der angebebenen ID.
[**setLehrerStrasse**](LehrerApi.md#setLehrerStrasse) | **PUT** /db/{schema}/api/lehrer/{id}/strasse | Schreibt die Strasse des Wohnortes des Lehrers mit der angebebenen ID.
[**setLehrerTelefon**](LehrerApi.md#setLehrerTelefon) | **PUT** /db/{schema}/api/lehrer/{id}/telefon | Schreibt die Telefonnummer des Lehrers mit der angebebenen ID.
[**setLehrerTelefonMobil**](LehrerApi.md#setLehrerTelefonMobil) | **PUT** /db/{schema}/api/lehrer/{id}/telefon_mobil | Schreibt die mobile Telefonnummer des Lehrers mit der angebebenen ID.
[**setLehrerTitel**](LehrerApi.md#setLehrerTitel) | **PUT** /db/{schema}/api/lehrer/{id}/titel | Schreibt den akademischen Grad des Lehrers mit der angebebenen ID.
[**setLehrerVorname**](LehrerApi.md#setLehrerVorname) | **PUT** /db/{schema}/api/lehrer/{id}/vorname | Schreibt den Vornamen des Lehrers mit der angebebenen ID.
[**setLehrerWohnortID**](LehrerApi.md#setLehrerWohnortID) | **PUT** /db/{schema}/api/lehrer/{id}/wohnort_id | Schreibt die ID des Wohnortes des Lehrers mit der angebebenen Lehrer-ID.
[**setLehrerZugangsdatum**](LehrerApi.md#setLehrerZugangsdatum) | **PUT** /db/{schema}/api/lehrer/{id}/zugangsdatum | Schreibt das Zugangsdatum des Lehrers mit der angebebenen ID.
[**setLehrerZugangsgrund**](LehrerApi.md#setLehrerZugangsgrund) | **PUT** /db/{schema}/api/lehrer/{id}/zugangsgrund | Schreibt den Zugangsgrund des Lehrers mit der angebebenen ID.



## getLehrerKatalogAbgangsgrund

> [LehrerKatalogAbgangsgrundEintrag] getLehrerKatalogAbgangsgrund(schema)

Gibt den Katalog der Lehrerabgangsgründe zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Lehrerabgangsgründe unter Angabe der ID, der Bezeichnung und des Statistikschlüssels. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
apiInstance.getLehrerKatalogAbgangsgrund(schema).then((data) => {
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

[**[LehrerKatalogAbgangsgrundEintrag]**](LehrerKatalogAbgangsgrundEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerKatalogBeschaeftigungsart

> [LehrerKatalogBeschaeftigungsartEintrag] getLehrerKatalogBeschaeftigungsart(schema)

Gibt den Katalog der Beschäftigungsarten zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Beschäftigungsarten unter Angabe der ID, eines Kürzels und der Bezeichnung. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
apiInstance.getLehrerKatalogBeschaeftigungsart(schema).then((data) => {
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

[**[LehrerKatalogBeschaeftigungsartEintrag]**](LehrerKatalogBeschaeftigungsartEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerKatalogEinsatzstatus

> [LehrerKatalogEinsatzstatusEintrag] getLehrerKatalogEinsatzstatus(schema)

Gibt den Katalog des Einsatzstatus zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Einsatzstatusarten unter Angabe der ID, eines Kürzels und der Bezeichnung. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
apiInstance.getLehrerKatalogEinsatzstatus(schema).then((data) => {
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

[**[LehrerKatalogEinsatzstatusEintrag]**](LehrerKatalogEinsatzstatusEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerKatalogLeitungsfunktion

> [LehrerKatalogLeitungsfunktionEintrag] getLehrerKatalogLeitungsfunktion(schema)

Gibt den Katalog der Lehrerleitungsfunktionen zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Lehrerleitungsfunktionen unter Angabe der ID und der Bezeichnung. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
apiInstance.getLehrerKatalogLeitungsfunktion(schema).then((data) => {
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

[**[LehrerKatalogLeitungsfunktionEintrag]**](LehrerKatalogLeitungsfunktionEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerKatalogRechtsverhaeltnis

> [LehrerKatalogRechtsverhaeltnisEintrag] getLehrerKatalogRechtsverhaeltnis(schema)

Gibt den Katalog des Rechtsverhältnisse zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Rechtsverhältnisse unter Angabe der ID, eines Kürzels und der Bezeichnung. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
apiInstance.getLehrerKatalogRechtsverhaeltnis(schema).then((data) => {
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

[**[LehrerKatalogRechtsverhaeltnisEintrag]**](LehrerKatalogRechtsverhaeltnisEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerKatalogZugangsgrund

> [LehrerKatalogZugangsgrundEintrag] getLehrerKatalogZugangsgrund(schema)

Gibt den Katalog der Lehrerzugangsgründe zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Lehrerzugangsgründe unter Angabe der ID, der Bezeichnung und des Statistikschlüssels. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
apiInstance.getLehrerKatalogZugangsgrund(schema).then((data) => {
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

[**[LehrerKatalogZugangsgrundEintrag]**](LehrerKatalogZugangsgrundEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerListe

> [LehrerlisteEintrag] getLehrerListe(schema)

Gibt eine Übersicht von allen Lehrern zurück.

Erstellt eine Liste aller in der Datenbank vorhanden Lehrer unter Angabe der ID, des Kürzels, des Vor- und Nachnamens, der sog. Personentyps, einer Sortierreihenfolge, ob sie in der Anwendung sichtbar bzw. änderbar sein sollen sowie ob sie für die Schulstatistik relevant sein sollen. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
apiInstance.getLehrerListe(schema).then((data) => {
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

[**[LehrerlisteEintrag]**](LehrerlisteEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerPersonaldaten

> LehrerPersonaldaten getLehrerPersonaldaten(schema, id)

Liefert zu der ID des Lehrer die zugehörigen Personaldaten.

Liest die Personaldaten des Lehrers zu der angegebenen ID aus der Datenbank und liefert diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
apiInstance.getLehrerPersonaldaten(schema, id).then((data) => {
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

[**LehrerPersonaldaten**](LehrerPersonaldaten.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLehrerStammdaten

> LehrerStammdaten getLehrerStammdaten(schema, id)

Liefert zu der ID des Lehrer die zugehörigen Stammdaten.

Liest die Stammdaten des Lehrers zu der angegebenen ID aus der Datenbank und liefert diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
apiInstance.getLehrerStammdaten(schema, id).then((data) => {
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

[**LehrerStammdaten**](LehrerStammdaten.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setLehrerAbgangsdatum

> setLehrerAbgangsdatum(schema, id, body)

Schreibt das Abgangsdatum des Lehrers mit der angebebenen ID.

Schreibt das Abgangsdatum des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Abgangsdatum des Lehrers
apiInstance.setLehrerAbgangsdatum(schema, id, body).then(() => {
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
 **body** | **String**| Das Abgangsdatum des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerAbgangsgrund

> setLehrerAbgangsgrund(schema, id, body)

Schreibt den Abgangsgrund des Lehrers mit der angebebenen ID.

Schreibt den Abgangsgrund des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Abgangsgrund des Lehrers
apiInstance.setLehrerAbgangsgrund(schema, id, body).then(() => {
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
 **body** | **String**| Der Abgangsgrund des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerAmtsbezeichnung

> setLehrerAmtsbezeichnung(schema, id, opts)

Schreibt die Amtsbezeichnung des Lehrers mit der angebebenen ID.

Schreibt die Amtsbezeichnung des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird ein evtl. vorhanderner Eintrag zur Amtsbezeichnung entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Amtsbezeichnung des Lehrers
};
apiInstance.setLehrerAmtsbezeichnung(schema, id, opts).then(() => {
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
 **body** | **String**| Die Amtsbezeichnung des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerAnrede

> setLehrerAnrede(schema, id, opts)

Schreibt die Anrede für den Lehrer mit der angebebenen ID.

Schreibt die Anrede für den Lehrer mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird ein evtl. vorhanderner Eintrag entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Anrede für den Lehrer
};
apiInstance.setLehrerAnrede(schema, id, opts).then(() => {
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
 **body** | **String**| Die Anrede für den Lehrer | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerBeschaeftigungsart

> setLehrerBeschaeftigungsart(schema, id, body)

Schreibt die Beschäftigungsart des Lehrers mit der angebebenen ID.

Schreibt die Beschäftigungsart des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Die Beschäftigungsart des Lehrers
apiInstance.setLehrerBeschaeftigungsart(schema, id, body).then(() => {
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
 **body** | **String**| Die Beschäftigungsart des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerEinsatzstatus

> setLehrerEinsatzstatus(schema, id, body)

Schreibt den Einsatzstatus des Lehrers mit der angebebenen ID.

Schreibt den Einsatzstatus des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Einsatzstatus des Lehrers
apiInstance.setLehrerEinsatzstatus(schema, id, body).then(() => {
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
 **body** | **String**| Der Einsatzstatus des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerEmailDienstlich

> setLehrerEmailDienstlich(schema, id, opts)

Schreibt die dienstliche E-Mail-Adresse des Lehrers mit der angebebenen ID.

Schreibt die dienstliche E-Mail-Adresse des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die dienstliche E-Mail-Adresse des Lehrers
};
apiInstance.setLehrerEmailDienstlich(schema, id, opts).then(() => {
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
 **body** | **String**| Die dienstliche E-Mail-Adresse des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerEmailPrivat

> setLehrerEmailPrivat(schema, id, opts)

Schreibt die private E-Mail-Adresse des Lehrers mit der angebebenen ID.

Schreibt die private E-Mail-Adresse des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die private E-Mail-Adresse des Lehrers
};
apiInstance.setLehrerEmailPrivat(schema, id, opts).then(() => {
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
 **body** | **String**| Die private E-Mail-Adresse des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerFoto

> setLehrerFoto(schema, id, body)

Schreibt das Base64-JPG-kodierte Foto des Lehrers mit der angebebenen ID.

Schreibt das Base64-JPG-kodierte Foto des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Base64-JPG-kodierte Foto des Lehrers
apiInstance.setLehrerFoto(schema, id, body).then(() => {
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
 **body** | **String**| Das Base64-JPG-kodierte Foto des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerGeburtsdatum

> setLehrerGeburtsdatum(schema, id, body)

Schreibt das Geburtsdatum des Lehrers mit der angebebenen ID.

Schreibt das Geburtsdatum des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Geburtsdatum Lehrers
apiInstance.setLehrerGeburtsdatum(schema, id, body).then(() => {
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
 **body** | **String**| Das Geburtsdatum Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerGeschlecht

> setLehrerGeschlecht(schema, id, body)

Schreibt das Geschlecht des Lehrers mit der angebebenen ID.

Schreibt das Geschlecht des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Geschlecht des Lehrers
apiInstance.setLehrerGeschlecht(schema, id, body).then(() => {
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
 **body** | **String**| Das Geschlecht des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerIdentNrTeil1

> setLehrerIdentNrTeil1(schema, id, body)

Schreibt den ersten Teil der Lehrer-Ident-Nummer des Lehrers mit der angebebenen ID.

Schreibt ersten Teil der Lehrer-Ident-Nummer des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der erste Teil der Lehrer-Ident-Nummer des Lehrers
apiInstance.setLehrerIdentNrTeil1(schema, id, body).then(() => {
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
 **body** | **String**| Der erste Teil der Lehrer-Ident-Nummer des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerIdentNrTeil2SerNr

> setLehrerIdentNrTeil2SerNr(schema, id, body)

Schreibt den zweiten Teil der Lehrer-Ident-Nummer des Lehrers mit der angebebenen ID.

Schreibt zweiten Teil der Lehrer-Ident-Nummer des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der zweite Teil der Lehrer-Ident-Nummer des Lehrers
apiInstance.setLehrerIdentNrTeil2SerNr(schema, id, body).then(() => {
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
 **body** | **String**| Der zweite Teil der Lehrer-Ident-Nummer des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerKuerzel

> setLehrerKuerzel(schema, id, body)

Schreibt das Kürzel des Lehrers mit der angebebenen ID.

Schreibt das Kürzel des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Kürzel des Lehrers
apiInstance.setLehrerKuerzel(schema, id, body).then(() => {
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
 **body** | **String**| Das Kürzel des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerLbvPersonalnummer

> setLehrerLbvPersonalnummer(schema, id, body)

Schreibt die LBV-Personalnummer des Lehrers mit der angebebenen ID.

Schreibt die LBV-Personalnummer des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Die LBV-Personalnummer des Lehrers
apiInstance.setLehrerLbvPersonalnummer(schema, id, body).then(() => {
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
 **body** | **String**| Die LBV-Personalnummer des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerLbvVerguetungsschluessel

> setLehrerLbvVerguetungsschluessel(schema, id, body)

Schreibt die LBV-Vergütungsschlüssel des Lehrers mit der angebebenen ID.

Schreibt die LBV-Vergütungsschlüssel des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Die LBV-Vergütungsschlüssel des Lehrers
apiInstance.setLehrerLbvVerguetungsschluessel(schema, id, body).then(() => {
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
 **body** | **String**| Die LBV-Vergütungsschlüssel des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerLeitungsfunktion

> setLehrerLeitungsfunktion(schema, id, body)

Schreibt die Leitungsfunktion des Lehrers mit der angebebenen ID.

Schreibt die Leitungsfunktion des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Die Leitungsfunktion des Lehrers
apiInstance.setLehrerLeitungsfunktion(schema, id, body).then(() => {
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
 **body** | **String**| Die Leitungsfunktion des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerMasernImpfnachweis

> setLehrerMasernImpfnachweis(schema, id, opts)

Schreibt die Information, ob der Lehrer mit der angebebenen ID einen Impfnachweise erbracht hat.

Schreibt die Informatio, ob der Lehrer mit der angebebenen ID einen Impfnachweise erbracht hat, in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': true // Boolean | Die Information, ob der Lehrer einen Impfnachweis erbracht hat
};
apiInstance.setLehrerMasernImpfnachweis(schema, id, opts).then(() => {
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
 **body** | **Boolean**| Die Information, ob der Lehrer einen Impfnachweis erbracht hat | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerNachname

> setLehrerNachname(schema, id, body)

Schreibt den Nachnamen des Lehrers mit der angebebenen ID.

Schreibt den Nachnamen des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Nachname des Lehrers
apiInstance.setLehrerNachname(schema, id, body).then(() => {
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
 **body** | **String**| Der Nachname des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerOrtsteilID

> setLehrerOrtsteilID(schema, id, opts)

Schreibt die ID des Ortsteils des Wohnortes des Lehrers mit der angebebenen Lehrer-ID.

Schreibt die ID des Ortsteils des Wohnortes des Lehrers mit der angebebenen Lehrer-ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt. Außerdem wird geprüft, ob die Ortsteil-ID gültig ist und dem Wohnort des Lehrer zugeordnet werden kann. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID des Ortsteils des Wohnortes des Lehrers
};
apiInstance.setLehrerOrtsteilID(schema, id, opts).then(() => {
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
 **body** | **Number**| Die ID des Ortsteils des Wohnortes des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setLehrerPersonalTyp

> setLehrerPersonalTyp(schema, id, body)

Legt den Personal-Typ für die angebebenen ID fest.

Schreibt den Personal-Typ für die angebebene ID in die Datenbank. Vor dem Schreiben wird geprüft, ob die ID in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Personal-Typ
apiInstance.setLehrerPersonalTyp(schema, id, body).then(() => {
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
 **body** | **String**| Der Personal-Typ | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerPersonalaktennummer

> setLehrerPersonalaktennummer(schema, id, body)

Schreibt die Personalaktennummer des Lehrers mit der angebebenen ID.

Schreibt die Personalaktennummer des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Die Personalaktennummer des Lehrers
apiInstance.setLehrerPersonalaktennummer(schema, id, body).then(() => {
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
 **body** | **String**| Die Personalaktennummer des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerPflichtstundensoll

> setLehrerPflichtstundensoll(schema, id, opts)

Schreibt den Pflichtstundensoll des Lehrers mit der angebebenen ID.

Schreibt den Pflichtstundensoll des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 3.4 // Number | Der Pflichtstundensoll des Lehrers
};
apiInstance.setLehrerPflichtstundensoll(schema, id, opts).then(() => {
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
 **body** | **Number**| Der Pflichtstundensoll des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerRechtsverhaeltnis

> setLehrerRechtsverhaeltnis(schema, id, body)

Schreibt das Rechtverhältnis des Lehrers mit der angebebenen ID.

Schreibt das Rechtverhältnis des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Rechtverhältnis des Lehrers
apiInstance.setLehrerRechtsverhaeltnis(schema, id, body).then(() => {
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
 **body** | **String**| Das Rechtverhältnis des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerStaatsangehoerigkeitID

> setLehrerStaatsangehoerigkeitID(schema, id, opts)

Schreibt die Staatsangehörigkeits-ID des Lehrers mit der angebebenen ID.

Schreibt die Staatsangehörigkeits-ID des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Staatsangehörigkeits-ID des Lehrers
};
apiInstance.setLehrerStaatsangehoerigkeitID(schema, id, opts).then(() => {
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
 **body** | **String**| Die Staatsangehörigkeits-ID des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerStammschulnummer

> setLehrerStammschulnummer(schema, id, body)

Schreibt die Stammschulnummer des Lehrers mit der angebebenen ID.

Schreibt die Stammschulnummer des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Die Stammschulnummer des Lehrers
apiInstance.setLehrerStammschulnummer(schema, id, body).then(() => {
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
 **body** | **String**| Die Stammschulnummer des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerStrasse

> setLehrerStrasse(schema, id, opts)

Schreibt die Strasse des Wohnortes des Lehrers mit der angebebenen ID.

Schreibt die Strasse (mit Hausnummer) des Wohnortes des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Strasse des Wohnortes des Lehrers
};
apiInstance.setLehrerStrasse(schema, id, opts).then(() => {
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
 **body** | **String**| Die Strasse des Wohnortes des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerTelefon

> setLehrerTelefon(schema, id, opts)

Schreibt die Telefonnummer des Lehrers mit der angebebenen ID.

Schreibt die Telefonnummer des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die Telefonnummer des Lehrers
};
apiInstance.setLehrerTelefon(schema, id, opts).then(() => {
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
 **body** | **String**| Die Telefonnummer des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerTelefonMobil

> setLehrerTelefonMobil(schema, id, opts)

Schreibt die mobile Telefonnummer des Lehrers mit der angebebenen ID.

Schreibt die mobile Telefonnummer des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Die mobile Telefonnummer des Lehrers
};
apiInstance.setLehrerTelefonMobil(schema, id, opts).then(() => {
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
 **body** | **String**| Die mobile Telefonnummer des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerTitel

> setLehrerTitel(schema, id, opts)

Schreibt den akademischen Grad des Lehrers mit der angebebenen ID.

Schreibt den akademischen Grad des Lehrers mit der angebebenen ID in die Datenbank. Wird der Parameter weggelassen, so wird ein evtl. vorhanderner Eintrag zum akademischen Grad entfernt.Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': "body_example" // String | Der akademische Grad des Lehrers
};
apiInstance.setLehrerTitel(schema, id, opts).then(() => {
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
 **body** | **String**| Der akademische Grad des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerVorname

> setLehrerVorname(schema, id, body)

Schreibt den Vornamen des Lehrers mit der angebebenen ID.

Schreibt den Vornamen des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Vorname des Lehrers
apiInstance.setLehrerVorname(schema, id, body).then(() => {
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
 **body** | **String**| Der Vorname des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerWohnortID

> setLehrerWohnortID(schema, id, opts)

Schreibt die ID des Wohnortes des Lehrers mit der angebebenen Lehrer-ID.

Schreibt die ID des Wohnortes des Lehrers mit der angebebenen Lehrer-ID in die Datenbank. Wird der Parameter weggelassen, so wird eine evtl. vorhandene Angabe entfernt. Bei setzen eines neuen Wohnortes wird der dem Lehrer zugeordnete Ortsteil automatisch gelöscht. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let opts = {
  'body': 789 // Number | Die ID des Wohnortes des Lehrers
};
apiInstance.setLehrerWohnortID(schema, id, opts).then(() => {
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
 **body** | **Number**| Die ID des Wohnortes des Lehrers | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setLehrerZugangsdatum

> setLehrerZugangsdatum(schema, id, body)

Schreibt das Zugangsdatum des Lehrers mit der angebebenen ID.

Schreibt das Zugangsdatum des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Das Zugangsdatum des Lehrers
apiInstance.setLehrerZugangsdatum(schema, id, body).then(() => {
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
 **body** | **String**| Das Zugangsdatum des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined


## setLehrerZugangsgrund

> setLehrerZugangsgrund(schema, id, body)

Schreibt den Zugangsgrund des Lehrers mit der angebebenen ID.

Schreibt den Zugangsgrund des Lehrers mit der angebebenen ID in die Datenbank. Vor dem Schreiben wird geprüft, ob der Lehrer in der Datenbank vorhanden ist und der SVWS-Benutzer die notwendige Berechtigung zum Ändern von Lehrerpersonaldaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.LehrerApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
let body = "body_example"; // String | Der Zugangsgrund des Lehrers
apiInstance.setLehrerZugangsgrund(schema, id, body).then(() => {
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
 **body** | **String**| Der Zugangsgrund des Lehrers | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: Not defined

