# exampleEscape

Escape `@example` code blocks in JSDoc.

JSDoc has issues with encoding HTML code examples in `@example` blocks. This plugin converts HTML tags to HTML entities so that they safely escaped and do not break the rest of the layout.

## Usage

* Copy the `exampleEscape` directory to your JSDoc's `plugins` directory. So the plugin file will be at `<jsdoc>/plugins/exampleEscape/exampleEscape.js`.

* Edit your JSDoc configuration file and add `plugins/exampleEscape/exampleEscape` to the `plugins` array:

        "plugins" : ["...", "plugins/jsdoc-plugins/staticFiles/staticFiles"]

* Ready to go!