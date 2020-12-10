import {Store} from './store';

export const Cybertek: Store = {
	labels: {
		outOfStock: {
			container: '#_ctl0_ContentPlaceHolder1_dv_menu_fiche_hs',
			text: ['']
		},
		inStock: {
			container: '.prodfiche_dispo',
			text: ['En Stock']
		},
		stockDelayFifteen: {
			container: '#_ctl0_ContentPlaceHolder1_rupture_fiche',
			text: ['']
		},
		stockDelaySeven: [
			{
				container: '.rupture-fiche',
				text: ['4 à 6 jours']
			},
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
			url: 'https://www.cybertek.fr/processeur/amd/50798.aspx'
		},
		{
			brand: 'AMD',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.cybertek.fr/processeur/amd/50799.aspx'
		},
		{
			brand: 'AMD',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.cybertek.fr/processeur/amd/50800.aspx'
		},
		{
			brand: 'AMD',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.cybertek.fr/processeur/amd/50801.aspx'
		},
	],

	name: 'cybertek',
};
