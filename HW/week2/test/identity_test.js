import _ from "https://dev.jspm.io/lodash";

var object = [ { 'name':'XXXX', 'age':36, 'active':true }, 
{ 'name':'YYYY',   'age':40, 'active':false }];
console.log(_.identity(object));