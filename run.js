const satellite = require("./src/satellite");
const iridium = require("./src/iridium");

// COOKIE需要先通过浏览器调到中文

// const names = ["ISS", "IridiumFlares"];
// https://www.heavens-above.com/PassSummary.aspx?satid=41765&lat=0&lng=0&loc=Unspecified&alt=0&tz=UCT

satellite.getTable({
	target: 25544,
	pages: 4,
	root: "./public/data/"
}); //ISS

// Also fetch Iridium flares (uncomment if you don't want this to run)
iridium.getTable({
	pages: 4,
	root: "./public/data/"
});
