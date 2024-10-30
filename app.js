/* var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var cwidth, cheight;
var shells = [];
var pass = [];

var colors = ['ff5252', '#ff4081', '#e040fb', '#7c4dff', '#53dff', '#40cdff', '#18ffff', '64ffda', '69f0ae', 'b2fff59'];

window.onresize = function() {reset();}
reset();
function reset() {

    cwidth = window.innerWidth;
    cheight = window.innerHeight;
    c.width = cwidth;
    c.height = cheight;
}

function newShells(){
    var left = (Math.random() > 0.5 );
    var shells = {};
    shells.x = (1*left);
    shells.y = 1;
    shells.xoff = (0.01 + Math.random() * 0.007)* (left ? 1: -1);
    shells.yoff = 0.01 + Math.random() * 0.007;
    shells.size = Math.random() * 6 + 3;
    shells.color = colors[Math.floor(Math.random() * colors.length )];

    shells.push(shells);
}

function newPass(shells) {
    var pasCount = Math.cell(Math.pow(shells.size, 2) * Math.PI);

    for (i = 0; i < pasCount; i++){

        var pas = {}
        pas.x = shells.x * cwidth;
        pas.y = shells.y * cheight;

        var a = Math.random() * 4;
        var s = Math.random() * 10;

        pas.xoff = s * Math.sin((5-a) * (Math.PI /  2));
        pas.yoff = s * Math.sin(a * (Math.PI / 2));

        pas.color = shells.color;
        pas.size = Math.sqrt(shells.size);

        if (pass.length < 1000) { pass.push(pas); }

    }
}

var lastRun = 0;
function Run() {

    var dt = 1;
    if (lastRun != 0) { dt = Math.min(50, (performance.now() - lastRun)); }
    lastRun = performance.now();

    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,cwidth,cheight);

    if ((shells.length < 10) && (Math.random() > 0.96)) { newShells(); }

    for (let ix in shells) {

        var shells = shells[ix];

        ctx.beginPath();
        ctx.arc(shells.x * cwidth, shells.y * cheight , shells.size, 0, 2 * Math.PI);
        ctx.fillStyle = shells.color;
        ctx.fill();

        shells.x -= shells.xoff;
        shells.y -= shells.yoff;
        shells.xoff -= (shells.xoff * dt * 0.001);
        shells.yoff -= ((shells.yoff + 0.2) * dt * 0.00005);

        if (shells.yoff < -0.005) {
            newPass(shells);
            shells.splice(ix, 1);
        }
    }


for (let ix in pass) {
    var pas = pass[ix];

    ctx.beginPath();
    ctx.arc(pas.x, pas.y, pas.size, 0, 2 * Math.PI);
    ctx.fillStyle = pas.color;
    ctx.fill();

    pas.x -= pas.xoff;
    pas.y -= pas.yoff;
    pas.xoff -= (pas.xoff * dt * 0.001);
    pas.yoff -= ((pas.yoff + 5) * dt * 0.00005);
    pas.size -= (dt * 0.002 * Math.random());

    if ((pas.y > cheight) || (pas.y < -50) || (pas.size <= 0)){
        pass.splice(ix, 1);
    }
}
requestAnimationFrame(Run);
} */

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var cwidth, cheight;
var shells = [];
var pass= [];

var colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];

window.onresize = function() { reset(); }
reset();
function reset() {

  cwidth = window.innerWidth;
	cheight = window.innerHeight;
	c.width = cwidth;
	c.height = cheight;
}

function newShell() {

  var left = (Math.random() > 0.5);
  var shell = {};
  shell.x = (1*left);
  shell.y = 1;
  shell.xoff = (0.01 + Math.random() * 0.007) * (left ? 1 : -1);
  shell.yoff = 0.01 + Math.random() * 0.007;
  shell.size = Math.random() * 6 + 3;
  shell.color = colors[Math.floor(Math.random() * colors.length)];

  shells.push(shell);
}

function newPass(shell) {

  var pasCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);

  for (i = 0; i < pasCount; i++) {

    var pas = {};
    pas.x = shell.x * cwidth;
    pas.y = shell.y * cheight;

    var a = Math.random() * 4;
    var s = Math.random() * 10;

		pas.xoff = s *  Math.sin((5 - a) * (Math.PI / 2));
  	pas.yoff = s *  Math.sin(a * (Math.PI / 2));

    pas.color = shell.color;
    pas.size = Math.sqrt(shell.size);

    if (pass.length < 1000) { pass.push(pas); }
  }
}

var lastRun = 0;
Run();
function Run() {

  var dt = 1;
  if (lastRun != 0) { dt = Math.min(50, (performance.now() - lastRun)); }
	lastRun = performance.now();

  //ctx.clearRect(0, 0, cwidth, cheight);
	ctx.fillStyle = "rgba(0,0,0,0.25)";
	ctx.fillRect(0, 0, cwidth, cheight);

  if ((shells.length < 10) && (Math.random() > 0.96)) { newShell(); }

  for (let ix in shells) {

    var shell = shells[ix];

    ctx.beginPath();
    ctx.arc(shell.x * cwidth, shell.y * cheight, shell.size, 0, 2 * Math.PI);
    ctx.fillStyle = shell.color;
    ctx.fill();

    shell.x -= shell.xoff;
    shell.y -= shell.yoff;
    shell.xoff -= (shell.xoff * dt * 0.001);
    shell.yoff -= ((shell.yoff + 0.2) * dt * 0.00005);

    if (shell.yoff < -0.005) {
      newPass(shell);
      shells.splice(ix, 1);
    }
  }

  for (let ix in pass) {

    var pas = pass[ix];

    ctx.beginPath();
    ctx.arc(pas.x, pas.y, pas.size, 0, 2 * Math.PI);
    ctx.fillStyle = pas.color;
    ctx.fill();

    pas.x -= pas.xoff;
    pas.y -= pas.yoff;
    pas.xoff -= (pas.xoff * dt * 0.001);
    pas.yoff -= ((pas.yoff + 5) * dt * 0.0005);
    pas.size -= (dt * 0.002 * Math.random())

    if ((pas.y > cheight)  || (pas.y < -50) || (pas.size <= 0)) {
        pass.splice(ix, 1);
    }
  }
  requestAnimationFrame(Run);
}