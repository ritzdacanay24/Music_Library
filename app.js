'use strict';


$.ajax({
    method: "GET",
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    data: {},
    async: false,  
  }).done(function( data ) {
    generateTable(data)
});

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

function search(){
    
}