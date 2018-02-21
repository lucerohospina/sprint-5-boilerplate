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

var $topic = $('.topic');
var $auhtor = $('.author');
var $responses = $('.response-count');
var $createTopicBtn = $('#create-btn');


$.ajax({
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics'
}).done(handleSuccess)
.fail(handleError);

function handleSuccess(data) {
    // console.log(data);
    // console.log(data.length);
        var jumbotronContent = '';
        for(i=0; i<data.length; i++) {
        var topicTitle = data[i].content;
        var authorUser = data[i].author_name;
        var responsesCount = data[i].responses_count;
        // console.log(data[i]);
        jumbotronContent += `
        <div class="card mb-3">
        <div class="card-body">
          <p class="card-title"><strong>TEMA</strong>: ${topicTitle}</p>
          <p class="card-text"><strong>por</strong>: ${authorUser}</p>
          <hr class="my-4">
        <p class="card-text"><strong>Respuestas</strong>: ${responsesCount}</p>
        </div>
        </div>
        `
    };
    $topic.html(jumbotronContent);
}

function handleError() {
    console.log('something went wrong');
}

$createTopicBtn.click(function(event){
    // event.preventDefault();
    var $inputAuthorName = $('#author-name');
    var $inputNewTopic = $('#new-topic');
    
    var body = {
        author_name: $inputAuthorName.val(),
        content: $inputNewTopic.val()
    }

    $.ajax({
        type: 'POST',
        url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
        data: body,
        success: addingEntrance
    })

    function addingEntrance(newTopic) {
        console.log(JSON.stringify(newTopic));
        console.log(newTopic);
        console.log(newTopic.author_name);
        console.log(newTopic.content);
        // $(document).attr('location').href='index.html'
        // alert('Tema creado');
        // $('#form-modal').modal('hide');
        
        // var bodyString = JSON.stringify(body);
        // console.log(bodyString.author_name);
        // console.log(bodyString.name);
        // console.log(newData.name);
    }
})


$('#topic-search').keyup(function(){
    console.log($(this).val());
    var topicSearched = $(this).val();
    $('.card').hide();
    $('.card').each(function() {
        console.log($(this).text())
        var savingData = $(this).text();
        if (savingData.indexOf(topicSearched) > -1) {
            $(this).show();
        }
    })
})

// var request = new XMLHttpRequest();

// request.open('GET', 'https://examen-laboratoria-sprint-5.herokuapp.com/topics/763/responses');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();
