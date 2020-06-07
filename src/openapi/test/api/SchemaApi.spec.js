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
    instance = new SvwsOpenApi.SchemaApi();
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

  describe('SchemaApi', function() {
    describe('createSchema', function() {
      it('should call createSchema successfully', function(done) {
        //uncomment below and update the code to test createSchema
        //instance.createSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSchemaCurrent', function() {
      it('should call createSchemaCurrent successfully', function(done) {
        //uncomment below and update the code to test createSchemaCurrent
        //instance.createSchemaCurrent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('destroySchema', function() {
      it('should call destroySchema successfully', function(done) {
        //uncomment below and update the code to test destroySchema
        //instance.destroySchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSchemaListe', function() {
      it('should call getSchemaListe successfully', function(done) {
        //uncomment below and update the code to test getSchemaListe
        //instance.getSchemaListe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSchema', function() {
      it('should call updateSchema successfully', function(done) {
        //uncomment below and update the code to test updateSchema
        //instance.updateSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSchemaToCurrent', function() {
      it('should call updateSchemaToCurrent successfully', function(done) {
        //uncomment below and update the code to test updateSchemaToCurrent
        //instance.updateSchemaToCurrent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
