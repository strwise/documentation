---
title: Service Packages
description: Service Package describe the specific goods or services you offer to your customers.
sidebar_position: 0
sidebar_label: Overview
---
# Service Packages

> Service Package describe the specific goods or services you offer to your customers.

A Service Package defines the service that a customer can subscribe and the resources that will be available. It can be a video streaming service, a web meeting service, or any other service that you want to offer to your customers.

Service Packages are composed of:

- **Provider**: The service that will be provided to the customer. It can be a video streaming service, a web meeting service, or any other service that you want to offer to your customers. See [Service Providers](/docs/service-providers).
- **Features**: The features that are available to the customer when they subscribe to the service.
- **Quotas**: The quotas that are available to the customer when they subscribe to the service.

You can create multiple Service Packages with different features and quotas that will be available for subscription by your customers. For example, you might offer a Standard and Premium package, with different features and quotas.


## Service Package Properties

The following table describes the available properties of a Service Package.

| Property                 | Type    | Description                                                                 |
|--------------------------|---------|-----------------------------------------------------------------------------|
| id                       | string  | The unique identifier of the service package.                               |
| uuid                     | string  | The Universally Unique Identifier of the service package.                   |
| ulid                     | string  | The universally unique lexicographically identifier of the service package. |
| name                     | string  | The name of the service package.                                            |
| service_type             | string  | The type of service that the package provides.                              |
| status                   | enum    | The status of the service package.                                          |
| hidden                   | boolean | Indicates if the service package is hidden.                                 |
| retired                  | boolean | Indicates if the service package is retired.                                |
| description              | string  | The description of the service package.                                     |
| short_description        | string  | The short description of the service package.                               |
| has_stock                | boolean | Indicates if the service package has stock.                                 |
| stock_qty                | integer | The quantity of stock available for the service package.                    |
| overages_enabled         | boolean | Indicates if the service package allows overages.                           |
| oversell_enabled         | boolean | Indicates if the service package allows oversell.                           |
| price                    | float   | The price of the service package.                                           |
| signup_fee               | float   | The signup fee of the service package.                                      |
| currency                 | string  | The currency of the service package.                                        |
| tier                     | string  | The tier of the service package.                                            |
| trial_period             | integer | The trial period of the service package.                                    |
| trial_interval           | string  | The trial interval of the service package.                                  |
| trial_mode               | string  | The trial mode of the service package.                                      |
| grace_period             | integer | The grace period of the service package.                                    |
| grace_interval           | string  | The grace interval of the service package.                                  |
| periodicity              | integer | The periodicity of the service package.                                     |
| periodicity_type         | string  | The periodicity type of the service package.                                |
| notification_preferences | array   | The notification preferences of the service package.                        |
| package_settings         | array   | The package settings of the service package.                                |
| package_metadata         | array   | The package metadata of the service package.                                |


## Service Package Features

Package Features are the features that are available to the customer when they subscribe to a service.

:::info
See [Package Features](/docs/administration/service-packages/features) for more information about features.
:::

## Service Package Providers

Package Providers are the providers that are available to the customer when they subscribe to a service.

:::info
See [Package Providers](/docs/administration/service-packages/providers) for more information about providers.
:::

## Service Packages Management

Service Packages management documentation is divided into different sections that describes in detail the components of a Service Package and how to manage them.

- [Service Packages](/docs/administration/service-packages/): Describes the Service Packages and how to manage them.
- [Service Providers](/docs/administration/service-packages/providers): Describes the Service Providers and how to manage them.
- [Service Features](/docs/administration/service-packages/features): Describes the Service Features and how to manage them.


### Package Types

The platform supports the following package types:

* **meet**: Web Meeting.
* **live**: Live Streaming.
* **video**: On Demand Video.
* **webinar**: Webinar.
* **webcast**: Webcast.
* **simulcast**: Simulcast.
* **phone**: Phone Conference.
* **audio**: Audio Conference.
* **audcast**: Audio Broadcast.