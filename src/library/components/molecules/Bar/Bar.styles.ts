import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		height: '50%',
		width: '100%',
	},
	bar: {
		height: '100%',
		background: 'linear-gradient(90.13deg, #5EFF8B 0%, #86FFE2 100%)',
		boxShadow: '0px 0px 12px #76FFC1',
		borderRadius: '7px',
		backgroundSize: '300% 300%',
		animation: 'gradient 5s infinite alternate ease-in-out',
	},
};
