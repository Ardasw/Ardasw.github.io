var random;

$('.plus-btn').click(function(){
    $('body').toggleClass('menu-open');
  })

function randomQuoteSelector(){
    random = Math.floor(Math.random() * quotes.length);
   // document.getElementById("quote").innerHTML = "";
   var randomQuote =  document.createTextNode(quotes[random]);

    document.getElementById("quote")
    .appendChild(
        document.createTextNode( '"' + quotes[random].toString() + '"')
    );

}

function slide(){
    document.getElementById("quote").setAttribute("class", "quoteAnimated");
    window.location.href = '#quote'

}
randomQuoteSelector();