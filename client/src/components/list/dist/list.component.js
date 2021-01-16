"use strict";
exports.__esModule = true;
var react_1 = require("react");
var iso_639_1_1 = require("iso-639-1");
require("./list.css");
var ListComponent = function (props) {
    var data = props.data, onItemSelected = props.onItemSelected;
    var renderListItem = function (item) {
        return (react_1["default"].createElement("div", { className: 'item-wrapper valign-wrapper row' },
            react_1["default"].createElement("div", { className: "item-poster col s2", style: { backgroundImage: "url(" + item.posterPath + ")" } }),
            react_1["default"].createElement("div", { className: 'item-description col s4 offset-s4' },
                react_1["default"].createElement("span", { className: 'item_title' }, item.title),
                react_1["default"].createElement("span", { className: 'item_genre' }, item.genreIds),
                react_1["default"].createElement("span", { className: 'item_release_date' }, item.releaseDate),
                react_1["default"].createElement("span", { className: 'item_language' }, iso_639_1_1["default"].getName(item.originalLanguage)),
                react_1["default"].createElement("span", null)),
            react_1["default"].createElement("div", { className: 'item-additional-info col s2' },
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("i", { className: "material-icons" }, "grade")),
                react_1["default"].createElement("span", { className: 'item-rating' }, item.voteAverage),
                react_1["default"].createElement("div", { className: 'item-adult' }, item.adult ? '+18' : ''))));
    };
    var list = data.map(function (item) {
        var id = item.id;
        var renderItem = renderListItem(item);
        return react_1["default"].createElement("li", { key: id, onClick: function () { return onItemSelected(id); }, className: 'list hoverable teal lighten-5' }, renderItem);
    });
    return react_1["default"].createElement("ul", null, list);
};
exports["default"] = ListComponent;
