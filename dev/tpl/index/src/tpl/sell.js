this["templates"] = this["templates"] || {};
this["templates"]["sell"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li href=\""
    + alias3(((helper = (helper = helpers.itemLink || (depth0 != null ? depth0.itemLink : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"itemLink","hash":{},"data":data}) : helper)))
    + "\" class=\"flag\">\r\n        <a class=\"figure flag-item\" href=\""
    + alias3(((helper = (helper = helpers.itemLink || (depth0 != null ? depth0.itemLink : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"itemLink","hash":{},"data":data}) : helper)))
    + "\"> <img src=\""
    + alias3(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"> </a>\r\n        <div class=\"figcaption flag-item\">\r\n            <div class=\"flag-title\">\r\n                <a href=\""
    + alias3(((helper = (helper = helpers.itemLink || (depth0 != null ? depth0.itemLink : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"itemLink","hash":{},"data":data}) : helper)))
    + "\" title=\"\">"
    + alias3(((helper = (helper = helpers.poductName || (depth0 != null ? depth0.poductName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"poductName","hash":{},"data":data}) : helper)))
    + "</a>\r\n            </div>\r\n            <div class=\"flag-price\">\r\n                <span>双22价</span>\r\n                <strong>¥"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</strong>\r\n                <small>("
    + alias3(((helper = (helper = helpers.preferential || (depth0 != null ? depth0.preferential : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"preferential","hash":{},"data":data}) : helper)))
    + ")</small>\r\n            </div>\r\n            <div class=\"flag-type\">\r\n                "
    + alias3(((helper = (helper = helpers.activityType || (depth0 != null ? depth0.activityType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"activityType","hash":{},"data":data}) : helper)))
    + "\r\n            </div>\r\n            <a class=\"flag-btn\" href=\""
    + alias3(((helper = (helper = helpers.shopLink || (depth0 != null ? depth0.shopLink : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shopLink","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.activeName || (depth0 != null ? depth0.activeName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"activeName","hash":{},"data":data}) : helper)))
    + "</a>\r\n        </div>\r\n    </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});