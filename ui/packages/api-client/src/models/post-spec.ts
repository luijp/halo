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
import { Excerpt } from './excerpt';

/**
 * 
 * @export
 * @interface PostSpec
 */
export interface PostSpec {
    /**
     * 
     * @type {boolean}
     * @memberof PostSpec
     */
    'allowComment': boolean;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'baseSnapshot'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostSpec
     */
    'categories'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'cover'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PostSpec
     */
    'deleted': boolean;
    /**
     * 
     * @type {Excerpt}
     * @memberof PostSpec
     */
    'excerpt': Excerpt;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'headSnapshot'?: string;
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof PostSpec
     */
    'htmlMetas'?: Array<{ [key: string]: string; }>;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'owner'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PostSpec
     */
    'pinned': boolean;
    /**
     * 
     * @type {number}
     * @memberof PostSpec
     */
    'priority': number;
    /**
     * 
     * @type {boolean}
     * @memberof PostSpec
     */
    'publish': boolean;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'publishTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'releaseSnapshot'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'slug': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostSpec
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'template'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof PostSpec
     */
    'visible': PostSpecVisibleEnum;
}

export const PostSpecVisibleEnum = {
    Public: 'PUBLIC',
    Internal: 'INTERNAL',
    Private: 'PRIVATE'
} as const;

export type PostSpecVisibleEnum = typeof PostSpecVisibleEnum[keyof typeof PostSpecVisibleEnum];


