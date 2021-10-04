class Character
{
    constructor(name,description){
        this._name = name
        this._description = description
        this._conversation = ""
    }

    get name()
    {
        return this._name;
    }

    set name(value){
        this._name = value
    }

    get description()
    {
        return this._description;
    }
    set description(value){
        this._description = value;
    }

    get conversation(){
        return this._conversation;
    }

    set conversation(value){
        this._conversation = value;
    }

    get backpack() {
        return this._backpack
    }

    set backpack(backpack) {
        this._backpack = backpack
    }

    talk(){
        return this._name + " says: " + this._conversation;
    }

}

class Backpack {
    constructor(size) {
        this._size = size
        this._items = {}
    }
    get size()
    {
        return this._size;
    }
    set size(size) {
        this._size = size;
    }

    get items() {
        return this._items
    }

    addItem(item) {
        if (Object.keys(this._items).length < this._size) {
            this._items[item.name] = item
        }
    }

    removeItem(itemname) {
        if (this._items.hasOwnProperty(itemname)) {
            const removedItem = this._items[itemname];

            delete this._items[itemname]

            return removedItem;
        }
    }
}

class Enemy extends Character {
    constructor(name,weakness){
        super(name,"Enemy")
        this._weakness = weakness; 
    }

    fight(item){
        if(item == this._weakness){
            return true;
            
        } else {
            return false;
        }
    }

    attack(){
        alert(this._name + " attacks you!")
    }

}

class Item {
    constructor(name,description){
        this._name = name;
        this._description = description;

    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get description(){
        return this._description;
    }

    set description(value){
        this._description = value;
    }

}

class Event {
    constructor(name,description){
        this._name = name;
        this._description = description;

    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get description(){
        return this._description;
    }

    set description(value){
        this._description = value;
    }

    triggerEvent() {
        return "You " + this.name + ": " + this.description     
    }

}

class Room {

    get name() {
        return this._name
    }
    get description() {
        return this._description
    }

    set name(value) {
        if (value === "") {
            console.log("Error, name too short")
            return;
        }
        this._name = value;
    }

    describe() {
        return "You are in the " + this.name + ": " + this.description  
        
    }

    constructor(name, description) {

        this._name = name
        this._description = description
        this._linkedRooms = {}
        this._characters = {}
    }

    get linkedRooms()
    {
        return this._linkedRooms
    }

    linkRoom(direction,room)
    {
        this._linkedRooms[direction] = room
    }

    move(direction){
        if(direction in this._linkedRooms ){
            return this._linkedRooms[direction];
        } else {
            document.getElementById('messages').innerHTML = ("There's nothing else in that direction.")
            return this;
        }
    }
    get characters() {
        return this._characters
    }

    addCharacter(character) {
        this._characters[character.name] = character
    }

