---
title: API Overview
sidebar_position: 1
sidebar_label: Overview
---

# API Overview

Welcome to the API Overview section! In this portion of the guide, we introduce the main elements regarding our API's functioning, making it more accessible to both technical and non-technical readers.

## Authenticating with the API

Our API uses OAuth 2.0 for authentication. This process involves establishing an OAuth 2.0 client, after which you'll use the client credentials to verify your identity with the API. If this sounds confusing, don't worry! We go into more detail in our [API Authentication](/docs/api/authentication) section.

## Understanding API Resources

The API is designed around 'resources'. Each resource allows a specific set of actions to be performed, making our API flexible and straightforward to use. You can familiarize yourself with our resources in the [API Resources](/docs/api/resources) section.

## API References: Private and Public

We've categorized our API references into two sections: private and public.

- The **Private API** contains all the resources available at the admin level. It's not intended for public use. Access to this API should be limited. Each deployment comes with a private API reference that you can reach at `https://<api-endpoint>/private/`. For the most up-to-date private API reference, visit [our site](https://video-stream-platform-api-reference.pages.dev/private/).

- The **Public API** contains all the resources for customers or users. It's open to the public. Each deployment includes a public API reference accessible at `https://<api-endpoint>/public/`. For the latest public API reference, visit [our site](https://video-stream-platform-api-reference.pages.dev/public/).

## Testing with Postman

Testing the API is a vital part of getting comfortable with its functionality. We've created a collection on Postman that contains all the API resources you need. The collection is available [here](https://www.postman.com/mimirtech/workspace/video-stream-resell-platform-api/overview).

With a basic understanding of these elements, you're well on your way to effectively using our API! Please refer to the particular sections for more detailed information as needed. Happy API-ing! 🚀