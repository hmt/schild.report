# SvwsOpenApi.SchemaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSchema**](SchemaApi.md#createSchema) | **PUT** /api/schema/root/create/{schema}/{revision} | Erstellt ein neues Schema der angegebenen Revision und dem angegebenen Namen.
[**createSchemaCurrent**](SchemaApi.md#createSchemaCurrent) | **PUT** /api/schema/root/create/{schema} | Erstellt ein neues Schema der aktuellen Revision mit dem angegebenen Namen.
[**destroySchema**](SchemaApi.md#destroySchema) | **POST** /api/schema/root/destroy/{schema} | Entfernt das bestehende Schema mit dem angegebenen Namen.
[**getSchemaListe**](SchemaApi.md#getSchemaListe) | **GET** /api/schema/root/liste | 
[**updateSchema**](SchemaApi.md#updateSchema) | **POST** /db/{schema}/api/update/{revision} | Aktualisiert das angegebene Schema auf die angegebene Revision.
[**updateSchemaToCurrent**](SchemaApi.md#updateSchemaToCurrent) | **POST** /db/{schema}/api/update | Aktualisiert das angegebene Schema auf die neueste Revision.



## createSchema

> createSchema(schema, revision, benutzerKennwort)

Erstellt ein neues Schema der angegebenen Revision und dem angegebenen Namen.

Erstellt ein neues Schema der angegebenen Revision und dem angegebenen Namen, falls keine Schema mit dem angebenen Namen bereits existiert.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchemaApi();
let schema = "schema_example"; // String | 
let revision = 56; // Number | 
let benutzerKennwort = new SvwsOpenApi.BenutzerKennwort(); // BenutzerKennwort | Der Benutzername und das Kennwort für den administrativen Zugang zum Schema
apiInstance.createSchema(schema, revision, benutzerKennwort).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **revision** | **Number**|  | 
 **benutzerKennwort** | [**BenutzerKennwort**](BenutzerKennwort.md)| Der Benutzername und das Kennwort für den administrativen Zugang zum Schema | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createSchemaCurrent

> createSchemaCurrent(schema, benutzerKennwort)

Erstellt ein neues Schema der aktuellen Revision mit dem angegebenen Namen.

Erstellt ein neues Schema der aktuellen Revision mit dem angegebenen Namen, falls keines mit dem angebenen Namen bereits existiert.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchemaApi();
let schema = "schema_example"; // String | 
let benutzerKennwort = new SvwsOpenApi.BenutzerKennwort(); // BenutzerKennwort | Der Benutzername und das Kennwort für den administrativen Zugang zum Schema
apiInstance.createSchemaCurrent(schema, benutzerKennwort).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **benutzerKennwort** | [**BenutzerKennwort**](BenutzerKennwort.md)| Der Benutzername und das Kennwort für den administrativen Zugang zum Schema | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## destroySchema

> [String] destroySchema(schema)

Entfernt das bestehende Schema mit dem angegebenen Namen.

Entfernt das Schema mit dem angegebenen Namen, falls es existiert.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchemaApi();
let schema = "schema_example"; // String | 
apiInstance.destroySchema(schema).then((data) => {
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

**[String]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSchemaListe

> [String] getSchemaListe()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchemaApi();
apiInstance.getSchemaListe().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSchema

> [String] updateSchema(schema, revision)

Aktualisiert das angegebene Schema auf die angegebene Revision.

Prüft das Schema bezüglich der aktuellen Revision und aktualisiert das Schema ggf. auf die übergebene Revision, sofern diese in der Schema-Definition existiert.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchemaApi();
let schema = "schema_example"; // String | 
let revision = 56; // Number | 
apiInstance.updateSchema(schema, revision).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **String**|  | 
 **revision** | **Number**|  | 

### Return type

**[String]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSchemaToCurrent

> [String] updateSchemaToCurrent(schema)

Aktualisiert das angegebene Schema auf die neueste Revision.

Prüft das Schema bezüglich der aktuellen Revision und aktualisiert das Schema ggf. auf die neueste Revision.

### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.SchemaApi();
let schema = "schema_example"; // String | 
apiInstance.updateSchemaToCurrent(schema).then((data) => {
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

**[String]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

