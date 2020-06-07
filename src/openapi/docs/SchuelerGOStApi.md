# SvwsOpenApi.SchuelerGOStApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSchuelerGOStAbiturdaten**](SchuelerGOStApi.md#getSchuelerGOStAbiturdaten) | **GET** /db/{schema}/api/schueler/gost/{id}/abiturdaten | Liefert zu der ID des Schülers die zugehörigen Abiturdaten aus den entsprechenden Abiturtabellen der SVWS-DB.
[**getSchuelerGOStAbiturdatenAusLeistungsdaten**](SchuelerGOStApi.md#getSchuelerGOStAbiturdatenAusLeistungsdaten) | **GET** /db/{schema}/api/schueler/gost/{id}/abiturdatenAusLeistungsdaten | Liefert zu der ID des Schülers die zugehörigen Abiturdaten, die aus den Leistungsdaten der Oberstufe gewonnen werden können.
[**getSchuelerGOStLeistungsdaten**](SchuelerGOStApi.md#getSchuelerGOStLeistungsdaten) | **GET** /db/{schema}/api/schueler/gost/{id}/leistungsdaten | Liefert zu der ID des Schülers die zugehörigen Leistungsdaten in Bezug auf die gymnasiale Oberstufe.



## getSchuelerGOStAbiturdaten

> Abiturdaten getSchuelerGOStAbiturdaten(schema, id)

Liefert zu der ID des Schülers die zugehörigen Abiturdaten aus den entsprechenden Abiturtabellen der SVWS-DB.

Liest die Abiturdaten aus den Abiturtabellen des Schülers mit der angegebene ID und liefert diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen der Leistungsdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerGOStApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
apiInstance.getSchuelerGOStAbiturdaten(schema, id).then((data) => {
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

[**Abiturdaten**](Abiturdaten.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSchuelerGOStAbiturdatenAusLeistungsdaten

> Abiturdaten getSchuelerGOStAbiturdatenAusLeistungsdaten(schema, id)

Liefert zu der ID des Schülers die zugehörigen Abiturdaten, die aus den Leistungsdaten der Oberstufe gewonnen werden können.

Liest die Abiturdaten aus den Leistungsdaten der gymnasiale Oberstufe des Schülers mit der angegebene ID aus der Datenbank und liefert diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen der Leistungsdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerGOStApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
apiInstance.getSchuelerGOStAbiturdatenAusLeistungsdaten(schema, id).then((data) => {
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

[**Abiturdaten**](Abiturdaten.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSchuelerGOStLeistungsdaten

> GOStLeistungen getSchuelerGOStLeistungsdaten(schema, id)

Liefert zu der ID des Schülers die zugehörigen Leistungsdaten in Bezug auf die gymnasiale Oberstufe.

Liest die Leistungsdaten in Bezug auf die gymnasiale Oberstufe des Schülers mit der angegebene ID aus der Datenbank und liefert diese zurück. Dabei wird geprüft, ob der SVWS-Benutzer die notwendige Berechtigung zum Ansehen der Leistungsdaten besitzt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchuelerGOStApi();
let schema = "schema_example"; // String | 
let id = 789; // Number | 
apiInstance.getSchuelerGOStLeistungsdaten(schema, id).then((data) => {
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

[**GOStLeistungen**](GOStLeistungen.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

