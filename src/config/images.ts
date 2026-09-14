/**
 * Every photograph used on the page lives here so it can be swapped
 * for a client's own photography in one place.
 * All entries are Unsplash IDs rendered through `img()`.
 */

const BASE = 'https://images.unsplash.com/photo-';

/** Build a sized, cropped Unsplash URL. */
export const img = (id: string, w = 1400, q = 76) =>
  `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  heroPrimary: '1600585154340-be6161a56a0c', // light modern living room
  heroSecondary: '1600566753086-00f18fb6b3ea', // architectural stair detail
  heroDetail: '1616486338812-3dadae4b4ace', // warm minimal interior

  philosophy: '1600607687939-ce8a6c25118c', // sculptural neutral interior
  philosophyDetail: '1524758631624-e2822e304c36', // material / texture close-up

  processAside: '1618221195710-dd6b41faaea6', // calm designed room

  finalCta: '1600607688969-a5bfcd646154', // dramatic architectural interior
  ctaBand: '1502005229762-cf1b2da7c5d6', // soft evening interior

  services: {
    interior: '1615874959474-d609969a20ed',
    architecture: '1487958449943-2429e8be8625',
    renovation: '1581094794329-c8112a89af12',
    painting: '1562259949-e8e7689d7828',
    planning: '1503174971373-b1f69850bded',
    commercial: '1497366754035-f200968a6e72',
  },

  projects: {
    residence: '1600210492486-724fe5c67fb0',
    villa: '1613490493576-7fde63acd811',
    apartment: '1560448204-e02f11c3d0e2',
    living: '1600121848594-d8644e57abab',
    office: '1497366811353-6870744d04b2',
    restaurant: '1517248135467-4c7edcad34c4',
  },

  transformations: {
    livingBefore: '1558442074-3c19857bc1dc',
    livingAfter: '1493809842364-78817add7ffb',
    kitchenBefore: '1556909212-d5b604d0c90d',
    kitchenAfter: '1600489000022-c2086d79f9d4',
    bedroomBefore: '1505691938895-1758d7feb511',
    bedroomAfter: '1522708323590-d24dbb6b0267',
    commercialBefore: '1416331108676-a22ccb276e35',
    commercialAfter: '1567016432779-094069958ea5',
  },
} as const;
