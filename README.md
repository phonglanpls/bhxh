# BareBone Ionic 2
This project is a generic Ionic application with ingredients that can be part of every modern Ionic application.

## Dependecies, Run and Build

### Intall typings CLI
```bash
npm install typings --global
```

### Install Ionic CLI 2.x
To build and run this `Barebone Ionic 2` you need to have Ionic CLI beta installed

```bash
$ sudo npm install -g ionic@beta
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g {ionic version}
```

eg:
```bash
$ sudo npm install -g ionic@1.7.14
```

or you can install the latest stable version of Ionic CLI by using the command:
```bash
$ sudo npm install -g ionic
```

### Install NodeJS dependencies
Run `npm install` to install all needed dependencies.

### Install Typings dependencies
Run `typings install` to install all needed dependencies.

### Install plugins and platforms from package.json
Run `ionic state restore` to install all Cordova plugins and platforms included in the package.json.

### Run the app
Use `ionic serve -l` to run the app in browser and watch for changes in code

or

use `ionic serve` to just run the app for a browser preview

or

use `ionic serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform
```bash
$ ionic platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic platform add ios
$ ionic platform addandroid
```

### Build the app
```bash
$ ionic build
```

### Εmulate the app on simulator
iOS:
```bash
$ ionic emulate ios
```

Android:
```bash
$ ionic emulate android
```

### Plugins installation
Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:
```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-statusbar** - Used to customize the iOS and Android StatusBar, alter the appearance of the status bar (color/style).
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-inappbrowser** - Provides a web browser view. It could be used to open images, access web pages, and open PDF files.
* **cordova-plugin-geolocation** - Grab the current location of the user, or grab continuous location changes.
* **de.appplant.cordova.plugin.email-composer** - The plugin provides access to the standard interface that manages the editing and sending an email message (https://github.com/katzer/cordova-plugin-email-composer.git#0.8.2).

## Demo
Install [Ionic View](http://view.ionic.io/) and preview the app on your mobile device using the following Ionic View ID: `8b828c0d`

## Documentation
* [Barebone Ionic 2 Quick Start Guide](https://docs.google.com/document/d/1Wr4_HhlAsuonR_shMnNbNWoVBjaJxA3OexfIw4Tdtw8/edit?usp=sharing)

## Changelog
```
1.2 - August 12, 2016
- Update to Ionic 2 Beta 11

1.1 - June 03, 2016
- Update to Ionic 2 Beta 7

1.0 - May 04, 2016
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)
* [Ionic 2.0](http://ionic.io/2)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
