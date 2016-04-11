/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    (function(){
        var pdf = window.pdf = window.pdf || {};
        var samResume;
        var hidden;
        
        function partyTime() 
        {
            if (hidden) {
                pdf.show();
            }
            else {
                pdf.hide();
            }
            //  then do this every 3 seconds irritatingly
            setTimeout(function() {
                partyTime();
            }, 3000);
        }
        
        $("document").ready(function() {
            samResume = $("#samResume");
            samResume.hide();
            
            partyTime();
            

            
        });
        
        pdf.show = function(){
            samResume.show();
            hidden = false;
        };
        pdf.hide = function(){
            samResume.hide();
            hidden = true;
        };
    })();
     
