'use strict';


$(function(){
  console.log('hello world')
  $('#print-this').click(function() {
  window.print();
  return false
  })
});
