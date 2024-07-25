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
import { RoleBinding } from '../models';
// @ts-ignore
import { RoleBindingList } from '../models';
/**
 * RoleBindingV1alpha1Api - axios parameter creator
 * @export
 */
export const RoleBindingV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create RoleBinding
         * @param {RoleBinding} [roleBinding] Fresh rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRoleBinding: async (roleBinding?: RoleBinding, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/rolebindings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(roleBinding, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete RoleBinding
         * @param {string} name Name of rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoleBinding: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteRoleBinding', 'name', name)
            const localVarPath = `/api/v1alpha1/rolebindings/{name}`
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
         * Get RoleBinding
         * @param {string} name Name of rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoleBinding: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getRoleBinding', 'name', name)
            const localVarPath = `/api/v1alpha1/rolebindings/{name}`
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
         * List RoleBinding
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRoleBinding: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/rolebindings`;
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
         * Patch RoleBinding
         * @param {string} name Name of rolebinding
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRoleBinding: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchRoleBinding', 'name', name)
            const localVarPath = `/api/v1alpha1/rolebindings/{name}`
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
         * Update RoleBinding
         * @param {string} name Name of rolebinding
         * @param {RoleBinding} [roleBinding] Updated rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRoleBinding: async (name: string, roleBinding?: RoleBinding, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateRoleBinding', 'name', name)
            const localVarPath = `/api/v1alpha1/rolebindings/{name}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(roleBinding, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoleBindingV1alpha1Api - functional programming interface
 * @export
 */
export const RoleBindingV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoleBindingV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create RoleBinding
         * @param {RoleBinding} [roleBinding] Fresh rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRoleBinding(roleBinding?: RoleBinding, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoleBinding>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoleBinding(roleBinding, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoleBindingV1alpha1Api.createRoleBinding']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete RoleBinding
         * @param {string} name Name of rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRoleBinding(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoleBinding(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoleBindingV1alpha1Api.deleteRoleBinding']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get RoleBinding
         * @param {string} name Name of rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoleBinding(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoleBinding>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoleBinding(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoleBindingV1alpha1Api.getRoleBinding']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List RoleBinding
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRoleBinding(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoleBindingList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRoleBinding(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoleBindingV1alpha1Api.listRoleBinding']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch RoleBinding
         * @param {string} name Name of rolebinding
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchRoleBinding(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoleBinding>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchRoleBinding(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoleBindingV1alpha1Api.patchRoleBinding']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update RoleBinding
         * @param {string} name Name of rolebinding
         * @param {RoleBinding} [roleBinding] Updated rolebinding
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRoleBinding(name: string, roleBinding?: RoleBinding, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoleBinding>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoleBinding(name, roleBinding, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoleBindingV1alpha1Api.updateRoleBinding']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RoleBindingV1alpha1Api - factory interface
 * @export
 */
export const RoleBindingV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoleBindingV1alpha1ApiFp(configuration)
    return {
        /**
         * Create RoleBinding
         * @param {RoleBindingV1alpha1ApiCreateRoleBindingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRoleBinding(requestParameters: RoleBindingV1alpha1ApiCreateRoleBindingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RoleBinding> {
            return localVarFp.createRoleBinding(requestParameters.roleBinding, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete RoleBinding
         * @param {RoleBindingV1alpha1ApiDeleteRoleBindingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoleBinding(requestParameters: RoleBindingV1alpha1ApiDeleteRoleBindingRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRoleBinding(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get RoleBinding
         * @param {RoleBindingV1alpha1ApiGetRoleBindingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoleBinding(requestParameters: RoleBindingV1alpha1ApiGetRoleBindingRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoleBinding> {
            return localVarFp.getRoleBinding(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List RoleBinding
         * @param {RoleBindingV1alpha1ApiListRoleBindingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRoleBinding(requestParameters: RoleBindingV1alpha1ApiListRoleBindingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RoleBindingList> {
            return localVarFp.listRoleBinding(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch RoleBinding
         * @param {RoleBindingV1alpha1ApiPatchRoleBindingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRoleBinding(requestParameters: RoleBindingV1alpha1ApiPatchRoleBindingRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoleBinding> {
            return localVarFp.patchRoleBinding(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update RoleBinding
         * @param {RoleBindingV1alpha1ApiUpdateRoleBindingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRoleBinding(requestParameters: RoleBindingV1alpha1ApiUpdateRoleBindingRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoleBinding> {
            return localVarFp.updateRoleBinding(requestParameters.name, requestParameters.roleBinding, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRoleBinding operation in RoleBindingV1alpha1Api.
 * @export
 * @interface RoleBindingV1alpha1ApiCreateRoleBindingRequest
 */
export interface RoleBindingV1alpha1ApiCreateRoleBindingRequest {
    /**
     * Fresh rolebinding
     * @type {RoleBinding}
     * @memberof RoleBindingV1alpha1ApiCreateRoleBinding
     */
    readonly roleBinding?: RoleBinding
}

/**
 * Request parameters for deleteRoleBinding operation in RoleBindingV1alpha1Api.
 * @export
 * @interface RoleBindingV1alpha1ApiDeleteRoleBindingRequest
 */
export interface RoleBindingV1alpha1ApiDeleteRoleBindingRequest {
    /**
     * Name of rolebinding
     * @type {string}
     * @memberof RoleBindingV1alpha1ApiDeleteRoleBinding
     */
    readonly name: string
}

/**
 * Request parameters for getRoleBinding operation in RoleBindingV1alpha1Api.
 * @export
 * @interface RoleBindingV1alpha1ApiGetRoleBindingRequest
 */
export interface RoleBindingV1alpha1ApiGetRoleBindingRequest {
    /**
     * Name of rolebinding
     * @type {string}
     * @memberof RoleBindingV1alpha1ApiGetRoleBinding
     */
    readonly name: string
}

/**
 * Request parameters for listRoleBinding operation in RoleBindingV1alpha1Api.
 * @export
 * @interface RoleBindingV1alpha1ApiListRoleBindingRequest
 */
export interface RoleBindingV1alpha1ApiListRoleBindingRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof RoleBindingV1alpha1ApiListRoleBinding
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof RoleBindingV1alpha1ApiListRoleBinding
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof RoleBindingV1alpha1ApiListRoleBinding
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof RoleBindingV1alpha1ApiListRoleBinding
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof RoleBindingV1alpha1ApiListRoleBinding
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchRoleBinding operation in RoleBindingV1alpha1Api.
 * @export
 * @interface RoleBindingV1alpha1ApiPatchRoleBindingRequest
 */
export interface RoleBindingV1alpha1ApiPatchRoleBindingRequest {
    /**
     * Name of rolebinding
     * @type {string}
     * @memberof RoleBindingV1alpha1ApiPatchRoleBinding
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof RoleBindingV1alpha1ApiPatchRoleBinding
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateRoleBinding operation in RoleBindingV1alpha1Api.
 * @export
 * @interface RoleBindingV1alpha1ApiUpdateRoleBindingRequest
 */
export interface RoleBindingV1alpha1ApiUpdateRoleBindingRequest {
    /**
     * Name of rolebinding
     * @type {string}
     * @memberof RoleBindingV1alpha1ApiUpdateRoleBinding
     */
    readonly name: string

    /**
     * Updated rolebinding
     * @type {RoleBinding}
     * @memberof RoleBindingV1alpha1ApiUpdateRoleBinding
     */
    readonly roleBinding?: RoleBinding
}

/**
 * RoleBindingV1alpha1Api - object-oriented interface
 * @export
 * @class RoleBindingV1alpha1Api
 * @extends {BaseAPI}
 */
export class RoleBindingV1alpha1Api extends BaseAPI {
    /**
     * Create RoleBinding
     * @param {RoleBindingV1alpha1ApiCreateRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoleBindingV1alpha1Api
     */
    public createRoleBinding(requestParameters: RoleBindingV1alpha1ApiCreateRoleBindingRequest = {}, options?: RawAxiosRequestConfig) {
        return RoleBindingV1alpha1ApiFp(this.configuration).createRoleBinding(requestParameters.roleBinding, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete RoleBinding
     * @param {RoleBindingV1alpha1ApiDeleteRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoleBindingV1alpha1Api
     */
    public deleteRoleBinding(requestParameters: RoleBindingV1alpha1ApiDeleteRoleBindingRequest, options?: RawAxiosRequestConfig) {
        return RoleBindingV1alpha1ApiFp(this.configuration).deleteRoleBinding(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get RoleBinding
     * @param {RoleBindingV1alpha1ApiGetRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoleBindingV1alpha1Api
     */
    public getRoleBinding(requestParameters: RoleBindingV1alpha1ApiGetRoleBindingRequest, options?: RawAxiosRequestConfig) {
        return RoleBindingV1alpha1ApiFp(this.configuration).getRoleBinding(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List RoleBinding
     * @param {RoleBindingV1alpha1ApiListRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoleBindingV1alpha1Api
     */
    public listRoleBinding(requestParameters: RoleBindingV1alpha1ApiListRoleBindingRequest = {}, options?: RawAxiosRequestConfig) {
        return RoleBindingV1alpha1ApiFp(this.configuration).listRoleBinding(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch RoleBinding
     * @param {RoleBindingV1alpha1ApiPatchRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoleBindingV1alpha1Api
     */
    public patchRoleBinding(requestParameters: RoleBindingV1alpha1ApiPatchRoleBindingRequest, options?: RawAxiosRequestConfig) {
        return RoleBindingV1alpha1ApiFp(this.configuration).patchRoleBinding(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update RoleBinding
     * @param {RoleBindingV1alpha1ApiUpdateRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoleBindingV1alpha1Api
     */
    public updateRoleBinding(requestParameters: RoleBindingV1alpha1ApiUpdateRoleBindingRequest, options?: RawAxiosRequestConfig) {
        return RoleBindingV1alpha1ApiFp(this.configuration).updateRoleBinding(requestParameters.name, requestParameters.roleBinding, options).then((request) => request(this.axios, this.basePath));
    }
}

