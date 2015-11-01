/**
 * 
 */

        function isNumberKey(evt)
        {
         console.log("entre con "+evt);
         var charCode = (evt.which) ? evt.which : event.keyCode
         console.log("charCode "+charCode);
         if (charCode > 47 && charCode < 58)
            return true;
 
         return false;
        }