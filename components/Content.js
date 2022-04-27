import m from 'mithril'
import Util from './Utility'
    
var Content = {
    view: function(vnode) {
        return m(`.content.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
export default Content