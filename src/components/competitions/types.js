import PropTypes from 'prop-types';

export const area = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
});

/**
 * @typedef {Object} Competition
 * @property {number} id
 * @property {string} name
 * @property {object} area
 * @property {string} area.name
 * @property {string} area.id
 * @property {string} code
 * @property {string} emblemUrl
 * @property {string} plan
 * @property {string} currentSeason.startDate
 * @property {string} currentSeason.endDate
 * @property {string} currentSeason.currentMatchday
 * @property {string} numberOfAvailableSeasons
 * @property {string} lastUpdated
 * 
 */
export const competition = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	area: area.isRequired,
	code: PropTypes.string.isRequired,
	plan: PropTypes.string.isRequired,
	lastUpdated: PropTypes.string.isRequired,
	currentSeason: PropTypes.shape({
		id: PropTypes.number.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		currentMatchday: PropTypes.number.isRequired
	}).isRequired,
	numberOfAvailableSeasons: PropTypes.number.isRequired,
});

export const competitions = PropTypes.arrayOf(competition);