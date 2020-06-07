# SvwsOpenApi.ClientApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClientConfigAppKey**](ClientApi.md#getClientConfigAppKey) | **GET** /db/{schema}/api/client/config/app/{app}/{key} | Gibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert zurück.
[**setClientConfigAppKey**](ClientApi.md#setClientConfigAppKey) | **PUT** /db/{schema}/api/client/config/app/{app}/{key} | Schreibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert in die benutzerspezifische Konfiguration.
[**setClientGlobalConfigAppKey**](ClientApi.md#setClientGlobalConfigAppKey) | **PUT** /db/{schema}/api/client/config/app_global/{app}/{key} | Schreibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert in die globale Konfiguration.



## getClientConfigAppKey

> [ClientKonfiguration] getClientConfigAppKey(schema, app, key)

Gibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert zurück.

Liest den Schlüsselwert aus der Konfiguration für den Client aus. Ist sowohl ein globaler als auch eine benutzerspezifischer Konfigurationseintrag unter den Name vorhanden,so wird der benutzerspezifische Eintrag zurückgegeben. Die benutzerspezifische Konfiguration kann somit globale Einstellungen &#39;überschreiben&#39;. Ist kein Wert vorhanden, so wird ein leerer String zurückgegeben.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.ClientApi();
let schema = "schema_example"; // String | 
let app = "app_example"; // String | 
let key = "key_example"; // String | 
apiInstance.getClientConfigAppKey(schema, app, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **app** | **String**|  | 
 **key** | **String**|  | 

### Return type

[**[ClientKonfiguration]**](ClientKonfiguration.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setClientConfigAppKey

> setClientConfigAppKey(schema, app, key, body)

Schreibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert in die benutzerspezifische Konfiguration.

Schreibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert in die benutzerspezifische Konfiguration. 

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.ClientApi();
let schema = "schema_example"; // String | 
let app = "app_example"; // String | 
let key = "key_example"; // String | 
let body = "body_example"; // String | Der Wert des Konfigurationseintrags
apiInstance.setClientConfigAppKey(schema, app, key, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **app** | **String**|  | 
 **key** | **String**|  | 
 **body** | **String**| Der Wert des Konfigurationseintrags | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## setClientGlobalConfigAppKey

> setClientGlobalConfigAppKey(schema, app, key, body)

Schreibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert in die globale Konfiguration.

Schreibt den Konfigurationseintrag der angegebenen Anwendung für den angebenen Schlüsselwert in die globale Konfiguration. Dabei wird geprüft, ob der angemeldete Benutzer administrative Rechte hat.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.ClientApi();
let schema = "schema_example"; // String | 
let app = "app_example"; // String | 
let key = "key_example"; // String | 
let body = "body_example"; // String | Der Wert des Konfigurationseintrags
apiInstance.setClientGlobalConfigAppKey(schema, app, key, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **app** | **String**|  | 
 **key** | **String**|  | 
 **body** | **String**| Der Wert des Konfigurationseintrags | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

