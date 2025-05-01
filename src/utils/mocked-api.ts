export const mainSectionData = {
  title: 'What Does Cooking Mean? ',
  // title: 'What Does Cooking Mean? What Does Cooking Mean?',
  images: [
    {
      id: '1',
      src: 'images/pot.png',
      description: 'Cooking pot on stove',
    },
    {
      id: '2',
      src: 'images/chef-table.png',
      description: '', // Will fallback to generated alt from filename
    },
    {
      id: '3',
      src: 'images/table-eggs.png',
      description: 'Eggs on rustic kitchen table',
    },
    // {
    //   id: '4',
    //   src: 'images/table-eggs.png',
    //   description: 'Eggs on rustic kitchen table',
    // },
  ],
  body: 'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg',
  // body: 'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg is the secret',
  callout: {
    title: 'The perfect egg',
    body: 'Keep water between 67 and 68°C for a flavourful, tender yolk Keep water between 67 and 68°C for a flavourful, tender yolk',
    // body: 'Keep water between 67 and 68°C for a flavourful, tender yolk Keep water between 67 and 68°C for a flavourful, tender yolk Keep water between 67 and 68°C for a flavourful, tender yolk Keep water between 67 and 68°C for a flavourful, tender yolk Keep water between 67 and 68°C for a flavourful, tender yolk',
  },
};

export const featuredSectionData = {
  title: 'Taste The Colours',
  items: [
    {
      id: 100,
      title: 'Red',
      imageUrl: 'images/red-spoon.png',
      description:
        'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
    },
    {
      id: 101,
      title: 'Green',
      imageUrl: 'images/green-spoon.png',
      description:
        'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours',
    },
    {
      id: 102,
      title: 'White',
      imageUrl: 'images/white-spoon.png',
      description:
        'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
    },
  ],
};
