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
import { SearchOption } from '../models';
// @ts-ignore
import { SearchResult } from '../models';
/**
 * IndexV1alpha1PublicApi - axios parameter creator
 * @export
 */
export const IndexV1alpha1PublicApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search indices.
         * @param {SearchOption} [searchOption] Please note that the \&quot;filterPublished\&quot;, \&quot;filterExposed\&quot; and \&quot;filterRecycled\&quot; fields are ignored in this endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indicesSearch: async (searchOption?: SearchOption, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/api.halo.run/v1alpha1/indices/-/search`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(searchOption, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
         * @param {string} keyword Keyword to search
         * @param {number} [limit] Limit of search results
         * @param {string} [highlightPreTag] Highlight pre tag
         * @param {string} [highlightPostTag] Highlight post tag
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        searchPost: async (keyword: string, limit?: number, highlightPreTag?: string, highlightPostTag?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyword' is not null or undefined
            assertParamExists('searchPost', 'keyword', keyword)
            const localVarPath = `/apis/api.halo.run/v1alpha1/indices/post`;
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

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (highlightPreTag !== undefined) {
                localVarQueryParameter['highlightPreTag'] = highlightPreTag;
            }

            if (highlightPostTag !== undefined) {
                localVarQueryParameter['highlightPostTag'] = highlightPostTag;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IndexV1alpha1PublicApi - functional programming interface
 * @export
 */
export const IndexV1alpha1PublicApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IndexV1alpha1PublicApiAxiosParamCreator(configuration)
    return {
        /**
         * Search indices.
         * @param {SearchOption} [searchOption] Please note that the \&quot;filterPublished\&quot;, \&quot;filterExposed\&quot; and \&quot;filterRecycled\&quot; fields are ignored in this endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indicesSearch(searchOption?: SearchOption, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indicesSearch(searchOption, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IndexV1alpha1PublicApi.indicesSearch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
         * @param {string} keyword Keyword to search
         * @param {number} [limit] Limit of search results
         * @param {string} [highlightPreTag] Highlight pre tag
         * @param {string} [highlightPostTag] Highlight post tag
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async searchPost(keyword: string, limit?: number, highlightPreTag?: string, highlightPostTag?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchPost(keyword, limit, highlightPreTag, highlightPostTag, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IndexV1alpha1PublicApi.searchPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * IndexV1alpha1PublicApi - factory interface
 * @export
 */
export const IndexV1alpha1PublicApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IndexV1alpha1PublicApiFp(configuration)
    return {
        /**
         * Search indices.
         * @param {IndexV1alpha1PublicApiIndicesSearchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indicesSearch(requestParameters: IndexV1alpha1PublicApiIndicesSearchRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SearchResult> {
            return localVarFp.indicesSearch(requestParameters.searchOption, options).then((request) => request(axios, basePath));
        },
        /**
         * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
         * @param {IndexV1alpha1PublicApiSearchPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        searchPost(requestParameters: IndexV1alpha1PublicApiSearchPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<SearchResult> {
            return localVarFp.searchPost(requestParameters.keyword, requestParameters.limit, requestParameters.highlightPreTag, requestParameters.highlightPostTag, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for indicesSearch operation in IndexV1alpha1PublicApi.
 * @export
 * @interface IndexV1alpha1PublicApiIndicesSearchRequest
 */
export interface IndexV1alpha1PublicApiIndicesSearchRequest {
    /**
     * Please note that the \&quot;filterPublished\&quot;, \&quot;filterExposed\&quot; and \&quot;filterRecycled\&quot; fields are ignored in this endpoint.
     * @type {SearchOption}
     * @memberof IndexV1alpha1PublicApiIndicesSearch
     */
    readonly searchOption?: SearchOption
}

/**
 * Request parameters for searchPost operation in IndexV1alpha1PublicApi.
 * @export
 * @interface IndexV1alpha1PublicApiSearchPostRequest
 */
export interface IndexV1alpha1PublicApiSearchPostRequest {
    /**
     * Keyword to search
     * @type {string}
     * @memberof IndexV1alpha1PublicApiSearchPost
     */
    readonly keyword: string

    /**
     * Limit of search results
     * @type {number}
     * @memberof IndexV1alpha1PublicApiSearchPost
     */
    readonly limit?: number

    /**
     * Highlight pre tag
     * @type {string}
     * @memberof IndexV1alpha1PublicApiSearchPost
     */
    readonly highlightPreTag?: string

    /**
     * Highlight post tag
     * @type {string}
     * @memberof IndexV1alpha1PublicApiSearchPost
     */
    readonly highlightPostTag?: string
}

/**
 * IndexV1alpha1PublicApi - object-oriented interface
 * @export
 * @class IndexV1alpha1PublicApi
 * @extends {BaseAPI}
 */
export class IndexV1alpha1PublicApi extends BaseAPI {
    /**
     * Search indices.
     * @param {IndexV1alpha1PublicApiIndicesSearchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IndexV1alpha1PublicApi
     */
    public indicesSearch(requestParameters: IndexV1alpha1PublicApiIndicesSearchRequest = {}, options?: RawAxiosRequestConfig) {
        return IndexV1alpha1PublicApiFp(this.configuration).indicesSearch(requestParameters.searchOption, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
     * @param {IndexV1alpha1PublicApiSearchPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof IndexV1alpha1PublicApi
     */
    public searchPost(requestParameters: IndexV1alpha1PublicApiSearchPostRequest, options?: RawAxiosRequestConfig) {
        return IndexV1alpha1PublicApiFp(this.configuration).searchPost(requestParameters.keyword, requestParameters.limit, requestParameters.highlightPreTag, requestParameters.highlightPostTag, options).then((request) => request(this.axios, this.basePath));
    }
}

