import { LATEST_API_VERSION } from '@shopify/shopify-api';
import { shopifyApp } from '@shopify/shopify-app-express';
import { MySQLSessionStorage } from '@shopify/shopify-app-session-storage-mysql';
let { restResources } = await import(
	`@shopify/shopify-api/rest/admin/${LATEST_API_VERSION}`
);

const shopify = shopifyApp({
	api: {
		restResources,
	},
	auth: {
		path: '/api/auth',
		callbackPath: '/api/auth/callback',
	},
	webhooks: {
		path: '/api/webhooks',
	},
	sessionStorage: new MySQLSessionStorage(
		'mysql://root:@localhost:3306/free_shipping'
	),
});

export default shopify;
