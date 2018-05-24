module.exports = {
	// hello_world is the name of function in this code block
	"/functions/hello_world" : {
		GET : function(req, res) {
			// Returns sample response "Hello World..!!"
			return this.resSuccess(req, res, "Hello World.. Everyone!!!")
		}
	},
	"/classes/person/objects":{
		POST: {
			_pre:function(req, res){
			   if(req.bobjekt.get("age") < 18){
				return this.resError(req, res, {
					age: "should be greater than or equal to 18"
				})
			   } else {
				   return this.resSuccess(req, res)
			   }
			},
			_post: function(req, res){
				req.logger.log("Object saved successfully")
				req.bobjekt["powered_by"] = "abc.com"
				return this.resSuccess(req, res)
			}
		}
	}
}
