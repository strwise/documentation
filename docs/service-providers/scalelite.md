---
title: Scalelite Service Provider
description: How to configure multiple Scalelite Video Load Balancers in the StreamWise platform.
sidebar_position: 2
sidebar_label: Scalelite
---

# Scalelite Service Provider

## Overview

The Scalelite Service Provider is a specific implementation of the Service Provider feature in the platform. It is designed to manage and interact with the Scalelite load balancer for BigBlueButton. When the `provider_type` is set to `scalelite`, the Service Provider represents a **Scalelite** service provider.

:::tip

Please refer to [Service Providers Administration](/docs/administration/service-providers) for more information about the Service Providers feature.

:::

## Requirements

The Scalelite Service Provider requires a Scalelite server installed and configured. StreamWise platform will interact direct with the host server via API calls. The following requirements must be met:

- Scalelite version **1.0 or higher**.

## Service Provider: Scalelite

### Properties

The `properties` attribute of the Service Provider stores various data related to the Service Provider. Here are the properties specific to a **Scalelite** Service Provider:

|  Property  |  Type  | Default | Required | Description                                        |
|:----------:|:------:|:-------:|:--------:|:---------------------------------------------------|
| `host_url` | string |         |   yes    | The host API URL of the Scalelite service provider |
|  `secret`  | string |         |   yes    | The host secret of the Scalelite service provider  |

#### Host URL

The `host_url` property is the host API URL of the Scalelite server. The URL must be accessible from the StreamWise platform.

* **Key**: `host_url`
* **Example**: `https://scalelite.example.com`

:::warning SSL

The Scalelite server must have a valid SSL certificate. The platform will not be able to interact with the Scalelite server if it does not have a valid SSL certificate.

:::

:::tip

You can omit the `/bigbluebutton/api` part of the URL. The platform will automatically append it to if it is not present.

:::

#### Secret

The `secret` property is the host secret of the Scalelite server. The secret is used to authenticate the platform with the Scalelite server.

* **Key**: `secret`
* **Example**: `my-secret-key`

### Settings

The `settings` attribute of the Service Provider stores various settings related to the Service Provider. Here are the settings specific to a **Scalelite** Service Provider.

:::info

At the moment, the Scalelite Service Provider does not have any specific settings.

:::

### Metadata

:::info

For `metadata` attribute please refer to [Service Providers Administration](/docs/administration/service-providers).

:::

## Provider Management

> work in progress