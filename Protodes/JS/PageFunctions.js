
//to fill 25 row cards for the housing view all
function viewAllHousing(){
    let mdiv = document.getElementById('vahold');
    for(let i = 1; i < 25; i++){
        mdiv.innerHTML = mdiv.innerHTML + 
        `<div class="row" style=" margin: 50px 5px 5px 5px; border-radius: 10px; padding: 5px;" >
        <div class="col-md-4 bg-image shadow-1-strong"style="background-image: url(../Images/CSC642photo/joel-filipe-RFDP7_80v5A-unsplash.jpg);background-size: cover;height: calc(0.2 * 100vw); left:0; margin-right: 20px;">
        </div>
        <div class="col">
        <div>
        <h3 style="font-weight: bold;">Address</h3>
        </div>
        </br>
        <div>
        <h5>Special Tags</h5>
        <div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">Single</label>
        </div>
        <div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">Pet Friendly</label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">Party Friendly</label>
        </div></div></div></div>
        <div class="col" style="padding:calc(.2*10vw);">
        <img src="../Images/CSC642photo/humanicon.png" style="height: calc(.2*30vw);float:left"/>
        <h1>5</h1><div style="border: 2px solid black;border-radius: 10px; position:absolute; bottom: 0; padding-top: 10px; padding-left: 10px; padding-bottom: 10px; padding-right: 40px;">
        <p style="font-weight: bold;">
        Rent</p><h5 style="font-weight: bold; font-size: large;">$ 835.75/mo</h5></div></div></div>`
    }
}

//to blur the page and poup the login
function login(pagename){
    let whereto ;
    if(pagename === 'Housing'){
        whereto = '../HTML/Housing Page/CreateHousing.html';
    }else if(pagename === 'Events'){
        whereto = "../HTML/Events page/CreateEvent.html";
    }else if(pagename === 'Books'){
        whereto = '../HTML/HomePage.html';
    }else if(pagename === 'home'){
        whereto = "../HTML/HomePage.html";
    }
    else{
        console.log('Pagename error');
    }
    let bg = document.getElementById('ndblur');
    bg.style.top = 0;
    bg.style.left = 0;
    bg.style.width = '100%';
    bg.style.height = '100%'; 
    bg.style.backgroundColor = 'white';
    bg.style.content = 'none';
    bg.style.pointerEvents = 'none';
    bg.style.zIndex = 10;
    bg.style.opacity = .5;
    let bdy = document.getElementById('body');
   
   let npn = `${pagename}`;
    bdy.innerHTML = bdy.innerHTML + 
    `<div class="cotainer" id="loginp" style="display: table;position: absolute;top: 0;left: 0;height: 100%;width: 100%;z-index: 1000;"><div class="row justify-content-center" style="display: table-cell;vertical-align: middle;"><div class="col-md-4" style="border: 5px solid black; border-radius: 10px; box-shadow: 5px; margin-left: auto;margin-right: auto; background-color: white; border: 5px solid black; 
    border-radius: 10px; 
    padding: 20px 30px ;
    " id="loginb"><a onclick="cancelled()">
    <span class="material-icons"style="top:0; right:0; position: absolute;">cancel
    </span><div class="row"></a><div class="col align-self-center" style="text-align: center;">
    <img class="img-thumbnail" style="border: none; " src="../../Images/gator_web 1.png"></div>
    </div><form action="/action_page.php"><p style="font-weight: bold; font-size: 20px;">Log in</p>
    <div class="form-group">
    <input type="email" class="form-control" style="border: 2px solid black; border-radius: 10px;" id="email"placeholder="Username"><div style="text-align: right;"> 
    <a href="#" style="align-self: right; font-size: 15px;">ForgotUsername?</a></div></div>
    <div class="form-group"><input type="password" class="form-control" style="border: 2px solid black;border-radius: 10px;" id="pwd"placeholder="Password"><div style="text-align: right;"> <a href="#" style="align-self: right;font-size: 15px;">Forgot Password?</a>
    </div>
    </div>
    <div style="text-align: center;"><a href="${whereto}">
    <button type="button" class="btn-sm" id="loginbut" style="background-color: #34328F;
    color: white;
    border: 2px solid #34328F;
    border-radius: 50px;height:40px; padding: 0;"><p style="padding:0; margin:0;  font-size: 20px;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
    </button></a>
    </div> <div class="row justify-content-around">
    <div class="col-md-4"><div style="border:20x solid black; text-align: right;">
    <p style="font-weight:900;">&nbsp;&nbsp;_______________&nbsp;&nbsp;</p></div></div><div class="col-md-2" style="text-align: center; margin-top: 10px;"><p style="font-weight: bold;">OR</p></div><div class="col-md-4">
    <div style="border:20x solid black ; text-align: left;">
    <p style="font-weight:900;">_______________&nbsp;&nbsp;</p></div></div></div><a style="text-decoration: none" onclick="need2Reg('${npn}')">
    <div style="text-align: center;"><button type="button" class="btn-sm" id="regbut" style="background-color: white;
    color:#34328F;
    border:2px solid #34328F;
    border-radius: 50px;height:40px; padding:0;"><p style="padding:0; margin:0; font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></button></div></a></form></div></div></div>`;
console.log('inside the login function');}

