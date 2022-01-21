// File to concactinate image and associated dummy data for
// use in presentation logic in Gallery.jsx

function importAll(req) {
	return req.keys().map(req);
}
// https://webpack.js.org/guides/dependency-management/#requirecontext
const images = importAll(
	require.context('../../assets/images/carousel-images', false, /jpe?g/)
);
const imageInfo = [
	{
		name: 'Sample image 1',
		available: 'Now',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat blandit nibh sed tincidunt. Phasellus condimentum ligula ut feugiat porttitor.',
		id: 1,
	},
	{
		name: 'Sample image 2',
		available: '02/12/2022',
		desc: 'Nulla porttitor et eros vel ornare. Aliquam fringilla porta rhoncus. Suspendisse fermentum vehicula neque ut dictum.',
		id: 2,
	},
	{
		name: 'Sample image 3',
		available: 'TBA',
		desc: ' In ac mauris sagittis, semper nisi molestie, pharetra nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas risus tellus, rhoncus et facilisis at, consectetur eget risus.',
		id: 3,
	},
	{
		name: 'Sample image 4',
		available: 'Tomorrow',
		desc: 'Mauris nec nulla leo. Donec quis ante eu eros faucibus fermentum id in nisi. Aenean finibus felis sed mauris accumsan tempus. Phasellus at scelerisque dolor.',
		id: 4,
	},
	{
		name: 'Sample image 5',
		available: '04/04/2022',
		desc: 'Quisque sed libero ut mauris feugiat pulvinar. Donec venenatis eros ut malesuada pharetra. Sed egestas quam id mollis iaculis.',
		id: 5,
	},
];
const combined = images.map((item, i) => {
	return {
		src: item.default,
		...imageInfo[i],
	};
});

export default combined;
