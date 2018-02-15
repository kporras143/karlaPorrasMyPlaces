var CatPrototype = (
	function () {

		function CatPrototype(colorPelo, colorOjos, edad) {
			this.colorPelo = colorPelo;
			this.colorOjos = colorOjos;
			this.edad = edad;
		}

		//Class Methods
		CatPrototype.prototype.clonarAmericanos = function (prototipo, segundoColor) {
			var faraon = new AmericanCat(segundoColor);
			this.colorPelo = prototipo.colorPelo;
			this.colorOjos = prototipo.colorOjos;
			this.edad = prototipo.edad;
			alert('Me llamo Faraón, soy color ' + this.colorPelo + ', tengo ojitos color ' + this.colorOjos 
		+ ', tengo ' + this.edad + ' años & mi segundo color es ' + faraon.segundoColor);
		}

		CatPrototype.prototype.clonarEuropeos = function (prototipo, cantidadRayas) {
			var batido = new EuropeanCat(cantidadRayas);
			batido.colorPelo = prototipo.colorPelo;
			batido.colorOjos = prototipo.colorOjos;
			batido.edad = prototipo.edad;
			alert('Me llamo Batido, soy color ' + this.colorPelo + ', tengo ojitos color ' + this.colorOjos 
		+ ', tengo ' + this.edad + ' años & tengo ' + batido.cantidadRayas + ' rayas');
		}

		return CatPrototype;
	}
)();