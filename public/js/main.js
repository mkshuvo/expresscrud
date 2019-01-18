$(document).ready(function(){
    $('.deleteUser').on('click', deleteUser);
});

function deleteUser(){
    var confirmation = confirm('are you sure?');

    if(confirmation){
        $.ajax({
            type : 'DELETE',
            url : '/users/delete/'+$(this).data('id')
        }).done(function(response){
            window.location.replace('/');
        });
        window.location.replace('/');
    }else{
        return false;
    }
}
// $(document).ready(function(){
//     $('.editUser').on('click', editUser);
// });

// function editUser(){
//     var confirmation = confirm('are you sure?');

//     if(confirmation){
//         $.ajax({
//             type : 'PUT',
//             url : '/users/update/'+$(this).data('id')
//         }).done(function(response){
//             //window.location.replace('/');
//         });
//         //window.location.replace('/');
//     }else{
//         return false;
//     }
// }
