const server = require("../config/server");
const isProduction = server.isProduction;
const baseUrl = isProduction ? `https://www.pggallery.com` : `http://localhost:8080`;

module.exports = {
    "name": "pgGallery",
    "email": "contactß@pggallery.com",
    "phoneForTel": "",
    "phoneFormatted": "",
    "address": {
        "lineOne": "",
        "lineTwo": "",
        "city": "Kansas City",
        "state": "MO",
        "zip": "64106",
        "country": "US",
        "mapLink": ""
    },
    "socials": {
        "facebook": "",
        "instagram": "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": baseUrl
};
