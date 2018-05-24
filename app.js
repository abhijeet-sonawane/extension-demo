var Built = require('built-extension-sdk')

// Instantiate your Built application
// Add your Built Application API Key in {{APP_API_KEY}}
var app = Built.App('bltb376019d1ea9d7fa')
.setHost("api.built.io")
.setProtocol("https")
.setMasterKey('blte14aeecaa15594cd')

var extensionSDK = app.Extension({
	extension_key  : 'blt_ext_default',
	secret_key     : 'blt_secret_default',
	static         : __dirname + '/client',
	routes				 : require("./server/routes")
})

return extensionSDK.start(9000)