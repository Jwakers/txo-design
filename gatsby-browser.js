const React = require('react');
const Layout = require('./src/components/Layout/Layout').default;
require('./src/assets/style/global.scss');

exports.wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>;
};
