import { isProdEnv } from '../utils.js';
const API_TOKEN = '00fe213f662d47e8833933c63de30f10';
const BASE_URL = 'https://api.football-data.org/v1';
const BASE_URL_DEV = 'http://localhost:9000/api';

/**
 * example of a call to the API
 * https://api.football-data.org/v2/competitions?plan=TIER_ONE
 * 
 * @example response:
 * 	{
 * 		"count": 1,
 * 		"competitions": [
 * 			{
 * 				"id": 2021,
 * 				"name": "Premier League",
 * 				"area": {
 * 					"id": 2072,
 * 					"name": "England"
 * 				},
 * 				"code": "PL",
 * 				"plan": "TIER_ONE",
 * 				"lastUpdated": "2018-10-18T15:00:00Z",
 * 				"currentSeason": {
 * 					"id": 2019,
 * 					"startDate": "2018-08-10",
 * 					"endDate": "2019-05-10",
 * 					"currentMatchday": null
 * 				}
 * 			}
 * 		]
 * 	}
 * 
 * 
 * @param {string} path
 * 
 * */ 
export function footballData(path, params = {}) {
	const url = new URL(`${isProdEnv() ? BASE_URL : BASE_URL_DEV}${path}`);
	url.search = new URLSearchParams(params).toString();
	console.log('footballData', url);
	return fetch(url, {
		headers: {
			'X-Auth-Token': API_TOKEN
		},
		
	}).then(response => response.json());
};

export function getCompetitions(params) {
	return footballData('/competitions', params).then(data => data.competitions);
}

export function getCompetitionsMetaData(params) {
	return footballData('/competitions', params);
}