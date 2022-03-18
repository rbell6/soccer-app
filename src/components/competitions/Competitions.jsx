import { useParams, useNavigate } from 'react-router-dom';
import { ListBox, Item, Image } from '@adobe/react-spectrum';
import { competitions } from './types';
import { CompetitionsQuery } from './CompetitionsQuery';

export function CompetitionDetail() {
	const { id } = useParams();
	return (
		<CompetitionsQuery>
			{(data) => {
				console.log('CompetitionDetail <CompetitionsQuery> data', data);
				const { name, emblemUrl } = data.find(c => c.id == id);
				return (
					<div>
						<h1>{name}</h1>
						<Image src={emblemUrl} width={'size-1000'} />
					</div>
				);
			}}
		</CompetitionsQuery>
	);
}

export function CompetitionsList({ competitions }) {
	const navigate = useNavigate();
	const onSelectionChange = (selectedItem) => {
		console.log('selectedItem', selectedItem?.currentKey);
		navigate(`/competitions/${selectedItem?.currentKey}`);
	}
	return (
		<ListBox onSelectionChange={onSelectionChange} selectionMode="single">
			{competitions.map(competition => (
				<Item key={competition.id}>
					{competition.name}
				</Item>
			))}
		</ListBox>
	);
}

CompetitionsList.propTypes = {
	competitions: competitions.isRequired
};

export function Competitions() {
	return (
		<CompetitionsQuery>
			{(data) => <CompetitionsList competitions={data} />}
		</CompetitionsQuery>
	);
}
