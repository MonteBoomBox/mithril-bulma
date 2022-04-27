import m from 'mithril'
    
var Level = {
    view: function(vnode) {
        return m('nav.level', vnode.attrs, vnode.children)
    },

    Left: {
        view: function(vnode) {
            return m(".level-left", vnode.attrs, vnode.children)
        }
    },

    Right: {
        view: function(vnode) {
            return m(".level-right", vnode.attrs, vnode.children)
        }
    },

    Item: {
        view: function(vnode) {
            return m(".level-item", vnode.attrs, vnode.children)
        }
    }
}
    
export default Level