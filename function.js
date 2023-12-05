// ******ASSINGMENT FOR WEEK 8****
// 



// creating class for car 
class Car {
    constructor(make, model) {
        // takes a parameter of make and model to house the vehicle users input and push to the array 
        this.make = make;
        this.model = model;}
    
    
    describe() {
   
         return `${this.make}  ${this.model}`;}
    }
    // end of class Car curley'self-note
    


// ********************creating 2nd class******************

    class Collection {
        constructor(name) {
        //    only needs one parameter
           this.name = name;
        //    creating an array below to push the vehicle selection user's create to. as it is empty now.
           this.vehicles = [];}
        //    end of class Collection curley braces
    
    
    addVehicle(auto) {

        if (auto instanceof Car) {
            this.vehicles.push(auto);}
            // validating user input for menu options
        else{
            throw new Error(`You can only add vehicles. 
                argument is not a vehicle: ${auto}`);}
    }
    
    
    describe() {
    return ` Collection: ${this.name} has ${this.vehicles.length} vehicles.`;}
    
    }
    // end of Collection class curley braces



// using class for menu option
    
    class Menu { 
        constructor() {
           // inside the constructor of the class I placed another array for user collection data to be pushed to
           this.collections = [];
           // start with the value null as that way it references one at a time. it targets the selection the user had made to follow the switch loops
           this.selectedCollection = null;} 

    
    // inside the curley braces of the Menu class is the start method it launches the app
    start() { 
         let selection = this.showMainMenuOptions(); 
             while (selection != 0) {
                switch(selection) {
                    case '1' :
                        // placing method inside a switch and will build out method below switch loop
                        this.createCollection();
                    break;

                    case '2' :
                        this.viewCollection();
                    break;

                    case '3' :
                       this.deleteCollection();
                    break; 

                    case '4' :
                        this.displayCollections();
                    break;
                default:
                        selection = 0;}
    
    selection = this.showMainMenuOptions();}
    
    alert('Hasta Luego!! Thanks for stopping by and having a cold one in the shop!');}
    // end of start method curley brace
    


    // showMainMenuOptions is a prebuilt method btw one is pointing this out
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create a new dream car collection!
            2) view a collection
            3) delete a collection
            4) display all collections
           `);}
    // end of showMainMenuOptions curley

    
    showCollectionMenuOptions(collectionInfo) {
        return prompt(`
            0) back
            1) add a new vehicle
            2) donate a vehicle
        $$$$$ TAX WRITE OFF $$$$$$$$$$$$$$
             ${collectionInfo}`);}
// end of showCollectionsMenuOptions curley

    
    
    displayCollections() {
        let collectionString = '';
            for (let i = 0; i < this.collections.length; i++) {
            collectionString += i+ ') ' + this.collections[i].name + '\n';}
    
        alert(collectionString);}
    // end of displayCollections curley
    
    // building response for this method above in menu class
    createCollection() {
        let name = prompt('What do you want to name your collection? ');
        // below this is pushing a new collection to the array above, using the parameter in its parent class
        this.collections.push(new Collection(name));}
    // end of createCollection method curley
    
    
    viewCollection() {
        let index = prompt("Enter the number to the left of the collection you want to view?");
        // this displays the name of the collection based on the index of the array the user entered
            if (index > -1 && index < this.collections.length) {
                this.selectedCollection = this.collections[index];
                let description = 'Collection Name: ' + this.selectedCollection.name + '\n';
                description += ' ' + this.selectedCollection.describe() + '\n ';
    // 
                for (let i = 0; i < this.selectedCollection.vehicles.length; i++) {
                    description += i + ') ' + this.selectedCollection.vehicles[i].describe() + '\n';}
    
                let selection1 = this.showCollectionMenuOptions(description);

                switch (selection1) {
                    case '1' :
                        this.createVehicle();
                    break;

                    case '2' :
                        this.deleteVehicle();}
    // this is all in the if statment brackets above
    
    } 
    }
    // end of viewCollection curley brace
    
    deleteCollection() {
        let index = prompt('Whats the number of the collection you want to delete? ');
            // below is saying if it is a number in the index of the array then remove it from the array
            if (index > -1 && index < this.collections.length) {
            // telling to remove the specific collection from the array above
            this.collections.splice(index, 1);}
    
    }
    // end of deleteCollection curley brace
    
    
    createVehicle() {
        let make = prompt('Enter the MAKE of the vehicle you wish to add to your collection ');
        let model = prompt('Enter the MODEL of the vehicle you wish to add to your collection ');
    
        this.selectedCollection.addVehicle(new Car(make, model));
    }
    
    deleteVehicle() {
    let index = prompt('Enter the number of the vehicle you wish to donate. dont forget to write it off on your taxes!');
    // 
    if (index > -1 && index < this.selectedCollection.vehicles.length) { 
        // below we are saying take the collection the user selected and remove the itme from the array above inputed by the user
        this.selectedCollection.vehicles.splice(index, 1);
    }
    }
    }
    let menu = new Menu();
    menu.start();