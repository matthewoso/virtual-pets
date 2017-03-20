function Model() {

	// Add a new pet, given its name and species (probably as strings?)
	this.addPet = function(name, species) {
		var p = new Pet(name, species); // create a new pet
		this.pets.push(p); // store it in the array
		return (this.pets.length)-1;
	};

	this.savePets = function() {
		console.log(this.pets); 
		var petStore = JSON.stringify(this.pets);
		console.log(petStore);
		localStorage.setItem("petStore", petStore);
	};

	// Return a COPY of the pets array
	// so that we can't mess up our pristine model array
	// and lose any pets, (because that would be sad :( )
	this.getAllPets = function() {
		var petsBackFromStore = localStorage.getItem("petStore"); 
		petsBackFromStore = (petsBackFromStore) ? JSON.parse(petsBackFromStore) : [];
		console.log(petsBackFromStore);
		return petsBackFromStore;
	};

	// Right now we are storing the pets in this array called pets
	this.pets = this.getAllPets();
	console.log(this.pets);

	
	// return the pet in the array at index `index`
	this.getPetByIndex = function(index) {
		return this.pets[index];
	};
}
