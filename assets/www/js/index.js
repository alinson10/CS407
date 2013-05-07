
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function addElement(){

	var ni = document.getElementById('myDiv');

  	var numi = document.getElementById('theValue');

  	var num = (document.getElementById('theValue').value -1)+ 2;

 	 numi.value = num;

 	 var newdiv = document.createElement('div');

 	 var divIdName = 'my'+num+'Div';

 	 newdiv.setAttribute('id',divIdName);
	 
	 var num1 = "class" + num;
	 
	 var num2 = "grade" + num;
	 
 	 newdiv.innerHTML = '<select name="'+ num1 + '" width= "150" style="width: 250px"><option value="5">Math 221/217/275</option><option value="5">Math 222/276</option><option value="4">Math 222 - spring semester 2013 or later</option></select><select name="'+ num2 + '" width="150" style="width: 60px"><option value="4">A</option><option value="3.5">AB</option><option value="3">B</option></select><a href=\'#\' onclick=\'removeElement('+divIdName+')\'>[X] </a>';

 	 ni.appendChild(newdiv);
	
	
	//document.getElementById("myDiv").innerHTML = "hello";

	
	return false;

}

function calculate(form){
	
	var numClasses = document.getElementById('theValue').value;
	
	var numClasses1 = (numClasses - 1) + 2;
	
	var totCredits = 0;
	
	var totGradePt = 0;
	
	var totCreditsM = document.getElementById('choice1');
	
	var totGradePtM = document.getElementById('choice2');
	
	var finalGpa = document.getElementById('choice3');
	
	var credits = 0;
	
	var gradePt = 0;
	
	for(var classNumber = 0; classNumber < numClasses1; classNumber++){
		
		
		//Get the credits for a class
		var gradeElement = "class" + classNumber;
	
		var gradeselection = form.elements[gradeElement].options.selectedIndex;
	
		credits = form.elements[gradeElement].options[gradeselection].value;
		
		//SUM UP CREDITS
		totCredits = Number(totCredits) + Number(credits);
		
		//Grade Points
		
		var gradeElement2 = "grade" + classNumber;
		
		var gradeselection2 = form.elements[gradeElement2].options.selectedIndex;
	
		gradePt = form.elements[gradeElement2].options[gradeselection2].value;
		
		totGradePt = Number(totGradePt) + (Number(gradePt) * Number(credits));
		
		
		
	}
	
	var finG = Number(totGradePt)/Number(totCredits);
	
	totCreditsM.innerHTML = "TOTAL CREDITS: "+totCredits;
	
	totGradePtM.innerHTML = "TOTAL GRADE POINTS: "+totGradePt;
	
	finalGpa.innerHTML="MATH/SCIENCE GPA: "+ (finG).toFixed(3);
	
	
	
	
	
	
	return false;
}

 var HTTP_Response_Holder = null ; 

function loadHTTPData() {
      
      	document.getElementById("output").innerHTML = "poop"; 
      	
      	
      	
       
          HTTP_Response_Holder = new XMLHttpRequest();
        
        HTTP_Response_Holder.open( "GET", "http://en.wikipedia.org/wiki/Cheese", true );
        
        HTTP_Response_Holder.onreadystatechange=function() {     
        if (xmlhttp.readyState==4) {
            if (xmlhttp.status == 200) {

                // pass the response to the callback function
                callback(null, xmlhttp.responseText);

            } else {
                // pass the error to the callback function
                callback(xmlhttp.statusText);
            }
        }
    }
    xmlhttp.send(null);
        
        
        
       

 
        return false;
}
  
  
  
  
  
  
  
function process() {
        if ( HTTP_Response_Holder.readyState != 4 ) return ;
       		//document.getElementById("output").innerHTML = "In Process" ; 
         
         document.getElementById("output").innerHTML = HTTP_Response_Holder.responsetext ;         
                
} 