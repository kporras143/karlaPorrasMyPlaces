var EuropeanCat = (
	function () {

		function EuropeanCat(cantidadRayas) {
			this.cantidadRayas = cantidadRayas;
        } 
        
        //Inheritance
		EuropeanCat.prototype = Object.create(CatPrototype.prototype);
		EuropeanCat.prototype.constructor = CatPrototype;


		return EuropeanCat;
	}
)();
