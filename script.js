
$(document).ready(function(){

	/*
	AJAX permet d'améliorer l'interactivité et la réactivité
	 d'applications web sans nécessiter le schéma traditionnel Client/Serveur : 
	 L'interface est affichée dans une page web. Des informations fournies par 
	 l'utilisateur sont collectées (par un formulaire, des liens, etc.)
	*/
  
    $.ajax({url: "all_compte.php", success: function(result){
    	result = JSON.parse(result);
      //console.log(result);
      var selOpts = "";

      for(var k in result) {
		   //console.log(k, result[k]);
		   var id = result[k].idcompte;
                var val = result[k].numero_compte;
                selOpts += "<option value='"+id+"'>"+val+"</option>";
		}

            
            $('#sel1').append(selOpts);
    }});
  
});



function menu(){
    var val_selection = $('#sel1 option:selected').val(); // recuperation de la valeur selectionnee.
    console.log(val_selection);
    $("#submit_menu").click(function(){ // Lorsqu'on clique sur le button ok du popup

      var option = $('#option_menu').val(); 
      option = parseInt(option);
      if(option==1){
        afficherSolde(val_selection);
      }else if(option==2){
        transferer(val_selection);
      }else if(option==4){
        option_story(val_selection);
      }
  });
  
  }

  function afficherSolde(val){

    console.log("la valeur est "+val);
    

    $.ajax({url: "detail_compte.php?val="+val, success: function(result){
       var choix = confirm(result);
       if(choix){
        $('#myModal').modal('show'); // retour au menu

       }
    }});
  }

  /*
   FONCTION POUR TRANSFERER DE L'ARGENT
  */

  function transferer(val){
    $('#myModalTransfert').modal('show');

    $("#transfertform").submit(function(e){ // Lorsqu'on clique sur le button ok du popup
      e.preventDefault();
      var montant_transfert = $('#montant_transfert').val(); 

      if(montant_transfert !=''){ // SI LE MONTANT N'EST PAS VIDE


        $.ajax({
          type: "POST",
          url: "transfert.php",
          data: {
            idcompte: val,
            montant: montant_transfert,
          },
          success: function (response) {

            var choix = confirm(response);
            if(choix){
              $('#myModalTransfert').modal('hide');
              $('#myModal').modal('show'); // retour au menu

            }else{
              $('#myModalTransfert').modal('hide');
              $('#myModal').modal('hide');
            }
           
          }
        });

        

      }
           
    });
  }

  function option_story(val){
    $('#myModalUpdatePassword').modal('show');

    $.ajax({url: "story.php?val="+val, success: function(result){
       
        $('#story_transaction').html(result); 

       
    }});


    $("#codeform").submit(function(e){ // Lorsqu'on clique sur le button ok du popup
      e.preventDefault();
      var code_pin = $('#code_pin').val(); 

      if(code_pin !=''){ // SI LE MONTANT N'EST PAS VIDE


        $.ajax({
          type: "POST",
          url: "update_codepin.php",
          data: {
            idcompte: val,
            code_pin: code_pin,
          },
          success: function (response) {

            var choix = confirm(response);
            if(choix){
              $('#myModalUpdatePassword').modal('hide');
              $('#myModal').modal('show'); // retour au menu

            }else{
              $('#myModalUpdatePassword').modal('hide');
              $('#myModal').modal('hide');
            }
           
          }
        });

        

      }
           
    });
  }
