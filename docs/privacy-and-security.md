---
sidebar_position: 12
sidebar_label: Privacy & Security
---

# Privacy & Security

**SaaS Video Streaming Resell** is committed to protecting your privacy and ensuring that your personal information is protected. The platform is designed to ensure that your personal information is protected and never misused. All security measures are taken to prevent unauthorized access to your data.

All sensitive data is encrypted and stored in a secure way, including passwords, API keys, and other sensitive data. The platform uses the latest security technologies to ensure that your data is protected at all times.

## Hash ID

**SaaS Video Streaming Resell** uses a hash ID to identify any stored data. The hash ID is a unique identifier that is generated using a salt generate automatically based on app key. With Hashed ID, none of the sequential IDs of database records are exposed to any resource or user.

With this approach, the platform can ensure that no one can guess the next ID of a database record, and therefore, no one can access any data without the proper authorization.

## Encryption

## Passwords

## Rate Limiting

All REST API requests are throttled to prevent abuse and ensure stability. The exact number of calls that your application can make per day varies based on the type of request you are making.

The rate limit window is 1 minute per endpoint, with most individual calls allowing for 30 requests in each window.

In other words, each user is allowed to make 30 calls per endpoint every 1 minute. (For each unique access token).