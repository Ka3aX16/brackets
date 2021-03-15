module.exports = function check(str, bracketsConfig) {
  let arr = [];
 
     for( let i = 0; i < str.length; i++ ){
         for ( let bracket of bracketsConfig ) {
             if( str[i] == bracket[0]  && bracket[0] == bracket[1]
                 && bracket[0] == arr[arr.length - 1] ){
                 arr.pop();
                 break;
             }
             if ( str[i] == bracket[0] ){
                 arr.push( str[i] );
                 break;
             }
             if( str[i] == bracket[1] ){
                 if( bracket[0] != arr.pop() ){
                     return false;
                 }
             }
         }
     }
     if( arr.length ) return false;
     return true;
 }
