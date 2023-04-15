---
sidebar_position: 4
sidebar_label: Customers Management
---

# Customers

> Work in progress

## Overview

**Customers** are the top-level entities in the system. Customers can have multiple accounts. Customers own accounts and rooms. They represent a billable party, like a business or person and each customer can have multiple users associated with it. 

Create a customer for every new person or business that you want to allocate any resource. When you create a new customer, a minimal profile information is needed to help system manage data with more useful insights. After you set up your customer, you can create accounts for them start using the platform.

## Adding a Customer

When you create a new customer, you can set their account and billing information, such as Email, Name, and Country. You can also set a customer’s preferred language, currency, and other important details that will be used throughout the platform.

### Customer Profile

The customer profile is the first step in creating a new customer. You can set the customer’s name, email, and country. You can also set the customer’s preferred language and currency as well other important details that will be used throughout the platform.

The system use the basic customer profile for account and services management and also as a lightweight customer relationship management (CRM) system. To create a **minimal customer profile**, set these properties:

* **Email**: The customer’s email address. This is the primary identifier for the customer and is used to log in to the platform.
* **Password**: The customer’s password. This is used to log in to the platform.
* **Customer Type**: The type of customer. This can be either a business or a person.
* **First Name**: The customer’s first name or main contact name.
* **Last Name**: The customer’s last name or main contact name.
* **Company Name**: The customer’s company name (if applicable).
* **Currency**: The customer’s preferred currency.
* **Status**: The customer’s status. This can be either active or inactive.

:::caution
SaaS Video Streaming Resell System uses customer's **email address** as the **primary identifier** and forward in the customer **user owner**. So it is imperative that you use a **valid and unique email** address for each customer. 
:::

### Create a customer

To create a new customer, follow these steps:

1. Click **Customers** in the top navigation menu.
2. Click **Add Customer**.
3. Enter the customer’s profile information.
4. Click **Save**.

:::info
If admin don't have permission to create customers, the **Add Customer** button will not be displayed.
:::

When a new customer is created, a new [user](/docs/admin/users) based on the customer profile is also created. This user becomes the customer owner, with each customer having only a single user owner, as the same occurs for account creation. This owner user has full permissions to manage the customer data.

#### Associate with an existing user

When an admin is creating a new customer, they can associate an existing user with the new customer. With this, the existing user will become the customer owner and will have full permissions to manage the customer data. 

If you want to associate an existing user with the new customer, follow these steps:

1. Click **Customers** in the top navigation menu.
2. Click **Add Customer**.
3. Enter the customer’s profile information.
4. Click **Associate with an existing user**.
5. Select the user from the list.
6. Click **Save**.

## Editing a Customer

Admins have the ability to edit a customer’s profile information. To edit a customer’s profile information, follow these steps:

1. Click **Customers** in the top navigation menu.
2. Click the customer you want to edit.
3. Click **Edit**.
4. Edit the customer’s profile information.
5. Click **Save**.

:::info
If admin don't have permission to edit customers, the **Edit** button will not be displayed.
:::

## Deleting a Customer

Admins have the ability to delete a customer. To delete a customer, follow these steps:

1. Click **Customers** in the top navigation menu.
2. Click the customer you want to delete.
3. Click **Delete**.

:::info
If admin don't have permission to delete customers, the **Delete** button will not be displayed.
:::

## Customer Properties

### Minimum Customer Profile

The system use the basic customer profile for account and services management and also as a lightweight customer relationship management (CRM) system. 

