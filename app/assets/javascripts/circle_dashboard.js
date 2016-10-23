$(document).ready(function(){
  greenButtonListener();
  yellowButtonListener();
  pinkButtonListener();

})

function greenButtonListener(){
  $('#example1').on('click', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('#myModal').modal('show');
  })
}

function yellowButtonListener(){
  $('#example2').on('click', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('#myModal2').modal('show');
})
}

function pinkButtonListener(){
  $('#example3').on('click', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('#myModal3').modal('show');
    })
}
