---
title: Configuration
sidebar_position: 4
sidebar_label: Configuration
slug: /configuration
---

# Configuring the Platform

After the platform is installed, you'll need to configure it to suit your needs. We recommend that you configure **PaaS Video Streaming Resell Platform** in the following order:

## Overview

1. Perform the recommended Further Security Steps.
2. Create your administration account.
3. Configure your general settings.
4. Configure your first BigBlueButton/Scalelite host.
5. Create a customer to test the platform.

## Environment Variables

StreamWise Video Platform is a twelve-factor app, therefore configuring StreamWise can be accomplished using environment variables. 

You can find the environment variables in the `.env` file located in the root directory of the platform. StreamWise can be configured with the following variables:

| Variable                                 | Required | Default          | Description                                                      |
|------------------------------------------|----------|------------------|------------------------------------------------------------------|
| `APP_KEY`                                | Yes      |                  | The application key used for encryption.                         |
| `ADMIN_AUTH_ID`                          | Yes      |                  | The ID of the administration account.                            |
| `ADMIN_AUTH_SECRET`                      | Yes      |                  | The secret of the administration account.                        |
| `USER_AUTH_ID`                           | Yes      |                  | The ID of the user account.                                      |
| `USER_AUTH_SECRET`                       | Yes      |                  | The secret of the user account.                                  |
| `APP_NAME`                               | Yes      | StreamWise VPaaS | The name of the application.                                     |
| `APP_LOCALE`                             | Yes      | pt_BR            | The default locale of the application.                           |
| `APP_TIMEZONE`                           | Yes      | UTC              | The default timezone of the application.                         |
| `APP_URL`                                | Yes      |                  | The URL of the application.                                      |
| `API_URL`                                | Yes      |                  | The URL of the API.                                              |
| `API_PREFIX`                             | No       | /                | The prefix of the API.                                           |
| `HASH_ID`                                | No       | true             | Enable hashed ids.                                               |
| `HASH_ID_KEY`                            | Yes      |                  | The key used to hash ids.                                        |
| `HASH_ID_LENGTH`                         | No       | 8                | The length of the hashed ids.                                    |
| `GLOBAL_API_RATE_LIMIT_ENABLED`          | No       | true             | Enable the global API rate limit.                                |
| `GLOBAL_API_RATE_LIMIT_ATTEMPTS_PER_MIN` | No       | 60               | The number of attempts per minute for the global API rate limit. |
| `GLOBAL_API_RATE_LIMIT_EXPIRES_IN_MIN`   | No       | 1                | The number of minutes before the global API rate limit expires.  |
| `PAGINATION_LIMIT_DEFAULT`               | No       | 10               | The default pagination limit.                                    | 
| `API_TOKEN_EXPIRES`                      | No       | 1440             | The number of minutes before the API token expires.              |
| `API_REFRESH_TOKEN_EXPIRES`              | No       | 10800            | The number of minutes before the API refresh token expires.      |
| `DB_HOST`                                | Yes      |                  | The host of the database.                                        |
| `DB_PORT`                                | No       | 5432             | The port of the database.                                        |
| `DB_DATABASE`                            | Yes      |                  | The name of the database.                                        |
| `DB_USERNAME`                            | Yes      |                  | The username of the database.                                    |
| `DB_PASSWORD`                            | Yes      |                  | The password of the database.                                    |
| `DB_SCHEMA`                              | No       | public           | The schema of the database.                                      |
| `REDIS_HOST`                             | Yes      |                  | The host of the Redis server.                                    |
| `REDIS_PORT`                             | No       | 6379             | The port of the Redis server.                                    |
| `REDIS_PASSWORD`                         | No       |                  | The password of the Redis server.                                |
| `REDIS_USERNAME`                         | No       | default          | The username of the Redis server.                                |
| `MAIL_MAILER`                            | Yes      | smtp             | The mailer used to send emails.                                  |
| `MAIL_HOST`                              | Yes      |                  | The host of the mail server.                                     |
| `MAIL_PORT`                              | Yes      | 587              | The port of the mail server.                                     |
| `MAIL_USERNAME`                          | Yes      |                  | The username of the mail server.                                 |
| `MAIL_PASSWORD`                          | Yes      |                  | The password of the mail server.                                 |
| `MAIL_ENCRYPTION`                        | Yes      | tls              | The encryption used to send emails.                              |
| `MAIL_FROM_ADDRESS`                      | Yes      |                  | The email address used to send emails.                           |
| `MAIL_FROM_NAME`                         | Yes      |                  | The name used to send emails.                                    |
| `AWS_ACCESS_KEY_ID`                      | No       |                  | The access key ID of the S3  account.                            |
| `AWS_SECRET_ACCESS_KEY`                  | No       |                  | The secret access key of the S3 account.                         |
| `AWS_DEFAULT_REGION`                     | No       |                  | The default region of the S3 account.                            |
| `AWS_BUCKET`                             | No       |                  | The bucket of the S3 account.                                    |
| `AWS_URL`                                | No       |                  | The URL of the S3 account.                                       |
| `AWS_ENDPOINT`                           | No       |                  | The endpoint of the S3 account.                                  |
| `AWS_USE_PATH_STYLE_ENDPOINT`            | No       | false            | Use path style endpoint.                                         |
| `SENTRY_LARAVEL_DSN`                     | No       |                  | The DSN of the Sentry account.                                   |
| `SENTRY_TRACES_SAMPLE_RATE`              | No       | 0.1              | The sample rate of the Sentry traces.                            |
| `SENTRY_PROFILES_SAMPLE_RATE`            | No       | 0.1              | The sample rate of the Sentry profiles.                          |

