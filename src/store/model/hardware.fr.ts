import {Store} from './store';

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
		{
			brand: 'ASROCK',
			model: 'founders edition',
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202012030019.html'
		},
		{
			brand: 'ASUS',
			model: 'founders edition',
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202011260052.html'
		},
		{
			brand: 'ASUS',
			model: "tuf oc",
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202012090085.html'
		},
		{
			brand: 'GIGABYTE',
			model: "founders edition",
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202012080076.html'
		},
		{
			brand: 'MSI',
			model: "founders edition",
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202012020040.html'
		},
		{
			brand: 'POWERCOLOR',
			model: "founders edition",
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202012070018.html'
		},
		{
			brand: 'POWERCOLOR',
			model: "red devil",
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202012080124.html'
		},
		{
			brand: 'POWERCOLOR',
			model: "red devil limited",
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202012080123.html'
		},
		{
			brand: 'SAPPHIRE',
			model: "founders edition",
			series: 'rx6900xt',
			url: 'https://shop.hardware.fr/fiche/AR202011260038.html'
		},
		// Seasonic 750w
		// ==================
		{
			brand: 'Seasonic',
			model: '750W',
			series: 'FOCUS GX',
			url:
				'https://shop.hardware.fr/fiche/AR201905270036.html'
		},
		{
			brand: 'Seasonic',
			model: '750W',
			series: 'FOCUS PX',
			url:
				'https://shop.hardware.fr/fiche/AR201905270041.html'
		},
		{
			brand: 'Seasonic',
			model: '750W',
			series: 'PRIME GX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260012.html'
		},
		{
			brand: 'Seasonic',
			model: '750W',
			series: 'PRIME PX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260008.html'
		},
		{
			brand: 'Seasonic',
			model: '750W',
			series: 'PRIME TX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260003.html'
		},
		// Seasonic 850w
		// ==================
		{
			brand: 'Seasonic',
			model: '850W',
			series: 'FOCUS GX',
			url:
				'https://shop.hardware.fr/fiche/AR201905270038.html'
		},
		{
			brand: 'Seasonic',
			model: '850W',
			series: 'FOCUS PX',
			url:
				'https://shop.hardware.fr/fiche/AR201905270042.html'
		},
		{
			brand: 'Seasonic',
			model: '850W',
			series: 'PRIME GX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260011.html'
		},
		{
			brand: 'Seasonic',
			model: '850W',
			series: 'PRIME PX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260007.html'
		},
		{
			brand: 'Seasonic',
			model: '850W',
			series: 'PRIME TX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260002.html'
		},
		// Seasonic 1000w
		// ==================
		{
			brand: 'Seasonic',
			model: '1000W',
			series: 'PRIME GX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260010.html'
		},
		{
			brand: 'Seasonic',
			model: '1000W',
			series: 'PRIME PX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260006.html'
		},
		{
			brand: 'Seasonic',
			model: '1000W',
			series: 'PRIME TX',
			url:
				'https://shop.hardware.fr/fiche/AR202001260001.html'
		},
	],

	name: 'hardware.fr',
};
