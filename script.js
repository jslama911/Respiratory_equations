/*These are the functions for the equations*/
function calculateAlveolarGasEquation() {
    var fiO2 = document.getElementById("PAO2_fiO2").value;
    var patm = document.getElementById("patm").value;
    var ph2O = document.getElementById("ph2O").value;
    var paCo2 = document.getElementById("paCo2").value;
    var rq = document.getElementById("rq").value;

    var result = fiO2 * (patm - ph2O) - (paCo2 / rq);
    var result = result.toFixed(2);

    document.getElementById("alveolarGasEquationResult").innerHTML = "PAO2 = " + result;
}

function calculatePFRatio() {
    var paO2 = document.getElementById("paO2").value;
    var fiO2 = document.getElementById("PF_fiO2").value;
    if (fiO2 > 1){
        fiO2 = fiO2 / 100;
    }

    var result = paO2 / fiO2;
    var result = result.toFixed(2);
    console.log(result)
    console.log(paO2)
    console.log(fiO2)

    document.getElementById("pfRatioResult").innerHTML = "P/F Ratio = " + result;
}

function calculateVE() {
    var rr = document.getElementById("rr").value;
    var tv = document.getElementById("vt").value;

    var result = rr * tv;
    var result = result / 1000;

    document.getElementById("veResult").innerHTML = "VE = " + result + "L";
}
/*need to make a radio button or dropdown for male or female*/
function calculateIBW() {
    var height = document.getElementById("height").value;
    if (document.getElementById('female').checked) {
        var result = (105 + 5 * (height - 60));
        var result = result.toFixed(2);
    }
    else if (document.getElementById('male').checked) {
        var result = (105 + 6 * (height - 60));
        var result = result.toFixed(2);
    }

    document.getElementById("ibwResult").innerHTML = "IBW = " + result + "kg";
}

function calculateVA(){
    var rr = document.getElementById("rrVA").value;
    var tv = document.getElementById("vtVA").value;
    var deadSpace = document.getElementById("deadSpaceVA").value;

    var result = rr * (tv - deadSpace);
    var result = result / 1000;

    document.getElementById("vaResult").innerHTML = "VA = " + result + "L";
}

function calculateRSBI(){
    var rr = document.getElementById("rrRSBI").value;
    var tv = document.getElementById("vtRSBI").value;

    var result = rr / (tv / 1000);
    var result = result.toFixed(2);

    document.getElementById("rsbiResult").innerHTML = "RSBI = " + result;
}

function calculateFiO2() {
    var literFlow = document.getElementById("literFlow").value;
    var fio2 = 20 + (4 * literFlow);
    document.getElementById("fio2Result").innerHTML = "FiO2: " + fio2;
}

function calculateCI() {
    var cardiacOutput = document.getElementById("cardiacOutput").value;
    var bodySurfaceArea = document.getElementById("bodySurfaceArea").value;
    var ci = cardiacOutput / bodySurfaceArea;
    document.getElementById("ciResult").innerHTML = "CI: " + ci;
}

function calculateQT() {
    var heartRate = document.getElementById("heartRate").value;
    var strokeVolume = document.getElementById("strokeVolume").value;
    var qt = heartRate * strokeVolume;
    document.getElementById("qtResult").innerHTML = "QT: " + qt;
}

function calculateCO() {
    var o2Consumption = document.getElementById("o2Consumption").value;
    var caO2 = document.getElementById("caO2").value;
    var cvO2 = document.getElementById("cvO2").value;
    var co = (o2Consumption / (caO2 - cvO2));
    document.getElementById("coResult").innerHTML = "CO: " + co;
}

function calculateMAP() {
    var systolicBP = document.getElementById("systolicBP").value;
    var diastolicBP = document.getElementById("diastolicBP").value;
    var map = (systolicBP + (2 * diastolicBP)) / 3;
    document.getElementById("mapResult").innerHTML = "MAP: " + map;
}

function calculateSV() {
    var cardiacOutput = document.getElementById("cardiacOutputSV").value;
    var heartRate = document.getElementById("heartRateSV").value;
    var sv = cardiacOutput / heartRate;
    document.getElementById("svResult").innerHTML = "SV: " + sv;
}

function calculateHRmax() {
    var age = document.getElementById("age").value;
    var hrmax = 220 - age;
    document.getElementById("hrmaxResult").innerHTML = "HRmax: " + hrmax;
}

function calculateSVR() {
    var map = document.getElementById("mapSVR").value;
    var cvp = document.getElementById("cvpSVR").value;
    var cardiacOutput = document.getElementById("cardiacOutputSVR").value;
    var svr = (map - cvp) * (80 / cardiacOutput);
    document.getElementById("svrResult").innerHTML = "SVR: " + svr;
}

function calculatePVR() {
    var mpap = document.getElementById("mpap").value;
    var pcwp = document.getElementById("pcwp").value;
    var cardiacOutput = document.getElementById("cardiacOutputPVR").value;
    var pvr = (mpap - pcwp) * (80 / cardiacOutput);
    document.getElementById("pvrResult").innerHTML = "PVR: " + pvr;
}

function calculateCst() {
    var tidalVolume = document.getElementById("tidalVolumeCst").value;
    var plateauPressure = document.getElementById("plateauPressureCst").value;
    var peep = document.getElementById("peepCst").value;
    var cst = tidalVolume / (plateauPressure - peep);
    document.getElementById("cstResult").innerHTML = "Cst: " + cst;
}

function calculateCdyn() {
    var tidalVolume = document.getElementById("tidalVolumeCdyn").value;
    var peakPressure = document.getElementById("peakPressureCdyn").value;
    var peep = document.getElementById("peepCdyn").value;
    var cdyn = tidalVolume / (peakPressure - peep);
    document.getElementById("cdynResult").innerHTML = "Cdyn: " + cdyn;
}


/*makes the collapsible buttons work*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

/*calculator*/
let nums = [];

    function display(value){
        document.getElementById("result").value += value;
    }

    function clearScreen(){
        document.getElementById("result").value = "";
    }

    function addition(){
        let x = document.getElementById("result").value;
        if (x != ""){
            nums.push(x);
            nums.push('+');
            document.getElementById("result").value = "";
            console.log(nums)
        }
    }

    function subtraction(){
        let x = document.getElementById("result").value;
        if (x != ""){
        nums.push(x);
        nums.push('-');
        document.getElementById("result").value = "";
        console.log(nums)
        }
    }

    function multiply(){
        let x = document.getElementById("result").value;
        if (x != ""){
        nums.push(x);
        nums.push('*');
        document.getElementById("result").value = "";
        console.log(nums)
        }
    }

    function division(){
        let x = document.getElementById("result").value;
        if (x != ""){
        nums.push(x);
        nums.push('/');
        document.getElementById("result").value = "";
        console.log(nums)
        }
    }

    function calculate(){
        let x = document.getElementById("result").value;
        nums.push(x);
        document.getElementById("result").value = "";
        let result = 0;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] == '+'){
                result = parseFloat(nums[i-1]) + parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
            else if (nums[i] == '-'){
                result = parseFloat(nums[i-1]) - parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
            else if (nums[i] == '*'){
                result = parseFloat(nums[i-1]) * parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
            else if (nums[i] == '/'){
                result = parseFloat(nums[i-1]) / parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
        }
        document.getElementById("result").value = result;
        nums = [];
    }

