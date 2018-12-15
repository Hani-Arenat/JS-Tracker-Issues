


document.getElementById('Add').addEventListener('click',function(e){


    let issdesc = document.getElementById('desc-inp').value;
    let issserv = document.getElementById('serv-inp').value;
    let issassto = document.getElementById('assto-inp').value;
    let issid = generate();
   
    let issstatus = 'Open';
    
    let issue = {
        id : issid,
        desc :issdesc,
        serv : issserv,
        assto : issassto,
        status : issstatus
    }

    if (localStorage.getItem('issues') == null) {
        let issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
      } else {
        let issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
      }



    fetchIssues();

    e.preventDefault();
});

function setStatusClosed(id){

    console.log('9999999');

    let issues = JSON.parse(localStorage.getItem('issues'));

    for(let i = 0 ; i<issues.length;i++){
        if(issues[i].id == id){
            
            issues[i].status = 'Closed';
            
        }
    }

    localStorage.setItem('issues',JSON.stringify(issues));

    
    fetchIssues();
}

function deleteIssue(id){

    let issues = JSON.parse(localStorage.getItem('issues'));

    
    for(let i = 0 ; i<issues.length;i++){
        if(issues[i].id == id){
           if(issues[i].status == 'Open'){
               alert('The Issue Still Open!');
           } else {
            issues.splice(i,1);
           }
        }
    }

    localStorage.setItem('issues',JSON.stringify(issues));

    fetchIssues();
}

document.getElementById('Add').onclick = function() {

    document.getElementById('desc-inp').value = '';
    document.getElementById('serv-inp').value = 'Low';
    document.getElementById('assto-inp').value ='';
};

function fetchIssues(){

  
    let issues1 = JSON.parse(localStorage.getItem('issues'));
    let issuesList = document.getElementById('issuesList');


 
    issuesList.innerHTML = '';

  if(issues1 != null && issues1 != undefined){

    for(let i =0 ; i < issues1.length;i++)
    {
        let id = issues1[i].id;
        let desc = issues1[i].desc;
        let serv = issues1[i].serv;
        let assto = issues1[i].assto;
        let status = issues1[i].status;
        issuesList.innerHTML += '<div class="cont-issues">'+
                            '<h5> Issues ID : ' + id + '</h5>'+
                           '<span id="close-span" style="display:block;margin-top:10px;">' + status + '</span> <br>'+
                           '<h3>'+ desc + '</h3>'+
                           '<span> severity : ' + serv + '</span> <br>'+
                           '<span>Assigned To: '+ assto +'</span> <br>'+
                           '<button id="closebtn" onclick="setStatusClosed(\''+id+'\')"> Close</button>'+
                           '<button id="deletebtn" onclick="deleteIssue(\''+id+'\')"> Delete</button>'
                           +'</div>';


     }
     }
}

function generate(){
  
    let chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    serial_length = 20,
    random_number,
    serial='',
    k;
    
   for(k=0 ; k < serial_length ; k = k+1)
    {
        random_number = Math.floor(Math.random() * chars.length);
        serial += chars.substring(random_number,random_number+1);
    }
  
    console.log(serial);
    return serial;
    
  }

 
window.onscroll = function(){

    let goup = document.getElementById('goup');
    if(window.pageYOffset >=300)
    {
        goup.style.display = 'block';
    } else {
        goup.style.display = 'none';
    }
}

goup.onclick = function(){

    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
      });
}

