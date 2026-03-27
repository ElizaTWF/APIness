var update = document.getElementById('update')

update.addEventListener('click', function () {

fetch('quotes', {
 method: 'put',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify({
   'name': 'Elizabeth',
   'quote': 'Backlog'
 })
})