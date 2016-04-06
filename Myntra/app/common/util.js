(
    function(utilities){
        utilities.alphabetsOnly=function(evt){
            if((evt.keyCode>=65 && evt.keyCode<=90)||
                (evt.keyCode>=97  && evt.keyCode<=122)||
              (evt.keyCode==32|| evt.keyCode==46)){
                return true;
            }
            else{
                evt.preventDefault();
            }
        };
        
        utilities.numbersOnly = function(evt){
            if(evt.keyCode>=48 && evt.keyCode<=57){
                return true;
            }
            else{
                evt.preventDefault();
            }
        };
       utilities.formatPhone=function(value){
        if(value.length==10){
            return value.substring(0,3)+"-"
                +value.substring(3,6)+"-"+value.substring(6,10);
        }
       else 
           return value;
    
};
    }
)(window.utilites={});