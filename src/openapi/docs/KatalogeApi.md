# SvwsOpenApi.KatalogeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getKatalogHaltestellen**](KatalogeApi.md#getKatalogHaltestellen) | **GET** /db/{schema}/api/katalog/haltestellen/liste | Gibt eine Übersicht der Haltestellen im Katalog zurück.
[**getKatalogVerkehrssprache**](KatalogeApi.md#getKatalogVerkehrssprache) | **GET** /db/{schema}/api/katalog/verkehrsprachen/liste | Gibt eine Übersicht der Verkehrssprachen im Katalog zurück.
[**getNationaelitaetenKatalog**](KatalogeApi.md#getNationaelitaetenKatalog) | **GET** /db/{schema}/api/katalog/nationalitaet/liste | Gibt eine Übersicht aller Nationalitäten im Katalog zurück.
[**getOrtKatalog**](KatalogeApi.md#getOrtKatalog) | **GET** /db/{schema}/api/katalog/ort/liste | Gibt eine Übersicht alle Orte im Katalog zurück.
[**getOrtsteilKatalog**](KatalogeApi.md#getOrtsteilKatalog) | **GET** /db/{schema}/api/katalog/ortsteil/liste | Gibt eine Übersicht aller Ortsteile im Katalog zurück.
[**getReligionKatalog**](KatalogeApi.md#getReligionKatalog) | **GET** /db/{schema}/api/katalog/religion/liste | Gibt eine Übersicht alle Religionen im Katalog zurück.



## getKatalogHaltestellen

> [KatalogEintrag] getKatalogHaltestellen(schema)

Gibt eine Übersicht der Haltestellen im Katalog zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Haltestellen unter Angabe der ID, eines Kürzels und der textuellen Beschreibung sowie der Information, ob der Eintrag in der Anwendung sichtbar bzw. änderbar sein soll, undgibt diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.KatalogeApi();
let schema = "schema_example"; // String | 
apiInstance.getKatalogHaltestellen(schema).then((data) => {
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


## getKatalogVerkehrssprache

> [KatalogEintrag] getKatalogVerkehrssprache(schema)

Gibt eine Übersicht der Verkehrssprachen im Katalog zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Verkehrssprachen unter Angabe der ID, eines Kürzels und der textuellen Beschreibung sowie der Information, ob der Eintrag in der Anwendung sichtbar bzw. änderbar sein soll, undgibt diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.KatalogeApi();
let schema = "schema_example"; // String | 
apiInstance.getKatalogVerkehrssprache(schema).then((data) => {
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


## getNationaelitaetenKatalog

> [NationalitaetenKatalogEintrag] getNationaelitaetenKatalog(schema)

Gibt eine Übersicht aller Nationalitäten im Katalog zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Nationalitäten unter Angabe der ID, des Landes, der Staatsangehörigkeit, einem Statistik-Kürzel, einer Sortierreihenfolge und ob sie in der Anwendung sichtbar bzw. änderbar sein sollen. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.KatalogeApi();
let schema = "schema_example"; // String | 
apiInstance.getNationaelitaetenKatalog(schema).then((data) => {
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

[**[NationalitaetenKatalogEintrag]**](NationalitaetenKatalogEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrtKatalog

> [OrtKatalogEintrag] getOrtKatalog(schema)

Gibt eine Übersicht alle Orte im Katalog zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Orte unter Angabe der ID, der PLZ, des Ortes, ggf. des Kreises, dem Bundesland, einer Sortierreihenfolge und ob sie in der Anwendung sichtbar bzw. änderbar sein sollen. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.KatalogeApi();
let schema = "schema_example"; // String | 
apiInstance.getOrtKatalog(schema).then((data) => {
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

[**[OrtKatalogEintrag]**](OrtKatalogEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrtsteilKatalog

> [OrtsteilKatalogEintrag] getOrtsteilKatalog(schema)

Gibt eine Übersicht aller Ortsteile im Katalog zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Ortsteile unter Angabe der ID, der zugehörigenOrt-ID, dem Namen des Ortsteils, einer Sortierreihenfolge und ob sie in der Anwendung sichtbar bzw. änderbar sein sollen. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.KatalogeApi();
let schema = "schema_example"; // String | 
apiInstance.getOrtsteilKatalog(schema).then((data) => {
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

[**[OrtsteilKatalogEintrag]**](OrtsteilKatalogEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReligionKatalog

> [ReligionKatalogEintrag] getReligionKatalog(schema)

Gibt eine Übersicht alle Religionen im Katalog zurück.

Erstellt eine Liste aller in dem Katalog vorhanden Religionen unter Angabe der ID, der Bezeichnung sowie der Bezeichnung, welche auf dem Zeugnis erscheint, einem Statistik-Kürzel, einer Sortierreihenfolge und ob sie in der Anwendung sichtbar bzw. änderbar sein sollen. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Katalogen besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.KatalogeApi();
let schema = "schema_example"; // String | 
apiInstance.getReligionKatalog(schema).then((data) => {
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

[**[ReligionKatalogEintrag]**](ReligionKatalogEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

