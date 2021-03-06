# Construct 3 Mobile Purchase Plugin

**Author**: Iain Shorter

Forked from https://github.com/j3k0/cordova-plugin-purchase
Original Author: Jean-Christophe Hoelt - <hoelt@fovea.cc>

## Summary

This plugin allows **In-App Purchases** to be made **from Construct** 3 games on iOS and Android.

### Features

|  | ios | android | win-8 | win-10/uwp | mac |
|--|--|--|--|--|--|
| consumables | ✅ | ✅ | ✅ | ✅ | ✅ |
| non consumables | ✅ | ✅ | ✅ | ✅ | ✅ |
| subscriptions | ✅ | ✅ | ✅ | ✅ | ✅ |
| restore purchases | ✅ | ✅ | ✅ | ✅ | ✅ |
| [receipt validations](https://billing.fovea.cc) | ✅ | ✅ |  | ✅ | ✅ |
| downloadable content | ✅ |   |   |   | ✅ |
| introductory prices | ✅ | ✅ |   | ✅ | ✅ |

### Supported platforms

 - **iOS** version 6.0 or higher.
 - **Android** version 2.2 (API level 8) or higher
   - with Google Play client version 3.9.16 or higher
 - **Windows** Store/Phone 8.1 or higher
 - **Windows 10 Mobile**
 - **macOS** version 10
 - **Xbox One**
   - (and any platform supporting Microsoft's UWP)


## Installation

### Install the plugin (Cordova)

```sh
cordova plugin add cordova-plugin-purchase
```

### Install the plugin (PhoneGap)

Add the following to your `config.xml` file:

```xml
<gap:plugin name="cordova-plugin-purchase" source="npm" version="9.0.0"></gap:plugin>
```

### Install recommended plugins

<details>
<summary>
Install <strong>cordova-plugin-network-information</strong> (click for details).
</summary>


Sometimes, the plugin cannot connect to the app store because it has no network connection. It will then retry either:

* periodically after a certain amount of time;
* when the device fires an ['online'](https://developer.mozilla.org/en-US/docs/Web/Events/online) event.

The [cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information) plugin is required in order for the `'online'` event to be properly received in the Cordova application. Without it, this plugin will only be able to use the periodic check to determine if the device is back online.

</details>

### Setup your Application

See [Setup iOS Applications](https://github.com/j3k0/cordova-plugin-purchase/wiki/Setup-for-iOS-and-macOS#setup-ios-applications) and [Setup Android Applications](https://github.com/j3k0/cordova-plugin-purchase/wiki/Setup-for-Android-Google-Play#setup-android-applications).

## Getting Started

If you don't know much about In-App Purchases, you'll find a good overview
on the subject from those guys:

* Apple:
   * [In-App Purchase Introduction](https://developer.apple.com/in-app-purchase/)
   * [Auto-Renewable Subscriptions](https://developer.apple.com/app-store/subscriptions)
* Google:
   * [In-App Purchases Best Practices](https://developer.android.com/distribute/best-practices/earn/in-app-purchases)
   * [Billing Overview](https://developer.android.com/google/play/billing/billing_overview)
* Microsoft
  * [Monetize with In-App Purchases](https://docs.microsoft.com/en-us/windows/uwp/monetize/in-app-purchases-and-trials)

They all share the same concepts, so they are a good reads in all cases, with some advice that apply to all platforms.

To ease the beggining of your journey into the intimidating world of In-App Purchase with Cordova, we wrote a guide which hopefully will help you get things done: https://purchase.cordova.fovea.cc/

In short, you'll have two main tasks to accomplish:

 1. Setup your application and In-App Products on AppStore, Play or Azure platforms using their respective web interfaces.
 2. Add In-App Purchase code to your application.

For platform setup, the [wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki/Home) contains good information.

For the code itself, the [API Documentation](doc/api.md) is a definitely a recommended read.

## Documentation

 - [Guide](https://purchase.cordova.fovea.cc/)
 - [API Documentation](doc/api.md)
 - [Documentation for iOS](doc/ios.md)
 - [Documentation for Android](doc/android.md)
 - [Documentation for Windows](doc/windows.md)

## Extra Resources

### For iOS

 - [In-App Purchase Configuration Guide for AppStore Connect](https://developer.apple.com/support/app-store-connect/)
   - Learn how to set up and manage In-App Purchases with AppStore Connect.

### Extensions

Have a very simple need? Maybe this will help.

 - [Simple Non-Renewing Subscriptions](https://github.com/j3k0/cordova-non-renewing-subscription)
   - The easiest way to integrate purchase into an app that only needs a non-renewing subscription.

### Subscriptions

For proper subscription support, you need a receipt validation server. You can
implement your own or use [Fovea's receipt validation service](https://billing.fovea.cc).

# Contribute

 - [Contributor Guide](doc/contributor-guide.md)

### Contributors:

 * ![](https://avatars1.githubusercontent.com/u/191881?s=64&v=4) [Jean-Christophe Hoelt](https://github.com/j3k0), Author
 * ![](https://avatars3.githubusercontent.com/u/1674289?s=64&v=4) [Josef Fröhle](https://github.com/Dexus), Support
 * Guillaume Charhon, (now defunct) v1 for android
 * Matt Kane, initial iOS code
 * Mohammad Naghavi, original unification attempt
 * Dave Alden [@dpa99c](https://github.com/dpa99c) (Apple-hosted IAPs for iOS)

## Sponsors

 * <a href="https://fovea.cc"><img alt="Logo Fovea" src="https://fovea.cc/blog/wp-content/uploads/2017/09/fovea-logo-flat-128.png" height="50" /></a><br/>For sponsoring most of JC's work on the plugin.
 * <img alt="Logo Ionic" src="https://www.fovea.cc/files/Ionic-logo-landscape.png" height="50"><br/>Ionic Framework Team (http://ionicframework.com/)
 * <a href="https://www.simplan.de/"><img alt="Logo SimPlan" src="https://files.fovea.cc/wp-content/uploads/SimPlan-Logo.png" height="50"></a><br/>For sponsoring the UWP platform.
 * Maxwell C. Moore ([MCM Consulting, LLC](http://mcmconsulting.biz))
 * Justin Noel [@calendee](https://github.com/calendee)
 * [Those guys](https://www.indiegogo.com/projects/phonegap-cordova-in-app-purchase-ios-and-android#pledges)

## Licence

The MIT License

Copyright (c) 2014-2019, Jean-Christophe Hoelt and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

```
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
