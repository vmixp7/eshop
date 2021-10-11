import faker from 'faker';
import _ from 'lodash';
//import { config } from '../services/config';

const brandAndImage = _.flatten(
  _.times(20, i => {
    return ['rapala', 'heddon', 'rebel', 'cottoncordel', 'mepps'].map(
      (brand, j) => {
        return { brand, image: `${brand}${i + 1}.jpg` };
      },
    );
  }),
);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fakerProduct = [{
  id: 1,
  isAdvert: false,
  name: '3M 8511 Respirator, N95, Cool Flow Valve (10-Pack)',
  price: 24.02,
  brand: '3M_8511',
  image: '91Z7atjGtpLSL1500_.jpg',
  color: 'White',
  size: '10 Pack',
  weight: '7.7 ounces',
  style:'Sanding/Fiberglass',
  shortDescription: 'Niosh-Approved N95 for at least 95% filtration efficiency against certain Non-Oil-Based Particles and Aerosols...',
  modelNum: faker.random.number(),
  description: 'Breathe 30% easier compared to 3M 8200, breathe an easier is defined as initial pressure drop. ',
  url: 'https://www.amazon.com/3M-8511HB1-C-PS-Sanding-Fiberglass-Respirator/dp/B002VMCHPG/ref=sr_1_6?crid=2LDQQETZBIGG0&dchild=1&keywords=3m+n95+mask&qid=1633855245&s=industrial&sprefix=3m+n%2Cindustrial%2C346&sr=1-6', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate: 5,
  rate_num:  getRandomInt(10,999),
  block_id : 2718,
  b1: '0x27d26760203b4af4a62f-a537433a7b6f',
  b2: '0xc7431559b75143a2-b950-69a82d862ce9',
  b3: '0xd9c746790c194b08b10e7accc5d9d60e',
  b4: '0x27d26760203b4af4a62f-a537433a7b6f',
  b5: '0xdfa1f8a5-4fff402f88364d0597057983',
  b6: '0x7df51e8e72a043839c5808fcd29ba4dc',
  b7: '0xdd23018cf97f4a7e92d2a0b0d82ba1af',
},

{
  id: 2,
  isAdvert: false,
  name: '3M Disposable Protective Coverall 4520-BLK-L',
  price: 98.88,
  brand: '3M_4520',
  image: '818EeepnWDL.jpg',
  color: 'White',
  size: '25 Pack',
  weight: '11.44 pounds',
  shortDescription: 'Protective coverall helps protect against certain light liquid splashes and hazardous dusts.Lightweight, breathable material ...',
  modelNum: faker.random.number(),
  description: 'Protective coverall helps protect against certain light liquid splashes and hazardous dusts.Lightweight, breathable material helps keep workers cool and comfortable',
  url: 'https://www.amazon.com/3M-63264-case-Disposable-Protective-4520-BLK-L/dp/B00VPESGH4', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate:3.5,
  rate_num:  getRandomInt(10,999),
  block_id : getRandomInt(2200,9999),
  b1: '0xkjm-na654t65-fw8mspplkfnzhumef7',
  b2: '0xc74391iv2jxo183oxul-25p0g8f5ewwc08v',
  b3: '0xd9c746790c194b08b10e7accc5d9d60e',
  b4: '0x27d26760203b4af4a62f-a537433a7b6f',
  b5: '0xdfaikgnkd-112dfsdl3ekhk9m8j0j3mmrr',
  b6: '0x7df51e8e72a043839c5808fcd29ba4dc',
  b7: '0xdd91iv2jxo183o-225p0g8f5e-wwc08vil',
}
,
{
  id: 3,
  isAdvert: false,
  name: '格安德GRANDE 雙鋼印醫療級成人平面口罩湖水綠 50入/盒',
  price: 8,
  brand: 'GRANDE',
  image: 'i010011_1626829833.jpg',
  color: '湖水綠',
  size: '17.5cm*9.5cm',
  weight: '17.5cm*9.5cm',
  shortDescription: '符合國家安全標準 CNS14774、14775',
  modelNum: faker.random.number(),
  description: '符合國家安全標準 CNS14774、14775,衛生福利部第一等級醫療器材許可證,雙鋼印成人彩色口罩,台灣製造品質有保證',
  url: 'https://24h.pchome.com.tw/prod/DABC0V-A900B3234?fq=/S/DABCJB', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate: 4.5,
  rate_num:  getRandomInt(10,999),
  block_id : getRandomInt(2200,9999),
  b1: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b2: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b3: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b4: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b5: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b6: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b7: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
},
{
  id: 4,
  isAdvert: false,
  name: '【MOTEX 摩戴舒】醫用口罩 霧灰藍(50片/盒) 安全舒適x保護衛生',
  price: 9,
  brand: 'MOTEX',
  image: '000001_1631694928.jpg',
  color: '霧灰藍',
  size: '17.5cm*9.5cm',
  weight: '17.5cm*9.5cm',
  shortDescription: '衛部醫器製壹字第008213號',
  modelNum: faker.random.number(),
  description: '衛部醫器製壹字第008213號,衛生福利部第一等級醫療器材許可證,雙鋼印成人彩色口罩,台灣製造品質有保證',
  url: 'https://24h.pchome.com.tw/prod/DABCBC-A900BOIQ3', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate:5,
  rate_num:  getRandomInt(10,999),
  block_id : getRandomInt(2200,9999),
  b1: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b2: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b3: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b4: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b5: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b6: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b7: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
},
{
  id: 5,
  isAdvert: false,
  name: 'MEDTECS美德醫療 輕量化隔離面罩',
  price: 36,
  brand: 'MEDTECS1',
  image: '000001_1622803461.jpg',
  color: '透明',
  size: '32CM*22CM',
  weight: '32CM*22CM',
  shortDescription: '防霧、防濺、防靜電處理。',
  modelNum: faker.random.number(),
  description: '非乳膠與非玻璃纖維材質，因而不易變形。質量輕且光學透明。提醒：請勿靠近火焰作使用。商品不包含隔離衣,輕量透明面罩設計，更有效阻擋近距離飛沫噴濺。',
  url: 'https://24h.pchome.com.tw/prod/DABCEH-A900BFP7H?fq=/S/DABCDQ', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate: 5,
  rate_num:  getRandomInt(10,999),
  block_id : getRandomInt(2200,9999),
  b1: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b2: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b3: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b4: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b5: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b6: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b7: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
},
{
  id: 6,
  isAdvert: false,
  isAdvert: false,
  name: 'MEDTECS美德醫療 輕量化隔離面罩',
  price: 36,
  brand: 'MEDTECS2',
  image: '000001_1622803461.jpg',
  color: '透明',
  size: '32CM*22CM',
  weight: '32CM*22CM',
  shortDescription: '防霧、防濺、防靜電處理。',
  modelNum: faker.random.number(),
  description: '非乳膠與非玻璃纖維材質，因而不易變形。質量輕且光學透明。提醒：請勿靠近火焰作使用。商品不包含隔離衣,輕量透明面罩設計，更有效阻擋近距離飛沫噴濺。',
  url: 'https://24h.pchome.com.tw/prod/DABCEH-A900BFP7H?fq=/S/DABCDQ', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate: 5,
  rate_num:  getRandomInt(10,999),
  block_id : getRandomInt(2200,9999),
  b1: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b2: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b3: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b4: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b5: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b6: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b7: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
},
{
  id: 7,
  isAdvert: false,
  name: 'MEDTECS美德醫療 輕量化隔離面罩',
  price: 36,
  brand: 'MEDTECS3',
  image: '000001_1622803461.jpg',
  color: '透明',
  size: '32CM*22CM',
  weight: '32CM*22CM',
  shortDescription: '防霧、防濺、防靜電處理。',
  modelNum: faker.random.number(),
  description: '非乳膠與非玻璃纖維材質，因而不易變形。質量輕且光學透明。提醒：請勿靠近火焰作使用。商品不包含隔離衣,輕量透明面罩設計，更有效阻擋近距離飛沫噴濺。',
  url: 'https://24h.pchome.com.tw/prod/DABCEH-A900BFP7H?fq=/S/DABCDQ', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate: 4.5,
  rate_num:  getRandomInt(10,999),
  block_id : getRandomInt(2200,9999),
  b1: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b2: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b3: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b4: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b5: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b6: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b7: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
},
{
  id: 8,
  isAdvert: false,
  name: 'MEDTECS4MEDTECS4MEDTECS4 輕量化隔離面罩',
  price: 36,
  brand: 'MEDTECS4',
  image: '000001_1622803461.jpg',
  color: '透明',
  size: '32CM*22CM',
  weight: '32CM*22CM',
  shortDescription: '防霧、防濺、防靜電處理。',
  modelNum: faker.random.number(),
  description: '非乳膠與非玻璃纖維材質，因而不易變形。質量輕且光學透明。提醒：請勿靠近火焰作使用。商品不包含隔離衣,輕量透明面罩設計，更有效阻擋近距離飛沫噴濺。',
  url: 'https://24h.pchome.com.tw/prod/DABCEH-A900BFP7H?fq=/S/DABCDQ', delivery: [
    faker.address.country(),
    faker.address.country(),
    faker.address.country(),
  ].join(', '),
  qty_num: getRandomInt(8,100),
  rate: 4.5,
  rate_num:  getRandomInt(10,999),
  block_id : getRandomInt(2200,9999),
  b1: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b2: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b3: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b4: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b5: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b6: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
  b7: '0xc'+  getRandomInt(0,99)+'d'+getRandomInt(1111,9999)+'3a889dfdc',
}
];

