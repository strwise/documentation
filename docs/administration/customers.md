---
sidebar_position: 3
sidebar_label: Customers Management
---

# Customers

## Overview

**Customers** are the top-level entities in the system. Customers can have multiple accounts. Customers own accounts and rooms. They represent a billable party, like a business or person and each customer can have multiple users associated with it. 

Create a customer for every new person or business that you want to allocate any resource. When you create a new customer, a minimal profile information is needed to help system manage data with more useful insights. After you set up your customer, you can create accounts for them start using the platform.

## Customer Profile

When you create a new customer, you can set their account and billing information, such as Email, Name, and Country. You can also set a customer’s preferred language, currency, and other important details that will be used throughout the platform.

The customer profile is the first step in creating a new customer. You can set the customer’s name, email, and country. You can also set the customer’s preferred language and currency as well other important details that will be used throughout the platform.

### Minimum Customer Profile

The system use the basic customer profile for account and services management and also as a lightweight customer relationship management (CRM) system. To create a **minimal customer profile**, set these properties:

When creating a new customer, minimal profile information is required to help the system manage the data with more useful information. After setting up the client, you can create accounts to start using the platform.

* **Customer Type**: The type of customer. This can be either a business or a person.
* **First Name**: The customer’s first name or main contact name.
* **Last Name**: The customer’s last name or main contact name.
* **Email**: The customer’s email address. This is the primary identifier for the customer and is used to log in to the platform.
* **Company Name**: The customer’s company name (if applicable).
* **Country**: The customer’s country.
* **Currency**: The customer’s preferred currency.
* **Password**: The customer’s password. This is used to log in to the platform.
* **Status**: The customer’s status. This can be either active or inactive.

### Extended Customer Profile

As part of customer management, the platform may store additional information about the customer such as phone numbers, legal documents, addresses, and more. This information can be used to provide a more complete profile, allowing you to relate new data according to the convenience and need of the business.


The following properties are part of the extended customer profile:

* **Telephones**: The customer's phone numbers. You can associate different types and quantities of phones with the customer. See [Telephone](#telephone) for more information.
* **Legal Documents**: The client's legal documents. This can be used to identify the customer as a legal entity in different jurisdictions. See [Legal Document](#legal-document) for more information.
* **Addresses**: The customer's addresses. You can associate different types and quantities of addresses with the customer. See [Address](#address) for more information.
* **Settings**: The client's settings. It is used to store additional information about the customer. See [Customer Settings](#settings) for more information.
* **Metadata**: The client's metadata. Used to store additional information or third-party data, such as a customer ID from a CRM system or billing system. See [Customer Metadata](#metadata) for more information.


## Customer Properties

A customer is a top-level entity in the system. Customers have a set of properties that define them. This section describes the properties of the `Customer` entity.

### Customer Attributes

Below a list of the main attributes of the Customer entity.

:::note

For more information about how to set and use customers attributes, refer to the [API Reference](/docs/api).

:::

| Attribute                    | Type             | Description  | Example                                          |
|------------------------------|------------------|--------------|--------------------------------------------------|
| uuid                         | string           |              | "550e8400-e29b-41d4-a716-446655440000"           |
| ulid                         | string           |              | "01F83QNZJ8PMR1VM6T32KZWKVS"                     |
| external_id                  | string           |              | "123"                                            |
| tenant_id                    | string           | (not in use) | "456"                                            |
| customer_key                 | string           |              | "key"                                            |
| customer_prefix              | string           |              | "CPX"                                            |
| status                       | string           |              | "active"                                         |
| email                        | string           |              | "customer@example.com"                           |
| first_name                   | string           |              | "John"                                           |
| last_name                    | string           |              | "Doe"                                            |
| company_name                 | string           |              | "Example Ltd."                                   |
| customer_type                | string           |              | "business"                                       |
| hostname                     | string           |              | "www.example.com"                                |
| subdomain                    | string           |              | "customer"                                       |
| country                      | string           |              | "US"                                             |
| currency                     | string           |              | "USD"                                            |
| delinquent                   | boolean          |              | false                                            |
| allowed_domains_origins      | array of strings |              | ["origin1.com", "origin2.com"]                   |
| allowed_domains_registration | array of strings |              | ["reg1.com", "reg2.com"]                         |
| customer_settings            | object           |              | \{ "setting1": "value1", "setting2": "value2" }  |
| customer_metadata            | object           |              | \{ "metadata1": "value1", "metadata2": "value2" } |