:::info
To see the properties and more information about **minimal customer profile** please refer to the [Customer Profile](#customer-profile) section.
:::

When creating a new customer, minimal profile information is required to help the system manage the data with more useful information. After setting up the client, you can create accounts to start using the platform.

### Extended Customer Profile

The extended customer profile is no more than a collection of properties that are optional and can be used to store additional information about the customer.

The platform can store additional information about the customer in the extended customer profile. This information can be used to provide more useful insights into the customer’s usage and behavior or for any convenient purpose.

The current available properties for extended customer profile are:

| Property                     | Type             | Description                                                                                                                   | Example                            |
|------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| external_id                  | string (250)     | Third party customer ID.                                                                                                      | 123-456-789                        |
| key                          | string (10)      | Unique customer key used for internal reference (auto generated).                                                             | a4rTrsag7                          |
| prefix                       | string (10)      | Unique Customer prefix. Used to generate personalized unique records.                                                         | ABC                                |
| url                          | string (250)     | Customer website URL. Used to personalize                                                                                     | https://www.mimirtech.co           |
| logo_url                     | string (250)     | Customer logo URL.                                                                                                            | https://www.mimirtech.co/logo.png  |
| hostname                     | string (250)     | Customer hostname. Used to personalized domain brand access.                                                                  | mimirtech.co                       |
| subdomain                    | string (250)     | Customer subdomain. Used to personalized domain brand access.                                                                 | mimirtech                          |
| credit                       | integer          | Positive credit balance available to customer.                                                                                | 1000                               |
| balance                      | integer          | Current balance available to customer.                                                                                        | 1000                               |
| delinquent                   | boolean          | Indicates if customer is delinquent, that is, it has a positive balance.                                                      | false                              |
| tax_exempt                   | boolean          | Indicates if customer is tax exempt.                                                                                          | false                              |
| late_fee_override            | boolean          | Indicates if customer is late fee override.                                                                                   | false                              |
| override_due_notices         | boolean          | Indicates if customer is override due notices.                                                                                | false                              |
| separate_invoices            | boolean          | Indicates if customer is separate invoices.                                                                                   | false                              |
| allow_account_registration   | boolean          | Indicates if customer can register accounts directly. Default to `false`.                                                     | false                              |
| allowed_origins              | string (250)     | Allowed origins for CORS. Values as separated by comma. Necessary when customer uses its own domain to access API resources.  | mimirtech.co,mimirtech.net         |
| allowed_registration_origins | string (250)     | Indicates the allowed domains for registering accounts for the customer. For example: domain.com will only allow accounts with e-mail ending in "@domain.com" to be registered.                                                                       | mimirtech.co                       | 


:::info
In addition to the customer extended profile, the platform also provides a set of attributes that can be used to store additional information about the customer. These attributes are discussed in the [Customer Attributes](#customer-attributes) section.
:::

## Customer Attributes

### Customer Settings

The `customer_settings` is a key-value pairs that store additional structured data used by the platform to configure additional information like service quotas, limits, and other settings.

At moment, the platform supports the following settings:

| Key               | Type    | Description                                               | Value                        |
|-------------------|---------|-----------------------------------------------------------|------------------------------|
| max_accounts      | integer | Maximum number of allowed accounts for customer.          | `0` or unset to unlimited    |
| max_rooms         | integer | Maximum number of allowed rooms for customer.             | `0` or unset to unlimited    |
| max_participants  | integer | Maximum number of allowed participants for customer.      | `0` or unset to unlimited    |
| max_duration      | integer | Maximum length in minutes that a customer can run a room. | `0` or unset to unlimited    |
| max_storage       | integer | Maximum storage in GB that a customer can use.            | `0` or unset to unlimited    |
| max_recordings    | integer | Maximum number of recordings that a customer can have.    | `0` or unset to unlimited    |
| record_expiration | integer | Number of days that recordings will be kept.              | `0` or unset to unlimited    |

#### max_accounts

The `max_accounts` setting is used to set the maximum number of accounts that can be created for the customer. This setting is used to limit the number of accounts that can be created for the customer. If the setting is not set, the customer can create an unlimited number of accounts.

* **Key:** `max_accounts`
* **Type:** `integer`
* **Value:** `0` or unset to unlimited

#### max_rooms

The `max_rooms` setting is used to set the maximum number of rooms that can be created for the customer. This setting is used to limit the number of rooms that can be created for the customer. If the setting is not set, the customer can create an unlimited number of rooms.

* **Key:** `max_rooms`
* **Type:** `integer`
* **Value:** `0` or unset to unlimited

:::tip
This property can be overridden by the `record_expiration` property of the [Account](/docs/admin/accounts) object.
:::

#### max_participants

The `max_participants` setting is used to set the maximum number of participants that a customer can have simultaneously watching or interacting in all there rooms at the same time. This setting is used to limit the number of participants that can be in all the rooms at the same time. If the setting is not set, the customer can have an unlimited number of participants.

* **Key:** `max_participants`
* **Type:** `integer`
* **Value:** `0` or unset to unlimited

:::tip
This property can be overridden by the `record_expiration` property of the [Account](/docs/admin/accounts) object.
:::

:::tip
This property can be overridden by the `record_expiration` property of the [Room](/docs/admin/rooms) object.
:::

#### max_duration

The `max_duration` setting is used to set the maximum length in minutes that a customer can run a room. This setting is used to limit the length of time that a room can be active. If the setting is not set, the customer can have an unlimited duration for the rooms.

* **Key:** `max_duration`
* **Type:** `integer`
* **Value:** `0` or unset to unlimited

:::tip
This property can be overridden by the `record_expiration` property of the [Account](/docs/admin/accounts) object.
:::

:::tip
This property can be overridden by the `record_expiration` property of the [Room](/docs/admin/rooms) object.
:::

#### max_storage

The `max_storage` setting is used to set the maximum storage in GB that a customer can use. This setting is used to limit the amount of storage that can be used by the customer. If the setting is not set, the customer can use an unlimited amount of storage.

* **Key:** `max_storage`
* **Type:** `integer`
* **Value:** `0` or unset to unlimited

:::tip
This property can be overridden by the `record_expiration` property of the [Account](/docs/admin/accounts) object.
:::

#### max_recordings

The `max_recordings` setting is used to set the maximum number of recordings that a customer can have. This setting is used to limit the number of recordings that can be created by the customer. If the setting is not set, the customer can have an unlimited number of recordings.

* **Key:** `max_recordings`
* **Type:** `integer`
* **Value:** `0` or unset to unlimited

:::tip
This property can be overridden by the `record_expiration` property of the [Account](/docs/admin/accounts) object.
:::

:::tip
This property can be overridden by the `record_expiration` property of the [Room](/docs/admin/rooms) object.
:::

#### record_expiration

The `record_expiration` setting is used to set the number of days that recordings will be kept. This setting is used to limit the number of days that a recording will be kept. If the setting is not set, the customer can have an unlimited number of days to keep the recordings.

* **Key:** `record_expiration`
* **Type:** `integer`
* **Value:** `0` or unset to unlimited

:::tip
This property can be overridden by the `record_expiration` property of the [Account](/docs/admin/accounts) object.
:::

:::tip
This property can be overridden by the `record_expiration` property of the [Room](/docs/admin/rooms) object.
:::

### Address

> Work in progress

The customer address is the customer’s physical address. This is used to calculate taxes and shipping costs. The address can be set to the same as the billing address or can be set to a different address.

### Legal Document

The legal document is any legal documents or legal information that can be associated with the customer. This can be used to store any legal data that can be used to identify or verify the customer as a legal entity on different jurisdictions.

#### Legal Document Properties

* **Type**: The type of legal document. See all types available in the [Legal Document types](#legal-document-types).
* **Country**: The country where the tax identification number was issued.
* **Value**: The tax identification number.
* **Issued Date**: The date when the tax identification number was issued.

#### Supported Types

Currently, the platform supports the following legal document types in the following regions:

| Country   | Type    | Description            | Example             |
|-----------|---------|------------------------|---------------------|
| Austria   | eu_vat  | European VAT number    | ATU12345678         |
| Belgium   | eu_vat  | European VAT number    | BE0123456789        |
| Brazil    | br_cpf  | Brazilian CPF number   | 123.456.789-87      |
| Brazil    | br_cnpj | Brazilian CNPJ number  | 01.234.456/5432-10  |
| Bulgaria  | eu_vat  | European VAT number    | BG123456789         |

:::note
The system don't verify the validity of the tax identification number, It's just enforce a format validation. This can't be used as final proof of identity.
:::

##### Generic Type

In addition to the legal document types listed above, the platform also **supports store** legal documents as **any document related** to the entity as contracts, agreements, etc. 


For this, you can use the `value` property to store any information related, such as contract number, service order number and etc, and inform in `type` the value `other`.


