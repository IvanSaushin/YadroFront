
$("#phone").click(function () { $(this).setCursorPosition(1); }).mask("+7(999) 999-99-99");


function newUser() {

    let name = $('#exampleFormControlInput1').val()
    let phone = $('#phone').val()
    let email = $('#exampleFormControlInput2').val()

    let formData = {
        name: name,
        phone: phone,
        email: email,
    }

    // let xhr = new XMLHttpRequest(); // у конструктора нет аргументов
    // xhr.open("GET", "http://localhost:8080/greeting")
    // xhr.send()


    // alert("hi " + name + phone + email);

    // $.ajax({
    //     'url': 'http://localhost:8080/api/form',
    //     'method': 'GET',
    //     'success': function () {
    //         alert("success get");
    //     },
    //     'error': function () {
    //         alert("error get");
    //     }
    // });

    // $.ajax({
    //     url: "http://localhost:8080/greeting"
    // }).then(function(data, status, jqxhr) {
    //    $('.greeting-id').append(data.id);
    //    $('.greeting-content').append(data.content);
    //    console.log(jqxhr);
    // });

    // $.getJSON('http://localhost:8080/api/form', function (jsonUser) {
    //     let nameFromBack = jsonUser.name;
    //     alert(nameFromBack);
    // });

    $.ajax({
        'url': 'http://localhost:8080/api/form',
        'method': 'POST',
        // 'dataType': "json", //валится из-за этого 
        'contentType': 'application/json',
        'data': JSON.stringify(formData),
        'success': function () {
            // alert("success post");
        },
        'error': function() {
            alert("error post")
        }
    });
}


// var myCollapse = document.getElementById('myCollapse')
// var bsCollapse = new bootstrap.Collapse(myCollapse, {
//     toggle: false
// })

// var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
// var collapseList = collapseElementList.map(function (collapseEl) {
//   return new bootstrap.Collapse(collapseEl)
// })


// myCollapse.onclick(alert('hello'))
