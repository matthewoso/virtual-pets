function View(controller, output) {

	// reference to controller
	this.controller = controller;

	// Draw the pet at index `index` into the jQuery DOM element `container`
	this.drawPetAtIndex = function(index, container) {
		// get the pet info from the controller
		var pet = this.controller.getPetByIndex(index);
		// empty out the existing container so we can rebuild it
		container.empty();
		// append the pet's name as a paragraph tag
		container.append("<p>" + pet.name + "</p>");
		// append the pet's hunger and boredom as a paragraph tag
		container.append(
			"<p>" + "Pet Hunger: " + pet.hunger + "</p><p>" + "Pet Boredom: " + pet.boredom + "</p>"
		);

		// feed pet button
		// create button
		var feedButton = $('<button>Feed</button>');
		// When we click the button, feed the pet and refresh that pet's
		// DOM representation
		feedButton.click(function() {
			this.controller.feedPet(index);
			this.drawPetAtIndex(index, container);
		}.bind(this));
		// BIND `this`, so that we have the correct reference when
		// the event listener is called

		var playButton = $('<button>Play</button>');
		// When we click the button, feed the pet and refresh that pet's
		// DOM representation
		playButton.click(function() {
			this.controller.playWithPet(index);
			this.drawPetAtIndex(index, container);
		}.bind(this));

		//append the button to the container
		container.append(feedButton);
		container.append(playButton);
	};

	// Draw all of the pets (should probably just be called once)
	this.drawAllPets = function() {
		// get all of the pets
		var pets = this.controller.getAllPets();
		// for each pet
		for (var i = 0; i < pets.length; i++) {
			// create a new container
			var container = $('<div></div>');

			// draw that pet
			this.drawPetAtIndex(i, container);

			// append the container to the main div of all pets
			output.append(container);
		}
	}

	this.drawNewPet = function (){
		var newPetButton = $('<button>Add New Pet</button>');
		var nameField = '<span>Name:<input id = "name"></input></span>';
		var speciesField = '<span>Species:<input id = "species"></input></span>';

		newPetButton.click(function() {
			var newName = $('#name').val();
			var newSpecies = $('#species').val();			
			var i = this.controller.addPet(newName, newSpecies);
			var container = $('<div></div>');
			this.drawPetAtIndex(i, container);
			output.append(container);
		}.bind(this));
		output.append(newPetButton, nameField, speciesField);
	};


	this.drawNewPet();

	// Draw all of the pets when we instanciate the view
	this.drawAllPets();

}
