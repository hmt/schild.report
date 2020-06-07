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

import ApiClient from '../ApiClient';

/**
 * The LehrerKatalogBeschaeftigungsartEintrag model module.
 * @module model/LehrerKatalogBeschaeftigungsartEintrag
 * @version 1.0.0
 */
class LehrerKatalogBeschaeftigungsartEintrag {
    /**
     * Constructs a new <code>LehrerKatalogBeschaeftigungsartEintrag</code>.
     * ein Eintrag in dem Katalog der Lehrer-Beschäftigungsart.
     * @alias module:model/LehrerKatalogBeschaeftigungsartEintrag
     * @param id {Number} die ID des Katalog-Eintrags
     * @param kuerzel {String} das Kürzel für die Beschäftigungsart
     * @param text {String} die Beschaeftigungsart
     */
    constructor(id, kuerzel, text) { 
        
        LehrerKatalogBeschaeftigungsartEintrag.initialize(this, id, kuerzel, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, kuerzel, text) { 
        obj['id'] = id;
        obj['kuerzel'] = kuerzel;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>LehrerKatalogBeschaeftigungsartEintrag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LehrerKatalogBeschaeftigungsartEintrag} obj Optional instance to populate.
     * @return {module:model/LehrerKatalogBeschaeftigungsartEintrag} The populated <code>LehrerKatalogBeschaeftigungsartEintrag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LehrerKatalogBeschaeftigungsartEintrag();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('kuerzel')) {
                obj['kuerzel'] = ApiClient.convertToType(data['kuerzel'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * die ID des Katalog-Eintrags
 * @member {Number} id
 */
LehrerKatalogBeschaeftigungsartEintrag.prototype['id'] = undefined;

/**
 * das Kürzel für die Beschäftigungsart
 * @member {String} kuerzel
 */
LehrerKatalogBeschaeftigungsartEintrag.prototype['kuerzel'] = undefined;

/**
 * die Beschaeftigungsart
 * @member {String} text
 */
LehrerKatalogBeschaeftigungsartEintrag.prototype['text'] = undefined;






export default LehrerKatalogBeschaeftigungsartEintrag;

