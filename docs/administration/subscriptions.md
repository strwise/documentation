---
title: Service Subscriptions
description: Subscriptions are the subscriptions that are available to the customer when they subscribe to a service.
sidebar_position: 9
sidebar_label: Subscriptions
---

## Overview {#overview}

Subscriptions are the business model that defines the service that the customer will have access to. Subscriptions are associated with a service package and are the subscriptions that are available to the customer when they subscribe to a service.

Through subscriptions, you can define the service name, description, and the service provider that will be used to provide the service. You can also define the subscription features and quotas that will be available when a customer subscribe to the service.

## Subscription Properties {#properties}

Subscriptions have a set of properties that define the service that the customer will have access to. Below are the properties that can be defined for a subscription.

### Subscription Attributes {#attributes}

Below are the attributes that can be defined for a subscription:

| Attribute          | Description                                                                  | Type     | Example                                  |
|--------------------|------------------------------------------------------------------------------|----------|------------------------------------------|
| `object`           | Object type.                                                                 | `string` | `ServicePackageSubscription`             |
| `id`               | Subscription ID.                                                             | `string` | `pEGXxmeyPkq25wlM`                       |
| `uuid`             | Subscription UUID.                                                           | `string` | `d9f1c0a0-9b1a-4c7b-9b1a-4c7b-9b1a-4c7b` |
| `ulid`             | Subscription ULID.                                                           | `string` | `01F9Z3YXQZQVXQZQVXQZQVXQZQV`            |
| `tag`              | Subscription tag.                                                            | `string` | `86x5wyg8`                               |
| `name`             | Subscription name.                                                           | `string` | `My Subscription`                        |
| `description`      | Subscription description.                                                    | `string` | `My Subscription Description`            |
| `package_id`       | Service package ID.                                                          | `string` | `pEGXxmeyPkq25wlM`                       |
| `subscriber_id`    | Customer ID that owns the subscription.                                      | `string` | `pEGXxmeyPkq25wlM`                       |
| `service_type`     | The type of service offered in subscription. inherited from Service Package. | `string` | `meet`                                   |
| `status`           | The subscription status represents the current state of the subscription.    | `string` | `active`                                 |
| `is_active`        | Indicates whether the subscription is active. Not related with status        | `bool`   | `true`                                   |
| `starts_at`        | Subscription start date. Reset on every periodicity                          | `string` | `2021-01-01T00:00:00Z`                   |
| `ends_at`          | Subscription end date.                                                       | `string` | `2021-12-31T23:59:59Z`                   |
| `cancels_at`       | Subscription cancel date.                                                    | `string` | `2021-12-31T23:59:59Z`                   |
| `canceled_at`      | Subscription cancellation date.                                              | `string` | `2021-12-31T23:59:59Z`                   |
| `trial_period`     | Subscription trial period.                                                   | `number` | `7`                                      |
| `trial_interval`   | Subscription trial interval.                                                 | `string` | `day`                                    |
| `trial_ends_at`    | Subscription trial end date.                                                 | `string` | `2021-12-31T23:59:59Z`                   |
| `grace_period`     | Subscription grace period.                                                   | `number` | `7`                                      |
| `grace_interval`   | Subscription grace interval.                                                 | `string` | `day`                                    |
| `periodicity`      | Subscription periodicity.                                                    | `number` | `1`                                      |
| `periodicity_type` | Subscription periodicity interval.                                           | `string` | `month`                                  |
| `tier`             | Subscription tier.                                                           | `string` | `basic`                                  |
| `price`            | Subscription price.                                                          | `number` | `10.00`                                  |
| `currency`         | Subscription currency.                                                       | `string` | `USD`                                    |
| `created_at`       | Subscription creation date.                                                  | `string` | `2021-01-01T00:00:00Z`                   |
| `updated_at`       | Subscription last update date.                                               | `string` | `2021-01-01T00:00:00Z`                   |

#### Object {#object}

The object type represents the type of the object. For a subscription, the object type is `ServicePackageSubscription`.

#### ID {#id}

The subscription ID is a unique identifier for the subscription.

#### UUID {#uuid}

The subscription UUID is a unique identifier for the subscription.

