---
sidebar_position: 2
sidebar_label: API Authentication
---

# API Authentication (OAuth2)

## Overview

StreamWise platform uses OAuth2 to authenticate requests to the API. This means that you will need to obtain an access token before you can make requests to the API. To obtain an access token, you will need to create an OAuth2 client and use it to request an access token from the API.

OAuth lets you authenticate using different methods, these methods are called grants. This documentation will cover the supported grants and how to use them.

:::info
This documentation assumes you are already familiar with OAuth2. If you do not know anything about OAuth2, consider familiarizing yourself with the [general terminology](https://oauth2.thephpleague.com/terminology/) and features of OAuth2 before continuing.
:::

## Client Secret & ID

To authenticate requests to the API, you will need to create an OAuth2 client. The client will be assigned a `client_id` and `client_secret` which will be used to authenticate requests to the API.

During the installation of the platform, two default clients are created that are used in the proxy login process for the existing default first-party clients.

It is possible to create new clients using the API. The client can be used to authenticate requests to the API.

:::info

Refer to API Reference for more information about how to create clients.

:::

:::warning
The `client_id` and `client_secret` should not be exposed publicly (ex.: stored in JavaScript or browser cache/session/storage). If you need to authenticate third-party applications, you should use the [Third-Party Clients](#third-party-clients) grant.
:::

## First-Party Clients

First-party clients (your mobile app, web frontend or any app owned by you) usually consumes your private API (Internal API). These clients are considered first-party clients because they are managed by you or by the platform. First-party clients are usually trusted to securely make requests to the API without exposing sensitive information such as the client secret.

:::caution
The first-party clients are not intended to be used by third-party applications. If you need to authenticate third-party applications, you should use the [Third-Party Clients](#third-party-clients) grant.
:::

### Password Grant Tokens

The OAuth2 password grant allows first party clients, such as a mobile application, to obtain an access token using an email address / username and password.

When Password Grant Tokens is used, the platform will authenticate the Client App first (ensuring the request is coming from your trusted first party client) and then needs to check if the user credentials are correct (ensuring the user is registered and has the right access), before issuing an access token.

#### How it works

The client sends a POST request to the `/oauth/token` endpoint with the following parameters:

* `grant_type` - Must be set to **password**.
* `client_id` - The client ID of the first-party client.
* `client_secret` - The client secret of the first-party client.
* `username` - The email address / username of the user.
* `password` - The password of the user.

The platform will verify the client credentials and the user credentials. If the credentials are valid, an access token will be issued.

##### Example Request

```bash
curl --request POST \
  --url https://api.streamwise.dev/oauth/token \
  --header 'content-type: application/json' \
  --data '{
    "grant_type": "password",
    "client_id": "<client-id>",
    "client_secret": "<client-secret>",
    "username": "<user@mail.com>", 
    "password": "<user-password>"
    }'
```

The authorization server will responde with a JSON object containing the following properties:

* `access_token` - The access token that can be used to access the API.
* `token_type` - The type of the token. This will always be **Bearer**.
* `expires_in` - The number of seconds the token is valid for. For example, the value **3600** means that the token will expire in one hour from the time the response was generated.
* `refresh_token` - The refresh token that can be used to obtain a new access token.

##### Example Response

````json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",
  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."
}
````

Your client can now save the access token and use it to make requests to the API. The access token should be sent as a Bearer token in the `Authorization` header of the request. In case of Web Apps, like React, Angular, Vue, etc, the access token should be stored in the browser's local storage and used to make requests to the API.

:::info

In case of SPA (Single Page Applications), the `client_id` and `client_secret` should be stored in the backend and the SPA should make a request to the backend to obtain the access token. The backend will then make a request to the API to obtain the access token and return it to the SPA. For trusted first party client StreamWise platform provides a proxy login process that allows the client to obtain the access token without exposing the `client_id` and `client_secret` to the browser. Please refer to [Login with Proxy](#login-with-proxy) section for more information.

:::

:::warning
The `client_id` and `client_secret` should not be exposed publicly (ex.: stored in JavaScript or browser cache/session/storage). If you need to authenticate third-party applications, you should use the [Third-Party Clients](#third-party-clients) grant.
:::

### Login with Proxy

> This grant is a great user experience for trusted first party clients both on the web and in native applications.

The OAuth2 proxy allows first-party clients, such as a mobile application, to issue access tokens securely without requiring your users to go through the entire OAuth2 authorization code redirect flow.

StreamWise platform has two standard first-party proxy clients:

* Admin Proxy Client
* User Proxy Client

Each standard first-party client has a unique URL that appends the corresponding `client_id` and `client_secret` to the request and make another call to Auth server with all the required parameters. This way the client does not need to send the ID and Secret with the request, using his own URL which gives more control and security.

#### How it works

The client sends a POST request to the predefined proxy URL with the following parameters:

* `username` - The email address / username of the user.
* `password` - The password of the user.

The platform will verify the user credentials and if the credentials are valid, an access token will be issued.

##### Example Request

````bash
curl --request POST \
  --url https://api.streamwise.dev/oauth/proxy/login \
  --header 'content-type: application/json' \
  --data '{
    "username": "<user@email.com>",
    "password": "<user-password>"
    }'
````

The authorization server will responde with a JSON object containing the following properties:

* `token_type` - The type of the token. This will always be **Bearer**.
* `expires_in` - The number of seconds the token is valid for. For example, the value **3600** means that the token will expire in one hour from the time the response was generated.
* `access_token` - The access token that can be used to access the API.
* `refresh_token` - The refresh token that can be used to obtain a new access token.

##### Example Response

````json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",
  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."
}
````

### Login without Proxy

Login first party clients without proxy will require the client to send the `client_id` and `client_secret` with the request. The authentication process is the same as the [Password Grant Tokens](#password-grant-tokens) grant.

#### How it works

To login without proxy, the client needs to send a POST request to the `/oauth/token` endpoint with the following parameters:

* `grant_type` - Must be set to **password**.
* `client_id` - The client ID of the first-party client.
* `client_secret` - The client secret of the first-party client.
* `username` - The email address / username of the user.
* `password` - The password of the user.
* `scope` - The scope of the access request. The scope is a list of space-delimited, case-sensitive strings. The strings are defined by the authorization server. If the value contains multiple space-delimited strings, their order does not matter, and each string adds an additional access range to the requested scope.

The platform will verify the client credentials and the user credentials. If the credentials are valid, an access token will be issued.

##### Example Request

```bash
curl --request POST \
  --url https://api.streamwise.dev/oauth/token \
  --header 'content-type: application/json' \
  --data '{
    "grant_type": "password",
    "client_id": "<client-id>",
    "client_secret": "<client-secret>",
    "username": "<user@mail.com>", 
    "password": "<user-password>"
    }'
```

##### Example Response

````json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",
  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."
}
````

## Third-Party Clients {#third-party-clients}

Third-party clients are applications that are not owned by you or by the platform. These clients are usually not trusted to securely make requests to the API without exposing sensitive information such as the client secret.

For third-party clients you need to use the **Client credentials grant** (A.K.A. Personal Access Tokens). _This grant type is the simplest and is suitable for machine-to-machine authentication._

### Personal Access Tokens

> work in progress