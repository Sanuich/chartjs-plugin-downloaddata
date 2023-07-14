# chartjs-plugin-downloaddata

A download data  plugin for Chart.js

Adds a hover button in the top right corner of the chart area

## Usage

`npm i chartjs-plugin-downloaddata`

`import DownloadDataPackage from 'chartjs-plugin-downloaddata';`

`Chart.register(
    DownloadDataPackage
);`

### Nova Chart JS (coroowicaksono/chart-js-integration)

In order to use this plugin with `coroowicaksono/chart-js-integration` package add these lines to `vendors/coroowicaksono/chart-js-integration/resources/js/chart-js-integration.js`

<br>

`import DownloadDataPackage from 'chartjs-plugin-downloaddata';`<br>
`...`<br>
`Chart.register(DownloadDataPackage);`

## Config

buttonTitle: button title (default = Export)

## Documentation

No documentation yet

## License

chartjs-plugin-downloaddata.js is available under the [MIT license](https://opensource.org/licenses/MIT).
