import React from 'react';

//other deps
import { MainPageData } from './MainPage.data';

//components
import { MainPageTemplate } from './MainPage.template';

export type MainPageProps = {};

//-------------------------------
// MainPage
//-------------------------------
export const MainPage: React.FC<MainPageProps> = () => {
	//state

	return (
		<MainPageTemplate data={MainPageData} />
	);
};
