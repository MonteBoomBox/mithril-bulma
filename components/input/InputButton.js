import m from 'mithril'
    
var InputButton = {
    view: function(vnode) {
        return m(`label.${vnode.attrs.as}`, [
            m("input.mr-2", { type: vnode.attrs.as, ...vnode.attrs }),
            vnode.children
        ])
    }
}
    
export default InputButton