#### ULID {#ulid}

The subscription ULID is a unique identifier for the subscription.

#### Tag {#tag}

The subscription tag is a unique identifier for the subscription.

#### Name {#name}

The subscription name is the name of the subscription.

#### Description {#description}

The subscription description is the description of the subscription.

#### Package ID {#package-id}

The service package ID is the ID of the service package that the subscription is based on.

#### Subscriber ID {#subscriber-id}

The subscriber ID is the ID of the customer that owns the subscription.

#### Service Type {#service-type}

The service type is the type of service offered in the subscription. The service type is inherited from the service package.

#### Status {#status}

The subscription status represents the current state of the subscription. The status can be:

- `active`: The subscription is active and the customer can use the service.
- `inactive`: The subscription is inactive and the customer cannot use the service.
- `canceled`: The subscription is canceled and the customer cannot use the service.
- `suspended`: The subscription is suspended and the customer cannot use the service.
- `terminated`: The subscription is terminated and the customer cannot use the service.

#### Is Active {#is-active}

The `is_active` attribute indicates whether the subscription is active. This attribute is not related with the status attribute, and is automatically updated by the system based on the subscription expiration cycle.

#### Starts At {#starts-at}

The subscription start date is the date when the subscription starts. The start date is reset on every periodicity.

#### Ends At {#ends-at}

The subscription end date is the date when the subscription ends.

#### Cancels At {#cancels-at}

The subscription cancel date is the date when the subscription will be canceled.

#### Canceled At {#canceled-at}

The subscription cancellation date is the date when the subscription was canceled.

#### Trial Period {#trial-period}

The subscription trial period is the number of cycles of an interval that the customer can use the service for free.

::: note

