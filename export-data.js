const downloadAsFile = require('download-as-file')

function exportData(card) {

    let series = []

    let labels = {}

    //if Card
    if(card.series != undefined) {
        series = card.series
        labels = card.options.xaxis.categories
    }

    //if Chart
    if(card.data != undefined) {
        series = card.data.datasets
        labels = card.data.labels
    }

    if(series.length == false) return false
    if(labels.length == false) return false
    if(series[0].data == undefined) return false

    let toDashCase = function(str) {
        return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
            return '-' + chr}).substring(1);
    }

    let toCSV = function(array) {
        return array.map(row => row.join(',')).join('\n')
    }

    let csvArray = []

    csvArray[0] = []

    //top left
    csvArray[0][0] = "label\\series";

    //fill left column
    for (let i = 0; i < labels.length; i++) {
        csvArray[i+1] = [] //init
        csvArray[i+1][0] = labels[i];
    }

    //each serie
    for(const[serieKey, serie] of Object.entries(series)) {
        csvArray[0].push(serie.label); //add title to head

        let i = 0 //if the data is an Object and not Array
        for(const[dataKey, value] of Object.entries(serie.data)) {
            csvArray[i+1].push(value)
            i++
        }
    }

    let csv = toCSV(csvArray)

    let fileName = 'chart-export.csv'
    if(card.uriKey != undefined && card.uriKey != false) {
        fileName = card.uriKey + '.csv'
    } else {
        if(card.title != undefined && card.title != false) {
            fileName = toDashCase(card.title) + '.csv'
        }
    }

    downloadAsFile({
        data: csv,
        filename: fileName
    })
}

module.exports = exportData;
