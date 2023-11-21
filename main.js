$(document).ready(function() {

    $("#send").click(function() {
        let name = $('#name').val()
        let fname = $("#fname").val()
        let data = $("#data").val()
        let title = $('#title').val()
        let text = $("#matn").val()
        let loc = $("#location").val()
        $('.table').append(
            '<tr>'+
                '<th>' + title + '</th>' +
                '<th>' + text + '</th>' +
                '<th>' + loc +'</th>' +
                '<th>' + data +'</th>' +
                '<th >' + name + '</th>' +
                '<th >' + fname +'</th>' +
            '</tr>'
        )
        $('#closebtn').click();
    })
})