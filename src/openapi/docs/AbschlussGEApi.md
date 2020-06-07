# SvwsOpenApi.AbschlussGEApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAbschlussHA10**](AbschlussGEApi.md#getAbschlussHA10) | **POST** /api/abschluss/ge/ha10 | Führt eine Prüfung auf einen Hauptschulabschluss nach der Klasse 10 an einer Gesamtschule durch.
[**getAbschlussHA9**](AbschlussGEApi.md#getAbschlussHA9) | **POST** /api/abschluss/ge/ha9 | Führt eine Prüfung auf einen Hauptschulabschluss nach der Klasse 9 an einer Gesamtschule durch.
[**getAbschlussMSA**](AbschlussGEApi.md#getAbschlussMSA) | **POST** /api/abschluss/ge/msa | Führt eine Prüfung auf einen Mittleren Schulabschluss nach der Klasse 10 an einer Gesamtschule durch.
[**getAbschlussMSAQ**](AbschlussGEApi.md#getAbschlussMSAQ) | **POST** /api/abschluss/ge/msaq | Führt eine Prüfung auf die Berechtigung zum Besuch der gymnasialen Oberstufe im Rahmen eines Mittleren Schulabschluss nach der Klasse 10 an einer Gesamtschule durch.
[**getPrognose**](AbschlussGEApi.md#getPrognose) | **POST** /api/abschluss/ge/prognose | Führt eine Abschlussprognose für die Gesamtschule aus.



## getAbschlussHA10

> AbschlussErgebnis getAbschlussHA10(abschlussFaecher)

Führt eine Prüfung auf einen Hauptschulabschluss nach der Klasse 10 an einer Gesamtschule durch.

Prüft anhand der übergeben Fächerdaten, ob ein Hauptschulabschluss der Klasse 10 an einer Gesamtschule erreicht wird oder nicht. Im Falle, dass er nicht erreicht wird, werden ggf. Nachprüfungsfächer zurückgegeben.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.AbschlussGEApi();
let abschlussFaecher = new SvwsOpenApi.AbschlussFaecher(); // AbschlussFaecher | Die Fächerdaten für die Abschlussberechnung
apiInstance.getAbschlussHA10(abschlussFaecher).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abschlussFaecher** | [**AbschlussFaecher**](AbschlussFaecher.md)| Die Fächerdaten für die Abschlussberechnung | 

### Return type

[**AbschlussErgebnis**](AbschlussErgebnis.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAbschlussHA9

> AbschlussErgebnis getAbschlussHA9(abschlussFaecher)

Führt eine Prüfung auf einen Hauptschulabschluss nach der Klasse 9 an einer Gesamtschule durch.

Prüft anhand der übergeben Fächerdaten, ob ein Hauptschulabschluss der Klasse 9 an einer Gesamtschule erreicht wird oder nicht. Im Falle, dass er nicht erreicht wird, werden ggf. Nachprüfungsfächer zurückgegeben.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.AbschlussGEApi();
let abschlussFaecher = new SvwsOpenApi.AbschlussFaecher(); // AbschlussFaecher | Die Fächerdaten für die Abschlussberechnung
apiInstance.getAbschlussHA9(abschlussFaecher).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abschlussFaecher** | [**AbschlussFaecher**](AbschlussFaecher.md)| Die Fächerdaten für die Abschlussberechnung | 

### Return type

[**AbschlussErgebnis**](AbschlussErgebnis.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAbschlussMSA

> AbschlussErgebnis getAbschlussMSA(abschlussFaecher)

Führt eine Prüfung auf einen Mittleren Schulabschluss nach der Klasse 10 an einer Gesamtschule durch.

Prüft anhand der übergeben Fächerdaten, ob ein Mittlerer Schulabschluss nach der Klasse 10 an einer Gesamtschule erreicht wird oder nicht. Im Falle, dass er nicht erreicht wird, werden ggf. Nachprüfungsfächer zurückgegeben.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.AbschlussGEApi();
let abschlussFaecher = new SvwsOpenApi.AbschlussFaecher(); // AbschlussFaecher | Die Fächerdaten für die Abschlussberechnung
apiInstance.getAbschlussMSA(abschlussFaecher).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abschlussFaecher** | [**AbschlussFaecher**](AbschlussFaecher.md)| Die Fächerdaten für die Abschlussberechnung | 

### Return type

[**AbschlussErgebnis**](AbschlussErgebnis.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAbschlussMSAQ

> AbschlussErgebnis getAbschlussMSAQ(abschlussFaecher)

Führt eine Prüfung auf die Berechtigung zum Besuch der gymnasialen Oberstufe im Rahmen eines Mittleren Schulabschluss nach der Klasse 10 an einer Gesamtschule durch.

Prüft anhand der übergeben Fächerdaten, ob die Berechtigung zum Besuch der gymnasialen Oberstufe im Rahmen eines Mittlerer Schulabschlusses nach der Klasse 10 an einer Gesamtschule erreicht wird oder nicht.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.AbschlussGEApi();
let abschlussFaecher = new SvwsOpenApi.AbschlussFaecher(); // AbschlussFaecher | Die Fächerdaten für die Prüfung der Berechtigung
apiInstance.getAbschlussMSAQ(abschlussFaecher).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abschlussFaecher** | [**AbschlussFaecher**](AbschlussFaecher.md)| Die Fächerdaten für die Prüfung der Berechtigung | 

### Return type

[**AbschlussErgebnis**](AbschlussErgebnis.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPrognose

> AbschlussErgebnis getPrognose(abschlussFaecher)

Führt eine Abschlussprognose für die Gesamtschule aus.

Führt anhand der übergeben Fächerdaten eine Abschlussprognose für den Gesamtschulabschluss nach Klasse 9 bzw. Klasse 10 durch.Wird der Jahrgang 10 angegeben, so findet keine Prüfung auf den HA9 statt.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.AbschlussGEApi();
let abschlussFaecher = new SvwsOpenApi.AbschlussFaecher(); // AbschlussFaecher | Der Jahrgang und die Fächerdaten für die Prognose
apiInstance.getPrognose(abschlussFaecher).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abschlussFaecher** | [**AbschlussFaecher**](AbschlussFaecher.md)| Der Jahrgang und die Fächerdaten für die Prognose | 

### Return type

[**AbschlussErgebnis**](AbschlussErgebnis.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

