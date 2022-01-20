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
	{ name: 'Sample image 1', available: 'Now', desc: 'Test 1', id: 1 },
	{ name: 'Sample image 2', available: '02/12/2022', desc: 'Test 2', id: 2 },
	{ name: 'Sample image 3', available: 'TBA', desc: 'Test 3', id: 3 },
	{ name: 'Sample image 4', available: 'Tomorrow', desc: 'Test 4', id: 4 },
	{ name: 'Sample image 5', available: '04/04/2022', desc: 'Test 5', id: 5 },
];
const combined = images.map((item, i) => {
	return {
		src: item.default,
		...imageInfo[i],
	};
});

export default combined;
