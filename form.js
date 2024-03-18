var storage = new function () {

	var dataContainer = {}; // Container für die gespeicherten Daten

	// Funktion zum Umwandeln der Daten in eine Zeichenkette
	function linearize () {
		var string = "", name, value;
		for (name in dataContainer) {
			value = encodeURIComponent(dataContainer[name]);
			name = encodeURIComponent(name);
			string += name + "=" + value + "&";
		}
		if (string != "") {
			string = string.substring(0, string.length - 1);
		}
		return string;
	}

	// Funktion zum Lesen der Daten aus dem Fensternamen
	function read () {
		if (window.name == '' || window.name.indexOf("=") == -1) {
			return;
		}
		var pairs = window.name.split("&");
		var pair, name, value;
		for (var i = 0; i < pairs.length; i++) {
			if (pairs[i] == "") {
				continue;
			}
			pair = pairs[i].split("=");
			name = decodeURIComponent(pair[0]);
			value = decodeURIComponent(pair[1]);
			dataContainer[name] = value;
		}
	}

	// Funktion zum Schreiben der Daten in den Fensternamen
	function write () {
		window.name = linearize();
	}

	// Setzen einer Datenpaars
	this.set = function (name, value) {
		dataContainer[name] = value;
		write(); // Aktualisieren des Fensternamens nach dem Hinzufügen einer neuen Daten
	};

	// Abrufen des Werts anhand des Namens
	this.get = function (name) {
		var returnValue = dataContainer[name];
		return returnValue;
	};

	// Abrufen aller gespeicherten Daten
	this.getAll = function () {
		return dataContainer;
	};

	// Entfernen eines Datenpaars anhand des Namens
	this.remove = function (name) {
		if (typeof(dataContainer[name]) != undefined) {
			delete dataContainer[name];
		}
		write(); // Aktualisieren des Fensternamens nach dem Entfernen einer Daten
	};

	// Entfernen aller gespeicherten Daten
	this.removeAll = function () {
		dataContainer = {};
		write(); // Aktualisieren des Fensternamens nach dem Entfernen aller Daten
	};

	read(); // Beim Laden der Seite werden die Daten aus dem Fensternamen gelesen
};

