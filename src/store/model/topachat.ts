import {Store} from './store';

export const TopAchat: Store = {
	labels: {
		stockDelaySeven: [
			{
				container: '.dispo-entre-7-15-jours',
				text: ['']
			},
			{
				container: '.dispo-sous-7-jours',
				text: ['']
			},
		] ,
		stockDelayFifteen: {
			container: '.dispo-plus-15-jours',
			text: ['']
		},
		outOfStock: {
			container: '.en-rupture',
			text: ['']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in11019393.html'
		},
		// Ryzen 5000 Series
		// ==================
		{
			brand: 'AMD',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wpr_puis_ref_est_in20005853.html'
		},
		{
			brand: 'AMD',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wpr_puis_ref_est_in20005854.html'
		},
		{
			brand: 'AMD',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wpr_puis_ref_est_in20005855.html'
		},
		{
			brand: 'AMD',
			model: '5950x',
			series: 'ryzen5900',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wpr_puis_ref_est_in20005856.html'
		},
		// RX6800 Series
		// ==================
		{
			brand: 'SAPPHIRE',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006280.html'
		},
		{
			brand: 'SAPPHIRE',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006281.html'
		},
		/*{
			brand: 'SAPPHIRE',
			model: 'nitro oc',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006402.html'
		},*/
		/*{
			brand: 'SAPPHIRE',
			model: 'nitro oc',
			series: 'rx6800xt',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006401.html'
		},*/
		{
			brand: 'SAPPHIRE',
			model: 'nitro oc se',
			series: 'rx6800xt',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006403.html'
		},
		{
			brand: 'MSI',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006245.html'
		},
		{
			brand: 'MSI',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006246.html'
		},
		{
			brand: 'ASROCK',
			model: 'founders edition',
			series: 'rx6800xt',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006378.html'
		},
		{
			brand: 'ASROCK',
			model: 'founders edition',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006379.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006356.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: 'rx6800xt',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006358.html'
		},
		{
			brand: 'ASUS',
			model: 'strix oc',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006357.html'
		},
		{
			brand: 'ASUS',
			model: 'strix lc',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006360.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: 'rx6800',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006557.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: 'rx6800xt',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006556.html'
		},
		// RTX 3070
		// ==================
		{
			brand: 'GAINWARD',
			model: 'phoenix',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005824.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phoenix gs',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005823.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phantom gs',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005821.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phantom',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005822.html'
		},
		{
			brand: 'PALIT',
			model: 'jetstream',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005818.html'
		},
		{
			brand: 'PALIT',
			model: 'jetstream oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005817.html'
		},
		{
			brand: 'PALIT',
			model: 'gaming pro oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005819.html'
		},
		{
			brand: 'PALIT',
			model: 'gaming pro',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005820.html'
		},
		{
			brand: 'PALIT',
			model: 'gamerock oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005815.html'
		},
		{
			brand: 'PALIT',
			model: 'gamerock',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005816.html'
		},
		{
			brand: 'ZOTAC',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005182.html'
		},
		{
			brand: 'ZOTAC',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005510.html'
		},
		{
			brand: 'EVGA',
			model: 'ftw3 ultra',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006015.html'
		},
		{
			brand: 'EVGA',
			model: 'ftw3',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006014.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006003.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006005.html'
		},
		{
			brand: 'MSI',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005696.html'
		},
		{
			brand: 'MSI',
			model: 'suprim x',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006213.html'
		},
		{
			brand: 'MSI',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005697.html'
		},
		{
			brand: 'MSI',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005698.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'aorus master',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005989.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005990.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005631.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005632.html'
		},
		{
			brand: 'ASUS',
			model: 'dual',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005540.html'
		},
		{
			brand: 'ASUS',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005541.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005629.html'
		},
		{
			brand: 'ASUS',
			model: 'strix',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005478.html'
		},
		{
			brand: 'ASUS',
			model: 'strix oc',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005479.html'
		},
		{
			brand: 'KFA2',
			model: 'sg',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005542.html'
		},
		{
			brand: 'PNY',
			model: 'phantom gs',
			series: '3070',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005220.html'
		},
		// RTX 3080
		// ==================
		{
			brand: 'AORUS',
			model: 'master',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005630.html'
		},
		{
			brand: 'AORUS',
			model: 'xtreme',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006282.html'
		},
		{
			brand: 'ASUS',
			model: 'strix',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005911.html'
		},
		{
			brand: 'ASUS',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005320.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005070.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005200.html'
		},
		{
			brand: 'EVGA',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005291.html'
		},
		{
			brand: 'EVGA',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005292.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005289.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005290.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005334.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phantom',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006070.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phantom gs',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006308.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phoenix',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005267.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phoenix gs',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005268.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005263.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005262.html'
		},
		{
			brand: 'GIGABYTE',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005670.html'
		},
		{
			brand: 'KFA2',
			model: 'sg',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005256.html'
		},
		{
			brand: 'MSI',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005228.html'
		},
		{
			brand: 'MSI',
			model: 'suprim x',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006027.html'
		},
		{
			brand: 'MSI',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005227.html'
		},
		{
			brand: 'PALIT',
			model: 'gamerock',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006071.html'
		},
		{
			brand: 'PALIT',
			model: 'gamerock oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006072.html'
		},
		{
			brand: 'PALIT',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005271.html'
		},
		{
			brand: 'PALIT',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005272.html'
		},
		{
			brand: 'PNY',
			model: 'xlr8 revel',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005223.html'
		},
		{
			brand: 'PNY',
			model: 'xlr8 revel metal',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005222.html'
		},
		{
			brand: 'ZOTAC',
			model: 'amp holo',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005508.html'
		},
		{
			brand: 'ZOTAC',
			model: 'trinity',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005183.html'
		},
		{
			brand: 'ZOTAC',
			model: 'trinity oc',
			series: '3080',
			url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005509.html'
		},
		// RTX 3090
		// ==================
		{
			brand: 'AORUS',
			model: 'master',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005641.html'
		},
		{
			brand: 'AORUS',
			model: 'xtreme',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006135.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005071.html'
		},
		{
			brand: 'ASUS',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005199.html'
		},
		{
			brand: 'ASUS',
			model: 'strix oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005319.html'
		},
		{
			brand: 'PNY',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005225.html'
		},
		{
			brand: 'PNY',
			model: 'xlr8 revel metal',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005224.html'
		},
		{
			brand: 'EVGA',
			model: 'ftw3',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005296.html'
		},
		{
			brand: 'EVGA',
			model: 'ftw3 ultra',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005297.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005293.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005294.html'
		},
		{
			brand: 'EVGA',
			model: 'xc3 ultra',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005295.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phantom',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006279.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phantom gs',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006278.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phoenix',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005269.html'
		},
		{
			brand: 'GAINWARD',
			model: 'phoenix gs',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005270.html'
		},
		{
			brand: 'MSI',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005226.html'
		},
		{
			brand: 'MSI',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005229.html'
		},
		{
			brand: 'PALIT',
			model: 'gaming pro',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005273.html'
		},
		{
			brand: 'PALIT',
			model: 'gaming pro oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005266.html'
		},
		{
			brand: 'KFA2',
			model: 'sg',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005257.html'
		}

	],
	name: 'topachat',
};
