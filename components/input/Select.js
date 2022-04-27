import m from 'mithril'
import Util from '../Utility'
    
var Select = {
    view: function(vnode) {
        return m(`.select.${Util.getClasses(vnode.attrs)}`, vnode.attrs, m("select", vnode.children))
    },

    Item: {
        view: function(vnode) {
            return m("option", vnode.attrs, vnode.children)
        }
    }
}
    
export default Select