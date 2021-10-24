import React from 'react';

//components
import { HeaderText } from 'library/components/atoms';
import { Row } from 'library/components/organisms';

//styles
import { styles } from './MainPage.styles';

//types
import { PopulationData } from 'types';

export type MainPageTemplateProps = {
	data: PopulationData[];
};

//-------------------------------
// MainPageTemplate
//-------------------------------
export const MainPageTemplate: React.FC<MainPageTemplateProps> = ({
	data,
}) => {
	const rows: any = [];

	data.forEach((country) => {
		const row = (
			<Row populationData={country} />
		);
		rows.push(row);
	});

	return (
		<div css={styles.container}>
			<HeaderText>
				World population
			</HeaderText>
			<HeaderText type={'sub'}>
				Ten most popular countries
			</HeaderText>
			{rows}
		</div>
	);
};
