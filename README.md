# ASP.NET Core WebAPI / Angular Demo with Cordova, Electron (Cross Platform) for the BASTA Autumn 2018

This repository offers you a demo application implemented with the AngularCLI and an endpoint using ASP.NET Core WebAPI. You can build it for every platform: Mobile, Desktop & Web.

Server and Client are completely seperated that you can exchange the endpoint easily.

### Check the corresponding package.json for the npm commands to start the repository

## Prerequisites

-   [Android SDK](https://developer.android.com/sdk/index.html)
-   [Windows 10 SDK](https://dev.windows.com/en-us/downloads/windows-10-sdk)
-   Download and install [ImageMagick](http://www.imagemagick.org/script/download.php) (base toolkit for image processing, used here for splash screen and icon generation)

## Angular Client with Webpack, Treeshaking and Ahead of Time (Aot) Compilation

This client is implemented with Angular and Webpack. You can start the application by running

`npm install`

and

`npm start`

the application starts and runs in your default browser.

You can build Cross Platform by typing

`npm run build-all`

for building Web, Desktop (Windows and Linux) and Apps for Android in the .dist folder.
