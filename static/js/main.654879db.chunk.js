(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,a){t.exports=a(24)},,,,,function(t,e,a){},function(t,e,a){},,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(9),l=a.n(i),d=(a(17),a(18),a(2)),c=a(11),s=a(4),r=a(5),u=a(1),h=a(7),m=a(6),b=a(3),p=a(10),g=a.n(p),v=(a(21),function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={todo:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(t){this.setState(Object(b.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=Object(d.a)(Object(d.a)({},this.state),{},{id:g()(),completed:!1});this.props.addItem(e),this.setState({new_todo:""})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"todo"},"Todo: "),o.a.createElement("input",{type:"text",placeholder:"New Todo",name:"todo",value:this.state.todo,onChange:this.handleChange}),o.a.createElement("button",null,"Submit")))}}]),a}(n.Component)),f=(a(22),function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={edit_submit:n.props.todo,edit_toggle:!1},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleEdit=n.handleEdit.bind(Object(u.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(u.a)(n)),n.handleToggle=n.handleToggle.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handleToggle",value:function(t){this.props.toggleTodo(this.props.id)}},{key:"handleEdit",value:function(){this.setState({edit_toggle:!this.state.edit_toggle})}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.update(this.props.id,this.state.edit_submit),this.handleEdit()}},{key:"handleChange",value:function(t){this.setState(Object(b.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t;return t=this.state.edit_toggle?o.a.createElement("div",{className:"todo"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},o.a.createElement("label",{htmlFor:"edit_submit"}),o.a.createElement("input",{type:"text",name:"edit_submit",value:this.state.edit_submit,onChange:this.handleChange}),o.a.createElement("button",null,"Edit"))):o.a.createElement("div",{className:"todo"},o.a.createElement("ul",null,o.a.createElement("li",{onClick:this.handleToggle,className:this.props.completed?"todo-task completed":"todo-task"},this.props.todo)),o.a.createElement("div",{className:"todo-buttons"},o.a.createElement("button",{onClick:this.handleEdit},o.a.createElement("i",{class:"fas fa-pen"})),o.a.createElement("button",{onClick:this.props.remove},o.a.createElement("i",{class:"fas fa-trash"})))),o.a.createElement("div",null,t)}}]),a}(n.Component)),E=(a(23),function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={todo:[]},n.addItem=n.addItem.bind(Object(u.a)(n)),n.update=n.update.bind(Object(u.a)(n)),n.toggleTodo=n.toggleTodo.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"addItem",value:function(t){this.setState({todo:[].concat(Object(c.a)(this.state.todo),[t])})}},{key:"remove",value:function(t){this.setState({todo:this.state.todo.filter((function(e){return e.id!==t}))})}},{key:"update",value:function(t,e){var a=this.state.todo.map((function(a){return a.id===t?Object(d.a)(Object(d.a)({},a),{},{todo:e}):a}));this.setState({todo:a})}},{key:"toggleTodo",value:function(t){var e=this.state.todo.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e}));this.setState({todo:e})}},{key:"render",value:function(){var t=this,e=this.state.todo.map((function(e){return o.a.createElement(f,Object.assign({},e,{key:e.id,update:t.update,toggleTodo:t.toggleTodo,remove:function(){return t.remove(e.id)}}))}));return o.a.createElement("div",{className:"todolist"},o.a.createElement("h1",null,"Todo List ",o.a.createElement("span",null,"A simple Todo List App made with React")," "),e,o.a.createElement(v,{addItem:this.addItem}))}}]),a}(n.Component));var j=function(){return o.a.createElement("div",null,o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.654879db.chunk.js.map