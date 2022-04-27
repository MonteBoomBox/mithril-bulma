import m from 'mithril'
import Util from './Utility'
    
var Navbar = {
    view: function(vnode) {
        return m(`nav.navbar.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Brand: {
        view: function(vnode) {
            return m(".navbar-brand", vnode.attrs, vnode.children)
        }
    },

    Link: {
        view: function(vnode) {
            return m(".navbar-link", vnode.attrs, vnode.children)
        }
    },

    Menu: {
        view: function(vnode) {
            return m(".navbar-menu", vnode.attrs, vnode.children)
        }
    },

    Start: {
        view: function(vnode) {
            return m(".navbar-start", vnode.attrs, vnode.children)
        }
    },

    End: {
        view: function(vnode) {
            return m(".navbar-end", vnode.attrs, vnode.children)
        }
    },

    Dropdown: {
        view: function(vnode) {
            return m(`.navbar-dropdown.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
        }
    },

    Item: {
        view: function(vnode) {
            return m(`a.navbar-item.${Util.getClasses(vnode.attrs)}.${vnode.attrs.dropdown ? "has-dropdown" : ""}`, vnode.attrs, vnode.children)
        }
    },
}
    
export default Navbar