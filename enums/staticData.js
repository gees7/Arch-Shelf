export const colorDataForGemstonesFilter = [
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/yellow-sapphire.png',
    shape: 'Yellow Sapphire',
    disabled: false,
    value: 'YS',
    id: 'Yellow Sapphire',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/polished-sapphire.png',
    shape: 'Blue Sapphire',
    disabled: false,
    value: 'BS',
    id: 'Blue Sapphire',
  },

  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/tourmaline.png',
    shape: 'Pink Sapphire',
    disabled: false,
    value: 'PS',
    id: 'Pink Sapphire',
  },
  {
    image:
      '/_next/static/images/White%20sapphire1-81340ff75d839ca733d2d0da1181b2d1.png',
    shape: 'White Sapphire',
    disabled: false,
    value: 'WS',
    id: 'White Sapphire',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/Emerald.png',
    shape: 'Emerald',
    disabled: false,
    value: 'GE',
    id: 'Emerald',
  },

  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/ruby.png',
    shape: 'Ruby',
    disabled: false,
    value: 'RR',
    id: 'Ruby',
  },

  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/citrine.png',
    shape: 'Citrine',
    disabled: false,
    value: 'CI',
    id: 'Citrine',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/Aquamarine.png',
    shape: 'Aquamarine',
    disabled: false,
    value: 'AQ',
    id: 'Aquamarine',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/peridot.png',
    shape: 'Peridot',
    disabled: false,
    value: 'PD',
    id: 'Peridot',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/spinel.png',
    shape: 'Spinel',
    disabled: false,
    value: 'SP',
    id: 'Spinel',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/opal.png',
    shape: 'Opal',
    disabled: false,
    value: 'OP',
    id: 'Opal',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/tanzanite.png',
    shape: 'Tanzanite',
    disabled: false,
    value: 'TZ',
    id: 'Tanzanite',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/tourmaline.png',
    shape: 'Tourmaline',
    disabled: false,
    value: 'TM',
    id: 'Tourmaline',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/pearl.png',
    shape: 'Pearl',
    disabled: false,
    value: 'PE',
    id: 'Pearl',
  },
  {
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/Garnet.png',
    shape: 'Garnet',
    disabled: false,
    value: 'GA',
    id: 'Garnet',
  },

  {
    id: 'Alexandrite',
    image:
      'https://cdn-test.dazzleroad.com/cflare-assets/assets/images/GemstonesShapes/gemstonesColor/Alexandrite.png',
    shape: 'Alexandrite',
    value: 'AX',
    disabled: false,
  },
];

