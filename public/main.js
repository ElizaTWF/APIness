var update = document.getElementById('update')

update.addEventListener('click', function () {

fetch('quotes', {
 method: 'put',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify({
   'id': update.dataset.id,
   'name': 'Elizabeth',
   'quote': 'Backlog'
 })
})
.then(res => {
  if (res.ok) window.location.reload(true)
})
.catch(err => {
  console.log(err)
})