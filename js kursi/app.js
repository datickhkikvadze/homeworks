////////////////////Variables///////////////////////
////////////////////var(Type)///////////////////////
// var test1="dati"
// var test2 ="var"
// var test3 ="me"
// console.log(test1,test2,test3)

// var text = "Dati"
// var num = 12
// var float = 12.5
// var bool = true
// var bool2 = false
// var test = null
// console.log(text,"aris",num,"wlis",bool)

// var araferi
// console.log(araferi)
//////////////////const(Type)//////////////////////////
// const test = 100
// test = 200
// console.log(test)
// you cant change values if you are using cosnt
// so this is error

// const test = 100
// const test1= 200
// const test2 = 300
// console.log(test+test1)
// this is correct way :)
//////////////////let(Type)//////////////////////////
// let test = 100
// test = 200
// console.log(test)
// let often is used in loops
// :))
////////////////////Comments/////////////////////// 
// you can comment easly (with Control + ?) shortcut or (//)
// comments are ignord by computer it is for only humans:)
////////////////////Math operations///////////////////////
// var num1 = 20
// var num2 = 40
// console.log(num1 + num2)


// var num1 = 20
// var num2 = 40
// console.log(num1 - num2)

// var num1 = 20
// var num2 = 40
// console.log(num1 / num2)

// var num1 = 20
// var num2 = 40
// console.log(num1 * num2)

// var num=5
// num++
// console.log(num)
// ++ is adding one 

// var num=5
// num--
// console.log(num)
// -- is Subtracting one 

// var RandomNum = Math.floor(Math.random() * 20)
// console.log(RandomNum)
//this script will send in console random but only Whole numbers under 20 
//floor-only whole nums  like 12 and not 12.5

// var p = Math.PI
// console.log(p) 
// you can get PI with this script

////////////////////Objects///////////////////////
// var User = {
//     name:"dati",
//     age:12,
//     surname:"chkcikvadze",
//     addres:"tbilisi"
// }
// console.log(User)

// var User = {
//     name:"dati",
//     age:12,
//     surname:"chkcikvadze",
//     addres:"tbilisi"
// }
// console.log(User.name)

// var User = {
//     name:"dati",
//     age:12,
//     surname:"chkcikvadze",
//     addres:"tbilisi"
// }
// console.log(User.age)

// var User = {
//     name:"dati",
//     age:12,
//     surname:"chkcisi",
//     Knowlege:{kvadze",
//     addres:"tbili
//         Accademy:"Goa",
//         AccademyType:"Best",
//     }
// }
// console.log(User.Knowlege.AccademyType)
////////////////Objects(In Javascipt(chashenebuli))//////////////////////////////////
// var date = new Date
// console.log(date)
// time in detals

// var date = new Date
// console.log(date.getFullYear())
// if you want only year 

///////////////////////////Math(object in js)/////////////////////////////////////////////
//var num =Math.floor
//floor aris marto mteli ricxvistvis

// var num = Math.round(12.56244)
// console.log(num)
// round aris ricxvis dasamrgvaleblad exla es gamoitans 13

// var num = Math.min(12,2,1,5,12,5,12,85,2,6,5,2,5,8,4,0.5)
// console.log(num)
// min am gadacemuli ricxvebidan yvelaze pataras gamoitans consolshi anu 0.5

// var num = Math.max(12,2,1,5,12,5,12,85,2,6,5,2,5,8,4,0.5)
// console.log(num)
// max am gadacemuli ricxvebidan yvelaze dids gamoitans consolshi anu 85

// var num = Math.random(15)
// console.log(num)
// random gamoitans gadacemuli anu 15; 0 idan 15 amde randomul ricxvs da tu floor ar gamoviyenet es sheidzleba iyos ragas esetis 1.57457547564675546574554

// var num = Math.PI
// console.log(num)
// PI aris matematikuri iracionaluri ricxvi xoda Math.PI gamoitans consoleshi PI s
////////////////////////////////Masives/////////////////////////////////////////////////////////////
// []-masivi-shegidzliat gadascet valuet nebismieri ram
// var array = ["dati","goa","is best","12"]
// console.log(array)

// var array = ["dati","goa","is best","12"]
// console.log(array[0])
// masividan shegidzliat wamoigot nebismieri komponrnti indeqsaciit [atvla iwyeba 0 idan]

// var User = [
//     {
//         name:"dati",
//         age:12
//     },
//     {
//         name:"dato",
//         age:12
//     }
// ]
// console.log(User)
// chven shegvidzlia masivshi shevqmnat araeti obieqti



// var User = [
//     {
//         name:"dati",
//         age:12
//     },
//     {
//         name:"dato",
//         age:12
//     }
// ]
// console.log(User[1])
// da aseve gamovidzaxot isini indeqsaciit





// var User = [
//     {
//         name:"dati",
//         age:12
//     },
//     {
//         name:"dato",
//         age:12
//     }
// ]
// console.log(User[1].name)
// da shegvidzlia aseve konkretuli elementic wamovigot
///////////////////////////////////Methods/////////////////////////////////
// pataradan didshi da piriqit

