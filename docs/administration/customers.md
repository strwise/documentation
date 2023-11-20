---
sidebar_position: 3
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

* **Customer Type**: The type of customer. This can be either a business or a person.
* **First Name**: The customer’s first name or main contact name.
* **Last Name**: The customer’s last name or main contact name.
* **Email**: The customer’s email address. This is the primary identifier for the customer and is used to log in to the platform.
* **Company Name**: The customer’s company name (if applicable).
* **Country**: The customer’s country.
* **Currency**: The customer’s preferred currency.
* **Password**: The customer’s password. This is used to log in to the platform.
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

When a new customer is created, a new [user](/docs/administration/users) based on the customer profile is also created. This user becomes the customer owner, with each customer having only a single user owner, as the same occurs for account creation. This owner user has full permissions to manage the customer data.

#### Associate with an existing user

When an admin is creating a new customer, they can associate an existing user with the new customer. With this, the existing user will become the customer owner and will have full permissions to manage the customer data. 

If you want to associate an existing user with the new customer, follow these steps:

1. Click **Customers** in the top navigation menu.
2. Click **Add Customer**.
3. Enter the customer’s profile information.
4. Click **Associate with an existing user**.
5. Select the user from the list.
6. Click **Save**.

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

| Property                     | Type         | Description                                                                                                                                                                     | Example                           |
|:-----------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| external_id                  | string (250) | Third party customer ID.                                                                                                                                                        | 123-456-789                       |
| customer_key                 | string (10)  | Unique customer key used for internal reference (auto generated).                                                                                                               | a4rTrsag7                         |
| customer_prefix              | string (10)  | Unique Customer prefix. Used to generate personalized unique records.                                                                                                           | ABC                               |
| url                          | string (250) | Customer website URL. Used in public links and brand.                                                                                                                           | https://www.mimirtech.co          |
| logo                         | string (250) | Customer logo URL. Used for brand.                                                                                                                                              | https://www.mimirtech.co/logo.png |
| hostname                     | string (250) | Unique custom hostname for the customer. Used in custom resources configuration with personalized domain access.                                                                | meet.mimirtech.co                 |
| subdomain                    | string (250) | Customer subdomain. Used to personalized domain brand access.                                                                                                                   | mimirtech                         |
| credit                       | integer      | Positive credit balance available to customer.                                                                                                                                  | 1000                              |
| balance                      | integer      | Current balance available to customer.                                                                                                                                          | 1000                              |
| delinquent                   | boolean      | Indicates if customer last invoice was charged successfully.                                                                                                                    | false                             |
| allowed_domains_origins      | string (250) | Allowed origins for CORS. Values as separated by comma. Necessary when customer uses its own domain to access API resources.                                                    | mimirtech.co,mimirtech.net        |
| allowed_domains_registration | string (250) | Indicates the allowed domains for registering accounts for the customer. For example: domain.com will only allow accounts with e-mail ending in "@domain.com" to be registered. | mimirtech.co                      | 


