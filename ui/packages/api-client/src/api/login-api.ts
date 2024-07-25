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
import { PublicKeyResponse } from '../models';
/**
 * LoginApi - axios parameter creator
 * @export
 */
export const LoginApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Read public key for encrypting password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicKey: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/login/public-key`;
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
    }
};

/**
 * LoginApi - functional programming interface
 * @export
 */
export const LoginApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginApiAxiosParamCreator(configuration)
    return {
        /**
         * Read public key for encrypting password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPublicKey(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicKeyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPublicKey(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginApi.getPublicKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LoginApi - factory interface
 * @export
 */
export const LoginApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginApiFp(configuration)
    return {
        /**
         * Read public key for encrypting password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicKey(options?: RawAxiosRequestConfig): AxiosPromise<PublicKeyResponse> {
            return localVarFp.getPublicKey(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoginApi - object-oriented interface
 * @export
 * @class LoginApi
 * @extends {BaseAPI}
 */
export class LoginApi extends BaseAPI {
    /**
     * Read public key for encrypting password.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApi
     */
    public getPublicKey(options?: RawAxiosRequestConfig) {
        return LoginApiFp(this.configuration).getPublicKey(options).then((request) => request(this.axios, this.basePath));
    }
}

