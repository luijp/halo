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
import { SinglePage } from '../models';
// @ts-ignore
import { SinglePageList } from '../models';
/**
 * SinglePageV1alpha1Api - axios parameter creator
 * @export
 */
export const SinglePageV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create SinglePage
         * @param {SinglePage} [singlePage] Fresh singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSinglePage: async (singlePage?: SinglePage, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(singlePage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSinglePage: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteSinglePage', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages/{name}`
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
         * Get SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSinglePage: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getSinglePage', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages/{name}`
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
         * List SinglePage
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSinglePage: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages`;
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
         * Patch SinglePage
         * @param {string} name Name of singlepage
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSinglePage: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchSinglePage', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages/{name}`
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
         * Update SinglePage
         * @param {string} name Name of singlepage
         * @param {SinglePage} [singlePage] Updated singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSinglePage: async (name: string, singlePage?: SinglePage, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateSinglePage', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages/{name}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(singlePage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SinglePageV1alpha1Api - functional programming interface
 * @export
 */
export const SinglePageV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SinglePageV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create SinglePage
         * @param {SinglePage} [singlePage] Fresh singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSinglePage(singlePage?: SinglePage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSinglePage(singlePage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1Api.createSinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSinglePage(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSinglePage(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1Api.deleteSinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSinglePage(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSinglePage(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1Api.getSinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List SinglePage
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSinglePage(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePageList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSinglePage(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1Api.listSinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch SinglePage
         * @param {string} name Name of singlepage
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchSinglePage(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSinglePage(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1Api.patchSinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update SinglePage
         * @param {string} name Name of singlepage
         * @param {SinglePage} [singlePage] Updated singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSinglePage(name: string, singlePage?: SinglePage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSinglePage(name, singlePage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1Api.updateSinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SinglePageV1alpha1Api - factory interface
 * @export
 */
export const SinglePageV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SinglePageV1alpha1ApiFp(configuration)
    return {
        /**
         * Create SinglePage
         * @param {SinglePageV1alpha1ApiCreateSinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSinglePage(requestParameters: SinglePageV1alpha1ApiCreateSinglePageRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SinglePage> {
            return localVarFp.createSinglePage(requestParameters.singlePage, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete SinglePage
         * @param {SinglePageV1alpha1ApiDeleteSinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSinglePage(requestParameters: SinglePageV1alpha1ApiDeleteSinglePageRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSinglePage(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get SinglePage
         * @param {SinglePageV1alpha1ApiGetSinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSinglePage(requestParameters: SinglePageV1alpha1ApiGetSinglePageRequest, options?: RawAxiosRequestConfig): AxiosPromise<SinglePage> {
            return localVarFp.getSinglePage(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List SinglePage
         * @param {SinglePageV1alpha1ApiListSinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSinglePage(requestParameters: SinglePageV1alpha1ApiListSinglePageRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SinglePageList> {
            return localVarFp.listSinglePage(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch SinglePage
         * @param {SinglePageV1alpha1ApiPatchSinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSinglePage(requestParameters: SinglePageV1alpha1ApiPatchSinglePageRequest, options?: RawAxiosRequestConfig): AxiosPromise<SinglePage> {
            return localVarFp.patchSinglePage(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update SinglePage
         * @param {SinglePageV1alpha1ApiUpdateSinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSinglePage(requestParameters: SinglePageV1alpha1ApiUpdateSinglePageRequest, options?: RawAxiosRequestConfig): AxiosPromise<SinglePage> {
            return localVarFp.updateSinglePage(requestParameters.name, requestParameters.singlePage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSinglePage operation in SinglePageV1alpha1Api.
 * @export
 * @interface SinglePageV1alpha1ApiCreateSinglePageRequest
 */
export interface SinglePageV1alpha1ApiCreateSinglePageRequest {
    /**
     * Fresh singlepage
     * @type {SinglePage}
     * @memberof SinglePageV1alpha1ApiCreateSinglePage
     */
    readonly singlePage?: SinglePage
}

/**
 * Request parameters for deleteSinglePage operation in SinglePageV1alpha1Api.
 * @export
 * @interface SinglePageV1alpha1ApiDeleteSinglePageRequest
 */
export interface SinglePageV1alpha1ApiDeleteSinglePageRequest {
    /**
     * Name of singlepage
     * @type {string}
     * @memberof SinglePageV1alpha1ApiDeleteSinglePage
     */
    readonly name: string
}

/**
 * Request parameters for getSinglePage operation in SinglePageV1alpha1Api.
 * @export
 * @interface SinglePageV1alpha1ApiGetSinglePageRequest
 */
export interface SinglePageV1alpha1ApiGetSinglePageRequest {
    /**
     * Name of singlepage
     * @type {string}
     * @memberof SinglePageV1alpha1ApiGetSinglePage
     */
    readonly name: string
}

/**
 * Request parameters for listSinglePage operation in SinglePageV1alpha1Api.
 * @export
 * @interface SinglePageV1alpha1ApiListSinglePageRequest
 */
export interface SinglePageV1alpha1ApiListSinglePageRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof SinglePageV1alpha1ApiListSinglePage
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof SinglePageV1alpha1ApiListSinglePage
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof SinglePageV1alpha1ApiListSinglePage
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof SinglePageV1alpha1ApiListSinglePage
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof SinglePageV1alpha1ApiListSinglePage
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchSinglePage operation in SinglePageV1alpha1Api.
 * @export
 * @interface SinglePageV1alpha1ApiPatchSinglePageRequest
 */
export interface SinglePageV1alpha1ApiPatchSinglePageRequest {
    /**
     * Name of singlepage
     * @type {string}
     * @memberof SinglePageV1alpha1ApiPatchSinglePage
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof SinglePageV1alpha1ApiPatchSinglePage
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateSinglePage operation in SinglePageV1alpha1Api.
 * @export
 * @interface SinglePageV1alpha1ApiUpdateSinglePageRequest
 */
export interface SinglePageV1alpha1ApiUpdateSinglePageRequest {
    /**
     * Name of singlepage
     * @type {string}
     * @memberof SinglePageV1alpha1ApiUpdateSinglePage
     */
    readonly name: string

    /**
     * Updated singlepage
     * @type {SinglePage}
     * @memberof SinglePageV1alpha1ApiUpdateSinglePage
     */
    readonly singlePage?: SinglePage
}

/**
 * SinglePageV1alpha1Api - object-oriented interface
 * @export
 * @class SinglePageV1alpha1Api
 * @extends {BaseAPI}
 */
export class SinglePageV1alpha1Api extends BaseAPI {
    /**
     * Create SinglePage
     * @param {SinglePageV1alpha1ApiCreateSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1Api
     */
    public createSinglePage(requestParameters: SinglePageV1alpha1ApiCreateSinglePageRequest = {}, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1ApiFp(this.configuration).createSinglePage(requestParameters.singlePage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete SinglePage
     * @param {SinglePageV1alpha1ApiDeleteSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1Api
     */
    public deleteSinglePage(requestParameters: SinglePageV1alpha1ApiDeleteSinglePageRequest, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1ApiFp(this.configuration).deleteSinglePage(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get SinglePage
     * @param {SinglePageV1alpha1ApiGetSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1Api
     */
    public getSinglePage(requestParameters: SinglePageV1alpha1ApiGetSinglePageRequest, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1ApiFp(this.configuration).getSinglePage(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List SinglePage
     * @param {SinglePageV1alpha1ApiListSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1Api
     */
    public listSinglePage(requestParameters: SinglePageV1alpha1ApiListSinglePageRequest = {}, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1ApiFp(this.configuration).listSinglePage(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch SinglePage
     * @param {SinglePageV1alpha1ApiPatchSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1Api
     */
    public patchSinglePage(requestParameters: SinglePageV1alpha1ApiPatchSinglePageRequest, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1ApiFp(this.configuration).patchSinglePage(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update SinglePage
     * @param {SinglePageV1alpha1ApiUpdateSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1Api
     */
    public updateSinglePage(requestParameters: SinglePageV1alpha1ApiUpdateSinglePageRequest, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1ApiFp(this.configuration).updateSinglePage(requestParameters.name, requestParameters.singlePage, options).then((request) => request(this.axios, this.basePath));
    }
}

