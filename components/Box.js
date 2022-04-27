import m from 'mithril'
    
var Box = {
    view: function(vnode) {
        return m('.box', {...vnode.attrs}, vnode.children)
    }
}
    
export default Box