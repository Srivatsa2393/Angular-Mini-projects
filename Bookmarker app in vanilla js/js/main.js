//alert(1);

//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark() {
    //console.log('Bookmark saved');
    event.preventDefault();

    var siteName = document.getElementById('siteName').value;
    //console.log(siteName.value);

    var siteUrl = document.getElementById('siteUrl').value;
    //console.log(siteUrl.value);

    if(!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Please use the valid url');
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    //console.log(bookmark);
    //local storage test
    /* localStorage.setItem('test', 'Hello Srivatsa');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
 */

    if(localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    fetchBookmarks();

    document.getElementById('myForm').reset();
}

//fetch bookmarks
function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //console.log(bookmarks);
    var bookmarksResults = document.getElementById('bookmarksResults');
    //build output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
                                        '<h3>'+name+
                                        '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                        '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '
                                        '</h3>'+
                                        '</div>';
    }
}


function deleteBookmark(url) {
    //console.log(url);
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for(var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i, 1);
        }
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}
