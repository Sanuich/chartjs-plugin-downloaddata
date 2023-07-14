'use strict'

const exportData = require('./export-data');

var plugin = {
    id: "sasha",

    defaults: {
        buttonTitle: 'Export'
    },

    afterInit: function (chart, args, options)
    {
        console.log('sasha after init')

        const canvas = chart.ctx.canvas
        let button = toElement('<button size="lg" align="center" component="button" class="flex-shrink-0 mt-6 focus:outline-none focus:ring rounded border-2 border-primary-300 dark:border-gray-500 hover:border-primary-500 active:border-primary-400 dark:hover:border-gray-400 dark:active:border-gray-300 bg-white dark:bg-transparent text-primary-500 dark:text-gray-400 px-3 h-9 inline-flex items-center font-bold flex-shrink-0 mt-6 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 flex-shrink-0 mt-6 focus:outline-none focus:ring rounded border-2 border-primary-300 dark:border-gray-500 hover:border-primary-500 active:border-primary-400 dark:hover:border-gray-400 dark:active:border-gray-300 bg-white dark:bg-transparent text-primary-500 dark:text-gray-400 px-3 h-9 inline-flex items-center font-bold flex-shrink-0 mt-6" ' +
            'style="height: 32px; margin-top: 10px; position: absolute; right: 26px; background-color: rgba(255,255,255,.4);">' + options.buttonTitle + '</button>')
        button.onclick = function() {
            console.log('export click')
            exportData(chart)
        }
        canvas.parentElement.prepend(button)
    },
}

module.exports = {plugin: plugin}
