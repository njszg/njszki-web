function roll(what){
  $('#result').html('');
  console.log(what);

  // ajax lekérés a szerver felé, első paraméter az URL  
  $.ajax('/controller/rpsController.php?what='+what, {
    // sikeres ajax lekérés idején ez a függvény fut lefutni
    success: function(data){
      console.log('returned: ', data);
      $('#result').html(data);
    },
    // hiba esetén pedig ez
    error: function(e){
      console.log('error: ', e);
    }
  });
}