    interact(charactername) {
        if (this._characters.hasOwnProperty(charactername)) {
            return this._characters[charactername].talk()
        }
    }
}

//locations
const Start = new Room('a quest', "you are Jolly Panflip, a young tavern owner and adventurer from the busy town of Royal Port - one of the most important cities in the World of Elandarr. Our story begins when you heard rumours about an old lady, from a small distant town called Nirren, who could make the best pies anyone has ever eaten. You decided to find out everything you could about it, try it yourself, and maybe even bring the recipe to your own tavern. And so you travel to the Town of Nirren, carrying nothing more than a backpack with spare clothes, torches and some food, a real adventure! Type in begin adventure to start your quest.")
const Nirren = new Room("Town of Nirren", "this is a small humble town located miles away from the southern region's capital. Despite it's unremarkable size and wealth, the town has it's charms - lots of colourful buildings, children playing, people laughing and trading. There isn't much to explore, a few houses, a market on the west, a blacksmith on the east and a tavern ahead north.")
const Tavern = new Room("Tavern", "a quite charming and cozy tavern. It seems that this is where all the townsfolk gather around. The inkeeper looks at you, while he polishes a mug.")
const Market = new Room("Market", "a small open street market, despite it's size it has a lot to offer - booths with fresh fruits, vegetables, herbs, eggs, fish, meat, sausages, preserves and honey. Here you can buy amazing ingredients for the pie, if you have the gold.")
const Blacksmith = new Room("Blacksmith", "a simple blacksmith shop, there are weapons and armours all over the place, but nothing fancy. A friendly man looks at you and says: Hello outsider, I'm Maven, and welcome to my shop.")
const Outskirts = new Room("Outskirts", "as you leave the town, you are ready to explore the outskirts ahead of you. Luckily you have a map of the surrounding areas, there seems to be a mountain west from here, and the woods to the east, both not far. In the south there's a road used by the merchants and travelers, it leads to the capital, and to other places.")
const Mountain = new Room("Mountain", "a prominent mountain - with a beautiful landscape with trees and a lake a it's feet. You can further explore the mountain, or go south to visit the lake.")
const Mines = new Room("Mines", "on your explorations your find a mine, you light your torch and go inside. The mines smell terrible, and as you go deeper you find signs of creatures living in there. Goblins! Three of them! You have two choices - to run, or to fight! *future option: fight the goblins*")
const Woods = new Room("Woods", "the woods are located just a few hours from the town, it's a peaceful and plentyful place. Pretty sure that if you explore it you can find a bunch of wild berries, honey, or even some small animals. *future option: gather ingredients, kill rabit*")
const MerchantRoad = new Room("Merchant road", "a narrow sand road that leads to the capital, it's mostly used by merchants, but it's far from being busy. You can see a few tracks from caravans, horses and people, most of them seem pretty old. You find a signpost, it points the directions for some locations - east for the Stonebe cave, west for the Pantano swamp and south for the old fort along the road")
const Stonebe = new Room("Stonebe cave", "this purple stone cave has a very narrow entrance, not befiting for a human to get in. Little can be seen inside, as the light doesn't reach well inside. A putrid smell of something rotten is coming from the inside. It may be difficult to get in, but surely easier than getting out. You can explore the cave if you feel brave enough.")
const Stonebecave = new Room("Inside the cave", "you crouch and get inside, the foul smell is so distracting that almost makes you forget how dim the visibility is - the torch is almost fading as the air is scarce. In the distance, deeper in the cave, you find a nightmarish creature, some sort of giant lizard with multiple legs, sharp claws, teeths, and enourmous spikes on it's back. This is your last chance, you can still return, or you can fight the creature. *future option: fight, pickup*")
const Swamp = new Room("Pantano swamp", "Description of the swamp.")
const WizardTower = new Room("Wizard tower", "Description of the wizard tower.")
const OldFort = new Room("Old fort", "an abandoned fort, it's currently being used as a hideout for bandits. You can explore inside if you want, but you risk getting caught by the bandits.")
const BanditCamp = new Room("Bandit camp", "you get inside the camp, but you don't see anybody - which is odd. You have an unsettling feeling, as if you're being watched. You were right, as your eyes seize to catch anything, you notice a handful of bandits moving behind the crates, they will surely try to surround you. At this point, your only option is to fight or to surrender. *use return for now, future options: fight or surrender*")

//characters
const Inkeeper = new Character("Inkeeper Jones", "A tall gentle man.")
const inkeeperBp  = new Backpack(4)
inkeeperBp.addItem(new Item("A map of the outskirts.", "A simple map describing the outskirts of the town."))
Inkeeper.backpack = inkeeperBp;
Inkeeper.conversation = "hello outsider and welcome to our humble town. So you're looking for this mysterious old lady who makes the best pies in the Elandarr? I might know who you're looking for, but do me a favour first, would you? I know it's a lot to ask, but we never see adventurers here in these parts. One of my shipments was robbed by bandits on the Merchant's Road, it contained a bottle of Jadegreen Whisky, my favourite! Would you bring it back to me? Here's a map to help you on your journeys."
Tavern.addCharacter(Inkeeper)

const Player = new Character("Jolly Panflip", "An adventurer.")
const playerBp = new Backpack(10)
Player.backpack = playerBp

//Links 
Start.linkRoom("begin adventure", Nirren)
Nirren.linkRoom("go north",Tavern)
Nirren.linkRoom("go west", Market)
Nirren.linkRoom("go east", Blacksmith)
Nirren.linkRoom("go south", Outskirts)
Tavern.linkRoom("go south",Nirren)
Market.linkRoom("go east", Nirren)
Blacksmith.linkRoom("go west", Nirren)
Outskirts.linkRoom("go north", Nirren)
Outskirts.linkRoom("go east", Mountain)
Outskirts.linkRoom("go west", Woods)
Outskirts.linkRoom("go south", MerchantRoad)
Woods.linkRoom("go east", Outskirts)
Mountain.linkRoom("go west", Outskirts)
Mountain.linkRoom("explore", Mines)
Mines.linkRoom("return", Mountain)
MerchantRoad.linkRoom("go north", Outskirts)
MerchantRoad.linkRoom("go west", Stonebe)
MerchantRoad.linkRoom("go east", Swamp)
MerchantRoad.linkRoom("go south", OldFort)
Swamp.linkRoom("go west", MerchantRoad)
Swamp.linkRoom("explore", WizardTower)
WizardTower.linkRoom("return", Swamp)
OldFort.linkRoom("go north", MerchantRoad)
OldFort.linkRoom("explore", BanditCamp)
BanditCamp.linkRoom("return", OldFort)
Stonebe.linkRoom("go east", MerchantRoad)
Stonebe.linkRoom("explore", Stonebecave)
Stonebecave.linkRoom("return", Stonebe)

function displayBackpack () {
    const bpItems = Object.values(Player.backpack._items);
    let htmlItems = '';

    bpItems.forEach(function (item) {
        htmlItems = htmlItems + item._name + " (" + item._description + ")" + "<br>";
    });


    document.getElementById('playerbackpack').innerHTML = htmlItems;
}

let currentRoom = Start

window.onload = () => {
document.getElementById('game').innerHTML = currentRoom.describe()

displayBackpack()

document.addEventListener("keydown",function(event){
    if(event.key === "Enter") {
        command = document.getElementById("command").value;
        document.getElementById('messages').innerHTML = ""
        document.getElementById('command').value = ""
        //direction commands
        const directions = ["go north","go south","go east","go west", "explore", "return", "begin adventure"]
        if(directions.includes (command)){
            currentRoom = currentRoom.move(command);
            document.getElementById('game').innerHTML = currentRoom.describe()
        //add else ifs to add further commands later
        } else if (command == "talk") {
            if (currentRoom.name == "Tavern") {
                document.getElementById('game').innerHTML = currentRoom.interact("Inkeeper Jones");
            }
        } else if (command == "pickup") {
            if (currentRoom.name == "Tavern") {
                const mapOutskirts = currentRoom.characters["Inkeeper Jones"].backpack.removeItem("A map of the outskirts.")
                Player.backpack.addItem(mapOutskirts)

                document.getElementById('game').innerHTML = "Congratulations you just received: " + mapOutskirts.name;

                displayBackpack()
            }
        } else if (command == "learn") {
            
        } else if (command == "buy") {
            
        } else if (command == "sell") {
            
        } else if (command == "attack") {
            
        }
        else {
            document.getElementById('messages').innerHTML = ("Please write down a valid command.")
        }

    }

})

}

