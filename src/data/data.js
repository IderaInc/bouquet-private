'use strict';
var fs = require('jsdoc/fs');

exports.defineTags = function(dictionary) {

    /** 
     *set data property of doclets for displaying chart data
     */
    dictionary.defineTag('data', {
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
            doclet.dataPresent = true;
            if (tag.value) {
              var re = /"([^"\\]*("|\\[\S\s]))+/g; 
	            var dataFilePath=tag.value.match(re).toString().replace(/["']/g, "");
              var dataArgString=tag.value.match('/{(.*)}/');
              doclet.htmlId = Math.ceil((Math.random()*1000)+1);
	             var args = fs.readFileSync(dataFilePath,'utf-8');
              doclet.dataId= dataFilePath.split('.')[0].replace(new RegExp(/\/|\\/g),"_"); 
              doclet.dataSrc = args.replace(new RegExp('{capture}','g'),function(capture) {                       
                       return doclet.dataId;
                });
              if (dataArgString) {
	             doclet.dataAttr = JSON.parse(dataArgString);
             }
        	} 
        }
    });   

};
