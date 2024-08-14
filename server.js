//// product class
class product {
    constructor(name , price ){
       this.name=name;
       this.price=price;
    }
}

/// item class
class item extends product {
     constructor(name , price, quantity,totalPrice ){
        super(name,price)
        this.quantity=quantity
        this.totalPrice()
       
       }
      
       totalPrice(){
        this.totalPrice=this.price*this.quantity
        return this.totalPrice

       }
}
/// shopping cart class 
class shoppingCart  {
    constructor(){
        this.cart =[]

    }
    totalItems(){
     console.log(this.cart.length); 
    }

    addItem(item){
       
    if (this.cart.includes(item) === false)
        {this.cart.push(item)
        }
        

    }
    removeItem(name){
      this.cart=[...this.cart].filter((e)=>e.name!==name)
    }
    showShoppingCart (){
        console.log(this.cart);
    }
}
//item instances
const item1= new item ("pull" , 99,2)
const item2= new item ("tshirt" ,50,2)
const item3= new item ("jeans" , 140,1)
const item4= new item ("shoes" , 130,3)
//// cart instance
const cart = new shoppingCart()
/// test cart methods
cart.addItem(item1)
cart.addItem(item2)
cart.addItem(item3)

cart.showShoppingCart()
cart.removeItem("pull")
cart.showShoppingCart()
cart.totalItems()
