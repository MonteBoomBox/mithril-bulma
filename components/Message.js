import m from 'mithril'
import Util from './Utility'
    
var Message = {
    view: function(vnode) {
        return m(`article.message.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    },

    Header: {
        view: function(vnode) {
            return m(".message-header", { ...vnode.attrs }, [
                vnode.children,
                vnode.attrs.hasDelete && m("button.delete"),
            ])
        }
    },

    Body: {
        view: function(vnode) {
            return m(".message-body", { ...vnode.attrs }, vnode.children)
        }
    }
}
    
export default Message