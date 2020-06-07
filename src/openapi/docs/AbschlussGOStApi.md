# SvwsOpenApi.AbschlussGOStApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBelegpruefungEF1**](AbschlussGOStApi.md#getBelegpruefungEF1) | **POST** /api/abschluss/gost/belegpruefungEF1 | Führt eine Belegprüfung nur für die EF.1 anhand der übergebenen Abiturdaten durch.
[**getBelegpruefungGesamt**](AbschlussGOStApi.md#getBelegpruefungGesamt) | **POST** /api/abschluss/gost/belegpruefung | Führt eine Belegprüfung anhand der übergebenen Abiturdaten durch.



## getBelegpruefungEF1

> BelegpruefungErgebnis getBelegpruefungEF1(abiturdaten)

Führt eine Belegprüfung nur für die EF.1 anhand der übergebenen Abiturdaten durch.

Prüft anhand der übergeben Abiturdaten, ob die Belegung in den Abiturdaten korrekt ist oder nicht. Es werden ggf. auch Belegungsfehler und Hinweise zur Belegung zurückgegeben.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.AbschlussGOStApi();
let abiturdaten = new SvwsOpenApi.Abiturdaten(); // Abiturdaten | Die Abiturdaten für die Belegprüfung
apiInstance.getBelegpruefungEF1(abiturdaten).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abiturdaten** | [**Abiturdaten**](Abiturdaten.md)| Die Abiturdaten für die Belegprüfung | 

### Return type

[**BelegpruefungErgebnis**](BelegpruefungErgebnis.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBelegpruefungGesamt

> BelegpruefungErgebnis getBelegpruefungGesamt(abiturdaten)

Führt eine Belegprüfung anhand der übergebenen Abiturdaten durch.

Prüft anhand der übergeben Abiturdaten, ob die Belegung in den Abiturdaten korrekt ist oder nicht. Es werden ggf. auch Belegungsfehler und Hinweise zur Belegung zurückgegeben.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.AbschlussGOStApi();
let abiturdaten = new SvwsOpenApi.Abiturdaten(); // Abiturdaten | Die Abiturdaten für die Belegprüfung
apiInstance.getBelegpruefungGesamt(abiturdaten).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abiturdaten** | [**Abiturdaten**](Abiturdaten.md)| Die Abiturdaten für die Belegprüfung | 

### Return type

[**BelegpruefungErgebnis**](BelegpruefungErgebnis.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

