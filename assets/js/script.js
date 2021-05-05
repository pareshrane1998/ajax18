/* Author: 

*/

var start = 0;
var limit = 6;
var fetchBtn = document.getElementById("fetchBtn");
function getData(){
    var ajax = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts?_start=" + start + "&_limit=" + limit;
    ajax.open("GET", url, true);
    ajax.send();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            //console.log(data.length)
            //data = data.slice(0,100)
            var html = "";
            var cursor = 0;
            var maxrec = 6;
            for(var i = 0; i < data.length; i++){
                html += "<tr>";
                    html += "<td>" + data[i].userId + "</td>";
                    html += "<td>" + data[i].id + "</td>";
                    html += "<td>" + data[i].title + "</td>";
                    html += "<td>" + data[i].body + "</td>";
                   
                html += "</tr>"; 

                //var len = data.length * data[i].id;
                //console.log(data.length)
                cursor += maxrec*3;
                
            }
            
            console.log(cursor)
            document.getElementById("tbody").innerHTML = html;
            start = start + limit;
            if( start >= cursor ){
                fetchBtn.style.display = 'none';
            }
           // console.log(data[i].id)
           // console.log(len);
        }
    };
}
window.onload = getData();