// var txt = "goa best"
// console.log(txt.toUpperCase())
// es gadaiyvans patara texts did textshi    toUpperCase()

// var txt = "GOA BEST"
// console.log(txt.toLowerCase())
// es ki piriqit   toLowerCase()

// textidan ricxvad
// var num = "20"
// console.log(parseInt(num))
// jer function mere cvladi
// da es text 20 s gadaqcevs ricxv 20 ad sadac ukve matematicuri operaciebi sheidzleba

// ramdeni caracteria textshi
// var txt = "goa-best!!"
// console.log(txt.letngh)
// es exla konsolshi 10 gamoitans imitom rom es txt sheicavs 10 simbolos da aseve space ebic itvleba


// aris tu ara t(aq nebis mieri rame) textshi
// var txt = "me var dati da miyvars programireba"
// console.log(txt.includes("t"))
// exla es gamoitans true imitom rom txt cvladi sheicavs "t"-s 


// var txt = "me var dati da miyvars programireba"
// console.log(txt.includes("z"))
// aq exla raxan z ar aris cvlad txt shi  gamoitans false


/////////////////////////////Functions///////////////////////////////////////////////////

// function PrintName(){
//     var name = "dati"
//     console.log(name)
// }
// PrintName()
// sheiqmna funqcia sadac {} chaiwera ra momxdaviyo anu seiqmna var name = "dati"da es funqcia gamovidzaxet
////////////////////////////parametrs(in Functions)//////////////////////////////
// function PrintName(name){
//     console.log(name)
// }
// PrintName("dati")
// aq function-s gadaeca parametrad name  function PrintName(name)  
//da shemdeg function-shi consolshi gamovitanet es parametri
//da gamodzaaxebisas(Funqciis) mivaniwet mnishvneloba


// function PrintName(name,age){
//     console.log(name,age)
// }
// PrintName("dati",12)

// functions shegvidzlia araerti parametri gadavcet

// function PrintName(name,age,...more){
//     console.log(more)
// }
// PrintName("dati",12,15,"goa",98)
// ...more nishnavs ai am name ad ages rac ar ekutvnis anu 0 da 1 s garda ,15,"goa",98
// egeni yvela shedis more shi usasrulod romc iyos yvela

// function test(){
//     var num = 200
// }
// console.log(num)
// es gamoitans errors imtom rom funqciis garet vidzaxebt da cvladi funqciashia

// var num 
// function test(){
//     num = 200
// }
// console.log(num)
//  aq undefined gamoitans imitom rom funqciis garet ki sheiqmna magram 
// mnishvneloba ar gadaeca da is gamovitanet consolshi;funqciashi gadaeca 
// mnishvneloba mara tu ar gamovidzaxet funqcia mnishvnelobas ver gamovitant


/////////////////////////////////funqciis sheqmnis tipebi////////////////////////////////////
// N1) KLASIKURI GZA
// function f1 (){
//     console.log("function 1")
// }
// // N2)
// var f2 = function(){
//     console.log("function 2")
// }
// // N3)
// f3 = () =>{
//     console.log("function 3")
// }

// f1()
// f2()
// f3()



// shehgvidzlia funqciashi funqcia gamovidzaxot magalitad :
// function f1 (){
//     f2()
// }

// var f2 = function(){
//     console.log("function 2")
// }
// f3 = () =>{
//     console.log("function 3")
// }
// f1()
// exla es gamoitans  function 2 imitom rom f1 tshi weria rom f2 gaaketos
// da f2 shi weria rom gomoitanos konsolshi function 2
//////////////////////////////////////////if operators//////////////////////////////////////////
// if (5>3){
//     console.log("This is True")
// }
// else{
//     console.log("This is False")
// }
// es gamoitans This is True imitom rom 5>3



// var num = 5
// if (num>3){
//     console.log("This is True")
// }
// else{
//     console.log("This is False")
// }
// shegvidzlia cvladic gamoviyenot
// es gamoitans This is True asesve imitom rom 5>3


// var bestaccademy = "goa"
// if (bestaccademy == "goa"){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
//  == aris gatoleba anu tu gautoldeba bestaccademy goa s mashin True


// var worstaccademy = "novatori"
// if (worstaccademy !== "goa"){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
// !== anu tu ar gautoldeba


// var num = 10
// var num1 = 20
// if (num > 2 && num1<50){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
// && nishnavs da s  anu tu romelime dairgva egreve false xdeba

// var num = 10
// var num1 = 20
// if (num > 20 || num1<50){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
// || nishavs an s anu or s tu erterti piroba mainc sruldeba mashin True aris



// var txt = ""
// if (txt == "banana"){
//     console.log("This is banana")
// }
// else if (txt == "dati"){
//     console.log("This is dati")
// }
// else if (txt == "goa"){
//     console.log("This is goa")
// }
// else{
//     console.log("name not found :(")
// }
// else if aris pythonshi elifis msgavsi anu tu gvinda rom dameatebiti piroba
// davamatot da egreve else ze ar gadavides js shesamowmeblad 

