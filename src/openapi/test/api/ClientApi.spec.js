/**
 * SVWSOpenAPI
 * Ein Server für die Bereitstellung der Open-API eines SVWS-Servers und Anwendungen zum Zugriff auf die Daten dieses Servers auf [https://localhost](https://localhost).
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: admin@localhost
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SvwsOpenApi);
  }
}(this, function(expect, SvwsOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SvwsOpenApi.ClientApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ClientApi', function() {
    describe('getClientConfigAppKey', function() {
      it('should call getClientConfigAppKey successfully', function(done) {
        //uncomment below and update the code to test getClientConfigAppKey
        //instance.getClientConfigAppKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setClientConfigAppKey', function() {
      it('should call setClientConfigAppKey successfully', function(done) {
        //uncomment below and update the code to test setClientConfigAppKey
        //instance.setClientConfigAppKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setClientGlobalConfigAppKey', function() {
      it('should call setClientGlobalConfigAppKey successfully', function(done) {
        //uncomment below and update the code to test setClientGlobalConfigAppKey
        //instance.setClientGlobalConfigAppKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
