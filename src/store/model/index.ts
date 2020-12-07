import {config, defaultStoreData} from '../../config';
import {Alternate} from './alternate';
import {AmazonDe} from './amazon-de';
import {AmazonFr} from './amazon-fr';
import {Amd} from './amd';
import {LDLC} from './ldlc';
import {MaterielNet} from './materiel.net';
import {HardwareFR} from './hardware.fr';
import {Infomax} from './infomax';
import {Store} from './store';
import {TopAchat} from './topachat';
import {logger} from '../../logger';

export const storeList = new Map([
	[Alternate.name, Alternate],
	[AmazonDe.name, AmazonDe],
	[AmazonFr.name, AmazonFr],
	[Amd.name, Amd],
	[TopAchat.name, TopAchat],
	[LDLC.name, LDLC],
	[MaterielNet.name, MaterielNet],
	[Infomax.name, Infomax],
	[HardwareFR.name, HardwareFR],
]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
	brands.clear();
	series.clear();
	models.clear();

	for (const store of storeList.values()) {
		for (const link of store.links) {
			brands.add(link.brand);
			series.add(link.series);
			models.add(link.model);
		}

		if (store.minPageSleep === undefined) {
			store.minPageSleep = defaultStoreData.minPageSleep;
		}

		if (store.maxPageSleep === undefined) {
			store.maxPageSleep = defaultStoreData.maxPageSleep;
		}
	}
}

function printConfig() {
	if (config.store.stores.length > 0) {
		logger.info(
			`ℹ selected stores: ${config.store.stores
				.map((store) => store.name)
				.join(', ')}`
		);
	}

	if (config.store.showOnlyBrands.length > 0) {
		logger.info(
			`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`
		);
	}

	if (config.store.showOnlyModels.length > 0) {
		logger.info(
			`ℹ selected models: ${config.store.showOnlyModels
				.map((entry) => {
					return entry.series
						? entry.name + ' (' + entry.series + ')'
						: entry.name;
				})
				.join(', ')}`
		);
	}

	if (config.store.showOnlySeries.length > 0) {
		logger.info(
			`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`
		);
	}
}

function warnIfStoreDeprecated(store: Store) {
	switch (store.name) {
		case 'nvidia':
		case 'nvidia-api':
			logger.warn(`${store.name} is deprecated in favor of bestbuy`);
			break;
		case 'evga':
			logger.warn(
				`${store.name} is deprecated since they only support queuing`
			);
			break;
		default:
	}
}

export function updateStores() {
	stores.clear();

	for (const storeData of config.store.stores) {
		const store = storeList.get(storeData.name);

		if (store) {
			warnIfStoreDeprecated(store);
			stores.set(storeData.name, store);
			store.minPageSleep = storeData.minPageSleep;
			store.maxPageSleep = storeData.maxPageSleep;
			store.proxyList = storeData.proxyList;
		} else {
			logger.warn(`No store named ${storeData.name}, skipping.`);
		}
	}

	filterBrandsSeriesModels();
	printConfig();
}

updateStores();

export function getAllBrands() {
	return Array.from(brands);
}

export function getAllSeries() {
	return Array.from(series);
}

export function getAllModels() {
	return Array.from(models);
}

export function getStores() {
	return stores;
}

export * from './store';
