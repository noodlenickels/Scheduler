const globalVars = {
    ITEMS_PER_PAGE: 6,
    state: {type: null, status: null},
    startPoint: 0,
    types: [],
    statuses: [],
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
    let urlForName = 'http://localhost:3002/jobs';
    // let urlOtherData = 'http://localhost:3002/jobs';
    let response = await fetch(urlForName);
    globalVars.commits = await response.json();
    globalVars.fillPage(globalVars.commits, 0, globalVars.state, 'myTable');

    // let url1 = 'http://127.0.0.1:3000/jobs';
    // let response1 = await fetch(url1);
    // let name_type = await response1.json();
    //
    // let url2 = 'http://127.0.0.1:3000/schedules';
    // let response2 = await fetch(url2);
    // let equivalents = await response2.json();
    //
    // let url3 = 'http://127.0.0.1:3000/schedule_types';
    // let response3 = await fetch(url3);
    // let types = await response3.json();
    //
    // let url4 = 'http://127.0.0.1:3000/execution_statuses';
    // let response4 = await fetch(url4);
    // let statuses = await response4.json();
    //
    // for (let i = 0; i<name_type.length; i++) {
    //     let mas = {
    //         name: name_type[i].jobName;
    //         status: statuses[i].statusName;
    //         type: types[i].scheduleTypeName;
    //         start: 15;
    //         end: 25;
    //         lasting: 10;
    //     }
    // }
    // globalVars.fillPage(mas, 0, globalVars.state, 'myTable');

    function pagination(event) {
        let number = event.target.getAttribute('data-num');
        let blues = document.getElementsByClassName('w3-blue')[0];
        blues.classList.remove('w3-blue');
        blues = document.querySelectorAll(`div[data-num="${number}"]`)[1*(number==1)];
        blues.classList.add('w3-blue');

        globalVars.startPoint = globalVars.ITEMS_PER_PAGE*(number-1);
        console.log(globalVars.state);
        globalVars.fillPage(globalVars.commits, globalVars.startPoint, globalVars.state, 'myTable');//здесь была ошибка
    }
    let parent = document.querySelector('#select');
    parent.addEventListener('click', pagination);
    let div1 = document.createElement('div');
    //div1.innerHTML = `<i class="fa-solid fa-angles-left"></i>`
    div1.innerHTML = `&laquo;`;
    div1.classList.add('w3-button');
    div1.setAttribute('data-num', `1`);
    parent.appendChild(div1);
    let val = Math.ceil(globalVars.commits.length/globalVars.ITEMS_PER_PAGE)
    for (let i=0; i < val; i++)
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
    let div2 = document.createElement('div');
    //div2.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
    div2.innerHTML = `&raquo;`;
    div2.classList.add('w3-button');
    div2.setAttribute('data-num', `${val}`);
    parent.appendChild(div2);
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

console.log(document.getElementById('myTable'));