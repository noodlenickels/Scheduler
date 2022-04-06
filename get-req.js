const globalVars = {
    ITEMS_PER_PAGE: 6,
    state: {"type": null, status: null},
    startPoint: 0,
    commits: [],
    fillPage(array1, start, filter, tableName) {
        $('tbody td').remove();

        for(let i = start; i < start+globalVars.ITEMS_PER_PAGE && i < array1.length; i++)
        {
            if (filter.type == null && filter.status == null) {
                addRow(tableName, array1[i])
            }
            else if (filter.type == array1[i].type && filter.status == array1[i].status){
                 addRow(tableName, array1[i]);
            }
            else if (filter.type == null && filter.status == array1[i].status){
                addRow(tableName, array1[i]);
            }
            else if (filter.type == array1[i].type && filter.status == null){
                addRow(tableName, array1[i]);
            }
        }
    },
    fillPageDimon($selectsContainer) {
        const selectMap = {};

        $selectsContainer.find('select').each(function() {
            const $this = $(this);

            selectMap[$this.attr('name')] = $this.val();
        });

        this.state = selectMap;
        this.fillPage(this.commits, this.startPoint, this.state, 'myTable');
    }
};

async function getFetch(){
    let url = 'http://localhost:3000/info';
    let response = await fetch(url);
    globalVars.commits = await response.json();
    globalVars.fillPage(globalVars.commits, 0, globalVars.state, 'myTable');
    //globalVars.fillPage(globalVars.commits, 0, globalVars.state, 'historyTable');

    function pagination(event) {
        let number = event.target.getAttribute('data-num');
        let blues = document.getElementsByClassName('w3-blue')[0];
        blues.classList.remove('w3-blue');
        blues = document.querySelector(`div[data-num="${number}"]`);
        blues.classList.add('w3-blue');

        globalVars.startPoint = globalVars.ITEMS_PER_PAGE*(number-1);
        console.log(globalVars.state);
        globalVars.fillPage(globalVars.commits, globalVars.startPoint, globalVars.state, 'myTable'); //здесь была ошибка
    }
    let parent = document.querySelector('#select');
    parent.addEventListener('click', pagination);
    for (let i=0; i < Math.ceil(globalVars.commits.length/globalVars.ITEMS_PER_PAGE); i++)
    {
        let div = document.createElement('div');
        let txt = document.createTextNode(`${i+1}`);
        div.classList.add('w3-button');
        div.setAttribute('data-num', `${i+1}`);
        if (i == 0)
        {
            div.classList.add('w3-blue');
        }
        div.appendChild(txt);
        parent.appendChild(div);
    }
}
getFetch();

function addRow(id, elem){
    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr")
    let clmn1 = document.createElement("td")
    let ssylka = document.createElement("a")
    ssylka.setAttribute('href', 'learn_more.html')
    ssylka.appendChild(document.createTextNode(elem.name))
    ssylka.classList.add('linking');
    clmn1.appendChild(ssylka)
    let clmn2 = document.createElement("td")
    clmn2.appendChild(document.createTextNode(elem.status))
    if (elem.status == "Failed")
    {
        clmn2.className += 'failed';
    }
    else
    {
        clmn2.className += 'okay';
    }
    let clmn3 = document.createElement("td")
    clmn3.appendChild(document.createTextNode(elem.type))
    let clmn4 = document.createElement("td")
    clmn4.appendChild(document.createTextNode(elem.lasting))
    let clmn5 = document.createElement("td")
    clmn5.appendChild(document.createTextNode(elem.start))
    let clmn6 = document.createElement("td")
    clmn6.appendChild(document.createTextNode(elem.end))
    row.appendChild(clmn1)
    row.appendChild(clmn2)
    row.appendChild(clmn3)
    row.appendChild(clmn4)
    row.appendChild(clmn5)
    row.appendChild(clmn6)
    tbody.appendChild(row)
}