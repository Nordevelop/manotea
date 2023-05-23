function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}
function showOk(){
    alert("Aceptado las notificaciónes ");
}
function showCancel(){
    alert("Cancelaste las notificaciones, joder ");

}
ask("Santi Manotea quiere enviarte notificaciones" ,showOk, showCancel);
let dinero =prompt("Que monto desea donar para salvar a Independiente de la B (de vuelta) " , 100);//seguir este patron
if(dinero >=10000){
    //10000 pesos
    bienvenido();
   function bienvenido(){
      alert("Gracias por apoyar a IndeBendiente te  ganaste una entrada para el Clasico Independiente VS El Porvenir ");
    }
}else{
    bienvenido();
    function bienvenido(){
        alert("Pero que mishiaduro y pecho frio!!!!");
    }
}

console.log('console de control');
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
//Sidebar
allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})



const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
//Button Search
searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})


const switchMode = document.getElementById('switch-mode');
//Switch mode light/dark
switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
