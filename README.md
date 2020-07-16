# cknewsletter_hook

cknewsletter hook offers two methods: subscribe and pushSlug. 
These methods allow the user to pass subscribe, slug and project API to cknewsletter service.

Note: this package is intend to be used with https://cknewsletter.tech

* [Installation](#installation)
* [Usage](#usage)
  * [Simple Usage subscribe](#simple-usage-send-subscribe-email-to-project)
  * [Simple Usage pushSlug](#simple-usage-send-slug-or-item-id-to-project)
* [License](#license)
* [Author](#author)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install cknewsletter_hook
```

# Usage
### Simple Usage subscribe (Send subscriber email to project)

```javascript
  // ES6 syntax
  import { subscribe } from "cknewsletter_hook";
  // ES5 syntax
  var cknewsletter_hook = require("cknewsletter_hook");

  cknewsletter_hook.subscribe(<subscriber-email>, <project-API-key>);

  // Pass required data subscriber email and project API key

```

### Simple Usage pushSlug (Send slug or item id to project)

```javascript
  // ES6 syntax
  import { pushSlug } from "cknewsletter_hook";
  // ES5 syntax
  var cknewsletter_hook = require("cknewsletter_hook");

  cknewsletter_hook.pushSlug(<slug-or-item-id>, <project-API-key>);

  // Pass required data slug or item id and project API key

```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Chetan Kumar](https://github.com/ckbhatia) ([twitter](https://twitter.com/chetanbhatias))
