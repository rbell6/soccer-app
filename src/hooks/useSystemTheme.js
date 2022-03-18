import { useState, useEffect } from 'react';
const MEDIA_QUERY_DARK = '(prefers-color-scheme: dark)';

export function useSystemTheme() {
	const getCurrentTheme = () => window.matchMedia(MEDIA_QUERY_DARK).matches;
	const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
	const mqListener = e => {
		setIsDarkTheme(e.matches);
	};

	useEffect(() => {
		const darkThemeMq = window.matchMedia(MEDIA_QUERY_DARK);
		darkThemeMq.addEventListener('change', mqListener);
		return () => darkThemeMq.removeEventListener('change', mqListener);
	}, []);
	return isDarkTheme;
}
