import PropTypes from 'prop-types';
import { ProgressCircle, IllustratedMessage, Heading, Content } from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';
import { useQuery } from 'react-query';

export function QueryError({error}) {
	return (
		<IllustratedMessage>
			<NotFound />
			<Heading>Error</Heading>
			<Content>
				<p>An error occurred while loading the data.</p>
				{error && <pre>{error}</pre>}
			</Content>
		</IllustratedMessage>
	);
}

export function QueryRequest({ queryId, queryFn, children }) {
	const { data, isLoading, error } = useQuery(queryId, queryFn);
	if (isLoading) {
		return <ProgressCircle isIndeterminate />;
	} else if (error) {
		return <QueryError error={error} />;
	}
	return children(data);
}

QueryRequest.propTypes = {
	queryId: PropTypes.string.isRequired,
	queryFn: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired,
}