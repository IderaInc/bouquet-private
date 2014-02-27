'use strict';

exports.defineTags = function(dictionary) {

    /** 
     * Set group by property of doclet to identify group members
     * Set group name property for doclet
     * If present set doclet group sort key
     */
    dictionary.defineTag('group', {
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
            doclet.groupby = true;
            if (tag.value) {
	            var groups = tag.value.split(':')
	            doclet.group =  groups[0] ;
	            if(groups[1]) {
	            	doclet.sortKey = groups[1];
	            }
        	} 
        }
    });

    /** 
     * Set groupInfoAvailable property of doclet to identify groupifo members
     * Set group name property for doclet and description
     */
    dictionary.defineTag('groupInfo',{
        mustHaveValue: true,
    	onTagged:function(doclet,tag){
            doclet.groupInfoAvailable=true;
            if (tag.value) {
              var regexp = new RegExp(/([^\s]+)\s(.*)((.|[\f\r\n])*)/g);
              var m = regexp.exec(tag.value);
                var groupMachineName = m[1];
                var groupInfo = groupMachineName;
                var groupTitle = null;
                if(m[2] !=undefined || m[2]!=null) {
                      groupTitle=m[2];
                }else {
                  groupTitle=groupMachineName;

                }
                  if (doclet.groupInfos == null || doclet.groupInfos == undefined) {
                      doclet.groupInfos = {}; 
                  }
                  doclet.groupInfos[groupInfo] =  groupTitle +'~' +((m[3]!=undefined || m[3]!=null) ? m[3] : '');
                  doclet.name = "groups#"+m[1];
              
            }
    	}
    });


};
