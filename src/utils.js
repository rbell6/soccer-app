const PROD_HOST = 'rbell6.github.io';

export function isProdEnv() {
	return !location.host.includes('localhost');
}
