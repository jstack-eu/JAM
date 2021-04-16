import { createClient } from "contentful";

let client;

// DYNAMIC

export const getClient = async () => {
  if (client && client.geEntry) {
    return client;
  }
  client = createClient({
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
    resolveLinks: true,
  });
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

export const getEntryByField = async (key, value, type) => {
  const fieldKey = `fields.${key}`;
  const data = await getEntries({
    content_type: type,
    [fieldKey]: value,
    include: 3,
  });

  return data.items[0];
};

// SPECIFIC

export const getNavPages = async () => {
  const entries = await getEntries({
    content_type: "page"
  });
  return entries.items
    .filter((entry) => !
    
    entry.fields.hideInNavbar)
    .map((entry) => {
      console
      return {
        label: entry.fields.name,
        slug: entry.fields.slug,
      };
    });
};

export const getConfig = async () => {
  const entries = await getEntries({
    content_type: "configuration"
  });
  return entries.items[0];
};