const getProducts = () => {

  const products = fakerProduct;
  return products;
};

const advertisements = _.times(10, index => ({
  id: index,
  isAdvert: true,
  name: faker.commerce.productName(),
  image: faker.image.business(),
  description:
    faker.lorem
      .paragraph()
      .split('.', 3)
      .join('.') + '.',
  link1: faker.internet.url(),
  link2: faker.internet.url(),
  time: faker.date.recent(),
}));

export const getProductsData = params => {
  //params = { page: { index: 0, size: 15 }, filter: 'mepps', sort: {key:'price', direction:'asc'} };
  let products = getProducts();

  if (params && 'filter' in params && params.filter.brand !== 'none')
    products = products.filter(
      product => product.brand === params.filter.brand,
    );

  if (params && 'filter' in params && params.filter.color !== 'none')
    products = products.filter(
      product => product.color === params.filter.color,
    );

  if (params && 'sort' in params && params.sort.key !== 'none') {
    function compare(a, b) {
      if (a[params.sort.key] < b[params.sort.key]) return -1;
      if (a[params.sort.key] > b[params.sort.key]) return 1;
      return 0;
    }
    products = products.sort(compare);
    if (params.sort.direction === 'desc') products = products.reverse();
  }

  if (params && 'page' in params) {
    products = products.slice(
      parseInt(params.page.index),
      parseInt(params.page.index) + parseInt(params.page.size),
    );
  }

  return products;
};
export const getProductData = id => {
  let products = getProducts();
  let product = {};
  id = parseInt(id);

  if (!Number.isNaN(id) && products.length > id)
    product = products.find(product => product.id === id);

  return product;
};
export const getAdvertisementsData = () => advertisements;
