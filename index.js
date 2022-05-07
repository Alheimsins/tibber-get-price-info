import axios from 'axios'

const API_ENDPOINT = 'https://api.tibber.com/v1-beta/gql'

const gql = `{
  viewer {
    homes {
      currentSubscription{
        priceInfo{
          today {
            total
            energy
            tax
            startsAt
          }
          tomorrow {
            total
            energy
            tax
            startsAt
          }
        }
      }
    }
  }
}`

const query = { query: gql.replace(/(\r\n|\r|\n)/g, '') }

async function getData (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
  const { data } = await axios.post(API_ENDPOINT, query)
  return data
}

async function getPriceInfo (token) {
  try {
    const { data } = await getData(token)
    const priceInfo = data.viewer.homes[0].currentSubscription.priceInfo
    return [...priceInfo.today, ...priceInfo.tomorrow]
  } catch (error) {
    console.error(error)
    return []
  }
}

export default getPriceInfo
