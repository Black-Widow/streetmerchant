import {Store} from './store';

export const AmazonFr: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: {
			container: '#availability',
			text: ['Voir les offres de ']
		},
		maxPrice: {
			container: 'span[class*="priceBlockBuyingPriceString"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.fr/dp/B07PBLD2MX'
		},
		{
			brand: 'MSI',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HR7SV3M'
		},
		{
			brand: 'MSI',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HR5SXPS'
		},
		/*{
			brand: 'EVGA',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HR3DPGW'
		},*/
		{
			brand: 'EVGA',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HR3Y5GQ'
		},
		{
			brand: 'EVGA',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HR55YB5'
		},
		{
			brand: 'EVGA',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HR4RJ3Q'
		},
		{
			brand: 'EVGA',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HR6FMF3'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HJTH61J'
		},
		{
			brand: 'GIGABYTE',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HJS2JLJ'
		},
		{
			brand: 'ASUS',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HHDP9DW'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HH5WF97'
		},
		{
			brand: 'ZOTAC',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.fr/dp/B08HJNKT3P'
		},
		{
			brand: 'ZOTAC',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.fr/dp/B08HJQ182D'
		},
		{
			brand: 'MSI',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/B08HR9D2JS'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/B08HJRF2CN'
		},
		{
			brand: 'GIGABYTE',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/B08HJPDJTY'
		},
		{
			brand: 'ASUS',
			model: 'tuf',
			series: '3090',
			url: 'https://www.amazon.fr/dp/B08HJGNJ81'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/B08HJLLF7G'
		},
		{
			brand: 'AMD',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.amazon.fr/dp/B08166SLDF'
		},
		{
			brand: 'AMD',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.amazon.fr/dp/B0815XFSGK'
		},
		{
			brand: 'AMD',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.amazon.fr/dp/B08164VTWH'
		},
		{
			brand: 'AMD',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.amazon.fr/dp/B0815Y8J9N'
		},
		{
			brand: 'SONY',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.fr/dp/B08GSC5D9G'
		},
		{
			brand: 'SONY',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.fr/dp/B08GS1N24H'
		}
	],
	name: 'amazon-fr'
};
