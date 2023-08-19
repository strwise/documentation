---
sidebar_position: 4
sidebar_label: Accounts Management
---

# Accounts

> Work in progress

## Overview

Accounts are the second-level entities in the system. Accounts represent a specific service, like a video streaming service or web meeting service.

Accounts are associated with a single customer, and this customer has all privileges over the account. Accounts can have multiple users associated with them. Each account can have only one owner defined and as default the owner is user who was created with the account or first associated upon creation.

## Adding an Account

To add an account, click on the **Accounts** menu item in the left sidebar. Then click on the **Add Account** button.

## Account Properties

## Account Attributes

### Account Settings {#settings}

The `account_settings` is a key-value pairs that store additional structured data used by the platform to configure additional information like service quotas, limits, and other settings.

At moment, the platform supports the following settings:

|         Key         | Type    | Description                                               | Value                        |
|:-------------------:|---------|-----------------------------------------------------------|------------------------------|
|      max_rooms      | integer | Maximum number of allowed rooms for customer.             | `0` or unset to unlimited    |
|  max_participants   | integer | Maximum number of allowed participants for customer.      | `0` or unset to unlimited    |
|    max_duration     | integer | Maximum length in minutes that a customer can run a room. | `0` or unset to unlimited    |
|     max_storage     | integer | Maximum storage in GB that a customer can use.            | `0` or unset to unlimited    |
|   max_recordings    | integer | Maximum number of recordings that a customer can have.    | `0` or unset to unlimited    |
|  record_expiration  | integer | Number of days that recordings will be kept.              | `0` or unset to unlimited    |

:::info
`account_settings` attribute **only recognize predefined keys**. Any other key will be ignored.
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

## Account Limits and Quotas {#limits-quotas}

Any account can have limits and quotas set on it. These limits and quotas are used to control the resource usage of the account by the customer, enforcing restrictions in determined resources like the number of rooms, participants, the duration of the room, the storage used, etc. You can use this limits as part of billing or subscription plans.

:::info
Account limits and quotas are managed by [Account Settings](#settings) attribute.
:::

:::caution
Any limit or quota set in the account will override the global limit or quota set in the customer limited by the maximum corresponding limit or quota set in the customer.
:::

## Account Management {#management}

### Accounts List

### Accounts Details

### Accounts Users

### Editing an Account

To edit an account, click on the **Accounts** menu item in the left sidebar. Then click on the **Edit** button next to the account you want to edit.

### Deleting an Account

To delete an account, click on the **Accounts** menu item in the left sidebar. Then click on the **Delete** button next to the account you want to delete.