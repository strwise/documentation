---
sidebar_position: 2
sidebar_label: Getting Started
---

# Getting Started

## Introduction

Welcome to the SaaS Video Streaming Resell System! This section will help you get started with the platform by covering the basics of administration, logging in, and navigating the platform's resources.

## Configuring the Platform

After the platform is installed, you'll need to configure it to suit your needs. We recommend that you configure **PaaS Video Streaming Resell Platform** in the following order:

1. Perform the recommended Further Security Steps.
2. Create your administration account.
3. Configure your general settings.
4. Configure your first BigBlueButton/Scalelite host.
5. Create a customer to test the platform.

## Setting Up Your Administration Account

To get started, you'll need to create an administration account on the platform. After the platform is installed, you will be able to create an administration account by accessing the workspace container and executing the following command:

```bash
artisan vsp:admin:create
```

This command will prompt you to enter the following information:

- **Name** - The name of the administration account.
- **Email** - The email address of the administration account.
- **Password** - The password of the administration account.

Once you've entered the required information, the administration account will be created and you'll be able to log in to the platform.

## Logging In to the Platform

### Dashboard

To log in to the platform, simply navigate to the login page and enter your administration account credentials. Once you've logged in, you'll be taken to the administration dashboard.

### API Credentials

The platform uses API credentials to authenticate requests to the API. To create API credentials, navigate to the **API Credentials** page and click the **Create API Credentials** button. This will prompt you to enter the following information:

- **Name** - The name of the API credentials.
- **Description** - The description of the API credentials.
- **Permissions** - The permissions of the API credentials.
- **Expiration Date** - The expiration date of the API credentials.

Once you've entered the required information, the API credentials will be created, and you'll be able to use them to authenticate requests to the API.

## Navigating the Platform

### Administration Dashboard

The Administration Dashboard is the portal that admins access when they work within PaaS Video Streaming Resell Platform. The PaaS Video Streaming Resell Platform Administration Dashboard has interfaces and feature pages, each often containing multiple sub-interfaces.

You can access the Admin Area by following the steps below to log in as an admin. Then, use the navigation tools to find the PaaS Video Streaming Resell Platform features you want to use.

## Entities

The platform is built around the following entities:

### Customers

Customers are the top-level entities in the system, they represent a billable party, like a business or person. Customers can own multiple accounts and rooms, and each customer can have multiple users associated with it.

> You can find more information about customers in the [Customers](/docs/admin/customers) section.

### Accounts

Accounts are the second-level entities in the system. Accounts are associated with a single customer, and this customer has all privileges over the account. Accounts can have multiple users associated with them. Each account can have only one owner defined and as default the owner is user who was created with the account or first associated upon creation. Accounts represent a specific service, like a video streaming service or web meeting service. Each account can have multiple users associated with it.

### Users

Users are the third-level entities in the system. Users represent a person who can access the platform and use or manage the services. Users can be associated with multiple customers or accounts, and each user can have multiple roles based on each permission granted and type of access for different customers and accounts. Each user can own different customers and accounts. Each user can have multiple roles associated with it.