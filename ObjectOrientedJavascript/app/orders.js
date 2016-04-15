(function(){
    //public and private variables.
    function order(){
        //public properites
       this.orderId="";
       this.productId="";
       this.productName="";
       this.cost="";
       this.quantity="";
       var discount=100;
    }
    //static variable
    order.company="acadjs";
    function placeOrder (){
        //instantiate the order class
        var myOrder = new order();
        myOrder.cost=100;
        myOrder.productId="iPhone6s";
        myOrder.productName="iPhone";
        myOrder.quantity=10;
        console.log(myOrder.discount);
        console.log(myOrder);
        
        console.log(order.company);
        
    }
    
    placeOrder();
})();
