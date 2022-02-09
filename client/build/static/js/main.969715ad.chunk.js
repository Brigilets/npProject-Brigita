(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),s=a.n(c),i=a(11),o=a(12),l=a(13),d=a(14),u=a(16),j=(a(61),a(24)),h=a(9),p=a(18),b=a.n(p),m=a(114),O=a(102),g=a(103),x=a(104),f=a(105),v=a(97),y=a(101),C=a(17),k=a.n(C),N="GET_ITEMS",w="ADD_ITEM",A="DELETE_ITEM",E="UPDATE_ITEM",S="ITEMS_LOADING",I="CART_LOADING",T="GET_CART",R="ADD_TO_CART",L="DELETE_FROM_CART",_="ORDERS_LOADING",D="GET_ORDERS",F="CHECKOUT",M="USER_LOADING",U="USER_LOADED",G="AUTH_ERROR",P="LOGIN_SUCCESS",V="LOGIN_FAIL",q="LOGOUT_SUCCESS",J="REGISTER_SUCCESS",K="REGISTER_FAIL",W="GET_ERRORS",B="CLEAR_ERRORS",X=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:W,payload:{msg:e,status:t,id:a}}},z=function(){return{type:B}},H=function(){return{type:S}},Y=a(113),Q=a(106),Z=a(115),$=a(116),ee=a(117),te=a(118),ae=a(98),ne=a(121),re=a(99),ce=a(100),se=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},ie=a(2),oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1,name:"",email:"",password:"",msg:null},e.toggle=function(){e.props.clearErrors(),e.setState({modal:!e.state.modal})},e.onChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n={name:a.name,email:a.email,password:a.password};e.props.register(n)},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("REGISTER_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return Object(ie.jsxs)("div",{className:"container",children:[Object(ie.jsx)(v.a,{color:"info",className:"btn btn-sm",children:Object(ie.jsx)(ae.a,{onClick:this.toggle,href:"#",children:Object(ie.jsx)("span",{className:"text-dark",children:Object(ie.jsx)("b",{children:"Register"})})})}),Object(ie.jsxs)(ne.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(ie.jsx)(re.a,{toggle:this.toggle,children:"Register"}),Object(ie.jsxs)(ce.a,{children:[this.state.msg?Object(ie.jsx)(y.a,{color:"danger",children:this.state.msg}):null,Object(ie.jsx)(O.a,{onSubmit:this.onSubmit,children:Object(ie.jsxs)(g.a,{children:[Object(ie.jsx)(x.a,{for:"name",children:"Name"}),Object(ie.jsx)(f.a,{type:"text",name:"name",id:"name",placeholder:"Name",className:"mb-3",onChange:this.onChange}),Object(ie.jsx)(x.a,{for:"email",children:"Email"}),Object(ie.jsx)(f.a,{type:"email",name:"email",id:"email",placeholder:"Email",className:"mb-3",onChange:this.onChange}),Object(ie.jsx)(x.a,{for:"password",children:"Password"}),Object(ie.jsx)(f.a,{type:"password",name:"password",id:"password",placeholder:"Password",className:"mb-3",onChange:this.onChange}),Object(ie.jsx)(v.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Register"})]})})]})]})]})}}]),a}(n.Component),le=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.name,a=e.email,n=e.password;return function(e){var r=JSON.stringify({name:t,email:a,password:n});k.a.post("/api/register",r,{headers:{"Content-Type":"application/json"}}).then((function(t){return e({type:J,payload:t.data})})).catch((function(t){e(X(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:K})}))}},clearErrors:z})(oe),de=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(ie.jsx)("div",{children:Object(ie.jsx)(n.Fragment,{children:Object(ie.jsx)(v.a,{color:"danger",className:"btn btn-sm",children:Object(ie.jsx)(ae.a,{onClick:this.props.logout,href:"#",children:Object(ie.jsx)("span",{className:"text-light",children:Object(ie.jsx)("b",{children:"Logout"})})})})})})}}]),a}(n.Component),ue=Object(u.b)(null,{logout:function(){return{type:q}}})(de),je=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1,email:"",password:"",msg:null},e.toggle=function(){e.props.clearErrors(),e.setState({modal:!e.state.modal})},e.onChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,password:a.password};e.props.login(n)},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("LOGIN_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return Object(ie.jsxs)("div",{className:"container",children:[Object(ie.jsx)(v.a,{color:"success",className:"btn btn-sm",children:Object(ie.jsx)(ae.a,{onClick:this.toggle,href:"#",children:Object(ie.jsx)("span",{className:"text-dark",children:Object(ie.jsx)("b",{children:"Login"})})})}),Object(ie.jsxs)(ne.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(ie.jsx)(re.a,{toggle:this.toggle,children:"Login"}),Object(ie.jsxs)(ce.a,{children:[this.state.msg?Object(ie.jsx)(y.a,{color:"danger",children:this.state.msg}):null,Object(ie.jsx)(O.a,{onSubmit:this.onSubmit,children:Object(ie.jsxs)(g.a,{children:[Object(ie.jsx)(x.a,{for:"email",children:"Email"}),Object(ie.jsx)(f.a,{type:"email",name:"email",id:"email",placeholder:"Email",className:"mb-3",onChange:this.onChange}),Object(ie.jsx)(x.a,{for:"password",children:"Password"}),Object(ie.jsx)(f.a,{type:"password",name:"password",id:"password",placeholder:"Password",className:"mb-3",onChange:this.onChange}),Object(ie.jsx)(v.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Login"})]})})]})]})]})}}]),a}(n.Component),he=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});k.a.post("/api/login",n,{headers:{"Content-Type":"application/json"}}).then((function(t){return e({type:P,payload:t.data})})).catch((function(t){e(X(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:V})}))}},clearErrors:z})(je),pe=a(27),be=(a.p,function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(ie.jsx)("div",{children:Object(ie.jsx)(Q.a,{fixed:"bottom",className:"footer",children:"MUSICVERSE 2022"})})}}]),a}(n.Component)),me=be,Oe=a(107),ge=["\xc2me","Pan-Pot","Ben Clock","Amelie Lens","Mind Against","ANNA","Rebekah","Dixon","Solomun","Maceo Plex","Tail of Us","Adam Bayer","Carl Cox","Sam Paganini","Kerri Chandler","Renaat Vandepapeliere","Ten Walls","Motor City Drum Ensemble","Marcel Dettman","Ricardo Villalobos","Kattenkarussell","Molly","Lawrence","Extravelt","Carl Craig","Roman Fl\xfcgel","Daso","Raresh","Claptone","Peggy Gou","Elderbrook","...many more!"],xe=function(){return Object(ie.jsxs)("div",{children:[Object(ie.jsx)(Le,{}),Object(ie.jsx)(Oe.a,{className:"text-center bg-light lineup",children:ge.map((function(e,t){return Object(ie.jsx)("li",{children:e},t)}))}),Object(ie.jsx)(me,{})]})},fe=a(108),ve=a(109),ye=a(110),Ce=a(111),ke=a.p+"static/media/frontPage2.00380fa1.jpg",Ne=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t;return Object(ie.jsxs)("div",{className:"main",children:[Object(ie.jsx)(Le,{}),Object(ie.jsxs)(fe.a,(t={inverse:!0,className:"container-fluid "},Object(h.a)(t,"className","mainpage"),Object(h.a)(t,"children",[Object(ie.jsx)(ve.a,{src:ke,alt:"festival stage",className:"cardimg"}),Object(ie.jsx)(ye.a,{children:Object(ie.jsxs)(Ce.a,(e={tag:"h3",className:"mt-4"},Object(h.a)(e,"className","datetext"),Object(h.a)(e,"children",[" SAVE THE DATE FOR MUSICVERSE ",Object(ie.jsx)("br",{})," JUNE 25-26 2022"]),e))})]),t)),Object(ie.jsx)(me,{})]})}}]),a}(n.Component),we=Ne,Ae=a(112),Ee=a.p+"static/media/philosophy.3f7b3d42.jpg",Se=(a(49),function(){return Object(ie.jsxs)("div",{className:"main",children:[Object(ie.jsx)(Le,{}),Object(ie.jsxs)(fe.a,{inverse:!0,className:"container-fluid mainpage",children:[Object(ie.jsx)(ve.a,{src:Ee,alt:"festival chill zone",className:"cardImg"}),Object(ie.jsxs)(ye.a,{children:[Object(ie.jsx)(Ce.a,{tag:"h3",className:"pt-1 header",children:" ABOUT MUSICVERSE"}),Object(ie.jsxs)(Ae.a,{className:"text",children:[Object(ie.jsx)("p",{children:"Musicverse was created by music lovers to musiclovers! We invite you to join our vision of paradise as an electronic music lovers. We guarantee you'll be taken to another dimetion by the great artist we invite to perform in MUSICVERSE along with our guests who are like-minded like you. "}),Object(ie.jsx)("p",{children:"We promote local talents along with international electronic music masters. This year, we decided to dedicate a stage for local new artists in order to help them to succeed in music industry. If you are an artist, please contact us by contact form we provide in F.A.Q, we're looking forward to hearing from you! "}),Object(ie.jsx)("p",{children:"We highly encourage our guests to stay in the camping to enjoy full experience of MUSICVERSE. For those who'd like to travel light, we'll have an option to rent the tents on camping site. People often leave them behind and we try to recycle them and give them a second life. For your comfort we'll provide breakfast bar in the camping as well as hot showers."}),Object(ie.jsx)("b",{children:Object(ie.jsx)("p",{children:"We cant wait to see you in July!"})})]})]})]}),Object(ie.jsx)(me,{})]})}),Ie=[{navlink:"/home",title:"Home",className:"navlink"},{navlink:"/lineup",title:"Lineup",className:"navlink"},{navlink:"/tickets",title:"Tickets",className:"navlink"},{navlink:"/cart",title:"Cart",className:"navlink"},{navlink:"/orders",title:"Orders",className:"navlink mr-2"},{navlink:"/philosophy",title:"Philosophy",className:"navlink"}],Te=function(e){var t=e.className,a=e.navLink,n=e.title;return Object(ie.jsx)(Y.a,{className:t,children:Object(ie.jsx)(pe.b,{to:a,children:n})})},Re=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=(e.user,Object(ie.jsxs)(n.Fragment,{children:[Ie.map((function(e,t){return Object(ie.jsx)(Te,{className:e.className,navLink:e.navlink,title:e.title},t)})),Object(ie.jsx)(Y.a,{children:Object(ie.jsx)(ue,{})})]})),r=Object(ie.jsxs)(n.Fragment,{children:[Object(ie.jsx)(Y.a,{children:Object(ie.jsx)(le,{})}),Object(ie.jsx)(Y.a,{children:Object(ie.jsx)(he,{})})]});return Object(ie.jsx)("div",{children:Object(ie.jsx)(Q.a,{dark:!0,expand:"sm",className:"navbar navbar",children:Object(ie.jsxs)(m.a,{children:[Object(ie.jsx)(Z.a,{className:"brand",href:"/home",children:"MUSICVERSE"}),Object(ie.jsx)($.a,{onClick:this.toggle}),Object(ie.jsx)(ee.a,{isOpen:this.state.isOpen,navbar:!0,children:Object(ie.jsx)(te.a,{className:"ml-auto",color:"white",navbar:!0,children:t?a:r})})]})})})}}]),a}(n.Component),Le=Object(u.b)((function(e){return{auth:e.auth}}),null)(Re),_e=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",category:"",price:""},e.onChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(j.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={title:e.state.title,description:e.state.description,category:e.state.category,price:e.state.price},t.next=4,e.props.addItem(n);case 4:alert("Item added successfully");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(ie.jsxs)("div",{children:[Object(ie.jsx)(Le,{}),Object(ie.jsxs)(m.a,{children:[Object(ie.jsx)("h2",{className:"text-center mb-3",children:"Add a new Item"}),this.props.isAuthenticated?Object(ie.jsx)(O.a,{onSubmit:this.onSubmit,children:Object(ie.jsxs)(g.a,{children:[Object(ie.jsx)(x.a,{for:"title",children:"Title"}),Object(ie.jsx)(f.a,{type:"text",name:"title",id:"title",placeholder:"Title of the item",onChange:this.onChange}),Object(ie.jsx)("br",{}),Object(ie.jsx)(x.a,{for:"description",children:"Description"}),Object(ie.jsx)(f.a,{type:"text",name:"description",id:"description",placeholder:"Description of the item",onChange:this.onChange}),Object(ie.jsx)("br",{}),Object(ie.jsx)(x.a,{for:"category",children:"Category"}),Object(ie.jsx)(f.a,{type:"text",name:"category",id:"category",placeholder:"Category of the item",onChange:this.onChange}),Object(ie.jsx)("br",{}),Object(ie.jsx)(x.a,{for:"price",children:"Price"}),Object(ie.jsx)(f.a,{type:"number",name:"price",id:"price",placeholder:"Price of the item",onChange:this.onChange}),Object(ie.jsx)(v.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Add Item"})]})}):Object(ie.jsx)(y.a,{className:"text-center",color:"danger",children:"Login to add items!"})]})]})}}]),a}(n.Component),De=Object(u.b)((function(e){return{item:e.item,isAuthenticated:e.auth.isAuthenticated}}),{addItem:function(e){return function(t){k.a.post("/items",e).then((function(e){return t({type:w,payload:e.data})})).catch((function(e){return t(X(e.response.data,e.response.status))}))}}})(_e),Fe=a(119),Me=a(120),Ue=function(e){return function(t){t(Ge()),k.a.get("/cart/".concat(e)).then((function(e){return t({type:T,payload:e.data})})).catch((function(e){return t(X(e.response.data,e.response.status))}))}},Ge=function(){return{type:I}},Pe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!1},e.isItemInCart=function(e,t){console.log("itemId",e),console.log("cartItems",t);var a=t.find((function(t){return t.productId===e}));return console.log("item in cart",a),a?"Added to Cart":"Add To Cart"},e.onAddToCart=function(){var t=Object(j.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.addToCart(a,n,1);case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.user,a=this.props.item.items;return console.log("From Tickets",this.props),Object(ie.jsxs)("div",{className:"main bg-light",children:[Object(ie.jsx)(Le,{}),Object(ie.jsx)(m.a,{className:"bg-light",children:Object(ie.jsx)("div",{className:"row mb-4",children:a.map((function(a){return Object(ie.jsx)("div",{className:"col-md-12 bg-light",children:Object(ie.jsx)(fe.a,{className:"mb-5 card bg-light",children:Object(ie.jsxs)(Fe.a,{className:"card",children:[Object(ie.jsx)(Ce.a,{tag:"h5",children:a.title}),Object(ie.jsxs)(Me.a,{tag:"h6",children:[" ",a.price,"\u20ac"]}),Object(ie.jsx)(Ae.a,{children:a.category}),e.props.isAuthenticated?Object(ie.jsx)(v.a,{color:"dark",size:"sm",onClick:e.onAddToCart.bind(e,t._id,a._id),children:e.props.cart.cart?e.isItemInCart(a._id,e.props.cart.cart.items):"Add To Cart"}):null]})})},a.title)}))})}),Object(ie.jsx)(me,{})]})}}]),a}(n.Component),Ve=Object(u.b)((function(e){return{item:e.item,isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,cart:e.cart}}),{getItems:function(){return function(e){e(H()),k.a.get("/items").then((function(t){return e({type:N,payload:t.data})})).catch((function(t){return e(X(t.response.data,t.response.status))}))}},addToCart:function(e,t,a){return function(n){k.a.post("/cart/".concat(e),{productId:t,quantity:a}).then((function(e){return n({type:R,payload:e.data})})).catch((function(e){return n(X(e.response.data,e.response.status))}))}},getCart:Ue})(Pe),qe=a(15),Je=a(52),Ke=a.n(Je),We="pk_test_51KLjm9JuqXwK9nyi0Bc7Npv5VYnsqnX4qrXexzlF079IpXypil9F9ovfanALcr7sq9ku7vrgPgLlXN3LzhygE3ic007LmQ838p";console.log(We);var Be=function(e,t,a){return function(){var n=Object(j.a)(b.a.mark((function n(r){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t(e,r.id,a);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}()},Xe=function(e){var t=e.amount,a=e.user,n=e.checkout,r=e.history;return Object(ie.jsx)(Ke.a,{amount:100*t,token:Be(a,n,r),currency:"EUR",stripeKey:We})},ze=function(){return{type:_}},He=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!1},e.getCartItems=function(){var t=Object(j.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getCart(a);case 2:e.state.loaded=!0;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onDeleteFromCart=function(t,a){e.props.deleteFromCart(t,a)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.user;return!this.props.isAuthenticated||this.props.cart.loading||this.state.loaded||this.getCartItems(t._id),Object(ie.jsxs)("div",{className:"body bg-light",children:[Object(ie.jsx)(Le,{}),this.props.isAuthenticated?Object(ie.jsx)(n.Fragment,{children:this.props.cart.cart?null:Object(ie.jsx)(y.a,{color:"info",className:"text-center",children:"Your cart is empty!"})}):Object(ie.jsx)(y.a,{color:"danger",className:"text-center",children:"Login to View!"}),this.props.isAuthenticated&&!this.props.cart.loading&&this.state.loaded&&this.props.cart.cart?Object(ie.jsx)(m.a,{className:"bg-light",children:Object(ie.jsxs)("div",{className:"row",children:[this.props.cart.cart.items.map((function(a){return Object(ie.jsxs)("div",{className:"col-md-12",children:[Object(ie.jsx)(fe.a,{children:Object(ie.jsxs)(Fe.a,{className:"cardbody bg-light border border-dark",children:[Object(ie.jsx)(Ce.a,{tag:"h5",children:a.name}),Object(ie.jsxs)(Me.a,{tag:"h6",children:[a.price,"\u20ac"]}),Object(ie.jsxs)(Ae.a,{children:["x ",a.quantity]}),Object(ie.jsx)(v.a,{color:"danger",onClick:e.onDeleteFromCart.bind(e,t._id,a.productId),children:"Delete"})]})}),Object(ie.jsx)("br",{})]})})),Object(ie.jsx)("div",{class:"col-md-12",children:Object(ie.jsx)(fe.a,{className:"mb-5 bg-light",children:Object(ie.jsxs)(Fe.a,{children:[Object(ie.jsxs)(Ce.a,{tag:"h5",children:["Total Cost = ",this.props.cart.cart.total,"\u20ac"]}),Object(ie.jsx)(Xe,{className:"mb-4",user:t._id,amount:this.props.cart.cart.total,checkout:this.props.checkout,history:this.props.history})]})})})]})}):null,Object(ie.jsx)(me,{})]})}}]),a}(n.Component),Ye=Object(u.b)((function(e){return{cart:e.cart,isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{getCart:Ue,deleteFromCart:function(e,t){return function(a){k.a.delete("/cart/".concat(e,"/").concat(t)).then((function(e){return a({type:L,payload:e.data})})).catch((function(e){return a(X(e.response.data,e.response.status))}))}},checkout:function(e,t,a){return function(n){console.log("from order action",a),k.a.post("/order/".concat(e),{source:t}).then((function(e){return n({type:F,payload:e.data})})).catch((function(e){return n(X(e.response.data,e.response.status))})),a.push("/orders")}}})(Object(qe.g)(He)),Qe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!1},e.ongetOrders=function(){var t=Object(j.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getOrders(a);case 2:e.state.loaded=!0;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this.props.user;return!this.props.isAuthenticated||this.props.order.loading||this.state.loaded||this.ongetOrders(t._id),Object(ie.jsxs)("div",{children:[Object(ie.jsx)(Le,{}),this.props.isAuthenticated?Object(ie.jsx)(n.Fragment,{children:this.props.order.orders!==[]?null:Object(ie.jsx)(y.a,{color:"info",className:"text-center",children:"You have no orders!"})}):Object(ie.jsx)(y.a,{color:"danger",className:"text-center",children:"Login to View!"}),this.props.isAuthenticated&&!this.props.order.loading&&this.state.loaded&&this.props.order.orders.length?Object(ie.jsx)(m.a,(e={className:"mb-4 bg-light"},Object(h.a)(e,"className","main"),Object(h.a)(e,"children",Object(ie.jsx)("div",{className:"row",children:this.props.order.orders.map((function(e,t){return Object(ie.jsxs)("div",{className:"col-md-12",children:[Object(ie.jsx)(fe.a,{className:"card-order mt-2 mb-3 border border-dark ",children:Object(ie.jsx)(Fe.a,{className:"body",children:e.items.map((function(e,t){var a;return Object(ie.jsxs)("div",(a={className:"col-md-4"},Object(h.a)(a,"className","text"),Object(h.a)(a,"children",[e.name," (",e.quantity," pieces) ",e.price,"\u20ac/piece"]),a),t)}))})}),Object(ie.jsx)("br",{})]},t)}))})),e)):null,Object(ie.jsx)(me,{})]})}}]),a}(n.Component),Ze=Object(u.b)((function(e){return{order:e.order,isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{getOrders:function(e){return function(t){t(ze()),k.a.get("/order/".concat(e)).then((function(e){return t({type:D,payload:e.data})})).catch((function(e){return t(X(e.response.data,e.response.status))}))}}})(Qe),$e=Object(qe.g)(Object(u.b)()((function(){return Object(ie.jsx)("div",{children:Object(ie.jsxs)(qe.d,{children:[Object(ie.jsx)(qe.b,{path:"/home",children:Object(ie.jsx)(we,{})}),Object(ie.jsx)(qe.b,{path:"/philosophy",children:Object(ie.jsx)(Se,{})}),Object(ie.jsx)(qe.b,{path:"/lineup",children:Object(ie.jsx)(xe,{})}),Object(ie.jsx)(qe.b,{path:"/tickets",children:Object(ie.jsx)(Ve,{})}),Object(ie.jsx)(qe.b,{path:"/addItem",children:Object(ie.jsx)(De,{})}),Object(ie.jsx)(qe.b,{path:"/cart",children:Object(ie.jsx)(Ye,{})}),Object(ie.jsx)(qe.b,{path:"/orders",children:Object(ie.jsx)(Ze,{})}),Object(ie.jsx)(qe.a,{to:"/home"})]})})}))),et=a(28),tt=a(53),at=a(31),nt=a(7),rt={items:[],loading:!1},ct={msg:{},status:null,id:null},st={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},it={cart:null,loading:!1},ot={orders:[],loading:!1},lt=Object(et.b)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(nt.a)(Object(nt.a)({},e),{},{items:t.payload,loading:!1});case w:return Object(nt.a)(Object(nt.a)({},e),{},{items:[t.payload].concat(Object(at.a)(e.items))});case A:return Object(nt.a)(Object(nt.a)({},e),{},{items:e.items.filter((function(e){return e._id!==t.payload}))});case E:var a=t.payload,n=a.id,r=a.data;return Object(nt.a)(Object(nt.a)({},e),{},{items:e.items.map((function(e){e._id===n&&(e=r)}))});case S:return Object(nt.a)(Object(nt.a)({},e),{},{loading:!0});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case B:return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(nt.a)(Object(nt.a)({},e),{},{isLoading:!0});case U:return Object(nt.a)(Object(nt.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case P:case J:return localStorage.setItem("token",t.payload.token),Object(nt.a)(Object(nt.a)(Object(nt.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case G:case V:case q:case K:return localStorage.removeItem("token"),Object(nt.a)(Object(nt.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(nt.a)(Object(nt.a)({},e),{},{cart:t.payload,loading:!1});case R:case L:return Object(nt.a)(Object(nt.a)({},e),{},{cart:t.payload});case I:return Object(nt.a)(Object(nt.a)({},e),{},{loading:!0});default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(nt.a)(Object(nt.a)({},e),{},{orders:t.payload,loading:!1});case F:return Object(nt.a)(Object(nt.a)({},e),{},{orders:[t.payload].concat(Object(at.a)(e.orders))});case _:return Object(nt.a)(Object(nt.a)({},e),{},{loading:!0});default:return e}}}),dt=[tt.a],ut=Object(et.d)(lt,{},Object(et.c)(et.a.apply(void 0,dt))),jt=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){ut.dispatch((function(e,t){e({type:M}),k.a.get("/api/user",se(t)).then((function(t){return e({type:U,payload:t.data})})).catch((function(t){e(X(t.response.data,t.response.status)),e({type:G})}))}))}},{key:"render",value:function(){return Object(ie.jsx)(u.a,{store:ut,children:Object(ie.jsx)(pe.a,{children:Object(ie.jsx)("div",{className:"App",children:Object(ie.jsx)($e,{})})})})}}]),a}(n.Component),ht=jt;s.a.render(Object(ie.jsx)(r.a.StrictMode,{children:Object(ie.jsx)(ht,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.969715ad.chunk.js.map