//to redirect user to the forum of the certain page after logging in
function logged(pagename){
    console.log('insdie the logged functiom');
    if(pagename === 'Housing'){
        window.location = '../HTML/Housing Page/CreateHousing.html';
    }else if(pagename === 'Events'){
        window.location = "../HTML/Events page/CreateEvent.html";
    }else if(pagename === 'Books'){
        //window.location = '';
        window.location.assign('../HTML/Books Page/CreateBook.html');
    }else if(pagename === 'home'){
        window.location = "../HTML/HomePage.html";
    }
    else{
        console.log('Pagename error');
    }
}

//to redirect user after entering forms
function confirmation(pagename){
    let title;
    let page;
    if(pagename === 'EventsPage'){
        title = 'Event Posting';
        page = 'Events Page';
    }else if(pagename === 'HousingPage'){
        console.log("in the housingpage");
        title = 'Listing';
        page = 'Housing Page';
    }else if(pagename === 'BooksPage'){
        title = 'Book Posting';
        page = 'Books Page';
    }else{
        console.log('Page name error');
    }
    let bx = document.getElementById('formbox');
    bx.innerHTML = `<div class="container-fluid" style="margin-top: 5%;">
    <div >
        <div class="row justify-content-lg-center">
            <img src="https://forza1volleyball.com/wp-content/uploads/2019/10/sanfrancisco.png" style="height:200px;width:auto">
        </div>
        <div class="row justify-content-center">
            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" style="height:200px;width:auto">
        </div>
        <div class="row justify-content-lg-center" style="text-align: center;">
            <h3 class="col-md-12">${title} submitted!</h3>
        </br>
            <h3 class="col-md-12">May take up to 48 hours for approval</h3>
       
        
            <a class="col-lg-12" href="${pagename}.html" style="text-align:center;margin:50px;margin-top:20px">
                <button class="rounded-pill" style="background-color:#34328F;border-style: none;">
                    <h3 style="margin:10px;color:white">
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back to ${page} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h3>
                </button>
            </a>
        </div>
    </div>
    
   
</div>`;
    
}

//replacing the login with the register whe user needs to register
function need2Reg(pagename){
    let lg = document.getElementById('loginp');
    lg.innerHTML = `<div class="row justify-content-center" style="display: table-cell;vertical-align: middle;"><div class="col-md-4" style="border: 5px solid black; border-radius: 10px; box-shadow: 5px; margin-left: auto;margin-right: auto; background-color: white;border: 5px solid black; 
    border-radius: 10px; 
    padding: 20px 30px ;
    " id="loginb"><a onclick="cancelled()"><span class="material-icons"style="top:0; right:0; position: absolute;">cancel</span></a><div class="row"><div class="col align-self-center" style="text-align: center;"><img class="img-thumbnail" style="border: none; " src="../../Images/gator_web 1.png"></div></div><form action="/action_page.php"><p style="font-weight: bold; font-size: 20px;">Register</p><div class="form-group">
    <input type="email" class="form-control" style="border: 2px solid black; border-radius: 10px;" id="email"placeholder="SFSU email"></div><div class="form-group"><input type="email" class="form-control" style="border: 2px solid black; border-radius: 10px;" id="email"placeholder="Username"></div><div class="form-group"><input type="password" class="form-control" style="border: 2px solid black;border-radius: 10px;" id="pwd"placeholder="Password"></div>
    <div style="text-align: center;"><button type="button" class="btn-sm" id="loginbut" style=" background-color: #34328F;
    color: white;
    border: 2px solid #34328F;
    border-radius: 50px;height:40px; padding:0;" onclick="logged('${pagename}')"><p style="padding:0; margin:0; font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></button></div></form></div></div>`
}

//for if user clicks the X for the login or register popup form
function cancelled(){
    
    let lg = document.getElementById('loginp');
    lg.remove();
    let bg = document.getElementById('ndblur');
    bg.style.removeProperty('opacity');
    bg.style.removeProperty('top');
    bg.style.removeProperty('left');
    bg.style.removeProperty('width');
    bg.style.removeProperty('height');
   
    bg.style.content = 'normal';
    bg.style.pointerEvents = 'auto';
    bg.style.zIndex = 10;
}

//to redirect to the view when user clicks on a card

