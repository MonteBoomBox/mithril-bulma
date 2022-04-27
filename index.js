import m from "mithril"
import Main from "./Main"

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Main)
        }
    },
    "/home": {
        render: function() {
            return m(Main)
        }
    },
    "/asd": {
        render: function() {
            return m(Main)
        }
    },
})