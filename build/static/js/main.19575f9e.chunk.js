(this.webpackJsonpcrud_empleado=this.webpackJsonpcrud_empleado||[]).push([[0],{260:function(e,a,t){},261:function(e,a,t){},294:function(e,a){},296:function(e,a){},326:function(e,a){},327:function(e,a){},438:function(e,a){},612:function(e,a,t){"use strict";t.r(a);var s=t(5),c=t.n(s),r=t(245),n=t.n(r),o=(t(260),t(261),t(83)),l=t(84),i=t(88),d=t(87),j=t(30),b="https://striker-one.herokuapp.com/empleados/",m=t(36),h=t.n(m),x=t(89),O=t.n(x),p=t(24),u=t(3),f=p.StyleSheet.create({body:{paddingTop:65,paddingBottom:65,paddingHorizontal:35},section:{}}),g=function(e){var a=e.dato;console.log(a,"entro");var t=new Date;return Object(u.jsx)(p.Document,{children:Object(u.jsx)(p.Page,{size:"LETTER",style:f.body,children:Object(u.jsxs)(p.View,{children:[Object(u.jsxs)(p.Text,{style:{fontSize:"12px",textAlign:"right",margin:12},children:["M\xc9RIDA, YUCATAN A D\xcdA ",t.getDate()," DE MES ",["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"][t.getMonth()]," DEL A\xd1O ",t.getFullYear()]}),Object(u.jsx)(p.Text,{style:{fontSize:"12px",textAlign:"left",marginTop:50,marginHorizontal:12,marginBottom:50},children:"A QUIEN CORRESPONDA:"}),Object(u.jsxs)(p.Text,{style:{fontSize:"12px",textAlign:"justify",margin:12},children:["Por medio de la presente, extiendo mi recomendaci\xf3n personal a ",a.nombre+" "+a.apellido,", ha mostrado ser una persona \xedntegra, responsable y trabajadora. Por todo lo anterior, le considero una gran persona digna de confianza y con la aptitud y capacidad para afrontar cualquier responsabilidad que se deje a su cargo. Asimismo, puedo asegurar que es una persona con una \xe9tica intachable. Sin m\xe1s por el momento, reitero mi m\xe1s sincera recomendaci\xf3n para los fines que considere pertinentes."]}),Object(u.jsx)(p.Text,{style:{fontSize:"12px",textAlign:"center",marginHorizontal:12,marginBottom:25},children:"FIRMA"}),Object(u.jsx)(p.Text,{style:{fontSize:"12px",textAlign:"center",marginBottom:5},children:"________________________"}),Object(u.jsx)(p.Text,{style:{fontSize:"12px",textAlign:"center"},children:"Bryan Isaac Mendez Pech"})]})})})},v=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=a.call(this,e)).borrarRegistro=function(e){O.a.fire({title:"\xbfEst\xe1s seguro que deseas eliminar este usuario?",text:"No se puede recuperar",showDenyButton:!0,confirmButtonText:"SI",denyButtonText:"NO"}).then((function(a){a.isConfirmed?(O.a.fire("Eliminado!","Recargando datos espere...","success"),h.a.delete(b+e+"/").then(setTimeout((function(){window.location.reload()}),1500))):a.isDenied&&O.a.fire("Cancelado","","info")}))},s.state={datosCargados:!1,empleados:[]},s}return Object(l.a)(t,[{key:"imprimir",value:function(e){console.log(e)}},{key:"cargarDatos",value:function(){var e=this;h.a.get(b).then((function(a){e.setState({datosCargados:!0,empleados:a.data})}))}},{key:"componentDidMount",value:function(){this.cargarDatos()}},{key:"render",value:function(){var e=this,a=this.state,t=a.datosCargados,s=a.empleados;return t?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("h4",{children:"Lista Empleado"})}),Object(u.jsx)("div",{className:"col",align:"right",children:Object(u.jsx)(j.b,{id:"btn-add",className:"btn btn-success",to:"/add",children:Object(u.jsx)("i",{className:"fas fa-plus"})})})]})}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"table-Light",children:[Object(u.jsx)("th",{children:"Nombre"}),Object(u.jsx)("th",{children:"Apellido"}),Object(u.jsx)("th",{children:"Correo"}),Object(u.jsx)("th",{children:"Fecha Ingreso"}),Object(u.jsx)("th",{children:"Acciones"})]})}),Object(u.jsx)("tbody",{children:s.map((function(a){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:a.nombre}),Object(u.jsx)("td",{children:a.apellido}),Object(u.jsx)("td",{children:a.correo}),Object(u.jsx)("td",{children:a.fechaIngreso}),Object(u.jsx)("td",{children:Object(u.jsxs)("div",{className:"btn-group",role:"group","aria-label":"",children:[Object(u.jsx)(j.b,{id:"btn-edit",className:"btn btn-warning",to:"/editEmpl/"+a.id,children:Object(u.jsx)("i",{className:"fas fa-pen"})}),Object(u.jsx)("button",{id:"btn-delete",className:"btn btn-danger",onClick:function(){return e.borrarRegistro(a.id)},children:Object(u.jsx)("i",{className:"fas fa-trash-alt"})}),Object(u.jsx)(p.PDFDownloadLink,{document:Object(u.jsx)(g,{dato:a}),fileName:"CartaRecomendaci\xf3n.pdf",children:Object(u.jsx)("button",{className:"btn btn-info",children:Object(u.jsx)("i",{class:"fas fa-file-pdf"})})})]})})]},a.id)}))})]})}),Object(u.jsx)("div",{className:"card-footer text-muted"})]}),Object(u.jsx)("br",{})]}):Object(u.jsx)("div",{children:"Cargando..."})}}]),t}(c.a.Component),N=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=a.call(this,e)).cambioValor=function(e){var a=s.state.empleado;a[e.target.name]=e.target.value,s.setState({empleado:a})},s.enviarDatos=function(e){e.preventDefault();var a=s.state.empleado,t=a.id,c={nombre:a.nombre,apellido:a.apellido,correo:a.correo,fechaIngreso:a.fechaIngreso};h.a.put(b+t+"/",c).then(s.props.history.push("/"))},s.state={datosCargados:!1,empleado:[]},s}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get(b+this.props.match.params.id+"/").then((function(a){e.setState({datosCargados:!0,empleado:a.data})}))}},{key:"render",value:function(){var e=this.state,a=e.datosCargados,t=e.empleado;return a?Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col"}),Object(u.jsxs)("div",{className:"col-6",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",children:"Editar Empleado"}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{onSubmit:this.enviarDatos,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"",children:"Clave:"}),Object(u.jsx)("input",{type:"text",readOnly:!0,className:"form-control",value:t.id,name:"id",id:"id","aria-describedby":"helpId",placeholder:""}),Object(u.jsx)("small",{id:"helpId",className:"form-text text-muted",children:"Clave"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"",children:"Nombre"}),Object(u.jsx)("input",{type:"text",name:"nombre",id:"nombre",className:"form-control",placeholder:"","aria-describedby":"helpId",value:t.nombre,onChange:this.cambioValor,required:!0}),Object(u.jsx)("small",{id:"helpId",className:"text-muted",children:"Escribe el nombre del empleado"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"",children:"Apellido"}),Object(u.jsx)("input",{type:"text",name:"apellido",id:"apellido",className:"form-control",placeholder:"","aria-describedby":"helpId",value:t.apellido,onChange:this.cambioValor,required:!0}),Object(u.jsx)("small",{id:"helpId",className:"text-muted",children:"Escribe el Apellido"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"",children:"Correo"}),Object(u.jsx)("input",{type:"correo",name:"correo",id:"correo",value:t.correo,className:"form-control",placeholder:"","aria-describedby":"helpId",onChange:this.cambioValor,required:!0}),Object(u.jsx)("small",{id:"helpId",className:"text-muted",children:"Escribir correo"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"",children:"fechaIngreso"}),Object(u.jsx)("input",{type:"date",name:"fechaIngreso",id:"fechaIngreso",value:t.fechaIngreso,onChange:this.cambioValor,className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(u.jsx)("small",{id:"helpId",className:"text-muted",children:"Ingresar Fecha"})]}),Object(u.jsxs)("div",{className:"btn-group",role:"group","aria-label":"",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-success",children:Object(u.jsx)("i",{className:"fas fa-check"})}),Object(u.jsx)(j.b,{to:"/",className:"btn btn-danger",children:Object(u.jsx)("i",{className:"fas fa-times"})})]})]})}),Object(u.jsx)("div",{className:"card-footer text-muted"})]}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"col"})]})}):Object(u.jsx)("div",{children:"Cargando..."})}}]),t}(c.a.Component),y=t(31),I=function(e){var a=e.history,t={nombre:"",apellido:"",correo:"",fechaIngreso:(new Date).toISOString().split("T")[0]};return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col"}),Object(u.jsxs)("div",{className:"col-6",children:[Object(u.jsx)("br",{}),Object(u.jsx)(y.d,{initialValues:t,validate:function(e){var a={};return e.nombre?/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.nombre)||(a.nombre="El nombre solo puede contener letras y espacios"):a.nombre="Por favor ingresa un nombre",e.apellido?/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.apellido)||(a.apellido="El apelldio solo puede contener letras y espacios"):a.apellido="Por favor ingresa un apellido",e.correo?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.correo)||(a.correo="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."):a.correo="Por favor ingresa un correo electronico",a},onSubmit:function(e){h.a.post(b,e).then(a.push("/"))},children:function(e){var a=e.errors,t=e.values;return Object(u.jsxs)("div",{className:"card bg-light",children:[Object(u.jsx)("div",{className:"card-header",children:"Empleado"}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)(y.c,{className:"form",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(u.jsx)(y.b,{className:"form-control",type:"text",id:"nombre",name:"nombre",placeholder:"John"}),Object(u.jsx)(y.a,{name:"nombre",component:function(){return Object(u.jsxs)("div",{className:"alert alert-dismissible alert-danger",children:[Object(u.jsx)("strong",{children:"Oh alto!"})," ",a.nombre]})}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"apellido",children:"apellidos"}),Object(u.jsx)(y.b,{className:"form-control",type:"text",id:"apellido",name:"apellido",placeholder:"Doe"}),Object(u.jsx)(y.a,{name:"apellido",component:function(){return Object(u.jsxs)("div",{className:"alert alert-dismissible alert-danger",children:[Object(u.jsx)("strong",{children:"Oh alto!"})," ",a.apellido]})}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"correo",children:"Correo"}),Object(u.jsx)(y.b,{className:"form-control",type:"text",id:"correo",name:"correo",placeholder:"correo@correo.com"}),Object(u.jsx)(y.a,{name:"correo",component:function(){return Object(u.jsxs)("div",{className:"alert alert-dismissible alert-danger",children:[Object(u.jsx)("strong",{children:"Oh alto!"})," ",a.correo]})}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"fechaIngreso",children:"Fecha de ingreso"}),Object(u.jsx)(y.b,{type:"date",className:"form-control",id:"fechaIngreso",name:"fechaIngreso",value:t.fechaIngreso})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-success",children:Object(u.jsx)("i",{className:"fas fa-check"})}),Object(u.jsx)(j.b,{to:"/",className:"btn btn-danger",children:Object(u.jsx)("i",{className:"fas fa-times"})})]})}),Object(u.jsx)("div",{className:"card-footer text-muted"})]})}}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"col"})]})})})},E=t(8);var A=function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsx)("div",{className:"nav navbar-nav",children:Object(u.jsx)(j.b,{className:"nav-item nav-link active",to:"/",children:"CRUD Empleado"})})}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(E.a,{exact:!0,path:"/",component:v}),Object(u.jsx)(E.a,{path:"/editEmpl/:id",component:N}),Object(u.jsx)(E.a,{path:"/add",component:I})]})]})};n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root"))}},[[612,1,2]]]);
//# sourceMappingURL=main.19575f9e.chunk.js.map