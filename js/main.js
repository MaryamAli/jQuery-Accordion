


// $('h4').css('background-color', red);
// $function(){
//   $(.'header').click(function(evt){
//     var target=evt.target,
//     targetPanel=target.attr('p')
//   })
// };


// makes the first para disappear
// $('h4').style.visibility='hidden';

// .element {
//     transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
// }

$('.slide').on('click', 'h4', function(event){
  var newText =$(this);
  newText.siblings().addClass('text').removeClass('closeText');
  newText.parent().siblings().find('.text').removeClass('text').addClass('closeText');
})

// $('p:not(:first)').addClass('hidden');

// $('.slide').on('click', 'h4', function(){
//   $(this).parent().removeClass('button').siblings().addClass('button');
// });





































