import m from 'mithril'
import Icon from "./Icon"
import Util from './Utility'
    
var Dropdown = {
    view: function(vnode) {
        return m(`.dropdown.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    },

    Trigger: {
        view: function(vnode) {
            return m(".dropdown-trigger", [
                m("button.button", [
                    m("span", vnode.children),
                    m(Icon, { icon: "fas fa-angle-down" })
                ])
            ])
        }
    },

    Menu: {
        view: function(vnode) {
            return m(".dropdown-menu", { ...vnode.attrs }, m(".dropdown-content", vnode.children))
        }
    },

    Item: {
        view: function(vnode) {
            return m("a.dropdown-item", { ...vnode.attrs }, vnode.children)
        }
    },

    Divider: {
        view: function(vnode) {
            return m("hr.dropdown-divider")
        }
    }
}
    
export default Dropdown