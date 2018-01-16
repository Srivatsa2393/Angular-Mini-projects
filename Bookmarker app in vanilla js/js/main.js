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
    }
}