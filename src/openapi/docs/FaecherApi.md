# SvwsOpenApi.FaecherApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFaecherListe**](FaecherApi.md#getFaecherListe) | **GET** /db/{schema}/api/faecher/liste | Gibt eine Übersicht von allen Fächern zurück.
[**getFaecherListeGOSt**](FaecherApi.md#getFaecherListeGOSt) | **GET** /db/{schema}/api/faecher/gost/liste | Gibt eine Übersicht von allen Fächern der gymnasialen Oberstufe zurück.



## getFaecherListe

> [FaecherlisteEintrag] getFaecherListe(schema)

Gibt eine Übersicht von allen Fächern zurück.

Erstellt eine Liste aller in der Datenbank vorhanden Fächer unter Angabe der ID, des Kürzels, des verwendeten Statistik-Kürzels, der Bezeichnung des Faches, ob es ein Fach der Oberstufe ist, einer Sortierreihenfolge und ob sie in der Anwendung sichtbar bzw. änderbar sein sollen. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen von Fächerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.FaecherApi();
let schema = "schema_example"; // String | 
apiInstance.getFaecherListe(schema).then((data) => {
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

[**[FaecherlisteEintrag]**](FaecherlisteEintrag.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFaecherListeGOSt

> [GOStFach] getFaecherListeGOSt(schema)

Gibt eine Übersicht von allen Fächern der gymnasialen Oberstufe zurück.

Erstellt eine Liste aller in der Datenbank vorhanden Fächer der gymnasialen Oberstufe. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen der Fächerdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.FaecherApi();
let schema = "schema_example"; // String | 
apiInstance.getFaecherListeGOSt(schema).then((data) => {
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

[**[GOStFach]**](GOStFach.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

