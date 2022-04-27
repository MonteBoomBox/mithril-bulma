import m from 'mithril'
import Util from './Utility'
    
var Table = {
    view: function(vnode) {
        return m(`table.table.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Container: {
        view: function(vnode) {
            return m(".table-container", vnode.attrs, vnode.children)
        }
    }
}
    
export default Table