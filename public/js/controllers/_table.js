(function _table() {
    const g = require('./_globals');

    function render(fullOrder) {
        var tableDivContent = ``;
        var table = '<table>';
        var totals = _calculateTotals(fullOrder);

        table += _createTableHead();
        table += _createTableBody(fullOrder);
        table += _createTableFoot(totals);
        table += `</table>`;

        tableDivContent += `<h3 class="tableHeader">Optimized Order</h3>`;
        tableDivContent += table;
        tableDivContent += `<p class="tableNote">Optimized by lumber cost. Prices retrieved from <a href="http://www.homedepot.com/">The Home Depot</a>.</p>`;
        g.$tableDiv.append(tableDivContent);
    }

    function _createTableHead() {
        return  `<thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Cost</th>
                    </tr>
                </thead>`;
    }

    function _calculateTotals(fullOrder) {
        var totals = {};
        totals.quant = 0;
        totals.cost = 0;
        totals.scrap = 0;

        fullOrder.forEach(item => {
            totals.quant += item.quant;
            if(typeof item.cost == "number") totals.cost += item.cost;
            if(typeof item.scrap == "number") totals.scrap += item.scrap;
        });

        return totals;
    }

    function _createTableBody(fullOrder) {
        var body = '';
        body += `<tbody>`;
        fullOrder.forEach(item => {
            var cost = (typeof item.cost == "number") ? "$" + item.cost.toFixed(2): 'n/a';
            body += `<tr>`;
            if(item.url) {
                body += `<td><a target="_blank" href="${item.url}">${item.name}</a></td>`;
            }
            else {
                body += `<td>${item.name}</td>`;
            }
            body += `<td>${item.quant}</td>`;
            body += `<td>${cost}</td>`;
            body += `</tr>`;
        });
        body += `</tbody>`;
        return body;
    }

    function _createTableFoot(totals) {
        return  `<tfoot>
                    <tr>
                        <th>Totals:</th>
                        <th>${totals.quant}</th>
                        <th>$${totals.cost.toFixed(2)}</th>
                    </tr>
                </tfoot>`;
    }

    module.exports.render = render;

})();