//bname = the page name so it gets linked to back button
//picurl = picture url
function vcardhome(bname, picurl){
    let cont = document.getElementById('body');
    cont.innerHTML =
     `<div id="ndblur">
     <nav class="navbar fixed-top navbar-expand-lg ">
         <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
             data-target="#navb" aria-expanded="false" style="border-color: yellow; color:black">
             <span class="material-icons">
                 menu
             </span>
 
         </button>
         <div class="collapse navbar-collapse row justify-content-between " style="background-color: #34328F;" id="navb">
             <div class="col-4" id="navb">
                 <ul class="navbar-nav mr-auto">
                     <li class="nav-item active">
                         <a class="nav-link" href="HomePage.html">Home <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item active">
                         <a class="nav-link" href="../Pablo's Work/EventsPage.html">Events <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item active">
                         <a class="nav-link" href="#">Books<span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item active">
                         <a class="nav-link" href="HousingPage.html" style="font-weight: bold;">Housing<span
                                 class="sr-only">(current)</span></a>
                     </li>
 
                 </ul>
             </div>
 
             <div class="col-md-3">
                 <div >
                     <div style="float: left;">
                         <a class="navbar-brand" href="#" style="line-height: 45px;">
                             <span class="material-icons md-light md-24"></span>
                         </a>
                     </div>
                 <div style="float: left;position: absolute; right: 170px;">
                     <a class="navbar-brand" href="#" style="line-height: 45px;">
                         <span class="material-icons md-light md-24">help_outline</span>
                     </a>
                 </div>
                 <div style="float: left;position: absolute; right: 130px;">
                     <a class="navbar-brand" href="#" style="line-height: 45px;">
                         <span class="material-icons md-light md-24">settings</span>
                     </a>
                 </div>
                 <div style="float: left;position: absolute; right: 80px;">
                     <a class="navbar-brand" href="#" style="line-height:30px;">
                         <img src="../Images/skyblueblk.png" alt="Avatar Logo" style="width:30px;"
                             class="rounded-pill">
 
                     </a>
                 </div>
                 <div style="float: left; position: absolute; right:0;">
                     <a class="nav-link" href="#" style="line-height:30px;color:white; padding-left: 0;">Username<span
                         class="sr-only">(current)</span></a>
                 </div>
             </div>
             </div>
       
         </div>
 
     </nav>


<div class="container" style="margin-top: 100px;padding-left: calc(0.2*30vw);padding-right: calc(0.2*30vw); ">
 <div>
<div class="row">
  <div class="col-md-8">
      <div style="box-shadow: inset 0px -30px 20px  rgba(0,0,0,0.8); 
      background-size:cover;height: calc(.2*130vw); width: calc(0.2*260vw); border-radius: 7px;
      background-image: url(${picurl});">
         <h2 style="color: white; bottom: 0;position: absolute; margin-left: 50px;">Title</h2>
      </div>
    
  </div>
  <div class="col-md-4">
     <img src="../Images/CSC642photo/housingroom1.png"style="height: calc(.2*65vw); width: calc(0.2*110vw);"/>
     <div style="box-shadow: inset 0px -30px 20px  rgba(0,0,0,0.8); 
     background-image: url(../Images/CSC642photo/housingroom2.png);
     background-size: cover;height: calc(.2*65vw); width: calc(0.2*110vw);
     border-radius: 7px;">
     <h4 style="bottom: 0;position: absolute; margin-left: 50px; color:#fff;">+ More Images</h4>
       </div>
    
  </div>
</div>
<div class="row" style="padding: 5% 1%">
 
  <div class="col-md-5">
     <div style="border-bottom: 2px solid black;border-right: 2px solid black;">
         <p style="font-weight: bold;">Address: XXXXXX</p>
         <p style="font-weight: bold;">Apartment: A</p>
         <p style="font-weight: bold;" >Postal Code: 12345</p>
     </div>
     <div style="border-right: 2px solid black;"> 
         <p style="padding-top: 3%;font-weight: bold;">Description:</p>
         <p style="font-weight: bold;" >
             XXXXXXXXXXXXXXXXXXXXXX
             XXXXXXXXXXXXXXXXXXXXXX
             XXXXXXXXXXXXXXXXXXXXXX
         </p>
     </div>
  </div>

  <div class="col">
     <div>
         <h5>Special Tags</h5>
         <div>
             <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                 <label class="form-check-label" for="defaultCheck1">
                     Single
                 </label>
             </div>
             <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                 <label class="form-check-label" for="defaultCheck1">
                     Pet Friendly
                 </label>
             </div>
             <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                 <label class="form-check-label" for="defaultCheck1">
                     Party Friendly
                 </label>
             </div>
         </div>
     </div>
     <div style="border: 2px solid black;border-radius: 10px; position:absolute; 
     bottom: 0;
     right:0;
     padding-top: 10px;
     padding-left: 10px;
     padding-bottom: 10px;
     padding-right: 40px;">
     <p style="font-weight: bold;">Rent</p>
     <h5 style="font-weight: bold; font-size: large;">$ 835.75/mo</h5>
 </div>
     <div>

     </div>
  </div>
</div>

 <div class="row justify-content-around" style="margin-bottom: 20px;">
     <div style="text-align: center;">
     <a href= "${bname}">
         <button type="button" class="btn-sm" id="regbut" style="height:40px; padding:0;">
           <p style="padding:0; margin:0; font-size: 20px;">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </p>
         </button></a>
       </div>
       <a onclick="confirmation('HousingPage')">
       <div style="text-align: center;">
         <button type="button" class="btn-sm" id="loginbut" style="height:40px; padding:0;">
           <p style="padding:0; margin:0; font-size: 20px;">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </p>
         </button>
       </div></a>
 </div>

</div>
</div>


</div>`;

}