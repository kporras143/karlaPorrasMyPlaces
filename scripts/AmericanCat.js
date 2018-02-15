var AmericanCat = (
	function () {

		function AmericanCat(segundoColor) {
			this.segundoColor = segundoColor;
		}
        
        //Inheritance
		AmericanCat.prototype = Object.create(CatPrototype.prototype);
		AmericanCat.prototype.constructor = CatPrototype;


		return AmericanCat;
	}
)();