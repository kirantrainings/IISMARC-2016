(
    function () {
        this.gadgets = [{
                company: "Apple",
                model: "6s",
                price: 65000,
                imageUrl: "images/2.jpg",
                siteUrl:"http://www.apple.com/in/iphone/"
            },
            {
                company: "Samsung",
                model: "Edge7",
                price: 5000,
                imageUrl: "images/images.jpg",
                siteUrl:"http://www.ebay.in/itm/252325436362?aff_source=Sok-Goog"
                
            }];
     
        function createTableRow(gadget){
            
            //this statement create the row
            var row = document.createElement("tr");
            
            //this statement creates the column
            var columnForComapny= document.createElement("td");
            var columnForModel =document.createElement("td");
            var columnForPrice= document.createElement("td");
            var columnForImage = document.createElement("td");
            
            var createImage = document.createElement("img");
            createImage.src=gadget.imageUrl;
            createImage.style="width:100px;height:100px"
            
            var createAnchor = document.createElement("a");
            createAnchor.href=gadget.siteUrl;
            createAnchor.appendChild(createImage);
           
            columnForImage.appendChild(createAnchor);
            
            columnForComapny.innerHTML=gadget.company;
            columnForModel.innerHTML=gadget.model;
            columnForPrice.innerHTML=gadget.price;
            
            console.log(createAnchor);
            //attach the td to tr
            row.appendChild(columnForComapny);
            row.appendChild(columnForModel);
            row.appendChild(columnForPrice);
            row.appendChild(columnForImage);
            
            return row;
        }
        
        function displayGadgets(){
            //fetch the reference to the tableSales
            var gadgetTable = document.getElementById('tblSales');
            
            //Create rows that are equal to the number of gadgets
            for(var i=0;i<gadgets.length;i++){
                
               var rowCreated= createTableRow(gadgets[i]);
                //attach the created row to the table
                gadgetTable.appendChild(rowCreated);
            }
            attachEvents();
        }
       
        function attachEvents(){
            var tr = document.getElementsByTagName("tr");
            for(var i=0;i<tr.length;i++){
                tr[i].addEventListener('mouseover',function(){
                   this.style="background-color:lightgrey";
                })
                 tr[i].addEventListener('mouseleave',function(){
                    this.style="background-color:''";
                })
            }
        }
        displayGadgets();
        
      
        
    }
)();
