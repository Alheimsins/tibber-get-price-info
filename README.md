[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tibber-get-price-info

Retrieve price info from tibber for your current subscription.

# Usage

You'll need an access token from [Tibber](https://developer.tibber.com/)

```JavaScript

import getPriceInfo from '@alheimsins/tibber-get-price-info'
const token = 'your-access-token'

console.log(await getPriceInfo(token)) //=> [{"total": 2.563, "energy": 2.0424, "tax": 0.5206,"startsAt": "2022-05-07T00:00:00.000+02:00"}]
```

If you have multiple homes, you can use the `homeId` option to specify which home to use. If you don't specify a homeId, the first home will be used.

```JavaScript

import getPriceInfo from '@alheimsins/tibber-get-price-info'
const token = 'your-access-token'
const homeId = 'your-home-id-for-selected-home'

console.log(getPriceInfo(token, homeId)) //=> [{"total": 2.563, "energy": 2.0424, "tax": 0.5206,"startsAt": "2022-05-07T00:00:00.000+02:00"}]
```

# Related

- [calculate-cheapest-charging-schedule](https://github.com/Alheimsins/calculate-cheapest-charging-schedule) Simple module for calculating the cheapest charging schedule for your EV
- [zaptec-go-start-stop](https://github.com/Alheimsins/zaptec-go-start-stop) A module for starting and stopping your Zaptec Go EV charger
- [bmw-is-connected-to-charger](https://github.com/Alheimsins/bmw-is-connected-to-charger) Answers the question: is my BMW connected to a charger?
- [leaf-connect](https://github.com/Alheimsins/leaf-connect) Node.js client library for the Nissan Leaf API

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />
