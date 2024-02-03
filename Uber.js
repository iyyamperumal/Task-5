class UberPrice{
    constructor(RideDistance, Timeinride, Yourfare){
    this.RideDistance= RideDistance;
    this.Basefare=38.10;
    this.Timeinride=Timeinride;
    this.Costpermin=1.90;
    this.Costperkm=11.40;
    this.Bookingfee=20;
    this.Yourfare=Yourfare;
    }
    
    price(){
        this.Yourfare=this.Basefare+(this.Costpermin*this.Timeinride)+(this.Costperkm*this.RideDistance)+this.Bookingfee;
        console.log(`Your Uber travel price is ${this.Yourfare}`);
    }
}
const amount =new UberPrice(10,1);
amount.price();