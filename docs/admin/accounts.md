---
sidebar_position: 4
sidebar_label: Accounts Management
---

# Accounts

## Overview

Accounts are the second-level entities in the system. Accounts represent a specific service, like a video streaming service or web meeting service. Accounts hold all the data related to the service, like users, rooms, recordings, media, etc.

Accounts are always bound to a subscription. When an account is created, it is associated with a subscription. The subscription defines the service that the account will have access to. The subscription also defines the features and quotas that will be available to the account. 

Accounts can have multiple users associated with them. Each account can have only one owner defined and as default the owner is user who was created with the account or first associated upon creation.

## Account Properties

Below is a list of the properties that are available for an account.

| Property      | Type   | Description                                       | Example      |
|---------------|--------|---------------------------------------------------|--------------|
| id            | string | The unique identifier of the account.             | `123`        |
| uuid          | string | The unique identifier of the account.             | `123`        |
| ulid          | string | The unique identifier of the account.             | `123`        |
| account_name  | string | The name of the account.                          | `My Account` |
| account_key   | string | The unique key of the account.                    | `my-account` |
| tag           | string | The tag of the account.                           | `my-account` |
| code          | string | The code of the account.                          | `my-account` |
| subscriber_id | string | The unique identifier of the customer subscriber. | `123`        |
| subscription_id | string | The unique identifier of the subscription. | `123`        |
| status        | enum   | The status of the account.                        | `active`     |

## Account Features {#features}

> coming soon

## Account Attributes

### Account Settings {#settings}

The `account_settings` is a key-value pairs that store additional structured data used internally to configure additional information attached to an account.

:::info
`account_settings` attributes are read-only and can only be set by the platform.
:::

### Account Metadata {#metadata}

The `account_metadata` is a set of key-value pairs that can attached to an account. This can be useful for storing additional information or third-party data, such as identification from a CRM system or billing system.

The metadata is stored as a JSON object. The keys are strings and the values can be strings, numbers, booleans, or null.

| Key                                       | Type    | Value  | Description            |
|-------------------------------------------|---------|--------|------------------------|
| `account_metadata['external_billing_id']` | integer | `123`  | Third-party billing id |
| `account_metadata['external_crm_id']`     | integer | `456`  | Third-party CRM id     |

:::note
This is an example of how to set the `account_metadata` attribute. The `acccount_metadata` attribute can be set to any key-value pair.
:::

## Accounts Users {#users}

Accounts can have multiple users associated with them. Each account can have only one owner defined and as default the owner is the default customer user owner.

Accounts users can have different permissions associated with them. The permissions define what the user can do in the account. For example, a user can have the permission to create rooms, but not to delete rooms.

## Account Limits and Quotas {#limits-quotas}

Any account can have limits and quotas set on it. These limits and quotas are used to control the resource usage of the account by the customer, enforcing restrictions in determined resources like the number of rooms, participants, the duration of the room, the storage used, etc. You can use this limits as part of your billing strategy.

:::note
You can find more about Subscription Features Limits and Quotas in the [Subscription Features](/docs/admin/service-packages/subscriptions#features) section. 

:::

Account limits and quotas will always be enforced by the subscription features limits and quotas, and all accounts will share the same limits and quotas defined by the subscription features. For example, if you have a subscription feature that limits the number of rooms to 10, all accounts will share the same limit of 10 rooms.


If you have a subscription feature that limits the number of participants to 100, all accounts will have a limit of 100 participants.

:::info
Custom account limits and quotas are managed by [Account Features](#features) attribute.
:::


## Account Management {#management}

The platform administrator can manage accounts through the administration API. The platform administrator can create, edit, and delete accounts. The platform administrator can also list accounts and view account details.

### Accounts List

Accounts list can be performed by the platform administrator with the right permissions. Only customer user owner will be allowed to list accounts.

Accounts list can be performed by GET request to the `/accounts` endpoint. Please check the API reference for more information.

### Create an Account

Creating accounts can only be done by the platform administrator with the right permissions. Customers users will be allowed to create accounts if related subscription has feature `allow_create_account` enabled and the customer user has the right permissions.

Create an account can be performed by POST request to the `/accounts` endpoint. Please check the API reference for more information.

### Accounts Details

Account details can be performed by the platform administrator with the right permissions. Customers users will be allowed to view account details that they have access to.

Account details can be performed by GET request to the `/accounts/{account_id}` endpoint. Please check the API reference for more information.

### Accounts Users

### Editing an Account

Editing accounts can only be done by the platform administrator with the right permissions. Customers users will be allowed only to edit **account features** and if they have the right permissions.

> account features are not implemented yet.

### Deleting an Account

:::danger
Deleting an account will delete all associated data, including users, rooms, recordings, etc. This action cannot be undone.
:::

Deleting accounts can only be done by the platform administrator with the right permissions. Customers users will be allowed to delete accounts if related subscription has feature `allow_delete_account` enabled.

Account deletion can be performed by DELETE request to the `/accounts/{account_id}` endpoint. Please check the API reference for more information.

:::info
To prevent accidental deletion, only accounts with status `inactive` can be deleted.
:::

