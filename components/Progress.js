import m from 'mithril'
import Util from './Utility'
    
var Progress = {
    view: function(vnode) {
        return m(`progress.progress.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs })
    }
}
    
export default Progress