import { Link as RouterLink } from 'react-router-dom';
import { Link, Flex } from '@adobe/react-spectrum';

export function DebugNav() {
	return (
		<nav>
			<Flex gap="size-100">
				<Link>
					<RouterLink to="/">Home</RouterLink>
				</Link>
				<Link>
					<RouterLink to="/competitions">competitions</RouterLink>
				</Link>
				<Link>
					<RouterLink to="/competitions/c1">competitions/c1</RouterLink>
				</Link>
				<Link>
					<RouterLink to="/competitions/c1/matches">competitions/c1/matches</RouterLink>
				</Link>
				<Link>
					<RouterLink to="/competitions/c1/standings">competitions/c1/standings</RouterLink>
				</Link>
				<Link>
					<RouterLink to="/competitions/c1/teams">competitions/c1/teams</RouterLink>
				</Link>
				<Link>
					<RouterLink to="/matches/m1">matches/m1</RouterLink>
				</Link>
				<Link>
					<RouterLink to="/teams/t1">teams/t1</RouterLink>
				</Link>
			</Flex>
		</nav>
	);
}