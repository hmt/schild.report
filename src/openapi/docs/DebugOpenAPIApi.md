# SvwsOpenApi.DebugOpenAPIApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**debugFileFavicon16x16PNG**](DebugOpenAPIApi.md#debugFileFavicon16x16PNG) | **GET** /debug/favicon-16x16.png | 
[**debugFileFavicon32x32PNG**](DebugOpenAPIApi.md#debugFileFavicon32x32PNG) | **GET** /debug/favicon-32x32.png | 
[**debugFileIndexHTML**](DebugOpenAPIApi.md#debugFileIndexHTML) | **GET** /debug/index.html | 
[**debugFileSwaggerUIBundleJS**](DebugOpenAPIApi.md#debugFileSwaggerUIBundleJS) | **GET** /debug/swagger-ui-bundle.js | 
[**debugFileSwaggerUIBundleJSMap**](DebugOpenAPIApi.md#debugFileSwaggerUIBundleJSMap) | **GET** /debug/swagger-ui-bundle.js.map | 
[**debugFileSwaggerUICSS**](DebugOpenAPIApi.md#debugFileSwaggerUICSS) | **GET** /debug/swagger-ui.css | 
[**debugFileSwaggerUICSSMap**](DebugOpenAPIApi.md#debugFileSwaggerUICSSMap) | **GET** /debug/swagger-ui.css.map | 
[**debugFileSwaggerUIJS**](DebugOpenAPIApi.md#debugFileSwaggerUIJS) | **GET** /debug/swagger-ui.js | 
[**debugFileSwaggerUIJSMap**](DebugOpenAPIApi.md#debugFileSwaggerUIJSMap) | **GET** /debug/swagger-ui.js.map | 
[**debugFileSwaggerUIStandalonePresetJS**](DebugOpenAPIApi.md#debugFileSwaggerUIStandalonePresetJS) | **GET** /debug/swagger-ui-standalone-preset.js | 
[**debugFileSwaggerUIStandalonePresetJSMap**](DebugOpenAPIApi.md#debugFileSwaggerUIStandalonePresetJSMap) | **GET** /debug/swagger-ui-standalone-preset.js.map | 
[**debugRootWrong**](DebugOpenAPIApi.md#debugRootWrong) | **GET** /debug | 



## debugFileFavicon16x16PNG

> debugFileFavicon16x16PNG()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileFavicon16x16PNG().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png


## debugFileFavicon32x32PNG

> debugFileFavicon32x32PNG()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileFavicon32x32PNG().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png


## debugFileIndexHTML

> debugFileIndexHTML()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileIndexHTML().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


## debugFileSwaggerUIBundleJS

> debugFileSwaggerUIBundleJS()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUIBundleJS().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/javascript


## debugFileSwaggerUIBundleJSMap

> debugFileSwaggerUIBundleJSMap()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUIBundleJSMap().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## debugFileSwaggerUICSS

> debugFileSwaggerUICSS()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUICSS().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/css


## debugFileSwaggerUICSSMap

> debugFileSwaggerUICSSMap()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUICSSMap().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## debugFileSwaggerUIJS

> debugFileSwaggerUIJS()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUIJS().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/javascript


## debugFileSwaggerUIJSMap

> debugFileSwaggerUIJSMap()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUIJSMap().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## debugFileSwaggerUIStandalonePresetJS

> debugFileSwaggerUIStandalonePresetJS()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUIStandalonePresetJS().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/javascript


## debugFileSwaggerUIStandalonePresetJSMap

> debugFileSwaggerUIStandalonePresetJSMap()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugFileSwaggerUIStandalonePresetJSMap().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## debugRootWrong

> debugRootWrong()



### Example

```javascript
import SvwsOpenApi from 'svws_open_api';
let defaultClient = SvwsOpenApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SvwsOpenApi.DebugOpenAPIApi();
apiInstance.debugRootWrong().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html

