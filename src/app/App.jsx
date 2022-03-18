import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider as SpectrumProvider, defaultTheme } from '@adobe/react-spectrum';
import { AppHeader } from '../components/shell/AppHeader';
import { Competitions, CompetitionDetail } from '../components/competitions/Competitions';
import { DebugNav } from '../components/shell/DebugNav';
import { useSystemTheme } from '../hooks/useSystemTheme';
import './App.css';

const DEBUG = true;
const queryClient = new QueryClient();

export function App() {
	const darkTheme = useSystemTheme();
	const [isDarkMode, setDarkMode] = useState(darkTheme);
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<SpectrumProvider theme={defaultTheme} colorScheme={isDarkMode ? 'dark' : 'light'}>
					<AppHeader isDarkMode={isDarkMode} onChangeTheme={() => setDarkMode(!isDarkMode)} />
					{DEBUG && <DebugNav />}
					<Routes>
						<Route path="/" element={<div>home</div>} />
						<Route path="/competitions" element={<Competitions />} />
						<Route path="/competitions/:id" element={<CompetitionDetail />} />
						<Route path="/competitions/:id/matches" element={<div>competition matches</div>} />
						<Route path="/competitions/:id/standings" element={<div>competition standings</div>} />
						<Route path="/competitions/:id/teams" element={<div>competition teams</div>} />
						<Route path="/matches/:id" element={<div>match detail</div>} />
						<Route path="/teams/:id" element={<div>team detail</div>} />
					</Routes>
				</SpectrumProvider>
			</Router>
		</QueryClientProvider>
	);
}