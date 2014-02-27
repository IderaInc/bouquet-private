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

Used to group simillar API items and sort them in desired order with in the group.

```
 @group <groupMachineName>:<sortkey>
```

### @groupInfo

Used for title and group description.

```
@groupInfo <groupMachineName>  <group title>
 <group decsription>
```

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

Used to render  json /xml data specified in json file in tabs with code highlighting.

```
@data  “<dataJsonFileName>”
```

Data JSON File should contain all the json data that can be passed to FusionCharts constructor.

Right now the json format is simmilar to chart json data where dataSource key is picked up to render JSON data.
