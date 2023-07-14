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

    let csv = "label\\series"

    for(const[key, serie] of Object.entries(series)) {
        csv +=","+serie.label
    }

    csv +="\n"

    for (let i = 0; i < series[0].data.length; i++) {
        csv += labels[i]
        for (let j = 0; j < series.length; j++) {
            let value = series[j].data[i] ?? '';

            csv += "," + value
        }
        csv += "\n"
    }

    let fileName = 'chart-export.csv'
    if(card.uriKey != undefined && card.uriKey != false) {
        fileName = card.uriKey + '.csv'
    } else {
        if(card.title != undefined && card.title != false) {
            fileName = toDashCase(card.title) + '.csv'
        }
    }
    /*
    let url = window.URL.createObjectURL(new Blob([csv]))
    let link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
    return true
    */
    downloadAsFile({
        data: csv,
        filename: fileName
    })
}

module.exports = exportData;
