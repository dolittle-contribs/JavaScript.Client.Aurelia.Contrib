---
title: Installing Aurelia Contrib plugin
description: How to install Aurelia Contrib plugin in an Auralia app.
keywords: aurelia, contrib, install
author: pavsaund
aliases: /interaction/aurelia/javascript.client.aurelia.contrib/installing
---

Add a dependency to this package:

```shell
$ npm i @dolittle/aurelia.contrib
```

...or

```shell
$ yarn add @dolittle/aurelia.contrib
```

In your Aurelia setup (`main.js`):

```javascript
aurelia.use.plugin(PLATFORM.moduleName('@dolittle/aurelia.contrib');
```
