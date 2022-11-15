# MPOWER  Ionic Mobile Application   [![Releases](https://img.shields.io/github/release/nextcloud/android.svg)](https://github.com/nextcloud/android/releases/latest)
  MPOWER is the ionic hybrid mobile application which support Android,iOS and Web flatforms. 

[<img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" 
      alt="Download from Google Play" 
      height="80">](https://play.google.com/store/apps/details?id=com.multilinetech.OBPrism2)

Registered users can create master records of prospect and actual customer database. This application will help users to schedule appointments with business partner and keep track of their expenses incurred.
This application provides access to master data with records about the purchase pattern. Thus helping users to formulate new sales plans.
User can place orders online of various type, be it normal order or scheme order for respective business partner(s)

   

## Features :rocket:

User Type: Sales Representative
Activity Done on App: Create / Manage Leads, Convert Leads to Customer, Capture/Manage Sales Order, Check Order Status, Check Customer Sales and AR Data, Capture / Manage Customer Visit Records, Capture / Manage Expenses incurred, See MIS Dashboards and Sales MIS Data, Capture / Manage Customer Queries, Complaints and Feedback

User Type: Customer
Activity Done on App: Capture/Manage Sales Order, Check Order Status, Check Sales and AR Data, See MIS Dashboards and Sales MIS Data, Capture / Manage Queries, Complaints and Feedback

## App Preview

| Splash Screen  | Login Screen  |
| -----------------| -----|
| ![Splash_Screen_MPOWER](/uploads/ec340b068c558154bb2bd18d28b8447e/Splash_Screen_MPOWER.jpg) | ![Login_Page_MPOWER](/uploads/e6dd193819e5f3dcba4ecce19bc8f42a/Login_Page_MPOWER.jpg) |

| MPIN Screen  | Dashboard Screen  |
| -----------------| -----|
| ![MPIN_Page_MPOWER](/uploads/e5eb9d1ee8353a2c3d1b0fa9049fa51a/MPIN_Page_MPOWER.jpg) | ![Dashboard_MPOWER](/uploads/166f6f9e6978edbefbb9f559dba04b8f/Dashboard_MPOWER.jpg) |




## Installation

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://git.pispl.in/pravin.bhosale/mpower.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.



## Project Structure

Overview

    ├── Gruntfile.js            - Configuration of all Grunt tasks
    ├── package.json            - Dev dependencies and required Cordova plugins
    ├── bower.json              - Lists front-end dependencies
    ├── config.xml              - Global Cordova configuration
    ├── .gitignore              - Best practices for checking in Cordova apps
    ├── resources/              - Scaffolded placeholder Icons and Splashscreens
    │   ├── ios/
    │   ├── android/
    ├── app/
    │   ├── index.html          - Main Ionic app entry point
    │   ├── lib/                - Libraries managed by Bower
    │   ├── scripts/            - Custom AngularJS Scripts
    │   ├── styles/             - Stylesheets
    │   ├── templates/          - HTML views
    ├── platforms/              - Targeted operating systems
    ├── plugins/                - Native plugins
    ├── hooks/                  - Cordova lifecycle hooks
    ├── merges/                 - Platform specific overrides
    ├── coverage/               - Istanbul reports
    ├── test/                   - Unit tests
    │   ├── spec/
    ├── www/                    - Copied from app/ to be used by Cordova

## Deploying

### Progressive Web App

1. Un-comment [these lines]
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`    

#### License
:copyright: Multiline Business Solution Pvt. Ltd
