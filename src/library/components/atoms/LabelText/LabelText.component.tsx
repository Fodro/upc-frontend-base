import React from 'react';

//other deps

//components

//styles
import { styles } from './LabelText.styles';

//types
import { CSSObject } from '@emotion/css';

export type LabelTextProps = {
	type?: 'default' | 'upper';
	children: string | string[];
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// LabelText
//-------------------------------
export const LabelText: React.FC<LabelTextProps> = ({
	type = 'default',
	children,
	style,
}) => {
	switch (type) {
		case 'default':
			return (
				<p css={[styles.common, style]}>
					{children}
				</p>
			);
		case 'upper':
			return (
				<p css={[styles.common, styles.upper, style]}>
					{children}
				</p>
			);
	}
};
