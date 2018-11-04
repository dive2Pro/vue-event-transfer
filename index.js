export default function(_Vue, options) {
  let name = "e-transfer";
  if (options && options.name) {
    name = options.name;
  }

  _Vue.directive(name, function(el, bindling, $vnode) {
    const { arg, value, expression } = bindling;
    const { context, componentInstance: instance } = $vnode;
    const origin$emit = instance.$emit;
    const { _events } = instance;
    instance.$emit = function(name, ...args) {
      if (_events[name]) {
        return origin$emit(name, ...args);
      }
      const changedName = arg ? arg + "-" + name : name;
      context.$emit(changedName, ...args, value);
    };
  });
}
