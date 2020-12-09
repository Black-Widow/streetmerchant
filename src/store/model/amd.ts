import {Store} from './store';

export const Amd: Store = {
	labels: {
		inStock: {
			container: '.btn-shopping-cart',
			text: ['add to cart']
		},
		maxPrice: {
			container: '.product-page-description h4',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amd.com/en/direct-buy/5450881400/fr'
		},
		{
			brand: 'AMD',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881400/fr?add-to-cart=true',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.amd.com/en/direct-buy/5450881400/fr'
		},
		{
			brand: 'AMD',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881500/fr?add-to-cart=true',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.amd.com/en/direct-buy/5450881500/fr'
		},
		{
			brand: 'AMD',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881600/fr?add-to-cart=true',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.amd.com/en/direct-buy/5450881600/fr'
		},
		{
			brand: 'AMD',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881700/fr?add-to-cart=true',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.amd.com/en/direct-buy/5450881700/fr'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5458372200/us?add-to-cart=true',
			model: 'amd reference',
			series: 'rx6900xt',
			url: 'https://www.amd.com/en/direct-buy/5458372200/us'
		},
		{
			brand: 'AMD',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5458372800/fr?add-to-cart=true',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.amd.com/en/direct-buy/5458372800/fr'
		},
		{
			brand: 'AMD',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5458373400/fr?add-to-cart=true',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://www.amd.com/en/direct-buy/5458373400/fr'
		}
	],
	name: 'amd'
};
