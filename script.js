function search(){
	const mov = document.getElementById('mov').value.toLowerCase();
	var res = document.querySelector('#results');
let n = 1;
var x0 = document.querySelectorAll('#movie');
x0.forEach(x => {
	const search = x.textContent.toLowerCase().indexOf(`${mov}`);
	if (search === -1){
		x.style.display = 'none';
	} else {
	x.style.display = 'flex';
if (mov.length !== 0){
document.getElementById('results').innerHTML = `<h3>Se han encontrado ${n} coincidencias</h3>`;

} else {
	res.style.display = 'none';
	}
}
})
}

const spress = document.querySelector('input');

spress.addEventListener('keyup', (e)=> {
	if (e.keyCode === 13){
search();
	}
})



