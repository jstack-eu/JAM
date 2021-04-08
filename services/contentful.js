import { createClient } from 'contentful';

const client = createClient({
  space: CF_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: CF_DELIVERY_ACCESS_TOKEN, // delivery API key for the space \
});
