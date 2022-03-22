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

function retirement() {
  //assets
  let age = document.getElementById("age").valueAsNumber;
  let tar = document.getElementById("tar").valueAsNumber;
  var cagr = document.getElementById("cagr").valueAsNumber;
  var msv = document.getElementById("msv").valueAsNumber;


  var ror = (cagr/100)/12;
  var toi = (tar-age)*12;
  var totalSavings = msv*12*(tar-age);
  console.log(totalSavings,toi,ror)
  var matureAmount = -FV(ror,toi,msv,0,0);
  console.log(matureAmount);
  var ltcg = matureAmount-totalSavings;
  var cgtax = ltcg*(10/100);
  var mawotax = (matureAmount-cgtax).toFixed(2);
  var mincr = (mawotax/10000000).toFixed(2);

 

  document.getElementById("totalSavings").innerHTML = totalSavings;
  document.getElementById("matureAmount").innerHTML = matureAmount;
  document.getElementById("ltcg").innerHTML = ltcg;
  document.getElementById("cgtax").innerHTML = cgtax;
  document.getElementById("mawotax").innerHTML = mawotax;
  document.getElementById("mincr").innerHTML = mincr;

  // window.location = "http://www.myurl.com/search/" + txt; ...
}

function inflation() {
  //assets
  let age = document.getElementById("age").valueAsNumber;
  let tar = document.getElementById("tar").valueAsNumber;
  var mexp = document.getElementById("mexp").valueAsNumber;
  var aexp = document.getElementById("aexp").valueAsNumber;
  var inf = document.getElementById("inf").valueAsNumber;



 
  var rage = (tar-age);
  
  var mexpr = FV(inf,rage,0,-aexp,1)/12;
  
 

  document.getElementById("rage").innerHTML = rage;
  document.getElementById("mexpr").innerHTML = mexpr;


  // window.location = "http://www.myurl.com/search/" + txt; ...
}
function FV(rate, nper, pmt, pv, type) {
  var pow = Math.pow(1 + rate, nper);
  let fv;
  pv=pv||0;
  type=type||0;
  if (rate) {
   fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
  } else {
   fv = -1 * (pv + pmt * nper);
  }
  return fv.toFixed(2);
}