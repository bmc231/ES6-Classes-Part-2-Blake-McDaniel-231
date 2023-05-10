class starShip {
  constructor(_name, _captain, _class, _faction, _crewSize, _totalCap){
    this.name = _name;
    this.captain = _captain;
    this.class = _class;
    this.faction = _faction;
    this.crewSize = _crewSize;
    this.totalCap = _totalCap;
  }
  get evacSeats (){
    return this.totalCap - this.crewSize;
  }
  Description () {
    console.log(`I Am the ${this.name} Captained By ${this.captain} Welcome aboard.`);
  }
}

let EnterpriseD = new starShip('Enterprise-D','Picard', 'Galaxy', 'Federation', 1013, 16013 );
let Serenity = new starShip('Serenity','Reynolds', 'Firefly', 'Independent/Brown coats', 9, 18);
let Millenniumfalcon = new starShip('Millennium-falcon','Solo', 'YT-1300 light freighter', 'smugglers/Rebel Alliance', 4, 34);

console.log(Serenity);
Serenity.Description();
