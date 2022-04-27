import m from 'mithril'
import Util from '../Utility'
    
var Container = {
    view: function(vnode) {
        return m(`.container.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
export default Container