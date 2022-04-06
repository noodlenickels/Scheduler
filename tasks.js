function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    return dd + '.' + mm + '.' + date.getFullYear() + '\n' + hh + ':' + min + ':' + sec;
}

class Schedule{

    constructor(name, status, type, lasting, start, end) {
        this.name = name;
        this.status = status;
        this.type = type;
        this.lasting = lasting;
        this.start = start;
        this.end = end;
    }

    addRow(id){
        let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
        let row = document.createElement("tr")
        let clmn1 = document.createElement("td")
        let ssylka = '<a href="learn_more.html" class="linking">~</a>'
        clmn1.insertAdjacentHTML(
            'afterbegin',
            ssylka
        );
        clmn1.appendChild(document.createTextNode(this.name))
        let clmn2 = document.createElement("td")
        clmn2.appendChild(document.createTextNode(this.status))
        if (this.status == "Failed")
        {
            clmn2.className += 'failed';
        }
        else
        {
            clmn2.className += 'okay';
        }
        let clmn3 = document.createElement("td")
        clmn3.appendChild(document.createTextNode(this.type))
        let clmn4 = document.createElement("td")
        clmn4.appendChild(document.createTextNode(this.lasting))
        let clmn5 = document.createElement("td")
        let dateChangedStart = formatDate(this.start)
        clmn5.appendChild(document.createTextNode(dateChangedStart))
        let clmn6 = document.createElement("td")
        let dateChangedEnd = formatDate(this.end)
        console.log(dateChangedEnd)
        clmn6.appendChild(document.createTextNode(dateChangedEnd))
        row.appendChild(clmn1)
        row.appendChild(clmn2)
        row.appendChild(clmn3)
        row.appendChild(clmn4)
        row.appendChild(clmn5)
        row.appendChild(clmn6)
        tbody.appendChild(row)
    }
}

let tasks = [];
tasks[0] = new Schedule("Task1", "Failed", "One-time", "23s", new Date(2011, 0, 1, 0, 0, 0, 0), new Date(2015, 1, 14, 0, 0, 0, 0));
tasks[0].addRow('myTable');
tasks[1] = new Schedule("Task2", "OK", "Daily", "1m 05s", new Date(2015, 1, 17, 9, 10, 0, 0), new Date(2015, 10, 54, 20, 0, 0, 0));
tasks[1].addRow('myTable');
tasks[2] = new Schedule("Task3", "Failed", "One-time", "23s", new Date(2011, 0, 1, 0, 0, 0, 0), new Date(2015, 1, 14, 0, 0, 0, 0));
tasks[2].addRow('myTable');
tasks[3] = new Schedule("Task4", "OK", "Daily", "1m 05s", new Date(2015, 1, 17, 9, 10, 0, 0), new Date(2015, 10, 54, 20, 0, 0, 0));
tasks[3].addRow('myTable');
tasks[4] = new Schedule("Task5", "Failed", "One-time", "23s", new Date(2011, 0, 1, 0, 0, 0, 0), new Date(2015, 1, 14, 0, 0, 0, 0));
tasks[4].addRow('myTable');
tasks[5] = new Schedule("Task6", "OK", "Daily", "1m 05s", new Date(2015, 1, 17, 9, 10, 0, 0), new Date(2015, 10, 54, 20, 0, 0, 0));
tasks[5].addRow('myTable');
tasks[6] = new Schedule("Task7", "Failed", "One-time", "23s", new Date(2011, 0, 1, 0, 0, 0, 0), new Date(2015, 1, 14, 0, 0, 0, 0));
tasks[6].addRow('myTable');
tasks[7] = new Schedule("Task8", "OK", "Daily", "1m 05s", new Date(2015, 1, 17, 9, 10, 0, 0), new Date(2015, 10, 54, 20, 0, 0, 0));
tasks[7].addRow('myTable');

/*function addRow(id, name){
    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr")
    let clmn1 = document.createElement("td")
    let ssylka = '<a href="learn_more.html" class="linking">Task 1</a>'
    clmn1.insertAdjacentHTML(
            'afterbegin',
            ssylka
        );
    clmn1.appendChild(document.createTextNode(name.name))
    let clmn2 = document.createElement("td")
    clmn2.appendChild(document.createTextNode(name.status))
    if (name.status == "Failed")
    {
        clmn2.className += 'failed';
    }
    else
    {
        clmn2.className += 'okay';
    }
    let clmn3 = document.createElement("td")
    clmn3.appendChild(document.createTextNode(name.type))
    let clmn4 = document.createElement("td")
    clmn4.appendChild(document.createTextNode(name.lasting))
    let clmn5 = document.createElement("td")
    let dateChangedStart = formatDate(name.start)
    clmn5.appendChild(document.createTextNode(dateChangedStart))
    let clmn6 = document.createElement("td")
    let dateChangedEnd = formatDate(name.end)
    console.log(dateChangedEnd)
    clmn6.appendChild(document.createTextNode(dateChangedEnd))
    row.appendChild(clmn1)
    row.appendChild(clmn2)
    row.appendChild(clmn3)
    row.appendChild(clmn4)
    row.appendChild(clmn5)
    row.appendChild(clmn6)
    tbody.appendChild(row)
}
*/

const task0 = {
    name: "Task 1",
    type: "Daily",
    status: "Failed",
    start: new Date(2011, 0, 1, 0, 0, 0, 0),
    end: new Date(2011, 0, 1, 12, 34, 0, 0),
    lasting: "23s"
}
const task1 = {
    name: "Task 2",
    type: "One-time",
    status: "OK",
    start: new Date(2022, 1, 8, 04, 32, 50, 0),
    end: new Date(2022, 1, 9, 07, 18, 15, 0),
    lasting: "23s"
}
const task2 = {
    name: "Task 3",
    type: "Weekly",
    status: "OK",
    start: new Date(2011, 1, 1, 0, 0, 0, 0),
    end: new Date(2011, 21, 10, 12, 34, 0, 0),
    lasting: "23s"
}
const task3 = {
    name: "Task 4",
    type: "Daily",
    status: "Failed",
    start: new Date(2011, 0, 1, 0, 0, 0, 0),
    end: new Date(2011, 0, 1, 12, 34, 0, 0),
    lasting: "23s"
}
const task4 = {
    name: "Task 5",
    type: "One-time",
    status: "OK",
    start: new Date(2022, 1, 8, 04, 32, 50, 0),
    end: new Date(2022, 1, 9, 07, 18, 15, 0),
    lasting: "23s"
}
const task5 = {
    name: "Task 6",
    type: "Weekly",
    status: "OK",
    start: new Date(2011, 1, 1, 0, 0, 0, 0),
    end: new Date(2011, 21, 10, 12, 34, 0, 0),
    lasting: "23s"
}

// addRow('myTable', task0);
// addRow('myTable', task1);
// addRow('myTable', task2);
// addRow('myTable', task3);
// addRow('myTable', task4);
// addRow('myTable', task5);