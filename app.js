var row = document.getElementById('row');
var serverArray = [];
var mainResult;
var subApi = "eg";
var mainApi = "health";
ajax(mainApi, subApi);

// AJAX function 
function ajax (mainResult ,subApi) {
    var url = `https://newsapi.org/v2/top-headlines?country=`+subApi+`&category=`+mainResult+`&apiKey=95bef591c91b4d4282981c457fcf73b1`;
    var serverData = new XMLHttpRequest ();
    serverData.open("GET",url);
    serverData.onreadystatechange = function () {
      if (serverData.readyState == 4) {
        serverArray = JSON.parse(serverData.response);
        display();
      }
    }
    serverData.send();
  }


// display function 
function display () {
  displayData = "";
  for ( let i = 0; i < serverArray.articles.length; i++) {
    displayData += `<div class="col-md-4 col-sm-12 my-3 ">
              <div class="card m-auto text-white bg-dark" style="width: 18rem;">
                  <img class="img-fluid" src="`+serverArray.articles[i].urlToImage+`" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text text-danger">`+serverArray.articles[i].publishedAt+`</p>
                    <h5 class="card-title text-warning">`+serverArray.articles[i].title+`</h5>
                    <p class="card-text">`+serverArray.articles[i].description+`</p>
                    <a href="`+serverArray.articles[i].url+`" class="btn btn-info" target="_blank">SEE MORE</a>
                  </div>
                </div>
              </div>`
  }
  row.innerHTML= displayData;
}

// Target section 
var mainApi = document.getElementsByClassName("nav-link");
var subApi = document.getElementsByClassName("dropdown-item");
for ( let i = 0; i < mainApi.length; i++) {
  mainApi[i].onclick = function (e) {
    mainResult = e.target.getAttribute("name");
    
    for ( let i = 0; i < subApi.length; i++) {
      subApi[i].onclick = function (e) {
        subApi = e.target.getAttribute("name");
        ajax(mainResult,subApi);
    }
    
  }
  
}
}
