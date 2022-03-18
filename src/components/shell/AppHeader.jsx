import { Flex, View, Switch, Heading } from '@adobe/react-spectrum';

export function AppHeader({ onChangeTheme, isDarkMode }) {
	return (
		<View
			backgroundColor={isDarkMode ? 'static-gray-900' : 'static-white'}
			borderBottomColor="gray-100"
			borderBottomWidth={1}
			position="sticky"
			top={0} UNSAFE_style={{boxShadow: '0 0 3px rgba(0, 0, 0, .1)'}}>
			<Flex
				direction="row"
				alignItems="center"
				justifyContent="space-between">
				<View marginStart="size-200">
					<Heading >Hello webpack-react</Heading>
				</View>
				<View marginEnd="size-200">
					<Switch onChange={onChangeTheme}>
						{isDarkMode ? 'Dark' : 'Light'}
					</Switch>
				</View>
			</Flex>
		</View>
	);
}