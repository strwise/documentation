---
sidebar_position: 4
sidebar_label: Accounts Management
---

# Accounts

## Overview

Accounts are the second-level entities in the system. Accounts represent a specific service, like a video streaming service or web meeting service. Accounts hold all the data related to the service, like rooms, meeting statistics, recordings, media, etc.

:::note

Accounts are always bound to a subscription.

:::

Accounts are always associated to a subscription. The subscription defines the service that the account will have access to, also features and quotas that will be available to the account. 

Accounts can have multiple users associated with them. Each account can have only one owner defined and as default the owner is user who was created with the account or first associated upon creation.

## Account Properties

### Account Attributes {#attributes}

Below is a list of the properties that are available for an account.

| Property         | Type   | Description                                                         | Example      |
|------------------|--------|---------------------------------------------------------------------|--------------|
| id               | string | The unique identifier of account.                                   | `123`        |
| uuid             | string | The Universally Unique Identifier of account                        | `123`        |
| ulid             | string | The universally unique lexicographically identifier of the account. | `123`        |
| account_name     | string | The name of the account.                                            | `My Account` |
| account_key      | string | The unique key of the account.                                      | `my-account` |
| tag              | string | The tag of the account.                                             | `my-account` |
| code             | string | The code of the account.                                            | `my-account` |
| subscriber_id    | string | The unique identifier of the customer subscriber.                   | `123`        |
| subscription_id  | string | The unique identifier of the subscription.                          | `123`        |
| status           | enum   | The status of the account.                                          | `active`     |
| account_settings | array  | The account settings.                                               | `{}`         |
| account_metadata | array  | The account metadata.                                               | `{}`         |


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

You may store any scalar value (string, integer, float, boolean, etc.) inside the metadata attribute. In addition, one level of nested objects or arrays are allowed.

:::danger

Since the `account_metadata` attribute is simply a key-value store (object), all write operations will **overwrite** the entire object, so be sure to **merge** existing data on your end when performing updates.

:::

### Account Features {#features}

Account features are always set and enforced by subscription features. Accounts will share all available features in the subscription.

:::note
You can find more about Subscription Features at [Subscription Features](/docs/administration/subscriptions#features) section.
:::

## Account Limits and Quotas {#limits-quotas}

> Accounts limits and quotas are enforced by the subscription features limits and quotas.

Account limits and quotas are used to control the resource usage of the account by the customer, enforcing restrictions in determined resources like the number of rooms, participants, the duration of the room, the storage used, etc. You can use this limits as part of your billing strategy.

:::note
You can find more about Subscription Features Limits and Quotas in the [Subscription Features](/docs/administration/subscriptions#features) section.

:::

Account limits and quotas will always be enforced by the subscription features limits and quotas, and all accounts will share the same limits and quotas defined by the subscription features. 

For example, if you have a subscription feature that limits the number of rooms to 10, all accounts will share the same limit of 10 rooms.

## Accounts Users {#users}

Accounts can have multiple users associated with them. Each account can have only one owner defined and as default the owner is the default customer user owner.

Accounts users can have different permissions associated with them. The permissions define what the user can do in the account. For example, a user can have the permission to create rooms, but not to delete rooms.

Permissions are define individually for each account user. The permissions are defined by the account owner or by the platform administrator.

### Inviting Users to an Account {#invite}

There is two ways to grant access to new users:

#### Invited by Customer Owner

Customer owner can grant access to other users to accounts. The customer owner can also define the permissions of each user, allowing or restricting access to determined resources.

To grant access to new users, Customer owner can send an invitation to the user email address. The invited user will receive an email with a link for accept the invitation, if they don't have an account, they will be able to create one. After the user accept the invitation, they will be able to access the account data and perform actions according to the permissions defined for the user.

#### Associated by Platform Administrator

The platform administrator can also associate users to accounts. The platform administrator can define the permissions of each user, allowing or restricting access to determined resources. Administrators can direct associate existing users to accounts or invite new users to the platform and associate them to the required account.

:::info

Please refer to the [Users](/docs/administration/users) section for more information about users.

:::

## Account Management {#management}

The platform administrator can manage accounts through the administration API. The platform administrator can create, edit, and delete accounts. The platform administrator can also list accounts and view account details.

:::tip

To see all API operations related to accounts, please refer to the [Account API section](https://api-reference.streamwise.online/private/#api-Account).

:::

### Account Creation {#create}

Creating accounts can only be done by the platform administrator with the right permissions. Customers users will be allowed to create accounts if related subscription has feature `allow_create_account` enabled and the customer user has the right permissions.

Create an account can be performed by _POST_ request to the `/accounts` endpoint. Please check the API reference for more information.

### Accounts List

Accounts list can be performed by the platform administrator with the right permissions. Only customer user owner will be allowed to list accounts.

Accounts list can be performed by _GET_ request to the `/accounts` endpoint.

### Accounts Details

Account details can be performed by the platform administrator with the right permissions. Customers users will be allowed to view account details that they have access to.

Account details can be performed by GET request to the `/accounts/{account_id}` endpoint. 

### Accounts Users

Users account management can be performed by API request to the `/accounts/{account_id}/users` endpoint. Please check the API reference for more information.


### Editing an Account

Editing accounts can only be done by the platform administrator with the right permissions. Customers users will be allowed only to edit **account features** and if they have the right permissions.

Editing an account can be performed by PATCH request to the `/accounts/{account_id}` endpoint. Please check the API reference for more information.

### Deleting an Account

:::caution Data loss prevention
To prevent accidental deletion, only accounts with status `inactive` can be deleted.
:::

Deleting accounts can only be done by the platform administrator with the right permissions. Customers users will be allowed to delete accounts if related subscription has feature `allow_delete_account` enabled.

Account deletion can be performed by DELETE request to the `/accounts/{account_id}` endpoint. Please check the API reference for more information.

:::danger
Deleting an account will delete all associated data, including users, rooms, recordings, etc. This action cannot be undone.
:::
