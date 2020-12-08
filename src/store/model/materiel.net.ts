import {Store} from './store';
import {getProductLinksBuilder} from "./helpers/card";

export const MaterielNet: Store = {
	labels: {
		outOfStock: {
			container: '.js__stock_web .o-availability__value',
			text: ['Rupture']
		},
		stockDelayFifteen: {
			container: '.o-availability__value--stock_6',
			text: ['']
		},
		stockDelaySeven: [
			{
				container: '.o-availability__value--stock_5',
				text: ['']
			},
			{
				container: '.o-availability__value--stock_4',
				text: ['']
			}
		]

	},
	links: [
		// Ryzen 5000 Series
		// ==================
		{
			brand: 'AMD',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.materiel.net/produit/202010120110.html'
		},
		{
			brand: 'AMD',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.materiel.net/produit/202010120128.html'
		},
		{
			brand: 'AMD',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.materiel.net/produit/202010120129.html'
		},

		{
			brand: 'AMD',
			model: '5950x',
			series: 'ryzen5900',
			url: 'https://www.materiel.net/produit/202010120130.html'
		},
		// RX6800 Series
		// ==================
		/*{
			brand: 'sapphire',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://www.materiel.net/produit/202011060047.html'
		},

		{
			brand: 'sapphire',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://www.materiel.net/produit/202011060051.html'
		},
		{
			brand: 'MSI',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://www.materiel.net/produit/202011040090.html'
		},
		{
			brand: 'MSI',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://www.materiel.net/produit/202011040091.html'
		},
		{
			brand: 'asrock',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://www.materiel.net/produit/202011120043.html'
		},
		{
			brand: 'asrock',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://www.materiel.net/produit/202011120046.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://www.materiel.net/produit/202011160095.html'
		},*/
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: 'ul.c-products-list li.c-products-list__item',
			sitePrefix: 'https://www.materiel.net',
			titleSelector: '.c-product__meta > a[href]'
		}),
		ttl: 300000,
		urls: [
			{
				series: '3070',
				url:
					'https://www.materiel.net/carte-graphique/l426/+fv121-19184/'
			},
			{
				series: '3080',
				url:
					'https://www.materiel.net/carte-graphique/l426/+fv121-19183/'
			},
			{
				series: '3090',
				url:
					'https://www.materiel.net/carte-graphique/l426/+fv121-19185/'
			},
			{
				series: 'rx6800',
				url:
					'https://www.materiel.net/carte-graphique/l426/+fv121-19339/'
			},
			{
				series: 'rx6800xt',
				url:
					'https://www.materiel.net/carte-graphique/l426/+fv121-19340/'
			},
			{
				series: 'rx6900xt',
				url:
					'https://www.materiel.net/carte-graphique/l426/+fv121-19367/'
			}
		]
	},
	name: 'materiel.net',
	waitUntil: 'domcontentloaded'

};
