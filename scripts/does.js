function init(){
    let template = `<li><a href="#">%name</a></li>`,
        search   = document.querySelector('#search'),
        list     = document.querySelector('#list'),
        names    = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6', 'Task 7'],
        render   = a => list.innerHTML = a.map(e => template.replace('%name', e)).join(`\n`);

    search.addEventListener('input', function(e){
        let value = search.value.toLowerCase();

        render(names.filter(e => e.toLowerCase().startsWith(value)));
    });
    render(names);
}

init();

<input type="text" ng-model="search" id='search'>
<div id="name">
    <ul id='list'>
    </ul>
</div>