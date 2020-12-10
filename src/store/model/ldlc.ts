import {Element, Store} from './store';
import {getProductLinksBuilder} from "./helpers/card";
export const LDLC: Store = {
	labels: {
		stockDelaySeven: {
			container: '.stock-5, .stock-4',
			text: ['']
		},
		stockDelayFifteen: {
			container: '.stock-6',
			text: ['']
		},
		outOfStock: {
			container: '.stock-9',
			text: ['Rupture']
		}
	},
	links: [
		// Ryzen 5000 Series
		// ==================
		{
			brand: 'AMD',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.ldlc.com/fiche/PB00387517.html'
    	},
		{
			brand: 'AMD',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.ldlc.com/fiche/PB00387534.html'
		},
		{
			brand: 'AMD',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.ldlc.com/fiche/PB00387536.html'
		},
		{
			brand: 'AMD',
			model: '5950x',
			series: 'ryzen5900',
			url: 'https://www.ldlc.com/fiche/PB00387540.html'
		},
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: 'div.listing-product li.pdt-item',
			sitePrefix: 'https://www.ldlc.com',
			titleSelector: '.pdt-desc .title-3',
			urlSelector: 'a[href]'
		}),
		ttl: 300000,
		urls: [
			{
				series: '3070',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+ftxt-rtx-3070.html'
			},
			{
				series: '3080',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+ftxt-rtx-3080.html'
			},
			{
				series: '3090',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+ftxt-rtx-3090.html'
			},
			{
				series: 'rx6800',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19339.html'
			},
			{
				series: 'rx6800xt',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19340.html'
			},
			{
				series: 'rx6900xt',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19367.html'
			},
			{
				series: '750W',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/alimentation-pc/c4289/+fb-C000005572+fi8-l750h750.html'
			},
			{
				series: '850W',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/alimentation-pc/c4289/+fb-C000005572+fi8-l850h850.html'
			},
			{
				series: '1000W',
				url:
					'https://www.ldlc.com/informatique/pieces-informatique/alimentation-pc/c4289/+fb-C000005572+fi8-l1000h1000.html'
			},
		]
	},
  name: 'ldlc',
  waitUntil: 'domcontentloaded'

};