### Application

#### APP_NAME

The `APP_NAME` variable is used to set the name of the application. This value is used in the application's user interface.

#### APP_LOCALE

The `APP_LOCALE` variable is used to set the default locale of the application. This value is used to set the default language of the application.

#### APP_TIMEZONE

The `APP_TIMEZONE` variable is used to set the default timezone of the application. This value is used to set the default timezone of the application interface.

#### APP_URL

The `APP_URL` variable is used to set the URL of the application interface. This is the main address used on web interfaces.

#### API_URL

The `API_URL` variable is used to set the URL of the API. This is the main address used on API interfaces.

#### API_PREFIX

The `API_PREFIX` variable is used to set the prefix of the API. 

:::info

When `APP_URL` has the same value as `API_URL`, the `API_PREFIX` needs to have a value different from `/` (e.g. `/api`).

:::

### Keys & Authentication

#### APP_KEY

The `APP_KEY` variable is used to set the internal application key used for encryption. We recommend a random 64-byte secret.

#### HASH_ID

The `HASH_ID` variable is used to enable hashed ids. Must be always set to `true`.

#### HASH_ID_KEY

The `HASH_ID_KEY` variable is used to set a internal secret key used to hash ids. We recommend a random 64-byte secret. We recommend a random 16-byte secret.

#### HASH_ID_LENGTH

The `HASH_ID_LENGTH` variable is used to set the length of the hashed ids. We recommend a minimum length of 8 characters.

#### ADMIN_AUTH_ID

The `ADMIN_AUTH_ID` variable is used to set the admin _client_id_ for the administrators proxy login flow.

#### ADMIN_AUTH_SECRET

The `ADMIN_AUTH_SECRET` variable is used to set the admin _client_secret_ for the administrators proxy login flow.

### Security & Limits

### Database

### Cache

### Mail

### Filesystem

#### AWS S3



## Setting Up Your Administration Account

To get started, you'll need to create an administration account on the platform. After the platform is installed, you will be able to create an administration account by accessing the workspace container and executing the following command:

```bash
artisan vsp:admin:create
```

This command will prompt you to enter the following information:

- **Name** - The name of the administration account.
- **Email** - The email address of the administration account.
- **Password** - The password of the administration account.

Once you've entered the required information, the administration account will be created and you'll be able to log in to the platform.