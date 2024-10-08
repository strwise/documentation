---
sidebar_position: 6
sidebar_label: Users Management
---

# User Management 

> Work in progress

## Overview

The user management system is designed to provide flexible and secure authentication and authorization across multiple customers and accounts. By allowing a single user to access multiple accounts, the platform enables streamlined management of services, billing, and support.

This separation of authentication and authorization from services, billing, and support offers an added layer of security and control over your services. The platform offers granular user permission and access control, allowing you to easily manage and monitor user access levels.

In addition to user management, the platform offers robust [customer management features](/docs/administration/customers). Customers can manage their own accounts, including updating billing information, adding or removing services, and granting access to other users.

Overall, our user and account management features provide maximum flexibility and control over your services, while ensuring the highest levels of security and privacy for your customers. Whether you're managing a small business or a large enterprise, the Video Streaming Resell Platform offers the tools and features you need to succeed in the world of video streaming.

## Users Associations

A user can be associated with multiple customers, accounts and rooms. Each association can have different permissions and access levels.

* **Customers** are the top-level entities in the system. Customers can have multiple accounts. Customers own accounts and rooms. They represent a billable party, like a business or person and each customer can have multiple users associated with it.
* **Accounts** are the second-level entities in the system. Accounts are associated with a single customer, and this customer has all privileges over the account. Accounts can have multiple users associated with them. Each account can have only one owner defined and as default the owner is user who was created with the account or first associated upon creation. Accounts represent a specific service, like a video streaming service or web meeting service. Each account can have multiple users associated with it.
* **Users** are the third-level entities in the system. Users represent a person who can access the platform and use or manage the services. Users can be associated with multiple customers or accounts, and each user can have multiple roles based on each permission granted and type of access for different customers and accounts. Each user can own different customers and accounts.

:::info
When an admin creates a new customer, this also creates a new user based on the customer profile. This becomes the customer owner, with each customer only having a single user owner, same for account registration.
:::

Customer/Account owners have all the possible permissions that a user can possess. They are also the only user who can send invitations from the account to new or existing users.

## User Properties {#properties}

### User Attributes {#attributes}

### User Settings {#settings}

The `user_settings` attribute is an array that can store various data related to the user. The following table describes the attributes of the `user_settings` array:

:::note
`user_settings` attribute **only recognize predefined keys**. Any other key will be ignored.
:::

:::info
Some `user_settings` properties can be set by top-level properties of the [User](/docs/administration/users) object in API requests. Please refer to API reference guide for more information.
:::

### User Metadata {#metadata}

The `user_metadata` is a set of key-value pairs that can attached to a user. This can be useful for storing additional information or third-party data, such as a customer ID from a CRM system or billing system.

**Example**

| Key                                    | Type   | Value  | Description            |
|----------------------------------------|--------|--------|------------------------|
| `user_metadata['external_billing_id']` | string | `123`  | Third-party billing id |
| `user_metadata['external_crm_id']`     | string | `456`  | Third-party CRM id     |

You may store any scalar value (string, integer, float, boolean, etc.) inside the metadata attribute. In addition, one level of nested objects or arrays are allowed.

:::danger

Since the `user_metadata` attribute is simply a key-value store (object), all write operations will **overwrite** the entire object, so be sure to **merge** existing data on your end when performing updates.

:::

## User Management {#management}

### Creating Users

#### Associating a User with a Customer

To associate a user and customer:

1. Click **Associate User**.
2. Choose a customer from **Select User**.
3. Check the boxes for the desired **Permissions**.
4. Check **Send Invite** to send an invitation email.
5. Click **Associate User**.

### Users Permissions

> Work in progress

### Editing Users

> Work in progress

### Deleting Users

> Work in progress