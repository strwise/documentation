---
title: Service Subscriptions
description: Subscriptions are the subscriptions that are available to the customer when they subscribe to a service.
sidebar_position: 9
sidebar_label: Subscriptions
---

## Overview

> Work in progress

Subscriptions are the business model that defines the service that the customer will have access to. Subscriptions are associated with a service package and are the subscriptions that are available to the customer when they subscribe to a service.

Through subscriptions, you can define the service name, description, and the service provider that will be used to provide the service. You can also define the subscription features and quotas that will be available when a customer subscribe to the service.

## Subscription Properties {#properties}

### Subscription Attributes {#attributes}

> work in progress

### Subscription Settings {#settings}

> work in progress

### Subscription Metadata {#metadata}

> work in progress

## Subscription Features {#features}

> Subscription Features are the features that are available to the customer when they subscribe to a service.

A subscription can have multiple features, each one representing a different resource that the customer sign up for. When create a new subscription, all features of the service package are automatically added to the subscription, with their limits and quotas.

## Subscription Service Providers {#providers}

> work in progress

## Subscription Limits and Quotas {#limits-quotas}

> work in progress

## Subscriptions Management {#management}

Platform administrators can manage subscriptions through the API. The following operations are available:

:::tip

For more information about Subscription API, see the [API Reference](/docs/api).

:::

### Create a Subscription {#create}

> work in progress

### Update a Subscription {#update}

> work in progress

To update a subscription, you need to use the API endpoint `PUT /subscriptions/{subscriptionId}`.

### Delete a Subscription {#delete}

> work in progress

To delete a subscription, you need to use the API endpoint `DELETE /subscriptions/{subscriptionId}`.

### List Subscriptions {#list}

Subscriptions can be listed by administrators with the right permissions. To list subscriptions, you need to use the API endpoint `GET /subscriptions`. You can use query parameters to filter the results.

### Subscription Details {#get}

> work in progress

To get the details of a subscription, you need to use the API endpoint `GET /subscriptions/{subscriptionId}`.

### Subscription Usage {#usage}

> work in progress

To get the usage of a subscription, you need to use the API endpoint `GET /subscriptions/{subscriptionId}/usage`.

### Renew a Subscription {#renew}

> work in progress

To renew a subscription, you need to use the API endpoint `POST /subscriptions/{subscriptionId}/renew`.

### Cancel a Subscription {#cancel}

> work in progress

To cancel a subscription, you need to use the API endpoint `POST /subscriptions/{subscriptionId}/cancel`.