#### uuid

A universally unique identifier.

#### ulid

Universally Unique Lexicographically Sortable Identifier.

#### External ID

The `external_id` is a unique identifier of the customer in another system. This can be used to identify the customer on a third-party system, such as a CRM or billing system.

#### Tenant ID

The `tenant_id` is used to identify the tenant of customer belongs to.

> Not in use at moment.

#### Customer Key

The `customer_key` is a short unique string that can be used to identify the customer uniquely across all customers. This attribute can be useful for other uses due to its characteristics such as uniqueness and randomness, for example, as an encryption key or salt.

A use case is the subdomain generation. The platform uses the `customer_key` to generate a unique subdomain for the customer, like `https://customer-subdomain-<customer_key>.platform.streamwise.online`.

#### Customer Prefix

The `customer_prefix` is non-unique short string that can be used to personalize any customer related data, example: prefixing invoices numbers, quotes, etc.

#### Status

The status of the customer. Depending on the status value, some resources or operations can be restricted.

To understand customer status and its behavior, see the table below.

| Status       | Description                                                                                       |
|--------------|---------------------------------------------------------------------------------------------------|
| `active`     | Active customers can use there resources and access the platform.                                 |
| `inactive`   | Inactive customers can't use there resources and access the platform.                             |
| `suspended`  | Suspended customers can't create or allocate new resources, but can access the platform.          |
| `terminated` | Terminated customers will have all related data flagged as `inactive` and available for deletion. |


#### Email

The `email` is the main email address of the customer. This is used for communication and as the primary identifier of the customer.

:::caution
Tha platform uses customer's **email address** as the **primary identifier** and forward in the customer **user owner**. So it is imperative that you use a **valid and unique email** address for each customer.
:::

#### First Name

The `first_name` is used to identify the main contact of the customer.

#### Last Name

The `last_name` is used to identify the main contact of the customer.

#### Company Name

The `company_name` is used to identify the customer company name. If the `customer_type` is related to a business, this attribute is required.

#### Customer Type

The `customer_type` is used to identify the type of customer. The platform supports two types of customers:

* **business**: A business/corporation customer.
* **personal**: A person/personal customer.

#### Hostname

The `hostname` can be used to set a custom domain for the customer. This can be used to set a custom domain for the customer's public links and brand. The `hostname` must be a valid domain name and must be unique across all customers.

> Not implemented yet.

#### Subdomain

The `subdomain` can be used to set a custom subdomain for the customer. This can be used to set a custom subdomain for the customer's public links and brand. 

Subdomains have your TLD defined by the platform URL. For example, if the platform URL is `https://platform.streamwise.online`, the subdomain will be `https://customer.platform.streamwise.online`.

This attribute can be set upn customer creation and needs to be unique across all customers. If not set, the platform will generate a unique subdomain based on Customer `company_name` or `first_name` and `last_name`.

> Not implemented yet.

#### Country

The country code used by the customer. The country code must be a valid two-letter country code (ISO 3166-1 alpha-2).

#### Currency

The currency code used by the customer. The currency code must be a valid three-letter currency code (ISO 4217).

#### Delinquent

The `delinquent` can be used to set a customer as delinquent.

> Not implemented yet.

#### Allowed Domains Origins

The `allowed_domains_origins` is a list of origin domains allowed for the customer. This is used for CORS (Cross-Origin Resource Sharing) requests and can be used to restrict the domains that can access the customer's resources.

For example, if the customer has a website at `https://www.example.com`, you can set `allowed_domains_origins` to `["https://www.example.com"]` to allow the website to access the customer's resources.

