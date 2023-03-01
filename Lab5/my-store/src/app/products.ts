export interface Product {
  id: number,
  name: string,
  price: number,
  url: string,
  image: string,
  rating: number,
  category: string
}

// export const Phones: Product[] = [
//         {
//           id: 1,
//           name: 'Xiaomi Redmi Note 10 Pro',
//           price: 128350,
//           url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
//           rating: 0
//         },
//         {
//           id: 2,
//           name: 'Apple iPhone 13',
//           price: 372380,
//           url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg", 
//           rating: 0
//         },
//         {
//           id: 3,
//           name: 'Apple iPhone 14 Pro Max',
//           price: 691680,
//           url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
//           image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg', 
//           rating: 0
//         },
//         {
//           id: 4,
//           name: 'Xiaomi Redmi 10C',
//           price: 128350,
//           url: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h96/49939925139486/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg", 
//           rating: 0
//         },
//         {
//           id: 5,
//           name: 'Samsung Galaxy A13',
//           price: 90130,
//           url: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg", 
//           rating: 0
//         },
//         {
//           id: 6,
//           name: 'Samsung Galaxy Z Fold4',
//           price: 1100000,
//           url: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-256-gb-chernyi-podarok-106036376/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h09/61658903543838/samsung-galaxy-z-fold4-12-gb-256-gb-chernyi-smart-chasy-samsung-galaxy-watch-4-classic-106036376-1.jpg", 
//           rating: 0
//         },
//         {
//           id: 7,
//           name: 'Samsung Galaxy S23 Ultra 5G',
//           price: 749890,
//           url: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-sirenevyi-podarok-108714369/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h76/68538733264926/samsung-galaxy-s23-5g-8-gb-512-gb-sirenevyi-108714369-1.jpg", 
//           rating: 0
//         },
//         {
//           id: 8,
//           name: 'Смартфон OnePlus Ace Pro',
//           price: 291998,
//           url: 'https://kaspi.kz/shop/p/oneplus-ace-pro-12-gb-256-gb-chernyi-106903419/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h03/63288287166494/oneplus-ace-pro-12-gb-256-gb-chernyi-106903419-1.jpg", 
//           rating: 0
//         },
//         {
//           id: 9,
//           name: 'Xiaomi Redmi Note 11',
//           price: 103980,
//           url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-4-gb-128-gb-goluboi-103624818/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h36/48619630133278/xiaomi-xiaomi-redmi-note-11-4-gb-128-gb-goluboj-103624818-1.jpg", 
//           rating: 0
//         },
//         {
//           id: 10,
//           name: 'Vivo V21E',
//           price: 148990,
//           url: 'https://kaspi.kz/shop/p/vivo-v21e-8-gb-128-gb-fioletovyi-101637580/?c=750000000#!/item',
//           image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h42/33719125049374/vivo-v21e-8-128gb-fioletovyj-101637580-1-Container.jpg", 
//           rating: 0
//         }
// ];

// export const Irons: Product[] = [
//   {
//     id: 1,
//     name: "Утюг Orvica ORM-3508",
//     price: 4604,
//     url: 'https://kaspi.kz/shop/p/orvica-orm-3508-sinii-103554115/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hfc/48497748049950/orvica-orm-3508-sinij-103554115-1.jpg", 
//     rating: 0
//   },
//   {
//     id: 2,
//     name: "Утюг Vitek VT-8304",
//     price: 16990,
//     url: 'https://kaspi.kz/shop/p/vitek-vt-8304-chernyi-3800548/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hc1/31593847980062/vitek-vt-8304-cernyj-sinij-3800548-1-Container.jpg", 
//     rating: 0
//   },
//   {
//     id: 3,
//     name: "Утюг ARG SL-2088А",
//     price: 6380,
//     url: 'https://kaspi.kz/shop/p/arg-sl-2088a-sinii-100987961/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hc1/31593847980062/vitek-vt-8304-cernyj-sinij-3800548-1-Container.jpg",
//     rating: 0
//   },
//   {
//     id: 4,
//     name: "Утюг Braun SI 5006 BL",
//     price: 29990,
//     url: 'https://kaspi.kz/shop/p/braun-si-5006-bl-goluboi-100797276/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/he3/32975599796254/braun-si-5006-bl-belyj-goluboj-100797276-1-Container.jpg",
//     rating: 0
//   },
//   {
//     id: 5,
//     name: "Утюг Masima MS-999",
//     price: 10989,
//     url: "https://kaspi.kz/shop/p/masima-ms-999-zelenyi-104947240/?c=750000000#!/item",
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/h82/50919964999710/masima-ms-999-zelenyj-104947240-1.jpg",
//     rating: 0
//   }
// ];

