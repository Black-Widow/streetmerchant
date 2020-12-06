import {Store} from './store';
import {getProductLinksBuilder} from "./helpers/card";

export const Infomax: Store = {
	labels: {
		inStock: {
			container: '.product-availability',
			text: ['En stock']
		},
		maxPrice: {
			container: '.product-list',
			euroFormat: true
		},
		outOfStock: {
			container: '.product-availability',
			text: ['Rupture de stock']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://infomaxparis.com/fr/memoire-ram/31281-pny-2x16go-3200mhz-xlr8-gaming-epic-x-rgb.html'
		},
		// Ryzen 5000 Series
		// ==================
		{
			brand: 'AMD',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://infomaxparis.com/fr/processeurs-de-gaming/31229-processeur-amd-ryzen-5-5600x.html'
		},
		{
			brand: 'AMD',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://infomaxparis.com/fr/processeurs-de-gaming/31230-processeur-amd-ryzen-7-5800x.html'
		},
		{
			brand: 'AMD',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://infomaxparis.com/fr/processeurs-de-gaming/31231-processeur-amd-ryzen-9-5900x.html'
		},
		{
			brand: 'AMD',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://infomaxparis.com/fr/processeurs-de-gaming/31232-processeur-amd-ryzen-9-5950x.html'
		},
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '.product-list-wrapper .product-miniature',
			sitePrefix: 'https://infomaxparis.com',
			titleSelector: '.product-name',
			urlSelector: 'a[href]'
		}),
		ttl: 300000,
		urls: [
			{
				series: '3070',
				url:
					'https://infomaxparis.com/fr/123-carte-graphique?q=Chipset+graphique-NVIDIA+GeForce+RTX+3070'
			},
			{
				series: '3080',
				url:
					'https://infomaxparis.com/fr/123-carte-graphique?q=Chipset+graphique-NVIDIA+GeForce+RTX+3080'
			},
			{
				series: '3090',
				url:
					'https://infomaxparis.com/fr/123-carte-graphique?q=Chipset+graphique-NVIDIA+GeForce+RTX+3090'
			},
		]
	},
	name: 'infomax',
	waitUntil: 'domcontentloaded'
};
