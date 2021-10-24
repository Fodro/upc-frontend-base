import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '10%',
	},
};