:::note 
For more information about CORS, see [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
:::

> Not implemented yet.

#### Allowed Domains Registration

The `allowed_domains_registration` is a list of domains allowed for User creation or association. This is used to restrict the domains that can be used to create or associate users to the customer.

For example, if a Customer has the domain `example.com` and you want to allow **only** users with email addresses from `example.com` to be created or associated with the customer, you can set `allowed_domains_registration` to `["example.com"]`. If you want to allow users with email addresses from `example.com` and `example.org`, you can set `allowed_domains_registration` to `["example.com", "example.org"]`.

> Not implemented yet.

#### Customer Settings

The `customer_settings` is set of key-value pairs that can be used to store additional information about the customer.

:::note

See [Customer Settings](#settings) for more information.

:::

#### Customer Metadata

The `customer_metadata` is a set of key-value pairs that can attached to a customer. This can be useful for storing additional information or third-party data, such as a customer ID from a CRM system or billing system.

:::note

See [Customer Metadata](#metadata) for more information.

:::

### Customer Settings {#settings}

The `customer_settings` is a key-value pairs that store additional structured data used by the platform to configure additional information about the customer as part of the extended customer profile information.

:::note

`customer_settings` attribute **only recognize predefined keys**. Any other key will be ignored.

:::

At moment, the platform supports the following settings:

|   Key    | Type   | Description                                           | Value                             |
|:--------:|--------|-------------------------------------------------------|-----------------------------------|
|   url    | string | Customer website URL. Used in public links and brand. | https://www.mimirtech.co          |
|   logo   | string | Customer logo URL. Used for brand.                    | https://www.mimirtech.co/logo.png |
| timezone | string | Customer timezone. Used to set the default timezone.  | America/Sao_Paulo                 |
|  locale  | string | Customer locale. Used to set the default locale.      | en_US                             |

:::info

Some `customer_settings` properties can be set by top-level properties upon [Customer](/docs/administration/customers) creation. Please refer to API reference guide for more information.

:::

### Customer Metadata {#metadata}

The `customer_metadata` is a set of key-value pairs that can attached to a customer. This can be useful for storing additional information or third-party data, such as a customer ID from a CRM system or billing system.

The metadata is stored as a JSON object. The keys are strings and the values can be strings, numbers, booleans, or null.

**Example**

| Key                                        | Type   | Value  | Description            |
|--------------------------------------------|--------|--------|------------------------|
| `customer_metadata['external_billing_id']` | string | `123`  | Third-party billing id |
| `customer_metadata['external_crm_id']`     | string | `456`  | Third-party CRM id     |

You may store any scalar value (string, integer, float, boolean, etc.) inside the metadata attribute. In addition, one level of nested objects or arrays are allowed.

:::danger

Since the `customer_metadata` attribute is simply a key-value store (object), all write operations will **overwrite** the entire object, so be sure to **merge** existing data on your end when performing updates.

:::

### Address

The customer address is the customer’s physical address. This is used to calculate taxes and shipping costs. The address can be set to the same as the billing address or can be set to a different address.


#### Address Attributes

At the moment, the following attributes are supported:

| Attribute       | Type    | Description                                                                             | Example         |
|-----------------|---------|-----------------------------------------------------------------------------------------|-----------------|
| address_type    | string  | The type of address. Can be `PostalAddress`  or `BillingAddress`.                       | `PostalAddress` |
| default         | boolean | Whether the address is the default address for the customer.                            | `true`          |
| country         | string  | The country where the address is located. Two-letter country code (ISO 3166-1 alpha-2). | `US`            |
| state           | string  | The state where the address is located.                                                 | `CA`            |
| postal_code     | string  | The postal code of the address.                                                         | `94107`         |
| city            | string  | The city where the address is located.                                                  | `San Francisco` |
| address_line1   | string  | The first line of the address.                                                          | `123 Market St` |
| address_line2   | string  | The second line of the address.                                                         | `Suite 101`     |
| po_box          | string  | The PO Box of the address.                                                              | `PO Box 123`    |
| building_number | string  | The building number of the address.                                                     | `123`           |
| complement      | string  | The complement of the address.                                                          | `Apt 101`       |

### Telephone

The customer telephone is the customer’s telephone number. This is used to contact the customer. The telephone can can be two types, `landline` or `mobile`.

#### Telephone Attributes

At the moment, the following attributes are supported:

|       Attribute       | Type    | Description                                                      | Example           |
|:---------------------:|---------|------------------------------------------------------------------|-------------------|
|       `default`       | boolean | Whether the telephone is the default telephone for the customer. | `true`            |
|   `telephone_type`    | string  | The type of telephone. Can be `landline` or `mobile`.            | `landline`        |
|       `number`        | string  | The telephone number.                                            | `+1 415 555 1234` |
| `telephone_extension` | string  | The telephone extension.                                         | `123`             |

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

## Customers Users

Customers can have multiple users associated with them. Each customer can have only one owner defined. As default, the owner is the user who was created with the customer or first associated upon creation by the administrator.

Customer users can have different permissions associated with them. The permissions define what the user can with the customer and its resources and are define individually for each customer user, given the flexibility to define different permissions for different users.

### Inviting Users to a Customer {#invite}

There is two ways to grant access to new users:

#### Invited by Customer Owner

Customer owner can grant access to other users to manage the customer data. The customer owner can also define the permissions of each user, allowing or restricting access to determined resources.

To grant access to new users, Customer owner can send an invitation to the user email address. The invited user will receive an email with a link for accept the invitation, if they don't have an account, they will be able to create one. After the user accept the invitation, they will be able to access the customer data and perform actions according to the permissions defined for the user.

#### Associated by Platform Administrator

The platform administrator can also associate users to customers. The platform administrator can define the permissions of each user, allowing or restricting access to determined resources. Administrators can direct associate existing users to customers or invite new users to the platform and associate them to customers.

:::note

Please refer to the [Users](/docs/administration/users) section for more information about users.

:::

## Customer Limits and Quotas {#limits-quotas}

Any customer can have limits and quotas set on it. These limits and quotas are used to control the resource usage by the customer, enforcing restrictions in determined resources like the number of accounts, participants, the duration of the room, the storage used, etc. You can use this limits as part of billing or subscription plans.

:::info
Customer limits and quotas are managed through [Subscriptions](/docs/administration/subscriptions).
:::


## Customers Management {#management}

Administrators can manage accounts through the administration API. The platform administrator with the right permissions can create, edit, and delete customers. The platform administrator can also list customers and view account details.

:::tip

To see all API operations related to customer,  please refer to the [Customer API section](https://api-reference.streamwise.online/private/#api-Customer).

:::

### Customer Creation

Creating a new customer is the first step in using the platform. When you create a new customer, you can set their account and billing information, such as Email, Name, and Country. You can also set a customer’s preferred language, currency, and other important details that will be used throughout the platform.

Customer creation can be only performed authenticated administrators with the right permissions through the [API](/docs/api). The `POST /customers` endpoint is used to create a new customer.

:::info

No frontend interface or public form is provided by the platform, but you can create your own form and use the API to create customers or integrate with your own CRM or billing system.

:::

#### Customer Owner

When a new customer is created, a new [user](/docs/administration/users) based on the customer profile is also created. This user becomes the customer owner, with each customer having only a single user owner, as the same occurs for account creation. This owner user has full permissions to manage the customer data. 

If a user already exists with the same email address as the customer, the user will be associated with the customer and become the owner user.

For change the customer owner, associate a new user to the customer and set the `owner` attribute to `true`.

### Customers List

Customers list can be performed by authenticated administrators with the right permissions through the [API](/docs/api) with the `GET /customers` endpoint.

### Customers Details

Customer details can be performed by authenticated administrators with the right permissions through the [API](/docs/api) with the `GET /customers/{customer_id}` endpoint.

### Customer Users

Customer users can be managed by authenticated administrators with the right permissions through the [API](/docs/api) with the `GET /customers/{customer_id}/users` endpoint.

### Customer Editing

Editing a customer can be performed by authenticated administrators with the right permissions through the [API](/docs/api) with the `PATCH /customers/{customer_id}` endpoint.

### Customer Deletion

:::caution data loss prevention

To prevent accidental deletion, only customers with `status` set to `terminated` can be deleted.

:::

Deleting a customer can be performed by authenticated administrators with the right permissions through the [API](/docs/api) with the `DELETE /customers/{customer_id}` endpoint.

When deleting a customer, all data associated with this customer will be deleted, including accounts, rooms, and any other data like recordings, reports, etc.

:::danger

Deleting a customer will delete all accounts, rooms, and data associated with the customer. This action can't be undone.

:::