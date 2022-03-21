//Years

function networth() {
  //assets
  let fd = document.getElementById("fd").valueAsNumber;
  let rd = document.getElementById("rd").valueAsNumber;
  var li = document.getElementById("li").valueAsNumber;
  var ihp = document.getElementById("ihp").valueAsNumber;
  var mfe = document.getElementById("mfe").valueAsNumber;
  var mfd = document.getElementById("mfd").valueAsNumber;
  var sh = document.getElementById("sh").valueAsNumber;
  var pf = document.getElementById("pf").valueAsNumber;
  var ppt = document.getElementById("ppt").valueAsNumber;
  var ppf = document.getElementById("ppf").valueAsNumber;
  var gl = document.getElementById("gl").valueAsNumber;
  var sv = document.getElementById("sv").valueAsNumber;
  //liabilities
  var hl = document.getElementById("hl").valueAsNumber;
  var pl = document.getElementById("pl").valueAsNumber;
  var ot = document.getElementById("ot").valueAsNumber;
  var years = document.getElementById("years").valueAsNumber;

  var assets = fd + rd + li + ihp + mfe + mfd + sh + pf + ppt + ppf + gl + sv;

  var liabilities = hl + pl + ot;

  var fdAmount = fd * (Math.pow((1 + 7.5 / 100), years));
  var fdInterest = fdAmount - fd;

  var ppfAmount = ppf * (Math.pow((1 + 7.9 / 100), years))
  var ppfInterest = ppfAmount - ppf;

  var pfAmount = pf * (Math.pow((1 + 7.9 / 100), years))
  var pfInterest = pfAmount - pf;

  var svAmount = sv * (Math.pow((1 + 4 / 100), years))
  var svInterest = svAmount - sv;

  var rdAmount = rd * (Math.pow((1 + 9 / 100), years))
  var rdInterest = rdAmount - rd;

  var mfeAmount = mfe * (Math.pow((1 + 15 / 100), years))
  var mfeInterest = mfeAmount - mfe;

  var mfdAmount = mfd * (Math.pow((1 + 9 / 100), years))
  var mfdInterest = mfdAmount - mfd;

  var shAmount = sh * (Math.pow((1 + 15 / 100), years))
  var shInterest = shAmount - sh;

  var glAmount = gl * (Math.pow((1 + 5 / 100), years))
  var glInterest = glAmount - gl;

  var pptValue = ppt - hl;
  var pptAmount = pptValue * (Math.pow((1 + 7 / 100), years))
  var pptInterest = pptAmount - pptValue;

  var networth = fdAmount + ppfAmount + pfAmount + svAmount + rdAmount + mfeAmount + mfdAmount + shAmount + glAmount + pptAmount ;
  var totalInterest =
    fdInterest + ppfInterest + pfInterest + svInterest + rdInterest + mfeInterest + mfdInterest + shInterest + glInterest + pptInterest;

  

  document.getElementById("totalInterest").innerHTML = totalInterest;
  document.getElementById("networth").innerHTML = networth;


  // window.location = "http://www.myurl.com/search/" + txt; ...
}

// window.location = "http://www.myurl.com/search/" + txt; ...
