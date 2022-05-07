[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tibber-get-price-info

Retrieve price info from tibber for your current subscription.

# Usage

You'll need an access token from [Tibber](https://developer.tibber.com/)

```JavaScript

import getPriceInfo from '@alheimsins/tibber-get-price-info'
const token = 'your-access-token'

console.log(getPriceInfo(token)) //=> [{"total": 2.563, "energy": 2.0424, "tax": 0.5206,"startsAt": "2022-05-07T00:00:00.000+02:00"}]
```

# Limitations

If you have multiple homes registered on Tibber, you'll only get the price info for the first home.

# Related

- [calculate-cheapest-charging-schedule](https://github.com/Alheimsins/calculate-cheapest-charging-schedule) Simple module for calculating the cheapest charging schedule for your EV

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />
