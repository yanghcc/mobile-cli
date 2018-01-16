this["templates"] = this["templates"] || {};
this["templates"]["product"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li href=\""
    + alias3(((helper = (helper = helpers.itemLink || (depth0 != null ? depth0.itemLink : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"itemLink","hash":{},"data":data}) : helper)))
    + "\">\r\n    "
    + alias3(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"test","hash":{},"data":data}) : helper)))
    + "\r\n</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});