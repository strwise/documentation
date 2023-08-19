---
title: Features
description: Service Features are the features that are available to the customer when they subscribe to a service.
sidebar_position: 1
---

Features are the features that are available to the customer when they subscribe to a Package. Packages can have multiple features, each one representing a different resource that the customer can consume or access.

A feature represents a resource that the customer can consume or access through a [package](packages). For example, a feature can represent the maximum number of participants that can join a meeting, or the maximum number of minutes that a customer have to a web meeting.

## Feature Properties

| Property         | Type           | Description                                                                                                                         |
|------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| name             | string         | The name of the feature.                                                                                                            |
| code             | string         | Unique code used to identify the feature associated with the API request. This code associates each event with the correct feature. |
| field_name       | string         | Property of the feature used for aggregating usage data. This field is not required for `count_agg`.                                |
| aggregation_type | enum <string\> | The type of aggregation used for the feature. Possible values are `count_agg`, `sum_agg`, `max_agg` or `unique_count_agg`.          |
| description      | string         | The description of the feature.                                                                                                     |
| consumable       | boolean        | Indicates if the feature is consumable. If `true`, the feature will be consumed when the customer uses the resource.                |
| quota            | boolean        | Indicates if the feature is a quota. If `true`, the feature will be used to limit the customer usage of the resource.               |
| periodicity_type | enum <string\> | The type of periodicity for the feature. Possible values are `daily`, `weekly`, `monthly` or `yearly`.                              |
| periodicity      | integer        | The periodicity value for the feature. Indicates how often the feature will be reset based on the periodicity type.                 |
| feature_settings | object         | The feature settings.                                                                                                               |
| feature_metadata | object         | The feature metadata.                                                                                                               |
#### Name
#### Code
#### Field Name
#### Aggregation Type
#### Description
#### Consumable
#### Quota
#### Periodicity Type
#### Periodicity
#### Feature Settings
#### Feature Metadata

## Available Features

The application has a predefined set of features that can be used to define the features of a package. The following table describes the available features.

:::warning
Some features can't be associated with a package depending on the package type and service provider.
:::

| Name              | Code              | Aggregation Type | Consumable | Quota | Periodicity Type | Periodicity | Description                                              |
|-------------------|-------------------|------------------|------------|-------|------------------|-------------|----------------------------------------------------------|
| Max Accounts      | max_accounts      | count_agg        | false      | true  | monthly          | 1           | Maximum number of accounts that a customer can have.     |
| Max Rooms         | max_rooms         | count_agg        | false      | true  | monthly          | 1           | Maximum number of rooms that a customer can have.        |
| Max Participants  | max_participants  | count_agg        | false      | true  | monthly          | 1           | Maximum number of participants that a customer can have. |
| Max Duration      | max_duration      | sum_agg          | false      | true  | monthly          | 1           | Maximum duration in minutes that a customer can use.     |
| Max Storage       | max_storage       | sum_agg          | false      | true  | monthly          | 1           | Maximum storage in GB that a customer can use.           |
| Max Recordings    | max_recordings    | count_agg        | false      | true  | monthly          | 1           | Maximum number of recordings that a customer can have.   |
| Record Expiration | record_expiration | sum_agg          | false      | true  | monthly          | 1           | Number of days that recordings will be kept.             |


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