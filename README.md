moment-easter.js
================

This plugin provides a way to get the date of Gregorian Easter Sunday for a given year.

How to use?
-----------

* `moment.easter(year)`

```js
moment.easter(2014).format('YYYY/MM/DD');
// 2014/04/20
```

* `moment#easter()`

```js
moment({y: 2015}).easter().format('YYYY/MM/DD');
// 2015/04/05
```

Contributing
------------
If you would like to contribute enhancements or fixes, please do the following:

1. Fork the plugin repository.
1. Hack on a separate topic branch created from the latest `master`.
1. Commit and push the topic branch.
1. Make a pull request.
1. Be patient.  ;-)

Please note that modications should follow these coding guidelines:

- Indent is 4 spaces.
- Code should pass jslint linter.
- Vertical whitespace helps readability, don’t be afraid to use it.

Thank you for helping out!


Copyright
---------
See LICENSE for details.