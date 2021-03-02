let requestURL = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";

const MCC = function (tp, tn, fp, fn) {
    return (tp * tn - fp * fn) / Math.sqrt((tp + fp) * (tp + fn) * (tn + fp) * (tn + fn))
}
const getJSON = function () {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let tbodySquirrel = document.getElementById('tbodySquirrel');
            let id = 1;
            data.forEach(element => {
                let eventos = element.events.toString();
                let tr = document.createElement('tr');
                if (element.squirrel == true) {
                    tr.style.backgroundColor = 'LightGreen';
                }
                tbodySquirrel.appendChild(tr);
                tr.appendChild(document.createElement('td')).textContent = id;
                tr.appendChild(document.createElement('td')).textContent = eventos;
                tr.appendChild(document.createElement('td')).textContent = element.squirrel;
                id++;
            });

        })
}
getJSON();