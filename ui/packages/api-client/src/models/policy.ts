/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.18.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { PolicySpec } from './policy-spec';

/**
 * 
 * @export
 * @interface Policy
 */
export interface Policy {
    /**
     * 
     * @type {string}
     * @memberof Policy
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Policy
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Policy
     */
    'metadata': Metadata;
    /**
     * 
     * @type {PolicySpec}
     * @memberof Policy
     */
    'spec': PolicySpec;
}

