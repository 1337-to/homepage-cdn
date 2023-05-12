// JavaScript Document
  $(function() {
    var cache = {};
    $( "#autocomplete" ).autocomplete({
      minLength: 3,
      appendTo: '.search-box',
      source: function( request, response ) {
        var term = request.term;
        if ( term in cache ) {
          response( cache[ term ] );
          return;
        }
        $.getJSON( "//"+server+"/cdnsuggest.php", request, function( data, status, xhr ) {
          cache[ term ] = data.data;
          response( data.data );
        });
      },
      select: function(event, ui) { 
       //$("#search-form").submit();
      }
    }).data('uiAutocomplete')._renderItem = function( ul, item ) {
      var srchTerm = this.term.trim().split(/\s+/).join ('|');
      var strNewLabel = item.label;
      regexp = new RegExp ('(' + srchTerm + ')', "ig");
      var strNewLabel = strNewLabel.replace(regexp,"<span class='highlight-class'>$1</span>");
      return $( "<li></li>" )
      .data( "item.autocomplete", item )
      .append( "<a>" + strNewLabel + "</a>" )
      .appendTo( ul );
   };
  });
