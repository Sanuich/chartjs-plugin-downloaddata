'use strict'

var styles1 = '.tooltiptext { visibility: hidden; width: 120px;   background-color: #555;   color: #fff;   text-align: center;   padding: 5px 0;   border-radius: 6px;    position: absolute;  z-index: 1;   bottom: 125%;  left: 50%;  margin-left: -60px; opacity: 0; transition: opacity 0.3s; }';
undefined
var styles2 = '.tooltiptext::after {   content: ""; position: absolute; top: 100%; left: 50%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: #555 transparent transparent transparent; }';
undefined
var styles3 = '.chart-js-download:hover .tooltiptext { visibility: visible; opacity: 1; }';

var styleElement = document.createElement('style');
document.head.appendChild(styleElement);


styleElement.sheet.insertRule(styles1)
styleElement.sheet.insertRule(styles2)
styleElement.sheet.insertRule(styles3)

const exportData = require('./export-data');

var plugin = {
    id: "downloaddata",

    defaults: {
        buttonTitle: 'Export',
        top: 28,
        right: 26,
        opacity: .4
    },

    afterInit: function (chart, args, options)
    {
        const canvas = chart.ctx.canvas
        let button = toElement('<button size="lg" align="center" component="button" class="chart-js-download flex-shrink-0 mt-6 focus:outline-none focus:ring rounded border-2 border-primary-300 dark:border-gray-500 hover:border-primary-500 active:border-primary-400 dark:hover:border-gray-400 dark:active:border-gray-300 bg-white dark:bg-transparent text-primary-500 dark:text-gray-400 px-3 h-9 inline-flex items-center font-bold flex-shrink-0 mt-6 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 flex-shrink-0 mt-6 focus:outline-none focus:ring rounded border-2 border-primary-300 dark:border-gray-500 hover:border-primary-500 active:border-primary-400 dark:hover:border-gray-400 dark:active:border-gray-300 bg-white dark:bg-transparent text-primary-500 dark:text-gray-400 px-3 h-9 inline-flex items-center font-bold flex-shrink-0 mt-6" ' +
            'style="height: 32px; margin-top: 10px; position: absolute; right: ' + options.right + 'px; top: ' + options.top + 'px; background-color: rgba(255,255,255,' + options.opacity + ');">' + options.buttonTitle + '<span class="tooltiptext">download as file</span></button>')
        button.onclick = function() {
            exportData(chart)
        }
        canvas.parentElement.prepend(button)
    },
}

module.exports = {plugin: plugin}
