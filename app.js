// Ajax , callback, http requests
// GET , POST, PUT, DELETE

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();

    }

    //Get Request

    get(url,callback){
        this.xhr.open("GET", url); // Baglanti acik

        //const temp = this();
        //xhr silerek de hata gideriliyor

        this.xhr.onload = () => {

            
            if(this.xhr.status === 200) {
                callback(null, this.xhr.responseText); //istegimiz bitti
            }
            else {
                // Hata durumu

                callback("Get Request: herhangi bir hata olustu", null);
            }
        };

        this.xhr.send();
    }

    // Post Request

    post(url, data, callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi gonderme

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                // Basarilisi 
                callback(null, this.xhr.responseText);

            }
            else {
                callback("Post Request: Herhangi bir hata olustu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    // Put Request

    put(url, data, callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi gonderme

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                // Basarilisi 
                callback(null, this.xhr.responseText);

            }
            else {
                callback("Put Request: Herhangi bir hata olustu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    // Delete Request

    delete(url,callback){
        this.xhr.open("DELETE", url); // Baglanti acik

        this.xhr.onload = () => {

            
            if(this.xhr.status === 200) {
                callback(null, "Veri silme islemi basarili"); //istegimiz bitti
            }
            else {
                // Hata durumu

                callback("Get Request: herhangi bir hata olustu", null);
            }
        };

        this.xhr.send();
    }
}

const request = new Request();

// GET Request

/*request.get("https://jsonplaceholder.typicode.com/albums", function(err, response){
    if( err === null){
        //basarili
        console.log(response);
    }
    else {
        // Hata
        console.log(err);
    }
});*/

/*request.get("https://jsonplaceholder.typicode.com/albums/58", function(err, response){
    if( err === null){
        //basarili
        console.log(response);
    }
    else {
        // Hata
        console.log(err);
    }
});*/


// POST request

/*request.post("https://jsonplaceholder.typicode.com/albums", {userId:2, title:"Thriller"}, function (err, album) {

if(err === null){

    console.log(album);
}
else {
    // Hata
    console.log(err);
}
    
});*/


// PUT request

/*request.put("https://jsonplaceholder.typicode.com/albums/10", {userId:143, title:"Tarkan Karma"}, function (err, album) {

if(err === null){

    console.log(album);
}
else {
    // Hata
    console.log(err);
}
    
});*/


// DELETE request

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err, response){
    if( err === null){
        //basarili
        console.log(response);
    }
    else {
        // Hata
        console.log(err);
    }
});