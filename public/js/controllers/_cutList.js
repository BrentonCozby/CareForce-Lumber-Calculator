(function _cutList() {
    const g = require('./_globals')

    var width = window.innerWidth
    var cutHeightMultiplier
    if(width < 568) {cutHeightMultiplier = 4} else
    if(width < 768) {cutHeightMultiplier = 6} else
    if(width < 960) {cutHeightMultiplier = 8} else
    {cutHeightMultiplier = 10}

    function render(lumberOrder) {
        var list = ''
        list += '<h3 class="cutListHeader">Cut List</h3>'
        lumberOrder.forEach(cutData => {
            var angledCuts = (cutData.angledCuts) ? ' - has angled cuts' : ''
            if(cutData.lastBeamScrap) {
                list += `<h6 class="cutDescription">Size: ${cutData.beamName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qty: ${cutData.beamQuant - 1} ${angledCuts}</h6>`
                list += _buildBeam(cutData, false)
                list += `<h6 class="cutDescription">Size: ${cutData.beamName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qty: 1 ${angledCuts}</h6>`
                list += _buildBeam(cutData, true)
            }
            else {
                list += `<h6 class="cutDescription">Size: ${cutData.beamName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qty: ${cutData.beamQuant} ${angledCuts}</h6>`
                list += _buildBeam(cutData, false)
            }
        })
        g.$cutListDiv.append(list)
    }

    function _buildBeam(cutData, lastBeam) {
        var beamLength = (cutData.beamLength / 144) * 100
        var cutsContainerLength
        var quantCuts
        if(lastBeam) {
            cutsContainerLength = cutData.cutQuantOnLastBeam * (cutData.long / cutData.beamLength) * 100
            quantCuts = cutData.cutQuantOnLastBeam
        }
        else {
            cutsContainerLength = cutData.cutQuantPerBeam * (cutData.long / cutData.beamLength) * 100
            quantCuts = cutData.cutQuantPerBeam
        }
        var beam = `<div class="beam" style="width:${beamLength}%">`
        beam += `<div class="cutsContainer" style="width:${cutsContainerLength - 0.8}%;">`
        for(let i = 0; i < quantCuts; i++) {
            beam += _addCut(cutData)
        }
        beam += '</div></div>'
        return beam
    }

    function _addCut(cutData) {
        var cutHeight = cutData.wide * cutHeightMultiplier
        return `<div class="cut" style="height:${cutHeight}px;">${cutData.long}"</div>`
    }

    module.exports.render = render

})()
