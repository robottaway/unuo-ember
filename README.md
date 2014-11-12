## UNUO Ember UI

This README outlines the details of collaborating on this Ember application.

The UNUO Ember UI allows for interacting with UNUO through a clean web ui.

You can define new profiles, edit existing profiles and run profiles.

It can also be used to monitor activity, review builds which ran previously,
and cleanup exisiting builds.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)
* [UNUO](https://github.com/robottaway/unuo)

## Installation

* `git clone <repository-url>` this repository
* change into the cloned directory
* `npm install`
* `bower install`

## Running / Development

* `ember server --proxy http://127.0.0.1:5000`, assuming you run UNUO on the standard 5000 port
* Visit your app at http://localhost:4200.


## Development

The following is useful information for doing development work with this project.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TODO

## Further Reading / Useful Links

* [UNUO project](https://github.com/robottaway/unuo)
* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

