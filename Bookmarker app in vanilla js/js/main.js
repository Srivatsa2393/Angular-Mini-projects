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
                                        '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'
                                        '</h3>'+
                                        '</div>';
    }
}