---
title: API Overview
sidebar_position: 1
sidebar_label: Overview
---

# API Overview

The API is a RESTful API that uses JSON for serialization and OAuth 2.0 for authentication. In this section, you will find information about the API resources and how to use them.

## API Authentication

The API uses OAuth 2.0 for authentication. To authenticate with the API, you need to create an OAuth 2.0 client and use the client credentials to authenticate with the API.

> To see more about API authentication, see the [API Authentication](/docs/api/authentication) section.

## API Resources

The API is organized in resources. Each resource has a set of operations that can be performed on it. 

> To see more about API resources, see the [API Resources](/docs/api/resources) section.


## API Reference

### Private API

The private API reference to have all the API resources that are available on an administration level. This API reference is not intended to be used by the public (customers or users) and your access needs to be restricted.

All deployment will have a private API reference that can be accessed at `https://<api-endpoint>/private/`.

We keep an updated private API reference at https://video-stream-platform-api-reference.pages.dev/private/

### Public API

The public API reference to have all the API resources that are available on a customer or user level. This API reference is intended to be used by the public (customers or users) and your access needs to be public.

All deployment will have a public API reference that can be accessed at `https://<api-endpoint>/public/`.

We keep an updated public API reference can be found at https://video-stream-platform-api-reference.pages.dev/public/

## Postman Collection

To conveniently test the API, we have created a Postman collection that contains all the API resources. The collection can be found at:

* Postman Collection [https://www.postman.com/mimirtech/workspace/video-stream-resell-platform-api/overview](https://www.postman.com/mimirtech/workspace/video-stream-resell-platform-api/overview).