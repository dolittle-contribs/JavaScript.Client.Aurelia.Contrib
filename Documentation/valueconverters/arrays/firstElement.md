---
title: firstElement
description: About the firstElement Value Converter for arrays
keywords: aurelia, contrib, value converter, firstElement, array
author: pavsaund
---

JavaScript:
```js
  @observable myArray = [2,3,4,5,6];
```

Template:
```html
  <div>${myArray | firstElement}</div>
```

Output:
```
  2
```
