// Polyfill dla metody repeat.

(function() {
    
if( typeof String.prototype.repeatt === "function" ) return;

String.prototype.repeatt = function(count) {
    
    var newText = "";
    
    for(var i = 0; i < count; i++) {
        
        newText += this.toString();
    }
    
    return newText;

};
 

})();


