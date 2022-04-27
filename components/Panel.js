import m from 'mithril'
import Util from './Utility'
    
var Panel = {
    view: function(vnode) {
        return m(`nav.panel.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Heading: {
        view: function(vnode) {
            return m("p.panel-heading", vnode.attrs, vnode.children)
        }
    },

    Block: {
        view: function(vnode) {
            return m(".panel-block", vnode.attrs, vnode.children)
        }
    },

    Link: {
        view: function(vnode) {
            return m(`a.panel-block.${vnode.attrs.active && "is-active"}`, vnode.attrs, vnode.children)
        }
    },

    Tabs: {
        view: function(vnode) {
            return m("p.panel-tabs", vnode.attrs, vnode.children)
        }
    },

    TabItem: {
        view: function(vnode) {
            return m(`a.${vnode.attrs.active && "is-active"}`, vnode.attrs, vnode.children)
        }
    }
}
    
export default Panel