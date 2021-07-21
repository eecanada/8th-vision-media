
console.log('conneedewfct')

var shiftText = function(){
  let items = $(".js-text-carousel .js-carousel-text");
  let lastText = items.last().text();

  items.each(function(i, item){
    let currentText = $(item).text();
    $(item).text(lastText);
    lastText = currentText;
  });
}

window.setInterval(shiftText, 1300);

console.log('connect')