+ import React from 'react ';
+ import { outlet ,use Navigate } from' react-router';
+ import { Navlink } from'react-router-dom';
+ 
  + const project =()=>{
  + const navigation = use navigate()
    + const styleno={
      +  display:"flex",
    + justify content :"center,"
    +  font size : 20px
    +
    +  }
+ return(
  + <>
  <div style = { styleno}>
  + button on click = function fun(){
    +      navigation (" /payment" )}}> buy now </button>
  + </div>
  + <div>
+  <nav>
+  < navlink to =" mobile" clasname ="navlink"> laptop </navlink>
+ < navlink to = " laptop" classname "navlink"> laptop</navlink>
+ </nav>
+  < outlet/>
  +  </div>
+ </>
+  )
  + }
+ export default project
  

  