To learn more about the trial period, see [Service Package Trial Period](/docs/administration/service-packages#trial-period).

:::

#### Trial Interval {#trial-interval}

The subscription trial interval is the interval of the trial period. The interval can be `day`, `week`, `month`, or `year`.

#### Trial Ends At {#trial-ends-at}

The subscription trial end date is the date when the trial period ends.

#### Grace Period {#grace-period}

The subscription grace period is the number of cycles of an interval that the customer can use the service after the subscription ends.

:::note

To learn more about the grace period, see [Service Package Grace Period](/docs/administration/service-packages#grace-period).

:::

#### Grace Interval {#grace-interval}

The subscription grace interval is the interval of the grace period. The interval can be `day`, `week`, `month`, or `year`.

#### Periodicity {#periodicity}

The subscription periodicity is the number of intervals that the subscription will be renewed.

:::note

To learn more about the periodicity, see [Service Package Periodicity](/docs/administration/service-packages#periodicity).

:::

#### Periodicity Type {#periodicity-type}

The subscription periodicity interval is the interval of the periodicity. The interval can be `day`, `week`, `month`, or `year`.

#### Tier {#tier}

The use of `tier` is **optional**. Usually a tier is a "level" of subscription.

##### Example

The way it's thought is:

You have 3 plans: _Basic_, _Intermediate_ and _Pro_. How do you now which is better than the other? You can look at the price.

But... what if there is a promo during some time and the price of _Intermediate_ is lower now than _Basic_ will be next month when there is no promo? When you change the subscription plan from your promo _Intermediate_ to _Basic_ normally would be a downgrade, but now prices are reversed and action is an upgrade. Weird, huh?

What if you customize your user subscription, and now it is somewhere in the middle between Intermediate and Pro? You can change the tier to a number in between, so you know what to do when changing (downgrading) to existing Intermediate or upgrading to Pro.

#### Price {#price}

The subscription price is the price that the customer will pay for the subscription.

#### Currency {#currency}

The subscription currency is the currency that the customer will pay for the subscription.

#### Created At {#created-at}

The subscription creation date is the date when the subscription was created.

#### Updated At {#updated-at}

The subscription last update date is the date when the subscription was last updated.

### Subscription Metadata {#metadata}

:::warning
Subscription Metadata is not available yet.
:::

## Subscription Features {#features}

> Subscription Features are the features that are available to the customer when they subscribe to a service.

A subscription can have multiple features, each one representing a different resource that the customer sign up for. When create a new subscription, all features present on related [Service Package](/docs/administration/service-packages) are automatically added to the subscription, with their limits and quotas.

Besides the features that are automatically added to the subscription, you can add more features to the subscription. This can be useful when you need a customer to have access to a specific feature that is not available on the service package.

With Subscription Features you can have a flexible way to manage the features that are available to the customer when they subscribe to a service.

:::note

For more information about Service Package Features, see [Service Package Features](/docs/administration/service-packages#features).

:::

Please refer to Subscription [Features Management](#features-management) for more information.

## Subscription Service Providers {#providers}

Subscriptions can have Service Providers, that are the providers that the customer can use to provide the service for the given subscription. When create a new subscription, a default provider is automatically associated based on the default provider of the service package, but it is possible include additional service providers.

It is possible to have multiple service providers associated with a subscription, each one representing a different provider that the customer can use to provide the service for the given subscription, but **only one provider can be the default** provider. With this, administrators can customize any subscription to use a specific provider, or even change the default provider at any time.

For example, suppose that your customer is having bad performance with the actual provider associated with his subscription, due to a high usage. You can add a new provider to the subscription and set it as default, now the customer have a new provider to use. This can be even temporally, removing the provider after the customer usage decrease and return to the original provider.

When a service provider is associated with a subscription, data such as provider access credentials, settings, and metadata are not copied, allowing you to update provider credentials, for example, without having to perform the same operation on all subscriptions that use the provider.

With Subscription Service Providers you can have a flexible way to manage the service providers that the customer can use to provide the service for the given subscription.

Please refer to Subscription [Service Providers Management](#providers-management) for more information.

## Subscription Limits and Quotas {#limits-quotas}

Subscriptions has limits and quotas that define the maximum usage of the resources available in a subscription. The limits and quotas are defined by the features that are available in the subscription, each feature has a limit and a quota that can be used by the customer.

These limits are primarily based on Service Package Features, but can be customized for each subscription. For example, you can have a service package that has a feature called `max_rooms` with a limit of 10 rooms, but you can create a subscription that has a feature called `max_rooms` with a limit of 20 rooms.

To see how tor manage limits and quotas for a subscription, please refer to the [Subscription Features](#features-management) and take a look at [Service Package Features](/docs/administration/service-packages/) for more information.

## Subscription Management {#management}

Platform administrators can manage subscriptions through the API. The following operations are available:

:::tip api reference

For more information about Subscription API, see the [API Reference](/docs/api).

:::

### Create a Subscription {#create}

To create a new subscription, you need to use the API endpoint `POST /subscriptions`. When creating a new subscription, you need to specify the service package that the subscription will be based on, the customer that will own the subscription, and optionally you can personalize some subscription attributes like the name, description, price, renew period, and others.

An example of a request with the minimum required attributes to create a subscription:

```json
{
  "package_id": "ap4Ay1noRevqJDx7",
  "subscriber_id": "gAGqOrnN9ye3o5N2"
}
```

Optionally, you can personalize the subscription attributes like the name, description, price, renew period, and others:

```json
{
  "package_id": "ap4Ay1noRevqJDx7",
  "subscriber_id": "gAGqOrnN9ye3o5N2",
  "name": "My Subscription Name",
  "description": "My Subscription Description",
  "price": 10.00,
  "currency": "USD",
  "periodicity": 1,
  "periodicity_type": "month",
  "trial_period": 7,
  "trial_interval": "day",
  "grace_period": 7,
  "grace_interval": "day"
}
```

To see the available attributes that can be used to create a subscription, see the [Create Subscription API Reference](https://api-reference.streamwise.online/private/#api-Subscription-CreateSubscription).

:::note subscription features

When creating a new subscription, all features present on the service package will be automatically added to the subscription, with their limits and quotas.
If you need to add more features to the subscription, please refer to [Subscription Features](#features-management).

:::

When a subscription is created, the subscription object will be returned with the new values in the response.

Example of a response after successfully created a subscription:

```json
{
  "data": {
    "object": "ServicePackageSubscription",
    "id": "0Z8NJOeVbev1zp6r",
    "uuid": "b7cecfb2-2bf4-4628-91e1-18dea2fd40bc",
    "ulid": "01hnraj6rzn4rxsxt0tv9p4yrj",
    "tag": "jkgqmnmj",
    "name": "Subscription Streaming Plus #1 - jkgqmnmj #14",
    "package_id": "ap4Ay1noRevqJDx7",
    "subscriber_id": "gAGqOrnN9ye3o5N2",
    "service_type": "meet",
    "status": "active",
    "is_active": true,
    "starts_at": "2024-02-03T20:29:07.000000Z",
    "ends_at": "2024-03-03T20:29:07.000000Z",
    "cancels_at": null,
    "canceled_at": null,
    "trial_period": 0,
    "trial_interval": "day",
    "trial_ends_at": null,
    "grace_period": 0,
    "grace_interval": "day",
    "periodicity": 6,
    "periodicity_type": "month",
    "tier": 0,
    "price": 14.99,
    "currency": "BRL",
    "description": "",
    "created_at": "2024-02-03T20:29:07.000000Z",
    "updated_at": "2024-02-03T20:29:07.000000Z",
    "readable_created_at": "há 1 segundo",
    "readable_updated_at": "há 1 segundo",
  },
  "meta": {
    "include": [
      "features",
      "usages",
      "providers",
      "accounts"
    ],
    "custom": []
  }
}
```

### Update a Subscription {#update}

After a subscription is created, it is possible change many aspects of subscription, like the name, description, and the service provider that will be used to provide the service. You can also define the subscription features and quotas that will be available when a customer subscribe to the service.

To update a subscription, you need to use the API endpoint `PATCH /subscriptions/{subscriptionId}`.

Example of a request to update a subscription:

```json
{
  "name": "My New Subscription Name",
  "description": "My New Subscription Description",
  "price": 20.00,
  "currency": "BRL"
}
```

After successfully updated a subscription, the subscription object will be returned with the new values in the response.

:::note api reference

For more information about the available attributes that can be updated, see the [Subscription API Reference](/docs/api).

:::

### Delete a Subscription {#delete}

To delete a subscription, you need to use the API endpoint `DELETE /subscriptions/{subscriptionId}`. When deleting a subscription, all related resources will be deleted, including accounts, rooms (and any data related to room) and any other data related to the subscription. This operation is irreversible.

:::caution

To prevent accidental deletion, only subscriptions with status `inactive` can be deleted.

:::

### Subscriptions List {#list}

Subscriptions can be listed by administrators with the right permissions. To list subscriptions, you need to use the API endpoint `GET /subscriptions`. You can use query parameters to filter the results and limited the number of results returned by pagination.

:::note

refere to subscription attributes table to see the available attributes that can be returned.

:::

### Subscription Details {#get}

To get the details of a subscription, you need to use the API endpoint `GET /subscriptions/{subscriptionId}`.

:::note

refere to subscription attributes table to see the available attributes that can be returned.

:::

### Subscription Usage {#usage}

Subscription usage is the usage of the resources available in a subscription (a.k.a. Subscription Features). The usage information will be attached to the feature that is being used, each time a resource is used or deleted, the usage information will be updated.

To get the usage of a subscription, you need to use the API endpoint `GET /subscriptions/{subscriptionId}/usage`.

Example of a subscription usage:

```json
{
  "data": [
    {
      "object": "ServicePackageSubscriptionFeature",
      "id": "5AX2POnRVnym4Yq8",
      "service_subscription_id": "5AX2POnRVnym4Yq8",
      "service_feature_id": "5AX2POnRVnym4Yq8",
      "tag": "max_accounts",
      "name": "Accounts",
      "description": "Maximum number of allowed accounts",
      "value": "10",
      "resettable_period": 0,
      "resettable_interval": "month",
      "sort_order": 0,
      "created_at": "2023-09-08T21:13:11.000000Z",
      "updated_at": "2023-09-08T21:13:11.000000Z",
      "readable_created_at": "3 hours ago",
      "readable_updated_at": "3 hours ago",
      "usage": {
        "data": {
          "id": "5AX2POnRVnym4Yq8",
          "plan_subscription_feature_id": "5AX2POnRVnym4Yq8",
          "subscription_feature_tag": "max_accounts",
          "used": 1,
          "valid_until": null,
          "created_at": "2023-09-08T23:58:49.000000Z",
          "updated_at": "2023-09-08T23:58:49.000000Z",
          "readable_created_at": "14 minutes ago",
          "readable_updated_at": "14 minutes ago"
        }
      }
    }
  ]
}
```

In the example above, the subscription has a feature called `Accounts` with a tag `max_accounts`. The usage of this feature is 1, which means that the customer has 1 account created. The value of the feature is 10, which means that the customer can create up to 10 accounts. When the customer creates a new account, the usage will be updated to 2. When the customer deletes an account, the usage will be updated to 1.

:::caution

Subscription usage **do not record historical data**, only the current usage is available. If you need to record historical data, you need to implement your own solution.

:::

### Subscription Features {#features-management}

Subscription features are the features that are available to the customer when they subscribe to a service. When a new subscription is created, all features present on related [Service Package](/docs/administration/service-packages) are automatically added to the subscription, with their limits and quotas.

To get the features of a subscription, you need to use the API endpoint `GET /subscriptions/{subscriptionId}/features`.


#### Add Feature to a Subscription {#add-feature}

Besides the features that are automatically added to the subscription when it is created, you can add more features to the subscription. This can be useful when you need a customer to have access to a specific feature that is not available on the service package. 

To add a feature to a subscription, you need to use the API endpoint `POST /subscriptions/{subscriptionId}/features`.

Example of a request to add a feature to a subscription:

```json
// POST /subscriptions/{subscriptionId}/features
{
  "service_feature_code": "max_rooms", // service feature code
  "value": 10 // required, the value of the feature
}
```

After successfully added a new feature to a subscription, the feature object will be returned:

```json
{
    "data": {
        "object": "ServicePackageSubscriptionFeature",
        "id": "16YRQJK7Bn2Z3ME7",
        "subscription_id": "Nba1rYkOBKVXzmx7",
        "package_feature_id": null,
        "tag": "screen_sharing",
        "name": "Screen Sharing",
        "description": "Screen Sharing capability when available",
        "value": "true",
        "resettable_period": 0,
        "resettable_interval": "month",
        "sort_order": null,
        "created_at": "2024-02-01T20:48:44.000000Z",
        "updated_at": "2024-02-01T20:48:44.000000Z",
        "readable_created_at": "há 1 segundo",
        "readable_updated_at": "há 1 segundo"
    },
    "meta": {
        "include": [
            "usage"
        ],
        "custom": []
    }
}
```

#### Update Feature on a Subscription {#update-feature}

During the subscription lifecycle, it is possible to update the features of a subscription at any time. This updates will be reflected only on the subscription, not on the service package or the feature itself. For example, after create a subscription that has a feature inherited from the service package, you can update the feature value to match the customer needs.

To update a feature on a subscription, you need to use the API endpoint `PATCH /subscriptions/{subscriptionId}/features/{featureId}`.

Example of update a feature value on subscription:

```json
{
  "value": 20 //  the new value of the feature
}
```


:::caution not available

This feature is not available yet.

:::

#### Remove Feature from a Subscription {#remove-feature}

Subscriptions can have your characteristics changed during your existence. If needed, you can remove a feature from a subscription at any time.

To remove a feature from a subscription, you need to use the API endpoint `DELETE /subscriptions/{subscriptionId}/features/{featureId}`.

:::caution feature usage data

When removing a feature from a subscription, the usage of the feature will be removed as well. If you need to keep the usage of the feature, you need to retrieve the values before removing the feature.

:::

:::caution not available

This feature is not available yet.

:::

#### Sync Features for a Subscription {#sync-features}

Subscriptions will inherit the features of the service package when created. If the features of the service package are updated, the features of the subscription will not be updated automatically.

Its is possible to sync the features of a subscription with the features of the service package. With this operation, all features of subscription will be updated to match the features and your quotas of the service package. If subscription has features that are not present on the service package (custom features), they will be removed.

To sync the features of a subscription with the features of the service package, you need to use the API endpoint `POST /subscriptions/{subscriptionId}/features/sync`.

Example of a request to sync the features of a subscription:

```json
{
  "sync": true // required
}
```

After sync, the subscription object will be returned with new features in the response.

```json
// example
```

:::caution

When syncing the features of a subscription, all features that are not present on the service package will be removed from the subscription.

:::

:::danger not available

The feature sync operation is not available yet.

:::

### Subscription Service Providers {#providers-management}

Subscriptions can have multiple service providers, each one representing a different provider that the customer can use to provide the service for the given subscription. After a subscription is created, it is possible include additional service providers.

:::caution provider type

The service provider type needs to be the same of the subscription. For example, if the subscription is for a `meet` service, the service provider type needs to be `meet` as well.

:::

#### Add Service Provider to a Subscription {#add-provider}

To add a service package to a subscription, you need first attach the desired provider to the respective service package.

:::danger service package providers only

At the moment, **only providers that are attached to the service package** can be added to the subscription. If you need to add a new provider to the subscription, you need to attach it to the service package first.

:::

To add a service provider to a subscription, you need to use the API endpoint `POST /subscriptions/{subscriptionId}/providers`.

Example of a request to add a service provider to a subscription:

```json
{
    "package_provider_id": "Nba1rYkOBKVXzmx7",
    "active": true,
    "default": true,
    "metadata": {
        "external_key": "my-external-key-123"
    }
}
```

After successfully added a new service provider to a subscription, the provider object will be returned:

```json
{
    "data": {
      "object": "ServicePackageProvider",
      "id": "vx2jP7nYLeElOyLd",
      "uuid": "f3cfd3d0-6237-446d-b16d-5854c69d3e7a",
      "ulid": "01hnkbvsmcbz0px5p19mhxq65w",
      "active": true,
      "default": true,
      "service_provider_id": "Nba1rYkOBKVXzmx7",
      "service_provider_name": "Scalelite #cloudainer",
      "service_provider_type": "scalelite",
      "package_id": "ap4Ay1noRevqJDx7",
      "settings": [],
      "metadata": {
        "external_id": "ES9407524001850200800069"
      },
      "created_at": "2024-02-01T22:15:37.000000Z",
      "updated_at": "2024-02-01T22:15:37.000000Z",
      "readable_created_at": "há 1 segundo",
      "readable_updated_at": "há 1 segundo"
    },
    "meta": {
        "include": [],
        "custom": []
    }
}
```

:::info default provider

When adding a new provider to a subscription, you can set the `default` attribute as `true` to make it the default provider for the subscription. This will make the actual default provider to be set as `false`.

:::

#### Update Service Provider on a Subscription {#update-provider}

Its is possible to update the service provider of a subscription at any time, including settings and metadata. This updates will be reflected only on the provider subscription, not on the service package or the provider itself.

For example, after create a subscription that has a provider inherited from the service package, you can update the provider settings and metadata to match the customer needs. Or deactivate the provider to prevent the customer from using it, per example.

To update a service provider on a subscription, you need to use the API endpoint `PATCH /subscriptions/{subscriptionId}/providers/{providerId}`.

Example of a request to update a service provider on a subscription:

```json
{
    "active": false,
    "metadata": {
        "external_key": "new-key"
    }
}
```

After successfully updated a service provider on a subscription, the provider object will be returned.

#### Remove Service Provider from a Subscription {#remove-provider}

On subscription lifecycle, it is possible to remove a service provider from a subscription at any time. To remove a provider you need to some steps to ensure that the provider is not being used by the customer.

First, you need to specify another provider as default if the provider that you want to remove is the default provider. After that, you need deactivate the provider to prevent the customer from using it. After the provider is deactivated, you can remove it from the subscription.

To remove a service provider from a subscription, you need to use the API endpoint `DELETE /subscriptions/{subscriptionId}/providers/{providerId}`.

:::caution data loss prevention

To prevent data loss, only **inactive** providers can be removed from the subscription. If you need to remove an active provider, you need to set it as inactive first.

:::

### Subscription Renewal {#renew}

After the validity period and the grace period, if any, the subscription will be considered expired. When a subscription is expired, no action will be allowed by the customer on the subscription as well as on all resources linked to it.

An expired subscription will be determined based on the value of the `ends_at` and `cancels_at` attribute. If the value of one of these attributes is less than the current date, the subscription is considered expired. When a subscription expires, the `is_active` attribute will be updated to `false` and the `status` attribute will be updated to `suspended`.

:::info

The `status` and `is_active` attributes are independent of each other, but indicate the same state of the subscription. The `status` attribute can be manually updated by the administrator and has a wide scope, while the `is_active` attribute is automatically updated by the system and has a direct relationship with the subscription expiration cycle.

:::

To renew a subscription, you need to use the API endpoint `POST /subscriptions/{subscriptionId}/renew`.

Example of a request to renew a subscription:

```json
{
  "renew": true, // required
  "cycles": 1, // multiple the periodicity by the number of cycles to renew
  "uncancel": true // optional, uncancel the subscription if it is canceled
}
```

After success renewal, the subscription object will be returned with the new status and renewal dates:

```json
{
  "data": {
    "object": "ServicePackageSubscription",
    "id": "pEGXxmeyPkq25wlM",
    "uuid": "9aa9a225-25b4-41ab-a740-8fd8109e3673",
    "ulid": "01hfqv74jc3dv1ktbmxkss6y7m",
    "tag": "86x5wyg8",
    "name": "Streaming Plus #1 - 86x5wyg8 #1",
    "package_id": "ap4Ay1noRevqJDx7",
    "subscriber_id": "gAGqOrnN9ye3o5N2",
    "service_type": "meet",
    "status": "active",
    "is_active": true,
    "starts_at": "2023-11-21T02:26:44.000000Z",
    "ends_at": "2023-12-21T02:26:44.000000Z",
    "cancels_at": null,
    "canceled_at": null
    // ...
  }
}
```

:::caution

Canceled subscriptions cannot be renewed. If you want to renew a canceled subscription, you need to uncancel it first or send the `uncancel` attribute as `true` on body payload.

:::

### Subscription Cancellation {#cancel}

When a subscription is canceled, the customer will not be able to use the service anymore. The subscription will be marked as status `canceled` and the `canceled_at` attribute will be updated with the date when subscription was canceled. By default, the subscription will be available until the end of the current period.

It is possible to cancel a subscription immediately by sending the `cancel_now` attribute as `true` on body payload, this will set the `cancels_at` attribute to the current date. When the subscription is canceled immediately, the customer will not be able to use the service anymore.

The `status` attribute will be updated to `canceled` and the `is_active` attribute will be updated to `false`.

To cancel a subscription, you need to use the API endpoint `POST /subscriptions/{subscriptionId}/cancel`.

:::note

If the subscription is not active, the cancel operation will be ignored.

:::

Example of a request to cancel a subscription:

```json
{
  "cancel": true, // required
  "cancel_now": true // forces the subscription to be canceled immediately
}
```

:::tip

To cancel a subscription in the end of the current period, just send `"cancel": true` on body payload.

:::


After success cancellation, the subscription object will be returned with the new status and cancellation dates:

```json
{
  "data": {
    "object": "ServicePackageSubscription",
    "id": "pEGXxmeyPkq25wlM",
    "uuid": "9aa9a225-25b4-41ab-a740-8fd8109e3673",
    "ulid": "01hfqv74jc3dv1ktbmxkss6y7m",
    "tag": "86x5wyg8",
    "name": "Streaming Plus #1 - 86x5wyg8 #1",
    "package_id": "ap4Ay1noRevqJDx7",
    "subscriber_id": "gAGqOrnN9ye3o5N2",
    "service_type": "meet",
    "status": "canceled",
    "is_active": false,
    "starts_at": "2023-11-21T02:26:44.000000Z",
    "ends_at": "2023-12-21T02:26:44.000000Z",
    "cancels_at": "2023-12-21T02:26:44.000000Z",
    "canceled_at": "2024-01-31T16:35:28.000000Z"
    // ...
  }
}
```

:::info

Only the date part of date attributes is considered, the time part will always be ignored.

:::