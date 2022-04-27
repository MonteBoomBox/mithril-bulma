import m from 'mithril'
import Util from './Utility'
    
var Subtitle = {
    view: function(vnode) {
        return m(`p.subtitle.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
export default Subtitle