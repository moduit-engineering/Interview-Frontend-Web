const proxy = require("http-proxy-middleware");

module.export = function(app) {
	app.use(
		proxy("/api/Question1", {
			target : "http://localhost:5000",
			secure: false,
			changeOrigin: true,
			pathRewrite: {
		        "^/api/question1": "/api/question1"
		      }
		})
	);

	app.use(
		proxy("/api", {
			target : "http://localhost:5000",
			secure: false,
			changeOrigin: true,
			pathRewrite: {
		        "^/api": "/api"
		      }
		})
	);
};