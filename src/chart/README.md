# chart

Render live charts using FusionCharts.

## Usage

### Installation

* Copy the `chart` directory to your JSDoc's `plugins` directory. So the plugin file will be at `<jsdoc>/plugins/chart/chart.js`.

* Edit your JSDoc configuration file and add `plugins/chart/chart` to the `plugins` array:

        "plugins" : ["...", "plugins/jsdoc-plugins/chart/chart"]

* Optionally, add path to the folder where the data JS files are stored. This option needs to be a part of the `fusioncharts` namespace in the configuration. This path is relative to the directory from which JSDoc is executed:

        "fusioncharts": {
            "jsonDataPath": "./sampledata"
        }

* Ready to go!
