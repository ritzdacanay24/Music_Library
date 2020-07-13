'use strict';


$.ajax({
    method: "GET",
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    data: {},
    async: false,  
  }).done(function( data ) {
    generateTable(data)
    generateSearchDivs(data)
});

function searchResults(data){
    $( "#results" ).empty();
    let title = $("#title").val();
    let album = $("#album").val();
    let artist = $("#artist").val();
    let genre = $("#genre").val();
    let releaseDate = $("#releaseDate").val();
    
    let newResults = [];
    
      for(let i = 0; i < data.length; i ++){
          
        if(data[i].title == title || data[i].album == album || data[i].artist == artist || data[i].genre == genre || data[i].releaseDate == releaseDate){
            newResults.push(data[i]);
          }
      }
      generateTable(newResults)
  }
  
function clearData(data){
    $( "#results" ).empty();
    $("#title").val("");
    $("#album").val("");
    $("#artist").val("");
    $("#genre").val("");
    $("#releaseDate").val("");
    generateTable(data)
}

function generateTable(data){
    let html = '<div>';
    html = `
        <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
        </tr>
    `;
    $.each(data, function( index, value ) {
        html += `
            <tr>
                <td>${value.title}</td>
                <td>${value.album}</td>
                <td>${value.artist}</td>
                <td>${value.genre}</td>
                <td>${value.releaseDate}</td>
            </tr>
        `;
    });
    html += '</div>';
    $('#results').append(html);
}

function generateSearchDivs(data){
      
    data = JSON.stringify(data).split('"').join("&quot;");

    let options = [
        {
            "id":"title",
            "placeholder" : "search title",
            "title" : "Title"
        },
        {
            "id":"album",
            "placeholder" : "search album",
            "title" : "Album"
        },
        {
            "id":"artist",
            "placeholder" : "search artist",
            "title" : "Artist"
        },
        {
            "id":"genre",
            "placeholder" : "search genre",
            "title" : "Genre"
        },
        {
            "id":"releaseDate",
            "placeholder" : "search date",
            "title" : "Date"
        }
    ]

    let html = "<p>Filter</p>";
    $.each(options, function( index, value ) {
        html += `
            <div class="input-group mb-3">
                <div class="input-group-prepend" onClick="searchResults(${data})">
                    <span class="input-group-text min-max-100">${value.title}</span>
                </div>
                <input type="text" class="form-control" placeholder="${value.placeholder}" id="${value.id}">
            </div>
        `;
    });

    html += `
        <div class="btn-group" role="group">
            <button class="btn btn-info" onClick="searchResults(${data})"> Search </button>
            <button class="btn btn-warning text-right" onClick="clearData(${data})"> Clear </button>
        </div>
    `
    $('#search').append(html);
  }

  