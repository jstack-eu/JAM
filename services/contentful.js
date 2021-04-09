import {createClient} from 'contentful';

let client;

export const getClient = async () => {
  if (client && client.geEntry) {
    return client;
  }
  client = createClient({
    space: process.env.CF_SPACE_ID ,
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
    resolveLinks: true,
  });
  // client.getEntries({content_type: 'page'}).then((response) => console.log('resp:', response.items));
  // client.getEntry('jHPWJqzEJasCbfzY8UD2n').then((response) => console.log('resp:', response));
  return client;
};

export const getEntry = async (id) => {
  const c = await getClient();
  return c.getEntry(id);
};

export const getEntries = async (obj) => {
  const c = await getClient();
  return c.getEntries(obj);
};
