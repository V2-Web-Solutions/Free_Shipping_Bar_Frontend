import { LATEST_API_VERSION } from '@shopify/shopify-api';
import { shopifyApp } from '@shopify/shopify-app-express';
import { MySQLSessionStorage } from '@shopify/shopify-app-session-storage-mysql';
let { restResources } = await import(
	`@shopify/shopify-api/rest/admin/${LATEST_API_VERSION}`
);

const shopify = shopifyApp({
	api: {
		restResources,
		apiKey: '9690726c7ab104684f3617286e8002ad',
		apiSecretKey: 'bcdb6d474ab11e727b6699f7069e0601',
		hostName: 'v2-development-store.myshopify.com',
		scopes: 'write_products',
	},
	auth: {
		path: '/api/auth',
		callbackPath: '/api/auth/callback',
	},
	webhooks: {
		path: '/api/webhooks',
	},
	// sessionStorage: new MySQLSessionStorage({
	// 	// connectionUrl: 'mysql://aajmvqnurf:Z7Fyn2WVmJ@localhost:3306/aajmvqnurf',
	// 	connectionUrl: 'mysql://root:@localhost:3306/free_shipping',
	// }),
	sessionStorage: new MySQLSessionStorage(
		'mysql://root:@localhost:3306/free_shipping'
	),
});

export default shopify;