// export const Laptops: Product[] = [
//   {
//     id: 1,
//     name: "Lenovo IdeaPad 3 15ITL6 82H8005GRK",
//     price: 169990,
//     url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h11/66993674125342/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg", 
//     rating: 0
//   },
//   {
//     id: 2,
//     name: "Apple MacBook Air 13 MGN63",
//     price: 477999,
//     url: 'https://kaspi.kz/shop/p/vitek-vt-8304-chernyi-3800548/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg", 
//     rating: 0
//   },
//   {
//     id: 3,
//     name: "ASUS X515EA-BQ3269 90NB0TY1-M038L0",
//     price: 179990,
//     url: 'https://kaspi.kz/shop/p/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/haf/66428285288478/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-1.jpg",
//     rating: 0
//   },
//   {
//     id: 4,
//     name: "ASUS TUF Gaming A15 FA506ICB-HN105 90NR0667-M00BL0",
//     price: 389130,
//     url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/hff/66995169689630/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-1.jpg",
//     rating: 0
//   },
//   {
//     id: 5,
//     name: "Apple MacBook Pro 16 Z14X000HQ",
//     price: 2825000,
//     url: "https://kaspi.kz/shop/p/apple-macbook-pro-16-z14x000hq-seryi-108677248/?c=750000000#!/item",
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h49/68460098715678/apple-macbook-pro-16-2-m1-max-chip-108677248-1.jpg",
//     rating: 0
//   }
// ]

// export const CoffeeMachines: Product[] = [
  // {
  //   id: 1,
  //   name: "CENTEK CT-1164",
  //   price: 60046,
  //   url: 'https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682/?c=750000000#!/item',
  //   image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/hf2/51251427606558/centek-ct-1164-serebristyj-100358682-1-Container.jpg", 
  //   rating: 0
  // },
  // {
  //   id: 2,
  //   name: "DAUSCHER DCM-1650LX",
  //   price: 32470,
  //   url: 'https://kaspi.kz/shop/p/kofemashina-dauscher-dcm-1650lx-serebristyi-105828073/?c=750000000#!/item',
  //   image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/h99/52503463788574/kofemasina-dauscher-dcm-1650lx-105828073-1.jpg", 
  //   rating: 0
  // },
  // {
  //   id: 3,
  //   name: "Polaris PCM 1535E",
  //   price: 114990,
  //   url: 'https://kaspi.kz/shop/p/kofevarka-polaris-pcm-1535e-serebristyi-chernyi-4400520/?c=750000000#!/item',
  //   image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h1c/31815842463774/polaris-pcm-1535e-black-silver-4400520-1-Container.jpg",
  //   rating: 0
  // },
  // {
  //   id: 4,
  //   name: "Delonghi ECP 35.31",
  //   price: 83990,
  //   url: 'https://kaspi.kz/shop/p/kofevarka-delonghi-ecp-35-31-serebristyi-4400226/?c=750000000#!/item',
  //   image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/ha2/31693892452382/delonghi-ecp-35-31-serebristyj-4400226-1-Container.jpg",
  //   rating: 0
  // },
  // {
  //   id: 5,
  //   name: "Maxwell MW-1657",
  //   price: 11950,
  //   url: "https://kaspi.kz/shop/p/kofevarka-maxwell-mw-1657-chernyi-4400322/?c=750000000#!/item",
  //   image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h5c/31584898875422/maxwell-mw-1657-black-4400322-1-Container.jpg",
  //   rating: 0
  // }
// ]

