import React from 'react';

//other deps

//pages
import { MainPage } from 'library/pages';

//styles
import { styles } from './App.styles';

//types
import { CSSObject } from '@emotion/css';

export type AppProps = {
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// App
//-------------------------------
export const App: React.FC<AppProps> = () => {
	return (
		<div css={styles.container}>
			<MainPage />
		</div>
	);
};
