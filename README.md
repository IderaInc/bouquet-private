Installation and Usage of Group Tag, Group Info tag ,Chart tag and Data tag.

Installation

Configure in conf.json of JSDOC the following for all tags , staticFiles plug-in is used to copy external dependencies like in here fusioncharts js files.

{
    "plugins": [
    		"plugins/group/grouptag",
    		"plugins/charttag/charttag",
		"plugins/datatag/datatag",
                	"plugins/staticFiles/staticFiles"
	      ],


  "staticFiles":  {
    "include": ["fusioncharts:fusioncharts",],
    "includePattern": ".+\\.(js)$",
    "excludePattern": "(^|\\/|\\\\)_",
    "recursive": true,
    "recursiveLevel": 3,
  }


}

Copy plug-ins in src folder to plug-ins folder of JSDOC.


Usage :

@group tag :applied at API categories like Classes,Namespaces ,Events,Methods members etc ..
sortKey specifies ordering of members with in the group.A valid sortkey order should be used.

Used to group simillar API items and sort them in desired order with in the group.

 @group <groupMachineName>:<sortkey>


@groupInfo tag : Used for title and group description.

@groupInfo <groupMachineName>  <group Title>
 <group Decsription>
groupMachineName should be same as given in group tag.
GroupTitile can contain spaces
Whatever follows in new line is group description ,can contain multiple lines


@chart tag : right now used at method level in API docs and anywhere in tutorials

  Used to render chart using json data specified in json file.

@chart  “<chartJsonFileName>”

Chart JSON File should contain all the json data that can be passed to FusionCharts constructor.

@data tag : same as chart tag usage.

Used to render  json /xml data specified in json file in tabs with code highlighting.

@data  “<dataJsonFileName>”

Data JSON File should contain all the json data that can be passed to FusionCharts constructor.

right now the json format is simmilar to chart json data where dataSource key is picked up to render JSON data.



Command to generate Docs :

<path-to-jsdoc-bin>/jsdoc <source-folder-path>  -t <docstrap-tempalte-path>  -c <conf.json-path>  -u <jsdoc-tutorials-path> -d <destination-folder-path>


remeber conf.json should contain above configuration in Page1.
