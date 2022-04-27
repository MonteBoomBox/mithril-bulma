import m from 'mithril'
    
var Menu = {
    view: function(vnode) {
        return m('aside.menu', { ...vnode.attrs }, vnode.children)
    },

    Label: {
        view: function(vnode) {
            return m("p.menu-label", { ...vnode.attrs }, vnode.children)
        }
    },

    List: {
        view: function(vnode) {
            return m("ul.menu-list", { ...vnode.attrs }, vnode.children)
        }
    },

    Item: {
        view: function(vnode) {
            return m("li", { ...vnode.attrs }, m(`a.${vnode.attrs.active && "is-active"}`, { ...vnode.attrs }, vnode.children))
        }
    }
}
    
export default Menu