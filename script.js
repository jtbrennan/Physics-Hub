function calculateForce() {
  
  var forceVal = document.getElementById("forceVal").value;
  var forceVal2 = document.getElementById("forceVal2").value;
  var forceVal3 = document.getElementById("forceVal3").value;
  
  var forceCalculate = parseFloat(forceVal);
  var forceCalculate2 = parseFloat(forceVal2);
  var forceCalculate3 = parseFloat(forceVal3);
  
  var answer;

  if (forceVal.length >= 1 && forceVal2.length >= 1 && forceVal3.length == 0) {
    answer = "a = "
    answer += forceCalculate / forceCalculate2;
    answer += "m/s^2";
    alert(answer);
}

  if (forceVal.length >= 1 && forceVal3.length >= 1 && forceVal2.length == 0) {
    answer = "m = "
    answer += forceCalculate / forceCalculate3;
    answer += "kg";
    alert(answer);
  }

  if (forceVal2.length >= 1 && forceVal3.length >= 1 && forceVal.length == 0) {
    answer = "F = "
    answer += forceCalculate2 * forceCalculate3;
    answer += "N";
    alert(answer);
  }
  document.getElementById('displayAnswer').innerHTML = '';
  var paragraph = document.getElementById("displayAnswer");
  var text = document.createTextNode(answer);
  paragraph.appendChild(text);
}




function calculateDisplacement() {
  
  var displacementVal = document.getElementById("displacementVal").value;
  var displacementVal2 = document.getElementById("displacementVal2").value;
  var displacementVal3 = document.getElementById("displacementVal3").value;
  
  var displacementCalculate = parseFloat(displacementVal);
  var displacementCalculate2 = parseFloat(displacementVal2);
  var displacementCalculate3 = parseFloat(displacementVal3);
  
  var answer;

  if (displacementVal.length >= 1 && displacementVal2.length >= 1 && displacementVal3.length == 0) {
    answer = "t = "
    answer += displacementCalculate / displacementCalculate2;
    answer += "s";
    alert(answer);
}

  if (displacementVal.length >= 1 && displacementVal3.length >= 1 && displacementVal2.length == 0) {
    answer = "v = "
    answer += displacementCalculate / displacementCalculate3;
    answer += "m/s";
    alert(answer);
  }

  if (displacementVal2.length >= 1 && displacementVal3.length >= 1 && displacementVal.length == 0) {
    answer = "d = "
    answer += displacementCalculate2 * displacementCalculate3;
    answer += "m";
    alert(answer);
  }
  document.getElementById('displayAnswer').innerHTML = '';
  var paragraph = document.getElementById("displayAnswer");
  var text = document.createTextNode(answer);
  paragraph.appendChild(text);
}



function calculateFriction() {
  var frictionVal = document.getElementById("frictionVal").value;
  var frictionVal2 = document.getElementById("frictionVal2").value;
  var frictionVal3 = document.getElementById("frictionVal3").value;
  
  var frictionCalculate = parseFloat(frictionVal);
  var frictionCalculate2 = parseFloat(frictionVal2);
  var frictionCalculate3 = parseFloat(frictionVal3);
  
  var answer;

  if (frictionVal.length >= 1 && frictionVal2.length >= 1 && frictionVal3.length == 0) {
    answer = "Fn = "
    answer += frictionCalculate / frictionCalculate2;
    answer += "N";
    alert(answer);
}

  if (frictionVal.length >= 1 && frictionVal3.length >= 1 && frictionVal2.length == 0) {
    answer = "μ = "
    answer += frictionCalculate / frictionCalculate3;
    answer += "";
    alert(answer);
  }

  if (frictionVal2.length >= 1 && frictionVal3.length >= 1 && frictionVal.length == 0) {
    answer = "Fs = "
    answer += frictionCalculate2 * frictionCalculate3;
    answer += "N";
    alert(answer);
  }
  
  document.getElementById('displayAnswer').innerHTML = '';
  var paragraph = document.getElementById("displayAnswer");
  var text = document.createTextNode(answer);
  paragraph.appendChild(text);
}


function calculateKinetic() {
  var kineticVal = document.getElementById("kineticVal").value;
  var kineticVal2 = document.getElementById("kineticVal2").value;
  var kineticVal3 = document.getElementById("kineticVal3").value;
  
  var kineticCalculate = parseFloat(kineticVal);
  var kineticCalculate2 = parseFloat(kineticVal2);
  var kineticCalculate3 = parseFloat(kineticVal3);
  
  var answer;

  if (kineticVal.length >= 1 && kineticVal2.length >= 1 && kineticVal3.length == 0) {
    sub_answer = 2 * kineticCalculate;
    sub_answer = sub_answer / kineticCalculate2
    answer = "V = " + Math.sqrt(sub_answer) + "m/s"
    alert(answer);
}

  if (kineticVal.length >= 1 && kineticVal3.length >= 1 && kineticVal2.length == 0) {
    var sub_answer = 2 * kineticCalculate;
    var sub_sub_answer = sub_answer / kineticCalculate3 ** 2;
    answer = "V = " + sub_sub_answer + "m/s"
    alert(answer);
  }

  if (kineticVal2.length >= 1 && kineticVal3.length >= 1 && kineticVal.length == 0) {
    answer = "Fs = ";
    sub_answer = 0.5 * kineticCalculate2
    answer += sub_answer * kineticCalculate3 ** 2
    answer += "N";
    alert(answer);
  }
  
  document.getElementById('displayAnswer').innerHTML = '';
  var paragraph = document.getElementById("displayAnswer");
  var text = document.createTextNode(answer);
  paragraph.appendChild(text);
}


