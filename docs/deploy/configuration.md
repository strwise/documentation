---
title: Configuration
sidebar_position: 3
sidebar_label: Configuration
---

# Configuring the Platform

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