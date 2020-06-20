  
let validate = function(callback)
{
    var title = document.getElementById("title").value;
    var author = document.getElementById('author').value;
    var genre1 = document.getElementById('genre1').checked;
    var genre2 = document.getElementById('genre2').checked;
    var genre3 = document.getElementById('genre3').checked;
    var genre4 = document.getElementById('genre4').checked;
    var genre5 = document.getElementById('genre5').checked;
    var genre6 = document.getElementById('genre6').checked;
    var bookno = document.getElementById('bookno').value;
  
    
        if(title=="")
            {
                document.getElementById("1").innerHTML =" **please fill the title field";
                document.getElementById('title').style.border="2px solid red";
                document.getElementById('1').style.color="red";
                return false;
                
            }
        else if(author=="")
            {  
                 document.getElementById('1').innerHTML ="";
                document.getElementById('title').style.border="2px solid green";
                document.getElementById('2').innerHTML ="**please fill author name";
                document.getElementById('author').style.border="2px solid red";
                document.getElementById('2').style.color="red";
                return false;
            }
        else if(genre1==false && genre2==false && genre3==false && genre4==false && genre5==false && genre6==false)
            {
                document.getElementById('author').style.border="2px solid green";
                document.getElementById('2').innerHTML ="";
                document.getElementById('2b').innerHTML ="**please select the genre";
                document.getElementById('2b').style.color="red";
                return false;
            }
            else if(bookno== "")
            {  
                document.getElementById('2b').innerHTML ="";
                document.getElementById('3').innerHTML ="**please fill the book no.";
                document.getElementById('bookno').style.border="2px solid red";
                document.getElementById('3').style.color="red";
            return false;

            }
     
        else
            {
                document.getElementById('3').innerHTML ="";
                document.getElementById('bookno').style.border="2px solid green";
                alert("you have successfully added the new book");
               return true;
                
            }        
}
    
    