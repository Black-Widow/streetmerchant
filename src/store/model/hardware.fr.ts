import {Store} from './store';
import {getProductLinksBuilder} from "./helpers/card";

export const HardwareFR: Store = {
	labels: {
		outOfStock: {
			container: 'div[class*=stock-9]',
			text: ['Rupture']
		},
		stockDelayFifteen: {
			container: '.stock-6',
			text: ['']
		},
		stockDelaySeven: [
			{
				container: '.stock-5',
				text: ['']
			},
			{
				container: '.stock-4',
				text: ['']
			}
		],
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://shop.hardware.fr/fiche/AR202005200108.html'
		},
		// Ryzen 5000 Series
		// ==================
		{
			brand: 'AMD',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://shop.hardware.fr/fiche/AR202010120110.html'
		},
		{
			brand: 'AMD',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://shop.hardware.fr/fiche/AR202010120128.html'
		},
		{
			brand: 'AMD',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://shop.hardware.fr/fiche/AR202010120129.html'
		},
		{
			brand: 'AMD',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://shop.hardware.fr/fiche/AR202010120130.html'
		},
		// RX6000 Series
		// ==================
		{
			brand: 'ASROCK',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://shop.hardware.fr/fiche/AR202011120046.html'
		},
		{
			brand: 'ASUS',
			model: 'strix oc',
			series: 'rx6800',
			url: 'https://shop.hardware.fr/fiche/AR202011120005.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: 'rx6800',
			url: 'https://shop.hardware.fr/fiche/AR202011120006.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: 'rx6800',
			url: 'https://shop.hardware.fr/fiche/AR202011230034.html'
		},
		{
			brand: 'MSI',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://shop.hardware.fr/fiche/AR202011040091.html'
		},
		{
			brand: 'SAPPHIRE',
			model: 'nitro oc',
			series: 'rx6800',
			url: 'https://shop.hardware.fr/fiche/AR202011130048.html'
		},
		{
			brand: 'SAPPHIRE',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://shop.hardware.fr/fiche/AR202011060051.html'
		},
		{
			brand: 'ASROCK',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011120043.html'
		},
		{
			brand: 'ASROCK',
			model: 'phantom gs',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011250037.html'
		},
		{
			brand: 'ASROCK',
			model: 'taichi X oc',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011250036.html'
		},
		{
			brand: 'ASUS',
			model: 'strix lc',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011120003.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011120004.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011230032.html'
		},
		{
			brand: 'MSI',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011040090.html'
		},
		{
			brand: 'SAPPHIRE',
			model: 'nitro oc',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011130042.html'
		},
		{
			brand: 'SAPPHIRE',
			model: 'nitro oc se',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011130040.html'
		},
		{
			brand: 'SAPPHIRE',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://shop.hardware.fr/fiche/AR202011060047.html'
		},
	],

	name: 'hardware.fr',
};
