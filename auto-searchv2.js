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

let blocked_keywords = [
  "popular-xxx", "-xxx-", "-porn-", "-dick-", "-pussy-", "-milfs-", "-anal-", "-fucking-"
]

// Get the pathname of the current URL and convert it to lowercase
let pathname = window.location.pathname.toLowerCase();

// Check if the pathname contains any blocked keywords
let isBlocked = blocked_keywords.some(keyword => pathname.includes(keyword));

// Only execute the IIFE if the pathname does not contain any blocked keywords
if (!isBlocked) {
  /*(function() {
      const url = new URL(window.location.href);
      const clickID = url.searchParams.get("click_id");
      const sourceID = url.searchParams.get("source_id");

      const s = document.createElement("script");
      s.dataset.cfasync = "false";
      s.src = "https://push-sdk.com/f/sdk.js?z=1250585";
      s.onload = (opts) => {
          opts.zoneID = 1250585;
          opts.extClickID = clickID;
          opts.subID1 = sourceID;
          opts.actions.onPermissionGranted = () => {};
          opts.actions.onPermissionDenied = () => {};
          opts.actions.onAlreadySubscribed = () => {};
          opts.actions.onError = () => {};
      };
      document.head.appendChild(s);
  })();*/
}

