$(function() {
    console.log( "document ready" );
  

   devsDataPath.forEach(function(item) {
     try { 
         console.log(item); 

        // first step through the array and make a switch/case for file type: 
        // md => zero-md, 
        // txt => do? (try zero-md)
        // no filetype => error msg
        // html => $().html
        // other => dunno? 

       //  $("#dev-info-section").append("<zero-md src='https://barrycumbie.github.io/una-capstone-devops/lib/team-data/"+item+"'></zero-md>"); 
   
       $("#dev-info-section").append("<li><a href='lib/team-data/"+item+"' target=_blank>"+item+"</a></li>");

     }
     catch(err) {  
         $("#dev-info-section").html("<h4>ERROR: We are sorry but the resource: "+item+" can not be loaded at this time.</h4><p>ERROR: "+err);         
     }
    
 
     

      
   }); 

   

    //  $("#dev-info-section").html("<zero-md src='lib/team-data/mcantrellDevInfo.md'></zero-md>");
    


   //  $.ajax({
   //      url: "https://barrycumbie.github.io/una-capstone-devops/lib/team-data/",
   //      success: function(data){
   //         console.log(data) 
   //         //$(data).find("td > a").each(function(){
   //            // will loop through 
   //           // alert("Found a file: " + $(this).attr("href"));
   //         //});
   //      }
   //    });
     
});

let devsDataPath = [
    'AlyssaBirtProfile.md',	
    'OwensDevProfile.md',	
    'folkertsDevProfile.md',
    'ColemanDevProfile.md',
    'SuryaSingh.md',	
    'jaylensDevProfile.md',
    'EthanDevProfile.md',		
    'TerryDevProfile.md',	
    'mcantrellDevInfo.md',
    'HobieDevProfile.md',		
    'ZimmermanDevProfile.md',	
    'mccormickDevProfile.md',
    'MattPeckDevProfile.md',	 
    'Burden_Dev_Profile.md',
    'garrettdevprofile.md',
    'D_Howell_Dev_Profile.md', 
    'Vonte.md', 
    'jaylensDevProfile.md', 
    'parker.md',
    'rlhoward-devProfile.md'

]; 
