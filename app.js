var Built = require('built-extension-sdk')

// Instantiate your Built application
// Add your Built Application API Key in {{APP_API_KEY}}
var app = Built.App('bltab4404c93511d374')
.setHost("api.built.io")
.setProtocol("https")
.setMasterKey('blt15beec3e3f34e17e')

var extensionSDK = app.Extension({
	extension_key  : 'blt_ext_default',
	secret_key     : 'secret_key_1',
	static         : __dirname + '/client',
	routes				 : require("./server/routes")
})

return extensionSDK.start(9000)
