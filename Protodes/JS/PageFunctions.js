
//to fill 25 row cards for the housing view all
function viewAllHousing(){
    let mdiv = document.getElementById('vahold');
    for(let i = 1; i < 25; i++){
        mdiv.innerHTML = mdiv.innerHTML + '<div class="row" style=" margin: 50px 5px 5px 5px; border-radius: 10px; padding: 5px;" ><div class="col-md-4 bg-image shadow-1-strong"style="background-image: url(../Images/CSC642photo/joel-filipe-RFDP7_80v5A-unsplash.jpg);background-size: cover;height: calc(0.2 * 100vw); left:0; margin-right: 20px;"></div><div class="col"><div><h3 style="font-weight: bold;">Address</h3></div></br><div><h5>Special Tags</h5><div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Single</label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Pet Friendly</label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Party Friendly</label></div></div></div></div><div class="col"><h1>5</h1><div style="border: 2px solid black;border-radius: 10px; position:absolute; bottom: 0; padding-top: 10px; padding-left: 10px; padding-bottom: 10px; padding-right: 40px;"><p style="font-weight: bold;">Rent</p><h5 style="font-weight: bold; font-size: large;">$ 835.75/mo</h5></div></div></div>'
    }
}

//to blur th epage and poup the login
function login(){
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
    bdy.innerHTML = bdy.innerHTML + '<div class="cotainer" id="loginp" style="display: table;position: absolute;top: 0;left: 0;height: 100%;width: 100%;z-index: 1000;"><div class="row justify-content-center" style="display: table-cell;vertical-align: middle;"><div class="col-md-4" style="border: 5px solid black; border-radius: 10px; box-shadow: 5px; margin-left: auto;margin-right: auto; background-color: white;" id="loginb"><a onclick="cancelled()"><span class="material-icons"style="top:0; right:0; position: absolute;">cancel</span><div class="row"></a><div class="col align-self-center" style="text-align: center;"><img class="img-thumbnail" style="border: none; " src="../Images/gator_web 1.png"></div></div><form action="/action_page.php"><p style="font-weight: bold; font-size: 20px;">Log in</p><div class="form-group"><input type="email" class="form-control" style="border: 2px solid black; border-radius: 10px;" id="email"placeholder="Username"><div style="text-align: right;"> <a href="#" style="align-self: right; font-size: 15px;">ForgotUsername?</a></div></div><div class="form-group"><input type="password" class="form-control" style="border: 2px solid black;border-radius: 10px;" id="pwd"placeholder="Password"><div style="text-align: right;"> <a href="#" style="align-self: right;font-size: 15px;">Forgot Password?</a></div></div><div style="text-align: center;"><button type="button" class="btn-sm" id="loginbut" style="height:40px; padding: 0;"><p style="padding:0; margin:0;  font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></button></div> <div class="row justify-content-around"><div class="col-md-4"><div style="border:20x solid black; text-align: right;"><p style="font-weight:900;">&nbsp;&nbsp;_______________&nbsp;&nbsp;</p></div></div><div class="col-md-2" style="text-align: center; margin-top: 10px;"><p style="font-weight: bold;">OR</p></div><div class="col-md-4"><div style="border:20x solid black ; text-align: left;"><p style="font-weight:900;">_______________&nbsp;&nbsp;</p></div></div></div><a style="text-decoration: none" onclick="need2Reg()"><div style="text-align: center;"><button type="button" class="btn-sm" id="regbut" style="height:40px; padding:0;"><p style="padding:0; margin:0; font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></button></div></a></form></div></div></div>'
}

//to redirect user to the forum of the certain page after logging in
//not sure how'll it work, will think about it
function logged(pagename){

}

//replacing the login with the register whe user needs to register
function need2Reg(){
    let lg = document.getElementById('loginp');
    lg.innerHTML = '<div class="row justify-content-center" style="display: table-cell;vertical-align: middle;"><div class="col-md-4" style="border: 5px solid black; border-radius: 10px; box-shadow: 5px; margin-left: auto;margin-right: auto; background-color: white;" id="loginb"><a onclick="cancelled()"><span class="material-icons"style="top:0; right:0; position: absolute;">cancel</span></a><div class="row"><div class="col align-self-center" style="text-align: center;"><img class="img-thumbnail" style="border: none; " src="../Images/gator_web 1.png"></div></div><form action="/action_page.php"><p style="font-weight: bold; font-size: 20px;">Register</p><div class="form-group"><input type="email" class="form-control" style="border: 2px solid black; border-radius: 10px;" id="email"placeholder="SFSU email"></div><div class="form-group"><input type="email" class="form-control" style="border: 2px solid black; border-radius: 10px;" id="email"placeholder="Username"></div><div class="form-group"><input type="password" class="form-control" style="border: 2px solid black;border-radius: 10px;" id="pwd"placeholder="Password"></div><div style="text-align: center;"><button type="button" class="btn-sm" id="loginbut" style="height:40px; padding:0;"><p style="padding:0; margin:0; font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></button></div></form></div></div>'
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
