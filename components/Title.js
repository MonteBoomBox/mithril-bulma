import m from 'mithril'
import Util from './Utility'
    
var Title = {
    view: function(vnode) {
        return m(`p.title.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
export default Title