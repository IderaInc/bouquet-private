Installation and Usage of Group Tag, Group Info tag ,Chart tag and Data tag.

<h4>Installation:</h4>

Configure in conf.json of JSDOC the following for all tags , staticFiles plug-in is used to copy external dependencies like in here fusioncharts js files.
<pre>
{
    "plugins": [
                "plugins/group/group",
                "plugins/chart/chart",
                "plugins/data/data",
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
</pre>

Then copy plug-ins in src folder to plug-ins folder of JSDOC.

<h4>Usage:</h4>
<br/>
@group tag :applied at API categories like Classes,Namespaces ,Events,Methods members etc ..
sortKey specifies ordering of members with in the group.A valid sortkey order should be used.

# Bouquet (Private)

Collection of custom JSDoc plugins for internal consumption of FusionCharts.

## Current list of plugins

 * **group** : Group related API items together and sort them.
 * **chart** : Render FusionCharts live in API and tutorials.
 * **data** : Show JSON data and transcoded XML data in tabs.

## Installation

 * Copy this folder to the plugins directory of your JSDoc installation. 
 * Enable the plugins in JSDoc conf.

```
{
  "plugins": [
    "plugins/bouquet-private/group/group",
    "plugins/bouquet-private/chart/chart",
    "plugins/bouquet-private/data/data"
  ],
}
```

Copy plug-ins in src folder to plug-ins folder of JSDOC.


## Usage

### @group

Applied at API categories like Classes, Namespaces, Events, Methods, Members etc. `sortKey` specifies ordering of members with in the group. A valid `sortkey` order should be used.


@group <groupMachineName>:<sortkey>

```
 @group <groupMachineName>:<sortkey>
```

### @groupInfo

Used for title and group description.

```
@groupInfo <groupMachineName>  <group title>
 <group decsription>
```
<ul>
<li>groupMachineName should be same as given in group tag.</li>
<li>GroupTitile can contain spaces</li>
<li>Whatever follows in new line is group description ,can contain multiple lines</li>
</ul>

`groupMachineName` should be same as given in group tag.
GroupTitile can contain spaces
Whatever follows in new line is group description ,can contain multiple lines

### @chart

$ight now used at method level in API docs and anywhere in tutorials. Used to render chart using json data specified in json file.

```
@chart  "<chartJsonFileName>"
```

Chart JSON File should contain all the json data that can be passed to FusionCharts constructor.

### @data

Same as chart tag usage.


    @data  “<dataJsonFileName>”

Data JSON File should contain all the jso4n data that can be passed to FusionCharts constructor.
<b>Right now the json format is simmilar to chart json data where dataSource key is picked up to render JSON data.</b>



<h4>Command to generate Docs:</h4>

    <path-to-jsdoc-bin>/jsdoc <source-folder-path>  -t <docstrap-tempalte-path>  -c <conf.json    -path>  -u <jsdoc-tutorials-path> -d <destination-folder-path>


remeber conf.json should contain above configuration.

Used to render  json /xml data specified in json file in tabs with code highlighting.

```
@data  “<dataJsonFileName>”
```

Data JSON File should contain all the json data that can be passed to FusionCharts constructor.

Right now the json format is simmilar to chart json data where dataSource key is picked up to render JSON data.

