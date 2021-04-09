import {createClient} from 'contentful';

const client = createClient({
  space: process.env.CF_SPACE_ID || 'gdied21sl5zt', // ID of a Compose-compatible space to be used \
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN || 'C9njcuLpIyB8haSePNkBXEg5rqH3kZyZoGjyiIptBcE', // delivery API key for the space \
});
