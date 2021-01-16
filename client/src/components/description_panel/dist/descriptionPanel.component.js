"use strict";
exports.__esModule = true;
var react_1 = require("react");
var iso_639_1_1 = require("iso-639-1");
require("./descriptionPanel.css");
var DescriptionPanel = function (props) {
    var posterPath = props.posterPath, title = props.title, releaseDate = props.releaseDate, genreIds = props.genreIds, popularity = props.popularity, originalLanguage = props.originalLanguage, voteCount = props.voteCount, voteAverage = props.voteAverage, adult = props.adult, overview = props.overview;
    // const addGenres = (arr: object[]) => {
    //   arr.reduce((result, item) => {
    //     result += `${item}/`;
    //     return result;
    //   }, '');
    // };
    return (react_1["default"].createElement("div", { className: "description-panel card-panel row" },
        react_1["default"].createElement("div", { className: "poster col s12 m12 l4 xl4", style: { backgroundImage: "url(" + posterPath + ")" } }),
        react_1["default"].createElement("div", { className: "info black-text col s12 m12 l7 xl7 \r\n        offset-l1 offset-xl1" },
            react_1["default"].createElement("div", { className: "title" },
                react_1["default"].createElement("h4", null, title)),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'release' },
                react_1["default"].createElement("span", { className: 'category' }, "Date of release:"),
                react_1["default"].createElement("span", { className: 'description' }, releaseDate ? releaseDate : '-')),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'genres' },
                react_1["default"].createElement("span", { className: 'category' }, "Genres:"),
                react_1["default"].createElement("span", { className: 'description' }, genreIds)),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'popularity' },
                react_1["default"].createElement("span", { className: 'category' }, "Popularuty:"),
                react_1["default"].createElement("span", { className: 'description' }, popularity)),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'laguage' },
                react_1["default"].createElement("span", { className: 'category' }, "Language:"),
                react_1["default"].createElement("span", { className: 'description' }, iso_639_1_1["default"].getName(originalLanguage))),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'vote-count' },
                react_1["default"].createElement("span", { className: 'category' }, "Number of votes:"),
                react_1["default"].createElement("span", { className: 'description' }, voteCount)),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'vote-average' },
                react_1["default"].createElement("span", { className: 'category' }, "Average rating:"),
                react_1["default"].createElement("span", { className: 'description' }, voteAverage)),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'adult' },
                react_1["default"].createElement("span", { className: 'category' }, "Adult movie:"),
                react_1["default"].createElement("span", { className: 'description' }, adult ? 'Yes' : 'No')),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'overview' },
                react_1["default"].createElement("span", { className: 'category' }, "Movie overview:"),
                react_1["default"].createElement("span", { className: 'description' }, overview)))));
};
exports["default"] = DescriptionPanel;