// var check =true
// if(check == true){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
//////////////////////////////////////////////switch///////////////////////////////////////////////////
// var txt = "dati"
// switch(txt){
//     case "gio":
//         console.log("gio")
//         break
//     case "dati":
//         console.log("dati")
//     case "temo":
//         console.log("temo")
//         break
//     default:
//         console.log("nothing")
    
// }
//////switch eci igive is aris  switch-pirveli if
// case-else if
// default - else
/////////////////////////////////////loops//////////////////////////////////////
// for(var i = 0;i<11;i++){
//     console.log(i+"-dati")
// }

// var arr= [1,2,3,4,5,6,"dati"]
// for(i=0;i>arr.length;i++){
//     console.log(arr[1])
// }
// ciklshi gavataret masivi
///////////////////////////////while loop////////////////////////////////
// var test = 0
// while(test < 10){
//     console.log(test + "-dati")
//     test++
// }
////////////////////////////forEach/////////////////////////////////////////
// var arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach(function(test){
//     console.log(test)
// }
// )
//////////////////////////////////////////intervals//////////////////////////////////////
// function test(){
//     console.log("Hello World")
// }
// setTimeout(test,2000)
// setTimeout kods tvirtavs setTimeout(test,aq ramdenic iqneba) miliwamis shemdeg

// setTimeout(() => {
//     console.log("Hello World")
// }, 2000)
// alternatiuli versia

// function test() {
//     console.log("dati")
// }
// setInterval(test,2000)
// es usasrulot dawers yovel 2000 miliwamshi(2 wamshi) dati s

// setInterval(() => {
//     console.log("Hello World")
// }, 2000)
// alternatiuri versia

// random magaliti amati
// var num = 0
// function test(){
//     num++
//     console.log(num)
// }
// setInterval(test,2000)

// random magaliti amati N2)

// var num = 0
// var interval
// function StartTimer(){
//     num++
//     console.log(num)
//     if(num > 10){
//         EndTimer()
//     }   
// }


// interval=setInterval(StartTimer,500)


// function EndTimer(){
//     clearInterval(interval)
//     console.log("Timer end :)")
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////dom////////////////////////////////////////////////////////////////////////////////////////
// var dati = document.querySelector(".dativar")
// console.log(dati.className)

// var dati = document.querySelector(".dativar")
// console.log(dati.textContent)

// var dati = document.querySelector(".dativar")
// console.log(dati.getAttribute("data-name"))

// var dati = document.querySelector(".dativar")
// dati.textContent = "gamarjoba jigo :)"

// var dati = document.querySelector(".dativar")
// dati.setAttribute("data-name", "test")

// var Box = document.getElementById("box")
// Box.style.width = "60px"
// Box.style.height = "60px"
// Box.style.backgroundColor = "red"

// var button = document.getElementById("btn")
// button.addEventListener("click",function(){
//     alert("hello")
// })

// var button = document.getElementById("btn")
// button.addEventListener("mouseover",function(){
//     alert("hello")
// })

// document.addEventListener("scroll",function(){
//     var ScrollValue = scrollY
//     console.log(ScrollValue)
//     if(ScrollValue == 158){
//         alert("your scroll position :)")
//     }
// })
/////////////////////////////////////////storage//////////////////////////////////////
// var input =document.getElementById("inp")
// var button =document.getElementById("btn")
// var text = document.getElementById("text")

// button.addEventListener("click",function(){
//     localStorage.setItem("name",input.value)
//     window.location = "index.html"
// })
// text.innerHTML = localStorage.getItem("name")
///////////////////////////////////////clasebi da ierarqia///////////////////////////////////////////
// class User {
//     PrintUser(){
//         console.log("Some name")
//     }
// }

// var user = new User()
// user.PrintUser()

// class User {
//     PrintUser(name){
//         console.log(name)
//     }
// }

// var user = new User()
// user.PrintUser("dati")

// class User {
//     constructor(Name,Age){
//         this.name = Name
//         this.age = Age
//     }
//     PrintValues(){
//         console.log(this.name, this.age)
//     }
// }

// var user = new User("dati",12)
// user.PrintValues()




// function f1(){
//     return class User{
//         Moderator(){
//             console.log("This is moder function")
//         }
//     }
// }

// class Seccond extends f1(){

// } 

// var sec = new Seccond()
// sec.Moderator()


/////////////////////////////////try&catch////////////////////////////////////////////
// try{
//     console.logg("hello")
// }
// catch(error){
//     console.log("error " + error)
// }
///////////////////////////////////ასინქრონული ფუნქცია////////////////////////////////
// var user = true
// var promise = new Promise((reslove,reject)=>{
//     if(user){
//         reslove("user is here")
//     }
//     else{
//        reject("user leave")
//     }
// })
// promise.then((message)=>{
//         console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })


function f1() {
    return new Promise((reslove)=>{
        setTimeout(()=>{
            console.log("function called")
        }   ,3000)
    })
}

async function f2(){
    console.log("...loading")
    var result = await f1()
    console.log(result) 
}
f2()