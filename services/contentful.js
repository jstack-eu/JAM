import {createClient} from 'contentful';

let client;

export const getClient = async () => {
  if (client && client.geEntry) {
    console.log('1');

    return client;
  }
  console.log('2');
  client = createClient({
    space: process.env.CF_SPACE_ID || 'gdied21sl5zt', // ID of a Compose-compatible space to be used \
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN || 'C9njcuLpIyB8haSePNkBXEg5rqH3kZyZoGjyiIptBcE', // delivery API key for the space \
    resolveLinks: true,
  });
  client.getEntries({content_type: 'page'}).then((response) => console.log('resp:', response.items));
  client.getEntry('jHPWJqzEJasCbfzY8UD2n').then((response) => console.log('resp:', response));
  return client;
};

export const getEntry = async (id) => {
  const c = await getClient();
  console.log('c: ', JSON.parse(JSON.stringify(c)));
  return c.getEntry(id);
};
