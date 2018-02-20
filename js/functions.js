/**
 * @param String name
 * @return String
 */
// function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//     results = regex.exec(location.search);
//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }

// var request = new XMLHttpRequest();

// request.open('GET', 'http://examen-laboratoria-sprint-5.herokuapp.com/topics');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();

var $topic = $('.topic');
var $auhtor = $('.author');
var $responses = $('.response-count');

$.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
}).done(handleSuccess)
.fail(handleError);

function handleSuccess(data) {
    console.log(data);
    console.log(data.length);
        for(i=0; i<data.length; i++) {
        var topicTitle = data[i].content;
        var authorUser = data[i].author_name;
        var responsesCount = data[i].responses_count;
        console.log(data[i]);
        $topic.append(`<p>${topicTitle}<span>${authorUser}</span></p>`);
        $responses.append(`<p>Numero de respuestas<span>${responsesCount}</span></p>`);
    }
}

function handleError() {
    consol.log('something went wrong');
}