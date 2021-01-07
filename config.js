var dataUrl = 'data/liq3.csv';
var maxZoom = 17;
var fieldSeparator = ',';
var baseUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var baseAttribution = 'Project by Conor Vanek under Creative Commons using public records and open-source tools.<br />Data, imagery and map information provided by:<a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a><br /> Liquor store info: <a href="https://www.tabc.state.tx.us/PublicInquiry/Default.aspx" target="_blank"> TABC Public Inquiry</a><br />Address Geocoding: <a href="http://geoservices.tamu.edu/Services/Geocode" target="_blank">Texas A&M Geoservices</a><br />Population Data (2016): <a href = "https://www.census.gov/developers/" target="_blank">US Census API</a>';
var subdomains = 'abc';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "Name";
var opacity = 1.0;
