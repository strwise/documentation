---
sidebar_position: 2
sidebar_label: API Authentication
---

# API Authentication (OAuth2)

> Work in progress

:::info
This documentation assumes you are already familiar with OAuth2. If you do not know anything about OAuth2, consider familiarizing yourself with the [general terminology](https://oauth2.thephpleague.com/terminology/) and features of OAuth2 before continuing.
:::

Video Streaming Resell System uses OAuth2 to authenticate requests to the API. This means that you will need to obtain an access token before you can make requests to the API. To obtain an access token, you will need to create an OAuth2 client and use it to request an access token from the API.

OAuth lets you authenticate using different methods, these methods are called grants. Video Streaming Resell System implements the following grants and client types.

## First-Party Clients (Password Grant Tokens)

The OAuth2 password grant allows first-party clients, such as a mobile application, to obtain an access token using an email address / username and password. This allows you to issue access tokens securely to your first-party clients without requiring your users to go through the entire OAuth2 authorization code redirect flow.

Video Streaming Resell Platform has two standard first-party clients:

* Administration Dashboard
* Client Dashboard

Each standard first-party client already has a unique url that appends the corresponding `client_id` and `client_secret` to the request and make another call to Auth server with all the required parameters. This way the client does not need to send the ID and Secret with the request, using his own URL which gives more control and security.

:::warning
The first-party clients are not intended to be used by third-party applications. If you need to authenticate third-party applications, you should use the [Authorization Code Grant](#authorization-code-grant).
:::

:::warning
The Client ID and Client Secret should not be exposed publicly (ex.: stored in JavaScript or browser cache/session/storage). If you need to authenticate third-party applications, you should use the [Authorization Code Grant](#authorization-code-grant).
:::