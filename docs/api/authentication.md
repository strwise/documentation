---
sidebar_position: 2
sidebar_label: API Authentication
---

# API Authentication (OAuth2)

## Overview

StreamWise platform uses OAuth2 to authenticate requests to the API. This means that you will need to obtain an access
token before you can make requests to the API. To obtain an access token, you will need to create an OAuth2 client and
use it to request an access token from the API.

OAuth lets you authenticate using different methods, these methods are called grants. This documentation will cover the
supported grants and how to use them.

:::info
This documentation assumes you are already familiar with OAuth2. If you do not know anything about OAuth2, consider
familiarizing yourself with the [general terminology](https://oauth2.thephpleague.com/terminology/) and features of
OAuth2 before continuing.
:::

## Client Secret and Client ID

To authenticate requests to the API, you will need to create an OAuth2 client. The client will be assigned a `client_id`
and `client_secret` which will be used to authenticate requests to the API.

During the installation of the platform, two default clients are created that are used in the proxy login process for
the existing default first-party clients.

It is possible to create new clients using the API. The client can be used to authenticate requests to the API.

:::info

Refer to API Reference for more information about how to create clients.

:::

:::warning
The `client_id` and `client_secret` should not be exposed publicly (ex.: stored in JavaScript or browser
cache/session/storage). If you need to authenticate third-party applications, you should use
the [Third-Party Clients](#third-party-clients) grant.
:::

## Access Tokens

Access tokens are used to authenticate requests to the API. Access tokens are issued by the platform's OAuth2 server and
are used to access the API. Access tokens are valid for a limited time and need to be refreshed periodically.

When you request an access token, you will receive a JSON response containing the access token and other information.
The access token will be used to authenticate requests to the API.

**Access Token example**

```json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",
  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."
}
```

After requesting an access token, you will need to store the access token in a secure location. The access token should
be sent as a Bearer token in the `Authorization` header of the request. In case of Web Apps, like React, Angular, Vue,
etc, the access token can be stored in the browser's local storage and used to make requests to the API.

### Refresh Tokens

Refresh tokens are used to obtain new access tokens. Refresh tokens are issued by the platform's OAuth2 server and are
used to obtain new access tokens. By default, the platform issues short-lived access tokens, and they need to be
refreshed periodically.

When you request an access token, some grant can respond with a refresh token which enables the client to refresh the
access token. This allows clients to continue to have a valid access token without further interaction with the user.

:::tip

After getting a refresh token, you will need to store the refresh token in a secure location.

:::

To issue a new access token based on the refresh token, the client needs to send a POST request to the authorization
server with the following parameters:

* `grant_type` - Must be set to **refresh_token**.
* `client_id` - The client ID of the first-party client.
* `client_secret` - The client secret of the first-party client.
* `refresh_token` - The refresh token that was issued when the access token was obtained.
* `scope` - The scope of the access request. a space-delimited list of requested scope permissions. This is optional; if
  not sent the original scopes will be used, otherwise you can request a reduced set of scopes.

```json
{
  "grant_type": "refresh_token",
  "client_id": "<client-id>",
  "client_secret": "<client-secret>",
  "refresh_token": "<refresh-token>",
  "scope": "read write"
}
```

The authorization server will respond with a JSON object containing the following properties:

* `token_type` - The type of the token. This will always be **Bearer**.
* `expires_in` - The number of seconds the token is valid for. For example, the value **3600** means that the token will
  expire in one hour from the time the response was generated.
* `access_token` - The access token that can be used to access the API.
* `refresh_token` - The refresh token that can be used to obtain a new access token.

Refresh Token example:

```json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",
  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."
}
```

:::tip

[Proxy login](#proxy-login) will respond with a `refresh_token` cookie that can be used to obtain a new access token.

:::

### Revoke Tokens

Access Tokens has limited lifetime, but they can be revoked at any time. Tokens can be revoked by the user or by the
platform. When a token is revoked, it can no longer be used to authenticate requests to the API.

To revoke a token, the client needs to send a DELETE request to `/logout` endpoint with the token in the `Authorization`
header.

Example:

```shell
curl --request DELETE \
--url https://api.streamwise.dev/logout \
--header 'accept: application/json' \
--header 'Authorization: Bearer <access-token>'

```

## First-Party Clients

First-party clients (your mobile app, web frontend or any app owned by you) usually consumes the private API. These
clients are considered first-party clients because they are managed by you or by the platform. First-party clients are
usually trusted to securely make requests to the API without exposing sensitive information such as the client secret.

:::caution
The first-party clients are not intended to be used with applications that you don't won. If you need to authenticate
third-party applications, you should use the [Third-Party Clients](#third-party-clients).
:::

### Password Grant {#password-grant}

The Password grant type allows first-party clients, such as a mobile or web applications owned by you, to obtain an
access token using an email address / username and password.

When Password Grant Tokens is used, the platform will authenticate the Client App first (ensuring the request is coming
from your trusted first-party client) and then check if the user credentials are correct (ensuring the user is
registered and has the right access), before issuing an access token.

#### How it works

The client sends a POST request to the `/oauth/token` endpoint with the following parameters:

* `grant_type` - Must be set to **password**.
* `client_id` - The client ID of the first-party client.
* `client_secret` - The client secret of the first-party client.
* `username` - The email address / username of the user.
* `password` - The password of the user.
* `scope` - The scope of the access request (_optional_). The scope is a list of space-delimited, case-sensitive
  strings. The strings are defined by the authorization server. If the value contains multiple space-delimited strings,
  their order does not matter, and each string adds an additional access range to the requested scope.

The platform will verify the client credentials and the user credentials. If the credentials are valid, an access token
will be issued.

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
* `expires_in` - The number of seconds the token is valid for. For example, the value **3600** means that the token will
  expire in one hour from the time the response was generated.
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

Your client can now save the access token and use it to make requests to the API. The access token should be sent as a
Bearer token in the `Authorization` header of the request. In case of Web Apps, like React, Angular, Vue, etc, the
access token should be stored in the browser's local storage and used to make requests to the API.

:::info

In case of SPA (Single Page Applications), the `client_id` and `client_secret` should be stored in the backend and the
SPA should make a request to the backend to obtain the access token. The backend will then make a request to the API to
obtain the access token and return it to the SPA. For trusted first party client StreamWise platform provides a proxy
login process that allows the client to obtain the access token without exposing the `client_id` and `client_secret` to
the browser. Please refer to [Login with Proxy](#login-with-proxy) section for more information.

:::

:::warning
The `client_id` and `client_secret` should not be exposed publicly (ex.: stored in JavaScript or browser
cache/session/storage). If you need to authenticate third-party applications, you should use
the [Third-Party Clients](#third-party-clients) grant.
:::

### Login with Proxy {#proxy-login}

> This grant is a great user experience for trusted first party clients both on the web and in native applications.

The OAuth2 proxy allows first-party clients, such as a mobile application or Web App, to issue access tokens securely
without requiring your users to go through the entire OAuth2 authorization code redirect flow.

StreamWise platform has two standard first-party proxy clients:

* Admin Proxy Client
* User Proxy Client

Each standard first-party client has a unique URL that appends the corresponding `client_id` and `client_secret` to the
request and make another call to Auth server with all the required parameters. This way the client does not need to send
the ID and Secret with the request.

##### How it works

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
* `expires_in` - The number of seconds the token is valid for. For example, the value **3600** means that the token will
  expire in one hour from the time the response was generated.
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

:::info

The proxy login process is only available for embedded first-party clients. Same Site Policy and CORS will prevent the
client from making a request to the proxy URL from a different domain.

:::

### Client Credentials Grant

The Client Credentials grant type is used by clients to obtain an access token outside of the context of a user. This is
typically used by clients to access resources about themselves rather than to access a user's resources. Client
Credentials grant is suitable for _machine-to-machine authentication_.

for example for use in a cron job which is performing maintenance tasks over an API. Another example would be a client
making requests to an API that don’t require user’s permission.

:::caution

The client credentials grant is not suitable if you need to access an API on behalf of a user. For example, if you need
to access a user’s private data, you should use the [Password Grant](#password-grant).

:::

:::warning Use it with caution

The Client Credentials grant type **bypass all system permissions**, acting as a _super user_. Access Token Scopes can
limit access to specific resources, but the client can issue a token with any scope. Use it with caution.

:::

:::info not available

This feature is not available yet.

:::

## Third-Party Clients {#third-party-clients}

Third-party clients are applications that are not owned by you or by the platform. These clients are usually not trusted
to securely make requests to the API without exposing sensitive information such as the client secret.

### Authorization Code Grant

The authorization code grant should be very familiar if you’ve ever signed in to a web app using your Facebook or Google
account.

The authorization code grant is used when an application exchanges an authorization code for an access token. After the
user returns to the application via the redirect URL, the application will get the authorization code from the URL and
use it to request an access token.

The authorization code grant is suitable for third-party clients that need to access user resources on behalf of the
user, for example, your customer develop a web application that needs to access the user's data. With this grant type,
the user will be able to review the permissions that the client is requesting and approve or deny the request.

#### How it works

**Part One**

The client sends a GET request to the `/oauth/authorize` endpoint with the following parameters:

* `response_type` - Must be set to **code**.
* `client_id` - The client ID of the third-party client.
* `redirect_uri` - The redirect URI of the third-party client.
* `scope` - The scope of the access request (_optional_). The scope is a list of space-delimited, case-sensitive
  strings. The strings are defined by the authorization server. If the value contains multiple space-delimited strings,
  their order does not matter, and each string adds an additional access range to the requested scope.
* `state` - A [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) token used by the client to maintain
  state between the request and callback. The authorization server includes this value when redirecting the user-agent
  back to the client. The parameter SHOULD be used for preventing cross-site request forgery.

All of these parameters will be validated by the authorization server. The user will then be asked to login to the
authorization server and approve the client. If the user approves the client they will be redirected from the
authorization server to the client’s redirect URI with the following parameters in the query string:

* `code` - The authorization code generated by the authorization server.
* `state` - The exact value received from the client in the previous step. You should compare this value with the value
  stored in the user’s session to ensure the authorization code obtained is in response to requests made by this client
  rather than another client application.

**Part Two**

The client sends a POST request to the `/oauth/token` endpoint with the following parameters:

* `grant_type` - Must be set to **authorization_code**.
* `client_id` - The client ID of the third-party client.
* `client_secret` - The client secret of the third-party client.
* `redirect_uri` - The redirect URI of the third-party client.
* `code` - The authorization code received from the authorization server.

:::tip

You need to decode the code query string first. You can do that with urldecode($code).

:::

The authorization server will verify the authorization code and respond with a JSON object containing
the [Access Token](#access-tokens).

```json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",
  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."
}
```

:::info not available

This feature is not available yet.

:::

### Personal Access Grant

:::info not available

This feature is not available yet.

:::