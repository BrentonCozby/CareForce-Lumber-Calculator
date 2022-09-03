import { lumber as defaultLumber } from '../models/_lumber'
import g from './_globals'
const schematics = require('../models/_schematics')

// For each lumber length, calculate the quantity of lumber needed to make
// the required quantity of cuts, and save the scrap per beam and the scrap
// of the last beam

export function calcLumberOrder(selectedSchematic, inputtedQuant) {
    for(const group in schematics.list) {
        if(schematics.list.hasOwnProperty(group)) {
            for(const schem in schematics.list[group]) {
                if(schematics.list[group].hasOwnProperty(schem) && selectedSchematic == schem) {
                    return _chooseCheapestCuts(_createArrayOfCutsData(schematics.list[group][schem], inputtedQuant))
                }
            }
        }
    }
}

function _chooseCheapestCuts(arrayOfcutsData) {
    const cheapestOrder = []
    const list = arrayOfcutsData
    list.push({ cutName: 'empty object' })
    list.reduce(function(prevCut, currCut) {
        if (currCut.cutName === prevCut.cutName) {
            return (currCut.costTotal < prevCut.costTotal) ? currCut : prevCut
        } else {
            cheapestOrder.push(prevCut)
            return currCut
        }
    })
    return cheapestOrder
}

function _createArrayOfCutsData(schematic, inputQuant) {
    const lumber = localStorage.getItem('lumber')
        ? JSON.parse(localStorage.getItem('lumber'))
        : defaultLumber

    const arrayOfcutData = []
    schematic.cuts.forEach(function(cut) {
        lumber.forEach(function(beam) {
            if (beam.thick === cut.thick && beam.wide === cut.wide) {
                if(Math.floor(beam.long / cut.long) < 1) {return false}
                else arrayOfcutData.push(_calcQuantsPerLumberSize(beam, cut, inputQuant))
            }
        })
    })
    return arrayOfcutData
}

function _calcQuantsPerLumberSize(beamObj, cutObj, inputtedQuant) {
    const cutData = {}

    cutData.cutName = `${cutObj.thick}" x ${cutObj.wide}" x ${cutObj.long}"`
    cutData.beamName = beamObj.name
    cutData.url = beamObj.url
    cutData.thick = cutObj.thick
    cutData.wide = cutObj.wide
    cutData.long = cutObj.long
    cutData.angledCuts = (cutObj.angle_left || cutObj.angle_right) ? true : false
    cutData.beamLength = beamObj.long
    cutData.cutQuantTotal = cutObj.quant * inputtedQuant
    cutData.cutQuantPerBeam = Math.floor(beamObj.long / cutObj.long)
    cutData.cutQuantOnLastBeam = cutData.cutQuantTotal % cutData.cutQuantPerBeam || cutData.cutQuantPerBeam
    cutData.scrapPerBeam = beamObj.long % cutObj.long
    cutData.beamQuant = Math.ceil(cutData.cutQuantTotal / cutData.cutQuantPerBeam)
    cutData.costTotal = Math.ceil10(cutData.beamQuant * beamObj.price, -2)

    if(cutData.cutQuantPerBeam === cutData.cutQuantOnLastBeam) {
        // don't add lastBeam, but set the scrapTotal
        cutData.scrapTotal = cutData.scrapPerBeam * (cutData.beamQuant)
    }
    else if(cutData.cutQuantPerBeam >= cutData.cutQuantTotal) {
        cutData.cutQuantPerBeam = cutData.cutQuantTotal
        cutData.scrapPerBeam = beamObj.long - (cutObj.long * cutData.cutQuantTotal)
        cutData.scrapTotal = cutData.scrapPerBeam
    }
    else {
        cutData.lastBeamScrap = beamObj.long - (cutData.cutQuantOnLastBeam * cutObj.long)
        cutData.scrapTotal = cutData.scrapPerBeam * (cutData.beamQuant - 1) + cutData.lastBeamScrap
    }
    return cutData
}

function _sortDataByBeamName(lumberOrderCopy) {
    const sortedLumberOrder = []
    const beamNames = lumberOrderCopy.map(beam => beam.beamName).sort()
    for(let i = 0, beamNamesLength = beamNames.length; i < beamNamesLength; i++) {
        for(let j = 0, lumberOrderLength = lumberOrderCopy.length; j < lumberOrderLength; j++) {
            if(beamNames[i] === lumberOrderCopy[j].beamName) {
                sortedLumberOrder.push(lumberOrderCopy.splice(j, 1)[0])
                break
            }
        }
    }
    return sortedLumberOrder
}

function _reduceOrderByBeam(sortedLumberOrder) {
    const orderByBeam = []
    sortedLumberOrder.push({ beamName: 'empty' })
    sortedLumberOrder.reduce((prevCut, currCut) => {
        if (currCut.beamName == prevCut.beamName || currCut.beamName == prevCut.name) {
            return {
                name: currCut.beamName,
                url: currCut.url,
                quant: currCut.beamQuant + ((prevCut.hasOwnProperty('beamQuant')) ? prevCut.beamQuant : prevCut.quant),
                scrap: currCut.scrapTotal + ((prevCut.hasOwnProperty('scrapTotal')) ? prevCut.scrapTotal : prevCut.scrap),
                cost: currCut.costTotal + ((prevCut.hasOwnProperty('costTotal')) ? prevCut.costTotal : prevCut.cost),
            }
        } else {
            orderByBeam.push({
                name: ((prevCut.hasOwnProperty('name')) ? prevCut.name : prevCut.beamName),
                url: prevCut.url,
                quant: ((prevCut.hasOwnProperty('quant')) ? prevCut.quant : prevCut.beamQuant),
                scrap: ((prevCut.hasOwnProperty('scrap')) ? prevCut.scrap : prevCut.scrapTotal),
                cost: ((prevCut.hasOwnProperty('cost')) ? prevCut.cost : prevCut.costTotal),
            })
            return currCut
        }
    })
    return orderByBeam
}

function _addSpecialParts(orderByBeam) {
    const orderWithSpecialItems = orderByBeam
    const selected = g.$select.val()
    const quant = g.$quant.val()
    let schematic

    for(const group in schematics.list) {
        if(schematics.list.hasOwnProperty(group)) {
            for(const schem in schematics.list[group]) {
                if(schematics.list[group].hasOwnProperty(schem) && selected == schem) {
                    schematic = schematics.list[group][schem]
                    break
                }
            }
        }
    }

    if (schematic.specials) {
        schematic.specials.forEach(function(item) {
            const calculatedItem = {}
            for(const key in item) {
                if(typeof item[key] == 'number') {
                    calculatedItem[key] = Math.ceil10(item[key] * quant, -2)
                }
                else {
                    calculatedItem[key] = item[key]
                }
            }
            orderWithSpecialItems.push(calculatedItem)
        })
    }
    return orderWithSpecialItems
}

export function calcFullOrder(lumberOrderCopy) {
    return _addSpecialParts(_reduceOrderByBeam(_sortDataByBeamName(lumberOrderCopy)))
}
