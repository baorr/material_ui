(function(){

	let N = 200;
	let p = document.body;
	let genBox = function(){
		let checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.setAttribute('id', +(new Date));
		checkbox.setAttribute('style', 'display: none;');
		return checkbox;
	};

	for(let i = 0;i < N;i++){
		document.body.appendChild(genBox());
	}

})();