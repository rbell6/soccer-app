import { QueryRequest } from '../QueryRequest';
import { getCompetitions } from '../../api/footballData';

export function CompetitionsQuery({ children }) {
	return (
		<QueryRequest queryId="competitions" queryFn={() => getCompetitions({plan: 'TIER_ONE'})}>
			{children}
		</QueryRequest>
	);
}