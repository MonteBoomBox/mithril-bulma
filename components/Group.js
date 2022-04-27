import m from 'mithril'
    
var Group = {
    view: function(vnode) {
        return m(`.${vnode.attrs.type ? vnode.attrs.type : "div"}.${vnode.attrs.addons && "has-addons"}`, { ...vnode.attrs }, [
            vnode.children
        ])
    }
}
    
export default Group