# data

Print syntax highlighted JavaScript and XML chart data in tabbed boxes.

## Usage

### Installation

* Copy the `data` directory to your JSDoc's `plugins` directory. So the plugin file will be at `<jsdoc>/plugins/data/data.js`.

* Edit your JSDoc configuration file and add `plugins/data/data` to the `plugins` array:

        "plugins" : ["...", "plugins/jsdoc-plugins/data/data"]

* Optionally, add path to the folder where the data JS files are stored. This option needs to be a part of the `fusioncharts` namespace in the configuration. This path is relative to the directory from which JSDoc is executed:

        "fusioncharts": {
            "constructorParamSrc": "./sampledata"
        }

* Ready to go!