:::info
In addition to the customer extended profile, the platform also provides a set of attributes that can be used to store additional information about the customer. These attributes are discussed in the [Customer Attributes](#customer-attributes) section.
:::

## Customer Attributes

### Customer Settings {#settings}

The `customer_settings` is a key-value pairs that store additional structured data used by the platform to configure additional information like service quotas, limits, and other settings.

At moment, the platform supports the following settings:

|        Key        | Type    | Description                                               | Value                             |
|:-----------------:|---------|-----------------------------------------------------------|-----------------------------------|
|        url        | string  | Customer website URL. Used in public links and brand.     | https://www.mimirtech.co          |
|       logo        | string  | Customer logo URL. Used for brand.                        | https://www.mimirtech.co/logo.png |

:::note
`customer_settings` attribute **only recognize predefined keys**. Any other key will be ignored.
:::

:::info
Some `customer_settings` properties can be set by top-level properties of the [Customer](/docs/administration/customers) object in API requests. Please refer to API reference guide for more information.
:::



### Customer Metadata {#metadata}

The `customer_metadata` is a set of key-value pairs that can attached to a customer. This can be useful for storing additional information or third-party data, such as a customer ID from a CRM system or billing system.

The metadata is stored as a JSON object. The keys are strings and the values can be strings, numbers, booleans, or null.

| Key                                        | Type   | Value  | Description            |
|--------------------------------------------|--------|--------|------------------------|
| `customer_metadata['external_billing_id']` | string | `123`  | Third-party billing id |
| `customer_metadata['external_crm_id']`     | string | `456`  | Third-party CRM id     |

:::info
Values are type hinted when possible. For example, if the value is `123`, the type will be `integer`. If the value is `true`, the type will be `boolean`. If the value is `null`, the type will be `null`.
:::

:::note
This is an example of how to set the `customer_metadata` attribute. The `customer_metadata` attribute can be set to any key-value pair.
:::

### Address

The customer address is the customer’s physical address. This is used to calculate taxes and shipping costs. The address can be set to the same as the billing address or can be set to a different address.

:::note
This is a polymorphic attribute. It means that others entities can have the same attribute.
:::

#### Address Attributes

At the moment, the following attributes are supported:

| Attribute | Type   | Description                                                                             | Example         |
|-----------|--------|-----------------------------------------------------------------------------------------|-----------------|
| address_type | string | The type of address. Can be `PostalAddress`  or `BillingAddress`.                        | `PostalAddress` |
| default | boolean | Whether the address is the default address for the customer.                            | `true`          |
| country | string | The country where the address is located. Two-letter country code (ISO 3166-1 alpha-2). | `US`            |
| state | string | The state where the address is located.                                                 | `CA`            |
| postal_code | string | The postal code of the address.                                                         | `94107`         |
| city | string | The city where the address is located.                                                  | `San Francisco` |
| address_line1 | string | The first line of the address.                                                          | `123 Market St` |
| address_line2 | string | The second line of the address.                                                         | `Suite 101`     |
| po_box | string | The PO Box of the address.                                                              | `PO Box 123`    |
| building_bumber | string | The building number of the address.                                                     | `123`           |
| complement | string | The complement of the address.                                                          | `Apt 101`       |

### Telephone

The customer telephone is the customer’s telephone number. This is used to contact the customer. The telephone can can be two types, `landline` or `mobile`.

#### Telephone Attributes

At the moment, the following attributes are supported:

|        Attribute        | Type   | Description                                                                              | Example           |
|:-----------------------:|--------|------------------------------------------------------------------------------------------|-------------------|
|        `default`        | boolean | Whether the telephone is the default telephone for the customer.                         | `true`            |
|    `telephone_type`     | string | The type of telephone. Can be `landline` or `mobile`.                                    | `landline`        |
|        `number`         | string | The telephone number.                                                                    | `+1 415 555 1234` |
|  `telephone_extension`  | string | The telephone extension.                                                                 | `123`             |

### Legal Document

The legal document is any legal documents or legal information that can be associated with the customer. This can be used to store any legal data that can be used to identify or verify the customer as a legal entity on different jurisdictions.

#### Legal Document Attributes

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

## Customer Limits and Quotas {#limits-quotas}

Any customer can have limits and quotas set on it. These limits and quotas are used to control the resource usage by the customer, enforcing restrictions in determined resources like the number of accounts, participants, the duration of the room, the storage used, etc. You can use this limits as part of billing or subscription plans.

:::info
Customer limits and quotas are managed through [Subscriptions](/docs/administration/service-packages/subscriptions).
:::


## Customers Management {#management}

### Customers List

### Customers Details

### Customers Users

### Editing a Customer

Admins have the ability to edit a customer’s profile information. To edit a customer’s profile information, follow these steps:

1. Click **Customers** in the top navigation menu.
2. Click the customer you want to edit.
3. Click **Edit**.
4. Edit the customer’s profile information.
5. Click **Save**.

:::info
If admin don't have permission to edit customers, the **Edit** button will not be displayed.
:::

### Deleting a Customer

Admins have the ability to delete a customer. To delete a customer, follow these steps:

1. Click **Customers** in the top navigation menu.
2. Click the customer you want to delete.
3. Click **Delete**.

:::info
If admin don't have permission to delete customers, the **Delete** button will not be displayed.
:::