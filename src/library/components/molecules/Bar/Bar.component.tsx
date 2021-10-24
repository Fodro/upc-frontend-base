import React from 'react';

//other deps

//components

//styles
import { styles } from './Bar.styles';

//types
import { CSSObject } from '@emotion/css';

export type BarProps = {
	barWidth?: number;
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// Bar
//-------------------------------
export const Bar: React.FC<BarProps> = ({
	barWidth=100,
	style,
}) => {
	return (
		<div css={[styles.container, style]}>
			<div css={[styles.bar, { width: `${barWidth}%` }]} />
		</div>
	);
};
