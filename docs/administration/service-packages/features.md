---
title: Package Features
description: Service Features are the features that are available to the customer when they subscribe to a service.
sidebar_position: 1
---

# Package Features

A feature represents a resource that the customer can consume or access through a [Service Package](/docs/administration/service-packages). For example, a feature can represent the maximum number of participants that can join a meeting, or the maximum number of minutes that a customer have to a web meeting. Packages can have multiple features, each one representing a different resource that the customer can consume or access.

## Feature Properties {#properties}

Features are composed by properties that define the feature. The following table describes the available properties.

| Property         | Type           | Description                                                                                                                         |
|------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| name             | string         | The name of the feature.                                                                                                            |
| code             | string         | Unique code used to identify the feature associated with the API request. This code associates each event with the correct feature. |
| field_suffix     | string         | Property of the feature used for aggregating usage data. This field is not required for `count_agg`.                                |
| aggregation_type | enum <string\> | The type of aggregation used for the feature. Possible values are `count_agg`, `sum_agg`, `max_agg` or `unique_count_agg`.          |
| description      | string         | The description of the feature.                                                                                                     |
| consumable       | boolean        | Indicates if the feature is consumable. If `true`, the feature will be consumed when the customer uses the resource.                |
| quota            | boolean        | Indicates if the feature is a quota. If `true`, the feature will be used to limit the customer usage of the resource.               |
| periodicity_type | enum <string\> | The type of periodicity for the feature. Possible values are `daily`, `weekly`, or `monthly`.                                       |
| periodicity      | integer        | The periodicity value for the feature. Indicates how often the feature will be reset based on the periodicity type.                 |
| feature_settings | object         | The feature settings.                                                                                                               |
| feature_metadata | object         | The feature metadata.                                                                                                               |

#### Name

Human-readable name of the feature.

#### Code

Unique code used to identify the feature associated with the API request. This code associates each event with the correct feature.

#### Field Suffix

Property of the feature used to specify a unit of measure for the feature. This field is not required for `count_agg`.

#### Aggregation Type

The type of aggregation used for the feature. Possible values are `count_agg`, `sum_agg`, `max_agg` or `unique_count_agg`.

#### Description

Human-readable description of the feature.

#### Consumable

Indicates if the feature is consumable. If `true`, the feature will be consumed when the customer uses the resource. A consumable feature is a feature that can be incremented or decremented based on the customer usage of the resource.

#### Quota

Indicates if the feature is a quota. If `true`, the feature will be used to limit the customer usage of the resource. Features that indicate quota can have your usage limited to a specific amount.

#### Periodicity Type

The type of periodicity for the feature. Possible values are `daily`, `weekly` or `monthly`. The periodicity type indicates how often the feature will be reset. If a feature is consumable, it will be reset based on the periodicity type.

#### Periodicity

The periodicity value for the feature. Indicates how often the feature will be reset based on the `periodicity_type`. For example, if the `periodicity_type` is `monthly` and the `periodicity` is `1`, the feature will be reset every month.

#### Feature Settings

The feature settings.

#### Feature Metadata

The feature metadata.

## Available Features 

:::info

Features are managed by the platform and can't be created or updated.

:::

The platform has a predefined set of features that can be used to define the features of a package. The following table describes the available features.


| Code              | Name              | Aggregation Type | Consumable | Quota | Periodicity Type* | Periodicity* | Description                                              |
|-------------------|-------------------|------------------|------------|-------|-------------------|--------------|----------------------------------------------------------|
| max_accounts      |   Max Accounts    | count_agg        | true       | true  | monthly           | 0            | Maximum number of accounts that a customer can have.     |
| max_rooms         |     Max Rooms     | count_agg        | true       | true  | monthly           | 0            | Maximum number of rooms that a customer can have.        |
| max_participants  | Max Participants  | count_agg        | false      | true  | monthly           | 0            | Maximum number of participants that a customer can have. |
| max_duration      |    Max Duration   | sum_agg          | false      | true  | monthly           | 0            | Maximum duration in minutes that a customer can use.     |
| max_storage       | Max Storage       | sum_agg          | true       | true  | monthly           | 0            | Maximum storage in GB that a customer can use.           |
| max_recordings    |   Max Recordings  | count_agg        | true       | true  | monthly           | 0            | Maximum number of recordings that a customer can have.   |
| record_expiration | Record Expiration | sum_agg          | false      | true  | monthly           | 0            | Number of days that recordings will be kept.             |

> * Default value.

:::warning
Some features can't be associated with a package depending on the package type and service provider.
:::

#### max_accounts

The `max_accounts` setting is used to set the maximum number of accounts that can be created for the customer. This setting is used to limit the number of accounts that can be created for the customer.

* **Key:** `max_accounts`
* **Type:** `integer`
* **Value:** any positive integer or `true` to unlimited

#### max_rooms

The `max_rooms` setting is used to set the maximum number of rooms that can be created for the customer. This setting is used to limit the number of rooms that can be created for the customer.

* **Key:** `max_rooms`
* **Type:** `integer`
* **Value:** any positive integer or `true` to unlimited

:::tip
This property can be set in [Account](/docs/administration/accounts) object.
:::

#### max_participants

The `max_participants` setting is used to set the maximum number of participants that a customer can have simultaneously watching or interacting in all there rooms at the same time. This setting is used to limit the number of participants that can be in all the rooms at the same time.

* **Key:** `max_participants`
* **Type:** `integer`
* **Value:** any positive integer or `true` to unlimited

:::tip
This property can be set in [Account](/docs/administration/accounts) object.
:::

:::tip
This property can be set in [Room](/docs/administration/rooms) object.
:::

#### max_duration

The `max_duration` setting is used to set the maximum length in minutes that a customer can run a room. This setting is used to limit the length of time that a room can be active.

* **Key:** `max_duration`
* **Type:** `integer`
* **Value:** any positive integer or `true` to unlimited

:::tip
This property can be set in [Account](/docs/administration/accounts) object.
:::

:::tip
This property can be set in [Room](/docs/administration/rooms) object.
:::

#### max_storage

The `max_storage` setting is used to set the maximum storage in GB that a customer can use. This setting is used to limit the amount of storage that can be used by the customer.

* **Key:** `max_storage`
* **Type:** `integer`
* **Value:** any positive integer or `true` to unlimited

#### max_recordings

The `max_recordings` setting is used to set the maximum number of recordings that a customer can have. This setting is used to limit the number of recordings that can be created by the customer.

* **Key:** `max_recordings`
* **Type:** `integer`
* **Value:** any positive integer or `true` to unlimited

:::tip
This property can be set in [Account](/docs/administration/accounts) object.
:::

:::tip
This property can be set in [Room](/docs/administration/rooms) object.
:::

#### record_expiration

The `record_expiration` setting is used to set the number of days that recordings will be kept. This setting is used to limit the number of days that a recording will be kept.

* **Key:** `record_expiration`
* **Type:** `integer`
* **Value:** any positive integer or `true` to unlimited

:::tip
This property can be set in [Account](/docs/administration/accounts) object.
:::

:::tip
This property can be set in [Room](/docs/administration/rooms) object.
:::