import React from 'react';

//other deps

//components
import { LabelText } from 'library/components/atoms';
import { Bar } from 'library/components/molecules';

//styles
import { styles } from './Row.styles';

//types
import { CSSObject } from '@emotion/css';
import { PopulationData } from 'types';

export type RowProps = {
	populationData: PopulationData;
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// Row
//-------------------------------
export const Row: React.FC<RowProps> = ({
	populationData,
	style,
}) => {
	const barWidth = populationData.population / (7752840.55 / 100);
	return (
		<div css={[styles.container, style]}>
			<LabelText type='upper' style={[styles.label]}>
				{populationData.country}
			</LabelText>
			<Bar barWidth={barWidth} style={styles.bar} />
			<LabelText style={[styles.label]}>
				{(populationData.population * 1000).toString()}
			</LabelText>
		</div>
	);
};
