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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { Tag } from '../models';
// @ts-ignore
import { TagList } from '../models';
/**
 * TagV1alpha1Api - axios parameter creator
 * @export
 */
export const TagV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create Tag
         * @param {Tag} [tag] Fresh tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTag: async (tag?: Tag, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tag, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete Tag
         * @param {string} name Name of tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTag: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteTag', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/tags/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Tag
         * @param {string} name Name of tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTag: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getTag', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/tags/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List Tag
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTag: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch Tag
         * @param {string} name Name of tag
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTag: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchTag', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/tags/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update Tag
         * @param {string} name Name of tag
         * @param {Tag} [tag] Updated tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTag: async (name: string, tag?: Tag, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateTag', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/tags/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tag, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TagV1alpha1Api - functional programming interface
 * @export
 */
export const TagV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TagV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create Tag
         * @param {Tag} [tag] Fresh tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTag(tag?: Tag, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTag(tag, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TagV1alpha1Api.createTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete Tag
         * @param {string} name Name of tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTag(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTag(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TagV1alpha1Api.deleteTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Tag
         * @param {string} name Name of tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTag(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTag(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TagV1alpha1Api.getTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List Tag
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTag(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTag(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TagV1alpha1Api.listTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch Tag
         * @param {string} name Name of tag
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchTag(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchTag(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TagV1alpha1Api.patchTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update Tag
         * @param {string} name Name of tag
         * @param {Tag} [tag] Updated tag
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTag(name: string, tag?: Tag, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTag(name, tag, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TagV1alpha1Api.updateTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TagV1alpha1Api - factory interface
 * @export
 */
export const TagV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TagV1alpha1ApiFp(configuration)
    return {
        /**
         * Create Tag
         * @param {TagV1alpha1ApiCreateTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTag(requestParameters: TagV1alpha1ApiCreateTagRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Tag> {
            return localVarFp.createTag(requestParameters.tag, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete Tag
         * @param {TagV1alpha1ApiDeleteTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTag(requestParameters: TagV1alpha1ApiDeleteTagRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteTag(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Tag
         * @param {TagV1alpha1ApiGetTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTag(requestParameters: TagV1alpha1ApiGetTagRequest, options?: RawAxiosRequestConfig): AxiosPromise<Tag> {
            return localVarFp.getTag(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List Tag
         * @param {TagV1alpha1ApiListTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTag(requestParameters: TagV1alpha1ApiListTagRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TagList> {
            return localVarFp.listTag(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch Tag
         * @param {TagV1alpha1ApiPatchTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTag(requestParameters: TagV1alpha1ApiPatchTagRequest, options?: RawAxiosRequestConfig): AxiosPromise<Tag> {
            return localVarFp.patchTag(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update Tag
         * @param {TagV1alpha1ApiUpdateTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTag(requestParameters: TagV1alpha1ApiUpdateTagRequest, options?: RawAxiosRequestConfig): AxiosPromise<Tag> {
            return localVarFp.updateTag(requestParameters.name, requestParameters.tag, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createTag operation in TagV1alpha1Api.
 * @export
 * @interface TagV1alpha1ApiCreateTagRequest
 */
export interface TagV1alpha1ApiCreateTagRequest {
    /**
     * Fresh tag
     * @type {Tag}
     * @memberof TagV1alpha1ApiCreateTag
     */
    readonly tag?: Tag
}

/**
 * Request parameters for deleteTag operation in TagV1alpha1Api.
 * @export
 * @interface TagV1alpha1ApiDeleteTagRequest
 */
export interface TagV1alpha1ApiDeleteTagRequest {
    /**
     * Name of tag
     * @type {string}
     * @memberof TagV1alpha1ApiDeleteTag
     */
    readonly name: string
}

/**
 * Request parameters for getTag operation in TagV1alpha1Api.
 * @export
 * @interface TagV1alpha1ApiGetTagRequest
 */
export interface TagV1alpha1ApiGetTagRequest {
    /**
     * Name of tag
     * @type {string}
     * @memberof TagV1alpha1ApiGetTag
     */
    readonly name: string
}

/**
 * Request parameters for listTag operation in TagV1alpha1Api.
 * @export
 * @interface TagV1alpha1ApiListTagRequest
 */
export interface TagV1alpha1ApiListTagRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof TagV1alpha1ApiListTag
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof TagV1alpha1ApiListTag
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof TagV1alpha1ApiListTag
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof TagV1alpha1ApiListTag
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof TagV1alpha1ApiListTag
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchTag operation in TagV1alpha1Api.
 * @export
 * @interface TagV1alpha1ApiPatchTagRequest
 */
export interface TagV1alpha1ApiPatchTagRequest {
    /**
     * Name of tag
     * @type {string}
     * @memberof TagV1alpha1ApiPatchTag
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof TagV1alpha1ApiPatchTag
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateTag operation in TagV1alpha1Api.
 * @export
 * @interface TagV1alpha1ApiUpdateTagRequest
 */
export interface TagV1alpha1ApiUpdateTagRequest {
    /**
     * Name of tag
     * @type {string}
     * @memberof TagV1alpha1ApiUpdateTag
     */
    readonly name: string

    /**
     * Updated tag
     * @type {Tag}
     * @memberof TagV1alpha1ApiUpdateTag
     */
    readonly tag?: Tag
}

/**
 * TagV1alpha1Api - object-oriented interface
 * @export
 * @class TagV1alpha1Api
 * @extends {BaseAPI}
 */
export class TagV1alpha1Api extends BaseAPI {
    /**
     * Create Tag
     * @param {TagV1alpha1ApiCreateTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagV1alpha1Api
     */
    public createTag(requestParameters: TagV1alpha1ApiCreateTagRequest = {}, options?: RawAxiosRequestConfig) {
        return TagV1alpha1ApiFp(this.configuration).createTag(requestParameters.tag, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete Tag
     * @param {TagV1alpha1ApiDeleteTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagV1alpha1Api
     */
    public deleteTag(requestParameters: TagV1alpha1ApiDeleteTagRequest, options?: RawAxiosRequestConfig) {
        return TagV1alpha1ApiFp(this.configuration).deleteTag(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Tag
     * @param {TagV1alpha1ApiGetTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagV1alpha1Api
     */
    public getTag(requestParameters: TagV1alpha1ApiGetTagRequest, options?: RawAxiosRequestConfig) {
        return TagV1alpha1ApiFp(this.configuration).getTag(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List Tag
     * @param {TagV1alpha1ApiListTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagV1alpha1Api
     */
    public listTag(requestParameters: TagV1alpha1ApiListTagRequest = {}, options?: RawAxiosRequestConfig) {
        return TagV1alpha1ApiFp(this.configuration).listTag(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch Tag
     * @param {TagV1alpha1ApiPatchTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagV1alpha1Api
     */
    public patchTag(requestParameters: TagV1alpha1ApiPatchTagRequest, options?: RawAxiosRequestConfig) {
        return TagV1alpha1ApiFp(this.configuration).patchTag(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update Tag
     * @param {TagV1alpha1ApiUpdateTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagV1alpha1Api
     */
    public updateTag(requestParameters: TagV1alpha1ApiUpdateTagRequest, options?: RawAxiosRequestConfig) {
        return TagV1alpha1ApiFp(this.configuration).updateTag(requestParameters.name, requestParameters.tag, options).then((request) => request(this.axios, this.basePath));
    }
}

