import React from 'react';

//other deps

//components

//styles
import { styles } from './HeaderText.styles';

//types
import { CSSObject } from '@emotion/css';

export type HeaderTextProps = {
	type?: 'main' | 'sub';
	children: string | string[];
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// HeaderText
//-------------------------------
export const HeaderText: React.FC<HeaderTextProps> = ({
	type = 'main',
	children,
	style,
}) => {
	switch (type) {
		case 'main':
			return (
				<h1 css={[styles.common, style]}>
					{children}
				</h1>
			);
		case 'sub':
			return (
				<h1 css={[styles.common, styles.sub, style]}>
					{children}
				</h1>
			);
	}
};
