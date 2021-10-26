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

export const getEntries = async (obj) => {
  const c = await getClient();
  return c.getEntries(obj);
};

export const getEntryByField = async (key, value, type) => {
  const fieldKey = `fields.${key}`;
  const data = await getEntries({
    content_type: type,
    [fieldKey]: value,
    include: 10,
  });

  return data;
};

export const getGeneralInfo = async () => {
  const data = await getEntries({
    content_type: "general",
  });
  return data.items[0].fields;
};

// SPECIFIC

export const getNavPages = async () => {
  const entries = await getEntries({
    content_type: "page",
    include: 10,
  });
  return entries.items
    .filter((entry) => !entry.fields.hideInNavbar)
    .filter((entry) => entry.fields.slug !== "index")
    .filter((entry) => !!entry.fields.order)
    .map((entry) => {
      return {
        fields: entry.fields,
        slug: entry.fields.slug,
        order: entry.fields.order,
      };
    });
};
