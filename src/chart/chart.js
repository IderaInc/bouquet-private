'use strict';
var fs = require('jsdoc/fs');

exports.defineTags = function(dictionary) {

    /** 
     * Set group by property of doclet to identify group members
     * Set group name property for doclet
     * If present set doclet group sort key
     */
    dictionary.defineTag('chart', {
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
            doclet.chartPresent = true;
            if (tag.value) {
                var re = /"([^"\\]*("|\\[\S\s]))+/g; 
	            var chartFilePath=tag.value.match(re).toString().replace(/["']/g, "");
                var chartArgString=tag.value.match('/{(.*)}/');
	            var args = fs.readFileSync(chartFilePath,'utf-8');
                doclet.chartId= chartFilePath.split('.')[0]; 
                doclet.htmlId = Math.ceil((Math.random()*1000)+1);
                doclet.chartSrc = args.replace(new RegExp('{capture}','g'),function(capture) {                       
                       return doclet.chartId;
                });
              if (chartArgString) {
	             doclet.chartAttr = JSON.parse(chartArgString);
             }
        	} 
        }
    });   

};
