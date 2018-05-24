module.exports = {
	// hello_world is the name of function in this code block
	"/functions/hello_world" : {
		GET : function(req, res) {
			// Returns sample response "Hello World..!!"
			return this.resSuccess(req, res, "Hello World..!!")
		}
	},
	"/classes/organisation/objects":{
		POST: {
			_pre:function(req, res){
				req.bobjekt = req.bobjekt.set("totla", 22)
				return this.resSuccess(req, res)
			},
			_post: function(req, res) {
				req.bobjekt = {
					organisation: req.bobjekt
				}
				return this.resSuccess(req, res)
			}
		}
	}
}