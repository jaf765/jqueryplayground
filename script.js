const app = {
  initialize: function () {
    $('.box').click(function () {
   $(this).toggleClass('transform')
   console.log('IM BEING CLICKED')
 });
  },

  foo: function () {
    $('.otherBox').dblclick(function () {
   $(this).toggleClass('transform')
   console.log('FOO IS HERE')
 });
},

footoo: function () {
  $('.rect').hover(function () {
 $(this).toggleClass('rectTransformWidth')
 console.log('FOOtoo IS HERE')
  });
 }

}
