import m from 'mithril'
import Util from '../Utility'
    
var Columns = {
    view: function(vnode) {
        return m(`.columns.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Column: {
        view: function(vnode) {
            return m(`.column.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
        }
    }
}
    
export default Columns