export const products: Product[] = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 10 Pro',
    price: 128350,
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
    rating: 0,
    category: "Phones"
  },
  {
    id: 2,
    name: 'Apple iPhone 13',
    price: 372380,
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg", 
    rating: 0,
    category: "Phones"
  },
  {
    id: 3,
    name: 'Apple iPhone 14 Pro Max',
    price: 691680,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg', 
    rating: 0,
    category: "Phones"
  },
  {
    id: 4,
    name: 'Xiaomi Redmi 10C',
    price: 128350,
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h96/49939925139486/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg", 
    rating: 0,
    category: "Phones"
  },
  {
    id: 5,
    name: 'Samsung Galaxy A13',
    price: 90130,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg", 
    rating: 0,
    category: "Phones"
  },
  {
    id: 6,
    name: "Утюг Orvica ORM-3508",
    price: 4604,
    url: 'https://kaspi.kz/shop/p/orvica-orm-3508-sinii-103554115/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hfc/48497748049950/orvica-orm-3508-sinij-103554115-1.jpg", 
    rating: 0,
    category: "Irons"
  },
  {
    id: 7,
    name: "Утюг Vitek VT-8304",
    price: 16990,
    url: 'https://kaspi.kz/shop/p/vitek-vt-8304-chernyi-3800548/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hc1/31593847980062/vitek-vt-8304-cernyj-sinij-3800548-1-Container.jpg", 
    rating: 0,
    category: "Irons"
  },
  {
    id: 8,
    name: "Утюг ARG SL-2088А",
    price: 6380,
    url: 'https://kaspi.kz/shop/p/arg-sl-2088a-sinii-100987961/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hc1/31593847980062/vitek-vt-8304-cernyj-sinij-3800548-1-Container.jpg",
    rating: 0,
    category: "Irons"
  },
  {
    id: 9,
    name: "Утюг Braun SI 5006 BL",
    price: 29990,
    url: 'https://kaspi.kz/shop/p/braun-si-5006-bl-goluboi-100797276/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/he3/32975599796254/braun-si-5006-bl-belyj-goluboj-100797276-1-Container.jpg",
    rating: 0,
    category: "Irons"
  },
  {
    id: 10,
    name: "Утюг Masima MS-999",
    price: 10989,
    url: "https://kaspi.kz/shop/p/masima-ms-999-zelenyi-104947240/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/h82/50919964999710/masima-ms-999-zelenyj-104947240-1.jpg",
    rating: 0,
    category: "Irons"
  },
  {
    id: 11,
    name: "CENTEK CT-1164",
    price: 60046,
    url: 'https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/hf2/51251427606558/centek-ct-1164-serebristyj-100358682-1-Container.jpg", 
    rating: 0,
    category: "Coffee Machines"
  },
  {
    id: 12,
    name: "DAUSCHER DCM-1650LX",
    price: 32470,
    url: 'https://kaspi.kz/shop/p/kofemashina-dauscher-dcm-1650lx-serebristyi-105828073/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/h99/52503463788574/kofemasina-dauscher-dcm-1650lx-105828073-1.jpg", 
    rating: 0,
    category: "Coffee Machines"
  },
  {
    id: 13,
    name: "Polaris PCM 1535E",
    price: 114990,
    url: 'https://kaspi.kz/shop/p/kofevarka-polaris-pcm-1535e-serebristyi-chernyi-4400520/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h1c/31815842463774/polaris-pcm-1535e-black-silver-4400520-1-Container.jpg",
    rating: 0,
    category: "Coffee Machines"
  },
  {
    id: 14,
    name: "Delonghi ECP 35.31",
    price: 83990,
    url: 'https://kaspi.kz/shop/p/kofevarka-delonghi-ecp-35-31-serebristyi-4400226/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/ha2/31693892452382/delonghi-ecp-35-31-serebristyj-4400226-1-Container.jpg",
    rating: 0,
    category: "Coffee Machines"
  },
  {
    id: 15,
    name: "Maxwell MW-1657",
    price: 11950,
    url: "https://kaspi.kz/shop/p/kofevarka-maxwell-mw-1657-chernyi-4400322/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h5c/31584898875422/maxwell-mw-1657-black-4400322-1-Container.jpg",
    rating: 0,
    category: "Coffee Machines"
  },
  {
  id: 16,
  name: "Lenovo IdeaPad 3 15ITL6 82H8005GRK",
  price: 169990,
  url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
  image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h11/66993674125342/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg", 
  rating: 0,
  category: "Laptops"
  },
  {
    id: 17,
    name: "Apple MacBook Air 13 MGN63",
    price: 477999,
    url: 'https://kaspi.kz/shop/p/vitek-vt-8304-chernyi-3800548/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg", 
    rating: 0,
    category: "Laptops"
  },
  {
    id: 18,
    name: "ASUS X515EA-BQ3269 90NB0TY1-M038L0",
    price: 179990,
    url: 'https://kaspi.kz/shop/p/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/haf/66428285288478/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-1.jpg",
    rating: 0,
    category: "Laptops"
  },
  {
    id: 19,
    name: "ASUS TUF Gaming A15 FA506ICB-HN105 90NR0667-M00BL0",
    price: 389130,
    url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/hff/66995169689630/asus-tuf-gaming-a15-fa506icb-hn105-90nr0667-m00bl0-chernyi-108093785-1.jpg",
    rating: 0,
    category: "Laptops"
  },
  {
    id: 20,
    name: "Apple MacBook Pro 16 Z14X000HQ",
    price: 2825000,
    url: "https://kaspi.kz/shop/p/apple-macbook-pro-16-z14x000hq-seryi-108677248/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h49/68460098715678/apple-macbook-pro-16-2-m1-max-chip-108677248-1.jpg",
    rating: 0,
    category: "Laptops"
  }
]

export class ProductClass{
  public remove(product: Product){
    products.splice(products.indexOf(product), 1);
  }
}