//this export is for tags filter in gemstones for mm size
//being used in shop gemstones
export const tagsDataForGemstonesFilter = (shape, type) => {
  let tags = [];
  if (type === 'MM') {
    if (shape === 'ROUND') {
      tags = [
        '1.6 ',
        '2 ',
        '2.5 ',
        '3 ',
        '3.5 ',
        '4 ',
        '4.5 ',
        '5 ',
        '5.5 ',
        '6 ',
        '6.5 ',
        '7 ',
        '8 ',
        '9 ',
        '10 ',
        '11 ',
        '12 ',
        '13 ',
        '14 ',
        '15 ',
        '16 ',
        '17 ',
        '18 ',
        '19 ',
        '20 ',
        '21 ',
        '22 ',
        '23 ',
        '24 ',
        '25 ',
      ];
    }
    if (shape === 'SQUARE') {
      tags = [
        '5 ',
        '6 ',
        '7 ',
        '8 ',
        '9 ',
        '10 ',
        '11 ',
        '12 ',
        '13 ',
        '14 ',
        '15 ',
        '16 ',
        '20 x 15 ',
        '22 x 15 ',
        '23 x 17 ',
        '25 x 18 ',
        '27 x 20 ',
        '30 x 22 ',
      ];
    }
    if (shape === 'OVAL') {
      tags = [
        '5 x 3 ',
        '6 x 4 ',
        '7 x 5 ',
        '8 x 6 ',
        '9 x 7 ',
        '10 x 8 ',
        '11 x 9 ',
        '12 x 10 ',
        '14 x 10 ',
        '14 x 12 ',
        '16 x 12 ',
        '18 x 13 ',
      ];
    }
    if (shape === 'EMERALD') {
      tags = [
        '6 x 4 ',
        '7 x 5 ',
        '8 x 6 ',
        '9 x 7 ',
        '10 x 8 ',
        '11 x 9 ',
        '12 x 10 ',
        '14 x 10 ',
        '14 x 12 ',
        '16 x 12 ',
        '18 x 13 ',
        '20 x 15 ',
        '25 x 18 ',
        '25 x 18 ',
        '30 x 22 ',
      ];
    }
    if (shape === 'PEAR') {
      tags = [
        '6 x 5 ',
        '7 x 5 ',
        '8 x 5 ',
        '9 x 6 ',
        '10 x 7 ',
        '11 x 7 ',
        '12 x 8 ',
        '13 x 9 ',
        '15 x 10 ',
        '16 x 12 ',
        '18 x 13 ',
        '20 x 15 ',
        '22 x 15 ',
      ];
    }
    if (shape === 'MARQUISE') {
      tags = [
        '4 x 2 ',
        '5 x 2.5 ',
        '6 x 3 ',
        '8 x 4 ',
        '10 x 5 ',
        '12 x 6 ',
        '14 x 7 ',
        '16 x 8 ',
        '18 x 9 ',
        '20 x 10 ',
      ];
    }
  }
  if (type === 'CT') {
    if (shape === 'ROUND') {
      tags = [
        '.02 carat',
        '.03 carat',
        '.06 carat',
        '.10 carat',
        '.16 carat',
        '.25 carat',
        '.33 carat',
        '.50 carat',
        '.65 carat',
        '.75 carat',
        '1.0 carat',
        '1.25 carat',
        '2.0 carat',
        '2.75 carat',
        '3.5 carat',
        '4.6 carat',
        '6.0 carat',
        '7.75 carat',
        '9.65 carat',
        '11.85 carat',
        '14.35 carat',
        '17.25 carat',
        '20.5 carat',
        '24.0 carat',
        '28.0 carat',
        '34.8 carat',
        '41.8 carat',
        '49.8 carat',
        '57.9 carat',
        '68.7 carat',
      ];
    }
    if (shape === 'SQUARE') {
      tags = [
        '.75 carat',
        '1.3 carat',
        '2.05 carat',
        '2.9 carat',
        '4.4 carat',
        '6.0 carat',
        '8.0 carat',
        '10.35 carat',
        '13.2 carat',
        '16.5 carat',
        '20.25 carat',
        '24.6 carat',
        '20.3 carat',
        '23.5 carat',
        '32.2 carat',
        '43.0 carat',
        '58.5 carat',
        '79.6 carat',
      ];
    }
    if (shape === 'OVAL') {
      tags = [
        '.25 carat',
        '.5 carat',
        '1.0 carat',
        '1.5 carat',
        '2.5 carat',
        '3.0 carat',
        '4.0 carat',
        '5.0 carat',
        '6.0 carat',
        '8.0 carat',
        '10.5 carat',
        '14.2 carat',
      ];
    }
    if (shape === 'EMERALD') {
      tags = [
        '.5 carat',
        '1.0 carat',
        '1.5 carat',
        '2.5 carat',
        '3.0 carat',
        '4.0 carat',
        '5.0 carat',
        '6.0 carat',
        '8.0 carat',
        '10.5 carat',
        '14.2 carat',
        '20.3 carat',
        '52.2 carat',
        '30.6 carat',
        '54.5 carat',
      ];
    }
    if (shape === 'PEAR') {
      tags = [
        '.7 carat',
        '.75 carat',
        '1.0 carat',
        '1.5 carat',
        '2.0 carat',
        '2.25 carat',
        '3.0 carat',
        '3.5 carat',
        '5.5 carat',
        '8.6 carat',
        '12 carat',
        '17.3 carat',
        '18.7 carat',
      ];
    }
    if (shape === 'MARQUISE') {
      tags = [
        '.10 carat',
        '.25 carat',
        '.30 carat',
        '.75 carat',
        '1.0 carat',
        '2.0 carat',
        '3.0 carat',
        '4.0 carat',
        '6.0 carat',
        '8.5 carat',
      ];
    }
  }
  return tags;
};
