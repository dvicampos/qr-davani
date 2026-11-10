/* QR ATELIER STUDIO v7 · React 18 + Vite · All UI is React */
import React from 'react';
const h=React.createElement;
const $=id=>document.getElementById(id);
const svgEsc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const paths={
  link:'<path d="M10 13a5 5 0 0 0 7 .5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  wifi:'<path d="M2 8a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',
  whatsapp:'<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 9c1.5 3 3 4.5 6 6"/>',
  text:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
  phone:'<path d="M22 16.5V20a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-17.8-17.8A2 2 0 0 1 4 2h3.5a2 2 0 0 1 2 1.7L10 7a2 2 0 0 1-.6 1.8L7.5 10a15 15 0 0 0 6.5 6.5l1.2-1.9A2 2 0 0 1 17 14l3.3.5a2 2 0 0 1 1.7 2Z"/>',
  sms:'<path d="M21 11.5V19a2 2 0 0 1-2 2H5l-3 1V5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6.5Z"/><path d="M6 9h10M6 13h7"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
  crypto:'<path d="M9 2v20M15 2v20M7 5h8a4 4 0 0 1 0 8H7h9a4 4 0 0 1 0 8H7"/>',
  pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  shop:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M2 2h2l3 14h13l2-10H5"/>',
  voucher:'<path d="M3 8V5h18v3a3 3 0 0 0 0 6v5H3v-5a3 3 0 0 0 0-6Z"/><path d="M12 6v12" stroke-dasharray="2 2"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  youtube:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z"/>',
  x:'<path d="M4 3 20 21M20 3 4 21M8 3h4l8 12M4 10l8 11h4"/>',
  linkedin:'<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-7h3v1a3 3 0 0 1 5 2v4"/>',
  sparkles:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM20 17l.8 2.2L23 20l-2.2.8L20 23l-.8-2.2L17 20l2.2-.8L20 17ZM3 2l.7 1.9L5.5 4.5l-1.8.7L3 7l-.7-1.8-1.8-.7 1.8-.6L3 2Z"/>',
  wand:'<path d="m4 20 16-16M15 3l6 6M5 3v4M3 5h4M19 17v4M17 19h4"/>',
  layers:'<path d="m12 2 10 6-10 6L2 8l10-6ZM2 12l10 6 10-6M2 16l10 6 10-6"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  download:'<path d="M12 3v13m-5-5 5 5 5-5M4 18v3h16v-3"/>',
  upload:'<path d="M12 21V8M7 13l5-5 5 5M4 4h16"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z"/>',
  bookmark:'<path d="M18 22 12 18l-6 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>',
  history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  printer:'<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 15h12v7H6z"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  check:'<circle cx="12" cy="12" r="10"/><path d="m7 12 3 3 7-7"/>',
  alert:'<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',
  arrow:'<path d="M7 17 17 7M8 7h9v9"/>',
  reset:'<path d="M3 12a9 9 0 1 1 3 6.7L3 16"/><path d="M3 21v-5h5"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 10v7M14 10v7"/>',
  chevron:'<path d="m7 10 5 5 5-5"/>',
  mouse:'<rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/>',
  star:'<path d="m12 2 3 6 7 .9-5 5 1.2 7.1L12 18l-6.2 3 1.2-7.1-5-5L9 8l3-6Z"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  plus:'<path d="M12 5v14M5 12h14"/>'};
function I(n,sz=19){return h('svg',{className:'ico',style:{width:sz,height:sz},viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.75,strokeLinecap:'round',strokeLinejoin:'round',ariaHidden:true,dangerouslySetInnerHTML:{__html:paths[n]||paths.link}});}
const TYPES=[['url','Enlace web','link'],['wifi','Red Wi-Fi','wifi'],['vcard','Contacto vCard','user'],['whatsapp','WhatsApp','whatsapp'],['social','Redes sociales','instagram'],['text','Texto libre','text'],['email','Correo electrónico','mail'],['phone','Teléfono','phone'],['sms','Mensaje SMS','sms'],['calendar','Evento','calendar'],['location','Ubicación','pin'],['crypto','Criptomonedas','crypto'],['coupon','Cupón','voucher']];
const LOGO_ICONS=['link','instagram','whatsapp','shop','globe','wifi','youtube','x','linkedin','phone','mail','calendar'];
const SHAPES=[['liquid','Fluido','Contorno orgánico continuo'],['cloud','Nube','Más suave y redondo'],['geo','Geo','Orgánico con más filo'],['silk','Seda','Bordes ultrafluidos'],['tide','Marea','Curvas abiertas y modernas'],['mini','Micro','Curva contenida'],['capsule','Píldoras','Segmentos suaves'],['ribbon','Cinta','Franjas con más presencia'],['dots','Puntos','Círculos uniformes'],['soft','Redondeado','Módulos suaves individuales'],['diamond','Rombo','Diamantes estilizados'],['square','Clásico','Cuadrícula tradicional']];
const PRESETS=[
  {id:'royal',name:'Azul rey',p:'#123cbb',s:'#2876fa',eye:'#103784',dot:'#1c58a3',bg:'#ffffff',gradient:'solid'},
  {id:'ice',name:'Ice Blue',p:'#0c426f',s:'#36b6df',eye:'#0c426f',dot:'#167ea4',bg:'#ffffff',gradient:'linear'},
  {id:'navy',name:'Marino',p:'#0e203f',s:'#3271b6',eye:'#0e203f',dot:'#3271b6',bg:'#ffffff',gradient:'solid'},
  {id:'mint',name:'Mint',p:'#124c53',s:'#38a69a',eye:'#124c53',dot:'#157777',bg:'#ffffff',gradient:'linear'},
  {id:'atelier',name:'Atelier',p:'#161e37',s:'#6556e9',eye:'#161e37',dot:'#6556e9',bg:'#ffffff',gradient:'solid'},
  {id:'midnight',name:'Midnight',p:'#111827',s:'#475569',eye:'#111827',dot:'#111827',bg:'#ffffff',gradient:'solid'},
  {id:'violet',name:'Violet',p:'#4427a3',s:'#7d61f2',eye:'#332379',dot:'#4427a3',bg:'#ffffff',gradient:'linear'},
  {id:'forest',name:'Botánico',p:'#13382c',s:'#2d8e6e',eye:'#13382c',dot:'#13382c',bg:'#ffffff',gradient:'linear'},
  {id:'espresso',name:'Espresso',p:'#3b2926',s:'#9c7a5a',eye:'#3b2926',dot:'#3b2926',bg:'#fffdf8',gradient:'solid'},
  {id:'ocean',name:'Océano',p:'#102d49',s:'#18758d',eye:'#102d49',dot:'#102d49',bg:'#ffffff',gradient:'linear'},
  {id:'berry',name:'Berry',p:'#60203c',s:'#a43d74',eye:'#60203c',dot:'#60203c',bg:'#ffffff',gradient:'linear'},
  {id:'gold',name:'Luxury',p:'#151515',s:'#b08444',eye:'#151515',dot:'#151515',bg:'#ffffff',gradient:'solid'}];
const DF={url:'https://ejemplo.com',ssid:'',password:'',encryption:'WPA',hidden:false,first:'',last:'',company:'',job:'',mobile:'',workPhone:'',contactEmail:'',website:'',address:'',waNumber:'',waMessage:'Hola, me gustaría recibir más información.',socialPlatform:'instagram',socialProfile:'',text:'',emailTo:'',emailSubject:'',emailBody:'',phoneNumber:'',smsNumber:'',smsBody:'',eventName:'',eventStart:'',eventEnd:'',eventLocation:'',eventDescription:'',lat:'',lng:'',placeLabel:'',cryptoType:'bitcoin',cryptoAddress:'',cryptoAmount:'',couponName:'',couponCode:'',couponDetails:''};
const DEF={type:'url',fields:{...DF},tab:'design',preset:'royal',shape:'liquid',eye:'rounded',pupil:'circle',primary:'#123cbb',secondary:'#2876fa',tertiary:'#25c0e8',eyeColor:'#103784',pupilColor:'#1c58a3',background:'#ffffff',gradient:'solid',angle:40,transparent:false,margin:4,moduleScale:92,curve:60,eyeStroke:1,logoMode:'none',logoIcon:'link',logoData:'',logoSize:17,logoMargin:1.5,logoPlate:true,frame:'none',cta:'ESCANEA AQUÍ',subtitle:'Descubre más',level:'Q',mockup:'qr',exportSize:2048,printSize:10,theme:'light'};
const F=(key,label,opts={})=>({key,label,...opts});
const FORMS={
  url:[F('url','Dirección URL',{wide:true,placeholder:'https://ejemplo.com/producto',required:true})],
  wifi:[F('ssid','Nombre de la red (SSID)',{wide:true,required:true}),F('encryption','Seguridad',{options:[['WPA','WPA/WPA2/WPA3'],['WEP','WEP'],['nopass','Sin contraseña']]}),F('password','Contraseña',{placeholder:'Contraseña Wi-Fi'}),F('hidden','Red oculta',{checkbox:true,wide:true})],
  vcard:[F('first','Nombre',{required:true}),F('last','Apellidos'),F('company','Empresa'),F('job','Puesto / cargo'),F('mobile','Celular',{type:'tel'}),F('workPhone','Teléfono oficina',{type:'tel'}),F('contactEmail','Email',{type:'email'}),F('website','Sitio web'),F('address','Dirección',{wide:true})],
  whatsapp:[F('waNumber','Número internacional',{wide:true,required:true,placeholder:'+52 55 1234 5678'}),F('waMessage','Mensaje predefinido',{wide:true,textarea:true})],
  social:[F('socialPlatform','Red social',{options:[['instagram','Instagram'],['youtube','YouTube'],['tiktok','TikTok'],['linkedin','LinkedIn'],['x','X / Twitter'],['facebook','Facebook'],['pinterest','Pinterest']]}),F('socialProfile','Usuario o URL',{placeholder:'@mimarca',required:true})],
  text:[F('text','Texto que quieres compartir',{wide:true,required:true,textarea:true,placeholder:'Escribe aquí…'})],
  email:[F('emailTo','Correo destinatario',{wide:true,required:true,type:'email'}),F('emailSubject','Asunto',{wide:true}),F('emailBody','Mensaje',{wide:true,textarea:true})],
  phone:[F('phoneNumber','Número de teléfono',{wide:true,type:'tel',required:true})],
  sms:[F('smsNumber','Número de SMS',{wide:true,required:true,type:'tel'}),F('smsBody','Mensaje',{wide:true,textarea:true})],
  calendar:[F('eventName','Nombre del evento',{wide:true,required:true}),F('eventStart','Comienza',{type:'datetime-local',required:true}),F('eventEnd','Termina',{type:'datetime-local',required:true}),F('eventLocation','Ubicación',{wide:true}),F('eventDescription','Descripción',{wide:true,textarea:true})],
  location:[F('lat','Latitud',{placeholder:'19.4326',required:true}),F('lng','Longitud',{placeholder:'-99.1332',required:true}),F('placeLabel','Nombre del lugar',{wide:true,placeholder:'Mi tienda'})],
  crypto:[F('cryptoType','Moneda',{options:[['bitcoin','Bitcoin'],['ethereum','Ethereum']]}),F('cryptoAmount','Importe (opcional)',{placeholder:'0.01'}),F('cryptoAddress','Dirección pública de billetera',{wide:true,required:true})],
  coupon:[F('couponName','Nombre de promoción',{wide:true,placeholder:'Descuento especial'}),F('couponCode','Código de cupón',{wide:true,required:true,placeholder:'PROMO10'}),F('couponDetails','Condiciones',{wide:true,textarea:true,placeholder:'10% en primera compra'})]
};
const HELP={url:'Los QR estáticos dirigen al enlace original. Puedes probarlo en una pestaña nueva.',wifi:'La contraseña queda dentro del código: comparte el QR solo con personas autorizadas.',vcard:'Al escanear, se podrá guardar el contacto en la agenda.',whatsapp:'Tu cliente abrirá WhatsApp con un mensaje listo para enviar.',social:'Genera un enlace a tu perfil en la red social seleccionada.',text:'Ideal para mensajes, instrucciones, números de serie o información breve.',email:'Prepara un correo con destinatario, asunto y mensaje.',phone:'Abre la aplicación de llamadas.',sms:'Abre un mensaje de texto predefinido.',calendar:'Crea un evento de calendario. Las horas se codifican como hora local.',location:'Comparte coordenadas GPS usando el esquema geo:.',crypto:'Comprueba la red y la dirección antes de utilizarlo para pagos.',coupon:'Crea un QR estático con el código del cupón. Para canjearlo automáticamente necesitas un enlace de tienda.'};
function vEsc(s){return String(s||'').replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');}
function wifiEsc(s){return String(s||'').replace(/\\/g,'\\\\').replace(/[;,\":]/g,c=>'\\'+c);}
function normalizeUrl(s){let t=String(s||'').trim();if(!t)return '';if(!/^[a-z][a-z\d+.-]*:/i.test(t))t='https://'+t;try{const u=new URL(t);return /^https?:$/.test(u.protocol)&&u.hostname.includes('.')?u.href:'';}catch{return '';}}
function icalDate(v){return String(v||'').replace(/[-:]/g,'').replace('T','T')+'00';}
function makeData(s){const f=s.fields;let data='',error='';const digits=v=>String(v||'').replace(/\D/g,'');const phone=v=>String(v||'').replace(/[^+\d]/g,'');
  switch(s.type){
  case 'url':data=normalizeUrl(f.url);if(!data)error='Escribe un enlace HTTP o HTTPS válido.';break;
  case 'wifi':if(!f.ssid.trim())error='Escribe el nombre de la red.';else if(f.encryption!=='nopass'&&!f.password)error='Introduce la contraseña de la red.';else data=`WIFI:T:${f.encryption};S:${wifiEsc(f.ssid)};${f.encryption==='nopass'?'':`P:${wifiEsc(f.password)};`}H:${f.hidden?'true':'false'};;`;break;
  case 'vcard':if(!f.first.trim()&&!f.last.trim())error='Introduce el nombre o el apellido.';else data=['BEGIN:VCARD','VERSION:3.0',`N:${vEsc(f.last)};${vEsc(f.first)};;;`,`FN:${vEsc([f.first,f.last].filter(Boolean).join(' '))}`,f.company?'ORG:'+vEsc(f.company):'',f.job?'TITLE:'+vEsc(f.job):'',f.mobile?'TEL;TYPE=CELL:'+phone(f.mobile):'',f.workPhone?'TEL;TYPE=WORK:'+phone(f.workPhone):'',f.contactEmail?'EMAIL:'+vEsc(f.contactEmail):'',f.website?'URL:'+vEsc(f.website):'',f.address?'ADR;TYPE=WORK:;;'+vEsc(f.address)+';;;;':'','END:VCARD'].filter(Boolean).join('\r\n');break;
  case 'whatsapp':if(digits(f.waNumber).length<8||digits(f.waNumber).length>15)error='Usa el número internacional con 8 a 15 dígitos.';else data='https://wa.me/'+digits(f.waNumber)+(f.waMessage?'?text='+encodeURIComponent(f.waMessage):'');break;
  case 'social':{const k=f.socialPlatform,handle=String(f.socialProfile||'').trim().replace(/^@/,'');if(!handle)error='Escribe el usuario o la URL.';else if(/^https?:\/\//i.test(handle)){data=normalizeUrl(handle);if(!data)error='La URL de la red social no es válida.';}else{const roots={instagram:'https://www.instagram.com/',youtube:'https://www.youtube.com/@',tiktok:'https://www.tiktok.com/@',linkedin:'https://www.linkedin.com/in/',x:'https://x.com/',facebook:'https://www.facebook.com/',pinterest:'https://www.pinterest.com/'};data=(roots[k]||roots.instagram)+encodeURIComponent(handle.replace(/^@/,''));}break;}
  case 'text':data=f.text.trim();if(!data)error='Escribe un texto.';break;
  case 'email':if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.emailTo.trim()))error='Escribe un correo válido.';else data='mailto:'+f.emailTo.trim()+(f.emailSubject||f.emailBody?'?'+[f.emailSubject?'subject='+encodeURIComponent(f.emailSubject):'',f.emailBody?'body='+encodeURIComponent(f.emailBody):''].filter(Boolean).join('&'):'');break;
  case 'phone':if(digits(f.phoneNumber).length<7)error='Introduce un número válido.';else data='tel:'+phone(f.phoneNumber);break;
  case 'sms':if(digits(f.smsNumber).length<7)error='Introduce un número válido.';else data='SMSTO:'+phone(f.smsNumber)+':'+f.smsBody;break;
  case 'calendar':if(!f.eventName.trim()||!f.eventStart||!f.eventEnd)error='Completa nombre, comienzo y fin del evento.';else if(f.eventEnd<=f.eventStart)error='La fecha de fin debe ser posterior al inicio.';else{let now=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z/,'Z');data=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//QR Atelier//Studio//ES','BEGIN:VEVENT',`UID:${Date.now()}@qratelier.local`,`DTSTAMP:${now}`,`DTSTART:${icalDate(f.eventStart)}`,`DTEND:${icalDate(f.eventEnd)}`,`SUMMARY:${vEsc(f.eventName)}`,f.eventLocation?'LOCATION:'+vEsc(f.eventLocation):'',f.eventDescription?'DESCRIPTION:'+vEsc(f.eventDescription):'','END:VEVENT','END:VCALENDAR'].filter(Boolean).join('\r\n');}break;
  case 'location':{const lat=Number(f.lat),lng=Number(f.lng);if(!f.lat.trim()||!f.lng.trim()||!Number.isFinite(lat)||!Number.isFinite(lng)||Math.abs(lat)>90||Math.abs(lng)>180)error='La latitud debe estar entre -90 y 90 y la longitud entre -180 y 180.';else data=`geo:${lat},${lng}`+(f.placeLabel?'?q='+encodeURIComponent(`${lat},${lng} (${f.placeLabel})`):'');break;}
  case 'crypto':{const ad=String(f.cryptoAddress||'').trim(),amount=String(f.cryptoAmount||'').trim();if(!ad)error='Pega la dirección de la billetera.';else if(f.cryptoType==='ethereum'&&!/^0x[0-9a-fA-F]{40}$/.test(ad))error='La dirección de Ethereum debe ser 0x y 40 dígitos hexadecimales.';else if(amount&&(!/^\d+(\.\d+)?$/.test(amount)||Number(amount)<=0))error='El importe debe ser decimal y positivo.';else if(amount&&amount.split('.')[1]?.length>(f.cryptoType==='ethereum'?18:8))error='Demasiados decimales.';else if(f.cryptoType==='ethereum'){let wei='';if(amount){const [a,b='']=amount.split('.');wei=(BigInt(a)*1000000000000000000n+BigInt((b+'0'.repeat(18)).slice(0,18))).toString();}data='ethereum:'+ad+'@1'+(amount?'?value='+wei:'');}else data='bitcoin:'+ad+(amount?'?amount='+amount:'');break;}
  case 'coupon':data=[f.couponName.trim(),f.couponCode.trim(),f.couponDetails.trim()].filter(Boolean).join(' | ');if(!f.couponCode.trim())error='Introduce el código de cupón.';break;
  }
  if(data&&new TextEncoder().encode(data).length>2300)error='El contenido es demasiado largo. Reduce texto o URL para crear un QR práctico.';
  return {data,error};
}
function luminance(hex){const rgb=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4));return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];}
function ratio(a,b){let A=luminance(a),B=luminance(b);return (Math.max(A,B)+.05)/(Math.min(A,B)+.05);}
function contrast(s){const bg=s.transparent?'#ffffff':s.background;let ink=[s.primary,s.eyeColor,s.pupilColor];if(s.gradient!=='solid')ink.push(s.secondary);if(s.gradient==='tritone')ink.push(s.tertiary);const min=Math.min(...ink.map(c=>ratio(c,bg)));const warns=[];if(min<4.5)warns.push('Contraste bajo: prueba una paleta con tinta oscura y fondo claro.');if(s.transparent)warns.push('El contraste final dependerá del fondo donde coloques el QR.');if(s.margin<4)warns.push('Mantén al menos 4 módulos de margen blanco alrededor.');if(s.logoMode!=='none'&&s.logoSize>20)warns.push('Los logotipos grandes pueden interferir con la lectura.');if(s.logoMode!=='none'&&s.level!=='H')warns.push('Con logotipo se recomienda corrección H.');if(s.shape==='diamond')warns.push('El estilo rombo debe probarse especialmente antes de imprimir.');if(s.eye!=='square')warns.push('Los ojos redondos pueden fallar en algunos lectores: comprueba el código antes de imprimir.');if(s.moduleScale<84)warns.push('Los módulos muy finos pueden perder fuerza al imprimir pequeño.');return {ratio:min,warns,good:min>=4.5&&warns.length===0};}

// QR Studio 6: continuous organic vectors + configurable strength and curve
// parameters so the QR never falls back to a tiled mosaic appearance.
function shapeCell(x,y,style,opts={}){
  const scale=Math.max(.76,Math.min(1.04,(opts.moduleScale??92)/100));
  const inset=(1-scale)/2;
  const curve=(opts.curve??60)/100;
  if(style==='dots'){
    const r=.26+scale*.19;
    return `<circle cx="${x+.5}" cy="${y+.5}" r="${r.toFixed(3)}"/>`;
  }
  if(style==='soft'){
    const size=(1-inset*2).toFixed(3), rad=(.18+.28*curve).toFixed(3);
    return `<rect x="${(x+inset).toFixed(3)}" y="${(y+inset).toFixed(3)}" width="${size}" height="${size}" rx="${rad}"/>`;
  }
  if(style==='diamond'){
    const p=.5*scale, left=(x+.5-p).toFixed(3), top=(y+.5-p).toFixed(3), right=(x+.5+p).toFixed(3), bottom=(y+.5+p).toFixed(3);
    return `<path d="M${(x+.5).toFixed(3)} ${top}L${right} ${(y+.5).toFixed(3)}L${(x+.5).toFixed(3)} ${bottom}L${left} ${(y+.5).toFixed(3)}Z"/>`;
  }
  return `<rect x="${x}" y="${y}" width="1" height="1"/>`;
}
function vectorModules(n,quiet,isOn,style,opts={}){
  const fmt=v=>Number(v.toFixed(3));
  const contourPresets={liquid:[.36,.12],cloud:[.46,.18],geo:[.24,.06],silk:[.45,.075],tide:[.38,.12],mini:[.19,.11]};
  if(contourPresets[style]){
    const [outerBase,innerBase]=contourPresets[style];
    const softness=(opts.curve??60)/100;
    const outer=outerBase*(.82+.34*softness), inner=innerBase*(.75+.5*softness);
    const edges=[],starts=new Map();
    const add=(x1,y1,x2,y2,dir)=>{const edge={a:[x1,y1],b:[x2,y2],dir,used:false};edges.push(edge);const k=x1+','+y1;if(!starts.has(k))starts.set(k,[]);starts.get(k).push(edge);};
    for(let r=0;r<n;r++)for(let c=0;c<n;c++){
      if(!isOn(r,c))continue;
      const x=c+quiet,y=r+quiet;
      if(!isOn(r-1,c))add(x,y,x+1,y,0);
      if(!isOn(r,c+1))add(x+1,y,x+1,y+1,1);
      if(!isOn(r+1,c))add(x+1,y+1,x,y+1,2);
      if(!isOn(r,c-1))add(x,y+1,x,y,3);
    }
    const rings=[];
    for(const first of edges){
      if(first.used)continue;
      const points=[]; let edge=first,guard=0;
      while(edge&&!edge.used&&guard++<edges.length+1){
        edge.used=true; points.push(edge.a);
        const opts2=starts.get(edge.b.join(','))||[];
        const order=[(edge.dir+1)%4,edge.dir,(edge.dir+3)%4,(edge.dir+2)%4];
        edge=order.map(d=>opts2.find(v=>!v.used&&v.dir===d)).find(Boolean);
        if(!edge)break;
      }
      if(points.length<3)continue;
      let part='';
      for(let i=0;i<points.length;i++){
        const prev=points[(i+points.length-1)%points.length],p=points[i],next=points[(i+1)%points.length];
        const ux=p[0]-prev[0],uy=p[1]-prev[1],vx=next[0]-p[0],vy=next[1]-p[1];
        const turn=ux*vy-uy*vx;
        const d=turn===0?0:(turn>0?outer:inner);
        const a=[fmt(p[0]-ux*d),fmt(p[1]-uy*d)],b=[fmt(p[0]+vx*d),fmt(p[1]+vy*d)];
        if(i===0)part+=`M${a[0]} ${a[1]}`; else part+=`L${a[0]} ${a[1]}`;
        if(d)part+=`Q${p[0]} ${p[1]} ${b[0]} ${b[1]}`; else part+=`L${b[0]} ${b[1]}`;
      }
      part+='Z'; rings.push(part);
    }
    return `<path fill-rule="evenodd" d="${rings.join('')}"/>`;
  }
  if(style==='capsule'||style==='square'||style==='ribbon'){
    const paths=[]; const scale=Math.max(.76,Math.min(1.04,(opts.moduleScale??92)/100));
    for(let r=0;r<n;r++){
      for(let c=0;c<n;){
        if(!isOn(r,c)){c++;continue;}
        const begin=c;
        while(c<n&&isOn(r,c))c++;
        const len=c-begin;
        if(style==='capsule'){
          const h=.42+.42*scale, y=quiet+r+(1-h)/2, rx=Math.min(.48,h/2);
          paths.push(`<rect x="${fmt(quiet+begin+.03)}" y="${fmt(y)}" width="${fmt(len-.06)}" height="${fmt(h)}" rx="${fmt(rx)}"/>`);
        }else if(style==='ribbon'){
          const h=.58+.34*scale, y=quiet+r+(1-h)/2, rx=Math.min(.49,h/2);
          paths.push(`<rect x="${fmt(quiet+begin+.01)}" y="${fmt(y)}" width="${fmt(len-.02)}" height="${fmt(h)}" rx="${fmt(rx)}"/>`);
        }else paths.push(`<rect x="${quiet+begin}" y="${quiet+r}" width="${len}" height="1"/>`);
      }
    }
    return paths.join('');
  }
  const parts=[];
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(isOn(r,c))parts.push(shapeCell(quiet+c,quiet+r,style,opts));
  return parts.join('');
}
function shapeThumbnail(style){
  const pixels=['1101100','1110110','0111101','1111110','1001111','0110110','1011101'];
  const on=(r,c)=>r>=0&&r<7&&c>=0&&c<7&&pixels[r][c]==='1';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-.2 -.2 7.4 7.4" aria-hidden="true"><g fill="currentColor">${vectorModules(7,0,on,style,{moduleScale:92,curve:60})}</g></svg>`;
}
function finder(x,y,s){const outer=s.eyeColor,core=s.pupilColor,kind=s.eye,sw=s.eyeStroke||1;let ring='';
  if(kind==='circle')ring=`<circle cx="${x+3.5}" cy="${y+3.5}" r="${(2.98-.02*(sw-1)).toFixed(3)}" stroke="${outer}" stroke-width="${sw.toFixed(2)}" fill="none"/>`;
  else {
    const rx=kind==='square'?0:(.28+.2*Math.min(1,((s.curve||60)/100))).toFixed(3);
    ring=`<rect x="${(x+.5).toFixed(3)}" y="${(y+.5).toFixed(3)}" width="6" height="6" rx="${rx}" stroke="${outer}" stroke-width="${sw.toFixed(2)}" fill="none"/>`;
  }
  const pupilScale=.92+.10*Math.min(1,((s.moduleScale||92)-76)/28), coreSize=(2.78*pupilScale).toFixed(3), coreInset=((7-Number(coreSize))/2).toFixed(3), coreRx=s.pupil==='soft'?(0.42+.26*((s.curve||60)/100)).toFixed(3):0;
  const coreShape=s.pupil==='circle'?`<circle cx="${x+3.5}" cy="${y+3.5}" r="${(1.34+.18*((s.moduleScale||92)/100)).toFixed(3)}" fill="${core}"/>`:`<rect x="${(x+Number(coreInset)).toFixed(3)}" y="${(y+Number(coreInset)).toFixed(3)}" width="${coreSize}" height="${coreSize}" rx="${s.pupil==='soft'?coreRx:0}" fill="${core}"/>`;
  return ring+coreShape;
}
function logoIconSvg(name){const path=paths[name]||paths.link;return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#fff"/><g transform="translate(9 9) scale(1.92)" stroke="#1d233b" stroke-width="1.85" fill="none" stroke-linecap="round" stroke-linejoin="round">${path}</g></svg>`;}
function embeddedLogo(s){if(s.logoMode==='image')return s.logoData; if(s.logoMode==='icon')return 'data:image/svg+xml;base64,'+btoa(logoIconSvg(s.logoIcon));return '';}
function renderQR(s,data){const qr=window.QREncoder.create(data,s.level);const n=qr.getModuleCount(),quiet=Math.max(2,s.margin),side=n+quiet*2;const logo=embeddedLogo(s);const hasLogo=!!logo;
  const logoDim=hasLogo?n*s.logoSize/100:0,pad=hasLogo?s.logoMargin:0,center=quiet+n/2,half=logoDim/2+pad;
  const cellOn=(r,c)=>r>=0&&r<n&&c>=0&&c<n&&qr.isDark(r,c)&&!((r<7&&c<7)||(r<7&&c>=n-7)||(r>=n-7&&c<7))&&!(hasLogo&&Math.abs(quiet+c+.5-center)<half&&Math.abs(quiet+r+.5-center)<half);
  const cells=vectorModules(n,quiet,cellOn,s.shape,{moduleScale:s.moduleScale,curve:s.curve});
  // SVG gradients default to objectBoundingBox and otherwise restart per module.
  // User-space coordinates make the whole QR a continuous, seamless gradient.
  const theta=s.angle*Math.PI/180;
  const x1=(side*(.5-.5*Math.cos(theta))).toFixed(3),y1=(side*(.5-.5*Math.sin(theta))).toFixed(3);
  const x2=(side*(.5+.5*Math.cos(theta))).toFixed(3),y2=(side*(.5+.5*Math.sin(theta))).toFixed(3);
  const gradient=s.gradient==='solid'?'':s.gradient==='radial'?`<radialGradient id="qrGrad" gradientUnits="userSpaceOnUse" cx="${side/2}" cy="${side/2}" r="${side*.68}"><stop offset="0%" stop-color="${s.primary}"/><stop offset="100%" stop-color="${s.secondary}"/></radialGradient>`:`<linearGradient id="qrGrad" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0%" stop-color="${s.primary}"/>${s.gradient==='tritone'?`<stop offset="52%" stop-color="${s.tertiary||'#24c4ee'}"/>`:''}<stop offset="100%" stop-color="${s.secondary}"/></linearGradient>`;
  let inside=`<defs>${gradient}</defs>`;
  if(!s.transparent)inside+=`<rect width="${side}" height="${side}" fill="${s.background}"/>`;
  inside+=`<g fill="${s.gradient==='solid'?s.primary:'url(#qrGrad)'}">${cells}</g>`;
  inside+=finder(quiet,quiet,s)+finder(quiet+n-7,quiet,s)+finder(quiet,quiet+n-7,s);
  if(hasLogo){const plate=logoDim+pad*2;if(s.logoPlate)inside+=`<rect x="${center-plate/2}" y="${center-plate/2}" width="${plate}" height="${plate}" rx="${Math.min(2.4,plate*.22)}" fill="${s.transparent?'#ffffff':s.background}"/>`;
    inside+=`<image href="${svgEsc(logo)}" x="${center-logoDim/2}" y="${center-logoDim/2}" width="${logoDim}" height="${logoDim}" preserveAspectRatio="xMidYMid meet"/>`;
  }
  let w=800,H=800,qx=45,qy=45,qsize=710,before='',after='';
  const title=svgEsc(s.cta.trim()||'ESCANEA AQUÍ'),sub=svgEsc(s.subtitle.trim()||'Descubre más');
  if(s.frame==='caption'){w=800;H=930;qx=48;qy=40;qsize=704;before='<rect width="800" height="930" rx="28" fill="white"/>';after=`<rect x="63" y="784" width="674" height="93" rx="24" fill="${s.eyeColor}"/><text x="400" y="838" font-family="Arial,sans-serif" font-size="35" letter-spacing="3" text-anchor="middle" font-weight="700" fill="white">${title}</text>`;}
  if(s.frame==='menu'){w=800;H=1010;qx=70;qy=188;qsize=660;before='<rect width="800" height="1010" rx="32" fill="#ffffff"/><rect x="26" y="26" width="748" height="958" rx="24" fill="none" stroke="#e9e5f0" stroke-width="3"/>';after=`<text x="400" y="110" font-family="Georgia,serif" font-size="48" text-anchor="middle" font-weight="700" fill="${s.eyeColor}">${title}</text><text x="400" y="155" font-family="Arial,sans-serif" font-size="24" text-anchor="middle" letter-spacing="2" fill="${s.secondary}">${sub}</text><text x="400" y="940" font-family="Arial,sans-serif" font-size="22" text-anchor="middle" fill="${s.eyeColor}">APUNTA TU CÁMARA AQUÍ</text>`;}
  if(s.frame==='outline'){w=800;H=880;qx=60;qy=55;qsize=680;before=`<rect width="800" height="880" fill="white"/><rect x="23" y="23" width="754" height="834" rx="17" fill="none" stroke="${s.eyeColor}" stroke-width="4"/>`;after=`<text x="400" y="815" font-family="Arial,sans-serif" font-weight="700" font-size="27" letter-spacing="5" text-anchor="middle" fill="${s.eyeColor}">${title}</text>`;}
  if(!s.transparent||s.frame!=='none')before=`<rect width="${w}" height="${H}" fill="${s.frame==='none'?s.background:'#ffffff'}"/>`+before;
  const core=`<g transform="translate(${qx} ${qy}) scale(${(qsize/side).toFixed(9)})">${inside}</g>`;
  return {svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${w} ${H}" width="${w}" height="${H}" role="img" aria-label="Código QR vectorial">${before}${core}${after}</svg>`,n,side,width:w,height:H,data};
}
function getArt(s){const v=makeData(s);if(v.error||!v.data)return {error:v.error||'Introduce el contenido.',data:v.data};try{return {...renderQR(s,v.data),error:''};}catch(e){return {error:'No se pudo generar el QR: '+(e.message||'Comprueba el contenido.'),data:v.data};}}
const fileBlob=(data,type)=>new Blob([data],{type});
function saveBlob(blob,name){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}
function svgFile(s){return fileBlob(s,'image/svg+xml;charset=utf-8');}
const crcTable=(()=>{const x=[];for(let i=0;i<256;i++){let c=i;for(let j=0;j<8;j++)c=c&1?0xedb88320^(c>>>1):c>>>1;x[i]=c>>>0;}return x;})();
function crc(b){let c=0xffffffff;for(const x of b)c=crcTable[(c^x)&255]^(c>>>8);return(c^0xffffffff)>>>0;}
function write32(a,i,v){a[i]=(v>>>24)&255;a[i+1]=(v>>>16)&255;a[i+2]=(v>>>8)&255;a[i+3]=v&255;}
async function pngDpi(blob){const bytes=new Uint8Array(await blob.arrayBuffer());const chunk=new Uint8Array(21);write32(chunk,0,9);chunk.set([112,72,89,115],4);const ppm=Math.round(300/0.0254);write32(chunk,8,ppm);write32(chunk,12,ppm);chunk[16]=1;write32(chunk,17,crc(chunk.subarray(4,17)));const pos=33;return new Blob([bytes.subarray(0,pos),chunk,bytes.subarray(pos)],{type:'image/png'});}
async function pngBlob(art,size){const source=URL.createObjectURL(svgFile(art.svg));try{const img=new Image();img.src=source;await img.decode();const canvas=document.createElement('canvas');const factor=Number(size)/art.width;canvas.width=Number(size);canvas.height=Math.round(art.height*factor);const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(img,0,0,canvas.width,canvas.height);let png=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('No se pudo crear el PNG')),'image/png'));canvas.width=0;canvas.height=0;if(Number(size)>=2048)png=await pngDpi(png);return png;}finally{URL.revokeObjectURL(source);}}
function readHistory(){try{return JSON.parse(localStorage.getItem('qrAtelierV3History')||'[]');}catch{return [];}}
function stamp(){return new Date().toISOString().slice(0,10);}
function inputColor(s,val,set){return h('div',{className:'colorinput'},h('input',{type:'color',value:s,onChange:e=>set(e.target.value),ariaLabel:val}),h('input',{type:'text',key:val+s,defaultValue:s,maxLength:7,onBlur:e=>{const x=e.target.value.trim();if(/^#[0-9a-fA-F]{6}$/.test(x))set(x);else e.target.value=s;},onKeyDown:e=>{if(e.key==='Enter')e.target.blur();},ariaLabel:val,title:val}));}
class Studio extends React.Component{
 constructor(props){super(props);let theme='light';try{theme=localStorage.getItem('qrAtelierV3Theme')||'light';}catch(e){}this.state={...DEF,fields:{...DF},theme,toast:'',historyVisible:false,history:readHistory(),scanResult:'',busy:false};this._toastTimer=null;}
 componentDidMount(){document.documentElement.dataset.theme=this.state.theme;}
 componentDidUpdate(p,prev){if(this.state.theme!==prev.theme){document.documentElement.dataset.theme=this.state.theme;try{localStorage.setItem('qrAtelierV3Theme',this.state.theme);}catch(e){}}}
 componentWillUnmount(){if(this._toastTimer)clearTimeout(this._toastTimer);}
 tell(msg){this.setState({toast:msg});if(this._toastTimer)clearTimeout(this._toastTimer);this._toastTimer=setTimeout(()=>this.setState({toast:''}),4200);}
 setP(k,v){this.setState({[k]:v,scanResult:''});}
 setF(k,v){this.setState(s=>({fields:{...s.fields,[k]:v},scanResult:''}));}
 preset(id){const p=PRESETS.find(x=>x.id===id);if(p)this.setState({preset:id,primary:p.p,secondary:p.s,eyeColor:p.eye,pupilColor:p.dot,background:p.bg,gradient:p.gradient,scanResult:''});}
 reset(){this.setState(s=>({...DEF,fields:{...DF},theme:s.theme,history:s.history}));this.tell('Diseño restablecido.');}
 currentTitle(){const f=this.state.fields;switch(this.state.type){case 'url':return f.url;case 'wifi':return f.ssid;case 'vcard':return `${f.first} ${f.last}`;case 'whatsapp':return f.waNumber;case 'social':return f.socialProfile;case 'text':return f.text;case 'email':return f.emailTo;case 'location':return f.placeLabel;case 'coupon':return f.couponCode;default:return TYPES.find(x=>x[0]===this.state.type)[1];}}
 save(){const entry={id:Date.now(),date:new Date().toISOString(),title:(this.currentTitle()||'Diseño QR').slice(0,70),config:{...this.state,toast:'',history:[],historyVisible:false,scanResult:'',busy:false}};try{const history=[entry,...readHistory()].slice(0,25);localStorage.setItem('qrAtelierV3History',JSON.stringify(history));this.setState({history});this.tell('Diseño guardado en este navegador.');}catch(e){this.tell('Sin espacio local para guardar. Prueba un logotipo más pequeño.');}}
 load(entry){this.setState({...DEF,...entry.config,fields:{...DF,...entry.config.fields},historyVisible:false,history:readHistory(),toast:''});this.tell('Diseño recuperado.');}
 removeHistory(id){const history=readHistory().filter(x=>x.id!==id);try{localStorage.setItem('qrAtelierV3History',JSON.stringify(history));this.setState({history});this.tell('Diseño eliminado.');}catch(e){this.tell('No se pudo eliminar.');}}
 async upload(ev){const file=ev.target.files&&ev.target.files[0];if(!file)return;try{if(file.size>2*1024*1024)throw Error('Selecciona una imagen menor de 2 MB.');if(!['image/png','image/jpeg','image/webp','image/svg+xml'].includes(file.type))throw Error('Usa SVG, PNG, JPG o WebP.');const src=URL.createObjectURL(file);try{const img=new Image();img.src=src;await img.decode();const size=Math.min(512,Math.max(img.naturalWidth,img.naturalHeight));const scale=size/Math.max(img.naturalWidth,img.naturalHeight);const canvas=document.createElement('canvas');canvas.width=Math.round(img.naturalWidth*scale);canvas.height=Math.round(img.naturalHeight*scale);canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);const data=canvas.toDataURL('image/png');this.setState({logoMode:'image',logoData:data});this.tell('Logotipo agregado correctamente.');}finally{URL.revokeObjectURL(src);}}catch(e){this.tell(e.message||'No se pudo procesar la imagen.');}ev.target.value='';}
 async action(kind,art){if(art.error){this.tell(art.error);return;}this.setState({busy:true});const base='QR-Atelier-'+this.state.type+'-'+stamp();try{
  if(kind==='svg'){saveBlob(svgFile(art.svg),base+'.svg');this.tell('SVG vectorial descargado.');}
  if(kind==='png'){saveBlob(await pngBlob(art,this.state.exportSize),base+'.png');this.tell('PNG descargado.');}
  if(kind==='copySVG'){if(navigator.clipboard?.writeText&&window.isSecureContext)await navigator.clipboard.writeText(art.svg);else{const area=document.createElement('textarea');area.value=art.svg;area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();if(!document.execCommand('copy'))throw Error('El portapapeles no está disponible. Descarga SVG.');area.remove();}this.tell('Código SVG copiado.');}
  if(kind==='copyPNG'){if(!window.isSecureContext||!window.ClipboardItem||!navigator.clipboard?.write)throw Error('Copiar PNG requiere HTTPS o localhost. Usa la descarga de PNG.');const png=await pngBlob(art,this.state.exportSize);await navigator.clipboard.write([new ClipboardItem({'image/png':png})]);this.tell('Imagen PNG copiada.');}
  if(kind==='test'){if(!('BarcodeDetector' in window))throw Error('Tu navegador no ofrece lectura automática. Abre el QR con la cámara del móvil para probarlo.');const png=await pngBlob(art,512);const bitmap=await createImageBitmap(png);try{const scanner=new BarcodeDetector({formats:['qr_code']});const found=await scanner.detect(bitmap);const ok=found.some(item=>item.rawValue===art.data);this.setState({scanResult:ok?'Prueba superada: el navegador pudo decodificar este QR.':'No se pudo confirmar la lectura. Usa la cámara del móvil y revisa el diseño.'});this.tell(ok?'QR leído correctamente.':'No se pudo verificar.');}finally{bitmap.close();}}
  }catch(e){this.tell(e.message||'No se pudo realizar esta acción.');}finally{this.setState({busy:false});}}
 print(art){if(art.error){this.tell(art.error);return;}const win=window.open('','_blank');if(!win){this.tell('Permite las ventanas emergentes para imprimir.');return;}const cm=this.state.printSize,hcm=(cm*art.height/art.width).toFixed(2);const svg=art.svg.replace(/width="\d+" height="\d+" role=/,`width="${cm}cm" height="${hcm}cm" role=`);win.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Ficha de impresión QR Atelier</title><style>@page{size:A4;margin:15mm}body{font-family:Arial;margin:0;color:#202020}.sheet{padding:12mm}.print-title{font-size:16px;margin:0 0 22px}.preview{width:${cm}cm;height:${hcm}cm;position:relative;padding:0;border:0}.preview svg{width:100%;height:100%}.mark{position:absolute;width:5mm;height:5mm;border-color:#444}.tl{left:-2mm;top:-2mm;border-top:1px solid;border-left:1px solid}.tr{right:-2mm;top:-2mm;border-top:1px solid;border-right:1px solid}.bl{left:-2mm;bottom:-2mm;border-bottom:1px solid;border-left:1px solid}.br{right:-2mm;bottom:-2mm;border-bottom:1px solid;border-right:1px solid}.info{font-size:11px;margin-top:23px;line-height:1.5}@media print{.sheet{padding:0}}</style></head><body><div class="sheet"><h1 class="print-title">Ficha para impresión · QR Atelier Studio</h1><div class="preview">${svg}<i class="mark tl"></i><i class="mark tr"></i><i class="mark bl"></i><i class="mark br"></i></div><p class="info">${cm} × ${hcm} cm · Imprime a escala real del 100 %. Verifica que el QR se lea antes de producir grandes tiradas.</p></div><script>window.onload=()=>setTimeout(()=>window.print(),350);<\/script></body></html>`);win.document.close();}
 field(d){const s=this.state, value=s.fields[d.key],wide=d.wide?'field wide':'field';let input;
  if(d.checkbox)return h('div',{className:'field wide',key:d.key},h('div',{className:'switchrow'},h('span',{className:'label'},d.label),h('input',{className:'toggle',type:'checkbox',checked:!!value,onChange:e=>this.setF(d.key,e.target.checked)})));
  if(d.options)input=h('select',{value,onChange:e=>this.setF(d.key,e.target.value)},d.options.map(o=>h('option',{key:o[0],value:o[0]},o[1])));
  else if(d.textarea)input=h('textarea',{value,placeholder:d.placeholder||'',rows:3,onChange:e=>this.setF(d.key,e.target.value)});
  else input=h('input',{type:d.type||'text',value:value||'',placeholder:d.placeholder||'',autoComplete:'off',onChange:e=>this.setF(d.key,e.target.value)});
  return h('label',{className:wide,key:d.key},h('span',{className:'label'},d.label,d.required?' *':''),input);
 }
 block(title,subtitle,children,num){return h('section',{className:'block'},h('div',{className:'blockhead'},h('div',null,h('h2',null,title),h('p',null,subtitle)),num?h('span',{className:'number'},num):null),children);}
 seg(name,values,value,change){return h('div',{className:'seg',role:'group',ariaLabel:name},values.map(v=>h('button',{key:v[0],type:'button',className:value===v[0]?'on':'',onClick:()=>change(v[0])},v[1])));}
 range(label,key,min,max,step,suffix=''){const v=this.state[key];return h('div',null,h('div',{className:'sectionrow'},h('label',null,label),h('span',{className:'rangepair'},h('output',null,v,suffix))),h('input',{className:'range',type:'range',min,max,step,value:v,onChange:e=>this.setP(key,Number(e.target.value))}));}
 colors(s,bgOnly=false){const col=(key,label)=>h('label',{className:'field',key},h('span',{className:'label'},label),inputColor(s[key],label,v=>this.setP(key,v)));
  return h('div',null,h('div',{className:'colorgrid'},(bgOnly?['background']:['primary','secondary','eyeColor','pupilColor','background']).map(k=>col(k,({primary:'Tinta principal',secondary:'Tinta secundaria',eyeColor:'Marcos de ojos',pupilColor:'Centro de ojos',background:'Fondo'}[k])))));
 }
 renderContent(art){const s=this.state;return h('div',null,
  this.block(TYPES.find(t=>t[0]===s.type)[1],HELP[s.type],h('div',null,h('div',{className:'fieldgrid'},FORMS[s.type].map(d=>this.field(d))),
    s.type==='url'?h('div',{className:'sectionrow',style:{marginTop:18}},h('button',{className:'linkbtn',onClick:()=>{const url=normalizeUrl(s.fields.url);if(url)window.open(url,'_blank','noopener,noreferrer');else this.tell('Introduce una URL válida primero.');}},I('arrow',16),'Abrir enlace de prueba'),h('span',{className:'smallnote'},'Se abrirá en otra pestaña')):null,
    art.error?h('div',{className:'formerror',role:'alert'},art.error):h('div',{className:'inlinehelp'},I('check',16),'Contenido válido · ',new TextEncoder().encode(art.data).length,' bytes listos para codificar.')),'01')
 );}
 renderDesign(){const s=this.state;return h('div',null,
   this.block('Plantillas de diseñador','Paletas cuidadosamente combinadas para marcas, productos y eventos.',h('div',{className:'presetgrid'},PRESETS.map(p=>h('button',{key:p.id,className:'preset '+(s.preset===p.id?'selected':''),onClick:()=>this.preset(p.id)},h('span',{className:'presetpreview',style:{background:p.bg,color:p.p}},h('span',null)),h('strong',null,p.name)))),'01'),
   this.block('Forma de los módulos','Escoge trazos fluidos, píldoras o puntos. Todos los módulos comparten un solo color o degradado continuo.',h('div',null,
     h('div',{className:'shapes'},SHAPES.map(x=>h('button',{key:x[0],className:'shape '+(s.shape===x[0]?'active':''),onClick:()=>this.setP('shape',x[0])},h('span',{className:'shapeart '+x[0],dangerouslySetInnerHTML:{__html:shapeThumbnail(x[0])}}),h('span',null,x[1]),h('small',null,x[2])))),
     h('div',{className:'inlinehelp'},I('sparkles',16),'Fluido es un contorno vectorial continuo: sin uniones visibles. Las píldoras son trazos horizontales redondeados.')),'02'),
   this.block('Ojos y contorno','Personaliza los tres marcadores exteriores y el estilo del centro.',h('div',{className:'fieldgrid'},
     h('label',{className:'field'},h('span',{className:'label'},'Forma exterior'),h('select',{value:s.eye,onChange:e=>this.setP('eye',e.target.value)},[['rounded','Redondeado'],['circle','Circular'],['square','Cuadrado']].map(v=>h('option',{key:v[0],value:v[0]},v[1])))),
     h('label',{className:'field'},h('span',{className:'label'},'Centro'),h('select',{value:s.pupil,onChange:e=>this.setP('pupil',e.target.value)},[['circle','Circular'],['soft','Suave'],['square','Cuadrado']].map(v=>h('option',{key:v[0],value:v[0]},v[1]))))),'03'),
   this.block('Tintas y degradados','El degradado ahora recorre el código completo y no se repite en cada módulo.',h('div',null,
     this.seg('Tipo de degradado',[['solid','Color sólido'],['linear','Lineal'],['radial','Radial']],s.gradient,v=>this.setP('gradient',v)),
     (s.gradient==='linear'||s.gradient==='tritone')?h('div',{style:{marginTop:15}},this.range('Ángulo','angle',0,360,5,'°')):null,
     h('div',{className:'subdivider'}),this.colors(s),
     h('div',{className:'sectionrow',style:{marginTop:17}},h('span',{className:'label'},'Fondo transparente'),h('input',{className:'toggle',type:'checkbox',checked:s.transparent,onChange:e=>this.setP('transparent',e.target.checked)}))),'04')
 );}
 renderBrand(){const s=this.state;return h('div',null,
   this.block('Identidad de marca','Agrega un icono predefinido o tu logotipo en el centro del QR.',h('div',null,
     this.seg('Logotipo',[['none','Sin logo'],['icon','Icono'],['image','Mi imagen']],s.logoMode,v=>this.setP('logoMode',v)),
     s.logoMode==='icon'?h('div',{className:'logooptions'},LOGO_ICONS.map(n=>h('button',{key:n,title:n,className:'logooption '+(s.logoIcon===n?'chosen':''),onClick:()=>this.setP('logoIcon',n)},I(n,20),h('span',null,n==='link'?'web':n)))):null,
     s.logoMode==='image'?h('label',{className:'filebox',style:{marginTop:17}},I('upload',21),h('strong',null,'Subir logo personalizado'),h('small',null,'PNG, SVG, JPG o WebP · Hasta 2 MB'),h('input',{type:'file',accept:'image/png,image/jpeg,image/webp,image/svg+xml',style:{display:'none'},onChange:e=>this.upload(e)}),s.logoData?h('small',{className:'formok'},'Logo listo para exportar'):null):null,
     s.logoMode!=='none'?h('div',{style:{marginTop:19}},this.range('Tamaño del logo','logoSize',10,23,1,'%'),h('div',{style:{marginTop:15}},this.range('Margen de protección','logoMargin',.5,3,.5,' módulos')),h('div',{className:'sectionrow'},h('span',{className:'label'},'Placa clara detrás del logo'),h('input',{type:'checkbox',className:'toggle',checked:s.logoPlate,onChange:e=>this.setP('logoPlate',e.target.checked)}))):null
   ),'01'),
   this.block('Marco y llamada a la acción','Perfectos para eventos, empaques, tarjetas y menús.',h('div',null,
     h('div',{className:'framegrid'},[['none','Sin marco'],['caption','Barra CTA'],['menu','Menú / mesa'],['outline','Marco fino']].map(f=>h('button',{key:f[0],className:'frameopt '+(s.frame===f[0]?'on':''),onClick:()=>this.setP('frame',f[0])},h('span',{className:'framesymbol '+f[0]}),f[1]))),
     s.frame!=='none'?h('div',{className:'fieldgrid',style:{marginTop:19}},h('label',{className:'field'},h('span',{className:'label'},'Llamada a la acción'),h('input',{value:s.cta,maxLength:32,onChange:e=>this.setP('cta',e.target.value)})),h('label',{className:'field'},h('span',{className:'label'},'Subtítulo'),h('input',{value:s.subtitle,maxLength:48,onChange:e=>this.setP('subtitle',e.target.value)}))):null
   ),'02')
 );}
 renderAdvanced(art,quality){const s=this.state;return h('div',null,
   this.block('Opciones de escaneabilidad','Controla la robustez del código y los márgenes de seguridad.',h('div',null,
     h('div',{className:'fieldgrid'},h('label',{className:'field'},h('span',{className:'label'},'Corrección de errores'),h('select',{value:s.level,onChange:e=>this.setP('level',e.target.value)},[['L','L · ~7%'],['M','M · ~15%'],['Q','Q · ~25%'],['H','H · ~30% (logo)']].map(x=>h('option',{key:x[0],value:x[0]},x[1])))),
       h('label',{className:'field'},h('span',{className:'label'},'Zona silenciosa'),h('select',{value:s.margin,onChange:e=>this.setP('margin',Number(e.target.value))},[2,3,4,5,6,8].map(x=>h('option',{key:x,value:x},x+' módulos'))))),
     h('div',{className:'divider'}),h('div',{className:'secsub'},'Verificación de contraste'),
     h('div',{className:'sectionrow'},h('span',{className:'muted'},'Contraste mínimo calculado'),h('strong',null,quality.ratio.toFixed(1)+':1')),
     h('div',{className:'inlinehelp'},I(quality.good?'check':'alert',18),quality.warns.length?quality.warns.join(' '):'Buena relación de contraste. Prueba el QR antes de imprimir.'),
     h('button',{className:'ghostbtn fullwidth',disabled:!!art.error||s.busy,onClick:()=>this.action('test',art)},I('eye',16),'Intentar prueba de lectura con el navegador'),
     s.scanResult?h('p',{className:'smallnote',style:{marginTop:11}},s.scanResult):null),'01'),
   this.block('Preparación para imprenta','Tamaño real para fichas impresas, con marcas de corte.',h('div',null,
     h('div',{className:'fieldgrid'},h('label',{className:'field'},h('span',{className:'label'},'Tamaño físico'),h('select',{value:s.printSize,onChange:e=>this.setP('printSize',Number(e.target.value))},[5,10,15].map(x=>h('option',{key:x,value:x},x+' × '+x+' cm')))),
       h('label',{className:'field'},h('span',{className:'label'},'Resolución PNG'),h('select',{value:s.exportSize,onChange:e=>this.setP('exportSize',Number(e.target.value))},[512,1024,2048,4096].map(x=>h('option',{key:x,value:x},x+' px'))))),
     h('button',{className:'primarybtn fullwidth',disabled:!!art.error,onClick:()=>this.print(art)},I('printer',16),'Generar ficha e imprimir')),'02'),
   this.block('Historial local y privacidad','Los datos permanecen en el navegador. Nada se envía a un servidor.',h('div',null,
     h('div',{className:'sectionrow'},h('strong',{style:{fontSize:12}},s.history.length+' diseños guardados'),h('button',{className:'linkbtn',onClick:()=>this.setState({historyVisible:!s.historyVisible})},I('history',16),s.historyVisible?'Ocultar':'Mostrar')),
     s.historyVisible?h('div',{className:'histlist'},s.history.length?s.history.map(entry=>h('div',{className:'histentry',key:entry.id},I('bookmark',17),h('div',{className:'htext'},h('strong',null,entry.title),h('small',null,new Date(entry.date).toLocaleDateString('es-MX'))),h('button',{onClick:()=>this.load(entry)},'Abrir'),h('button',{title:'Eliminar',onClick:()=>this.removeHistory(entry.id)},I('trash',15)))):h('p',{className:'empty'},'Aún no tienes códigos guardados.')):null,
     h('button',{className:'ghostbtn fullwidth',onClick:()=>this.reset()},I('reset',16),'Restablecer diseño')),'03')
 );}
 renderPreview(art,quality){const s=this.state,types=TYPES.find(t=>t[0]===s.type);return h('aside',{className:'preview'},
   h('div',{className:'previewhead'},h('h2',null,'Vista previa'),h('span',{className:'livebadge'},'EN VIVO')),
   h('div',{className:'previewtoggle'},[['qr','Código'],['card','Tarjeta'],['table','Mesa'],['pack','Producto']].map(x=>h('button',{key:x[0],className:s.mockup===x[0]?'on':'',onClick:()=>this.setP('mockup',x[0])},x[1]))),
   h('div',{className:'stage '+(s.mockup==='qr'?'':'is-'+s.mockup)},art.error?h('div',{className:'stageerror'},I('alert',28),h('p',null,art.error)):h('div',{className:'qrart',dangerouslySetInnerHTML:{__html:art.svg}})),
   h('div',{className:'qrnote'},h('span',null,types?types[1]:'QR', ' · Código estático'),h('strong',null,art.n?art.n+' × '+art.n+' módulos':'Sin código')),
   h('div',{className:'exportbox'},h('div',{className:'exporttitle'},I('download',17),'Tu diseño, listo para usar'),
     h('label',null,'Resolución de imagen PNG'),h('select',{value:s.exportSize,onChange:e=>this.setP('exportSize',Number(e.target.value))},[[512,'512 px · Digital'],[1024,'1024 px · Alta calidad'],[2048,'2048 px · Impresión 300 DPI'],[4096,'4096 px · Gran formato 300 DPI']].map(x=>h('option',{key:x[0],value:x[0]},x[1]))),
     h('div',{className:'downloads'},h('button',{className:'primarybtn',disabled:!!art.error||s.busy,onClick:()=>this.action('png',art)},I('download',16),'PNG'),h('button',{className:'ghostbtn',disabled:!!art.error||s.busy,onClick:()=>this.action('svg',art)},I('download',16),'SVG vectorial')),
     h('div',{className:'copyrow'},h('button',{disabled:!!art.error||s.busy,onClick:()=>this.action('copyPNG',art)},I('copy',14),'Copiar PNG'),h('button',{disabled:!!art.error||s.busy,onClick:()=>this.action('copySVG',art)},I('copy',14),'Copiar SVG'))),
   h('div',{className:'trustbox '+(quality.good?'':'warn')},I(quality.good?'shield':'alert',18),h('div',null,h('strong',null,quality.good?'Buena legibilidad estimada':'Revisa la escaneabilidad'),h('p',null,'Contraste '+quality.ratio.toFixed(1)+':1',quality.good?' · Espaciado correcto.':' · '+(quality.warns[0]||'Prueba con la cámara.')))),
   h('div',{className:'historybar'},h('button',{onClick:()=>this.save()},I('bookmark',16),'Guardar diseño'),h('button',{onClick:()=>this.setP('tab','advanced')},I('printer',16),'Impresión')),
   h('div',{className:'previewfoot'},'SVG sin pérdida de nitidez · PNG de alta resolución',h('br'), 'Prueba el QR con un teléfono antes de imprimir.')
 );}
 render(){const s=this.state,art=getArt(s),quality=contrast(s);return h('div',{className:'app'},
   h('header',{className:'top'},h('div',{className:'brand'},h('div',{className:'brandmark'}),h('div',null,h('strong',null,'QR ATELIER ',h('span',null,'STUDIO')),h('small',null,'DESIGN • SCAN • CREATE'))),
     h('div',{className:'topcenter'},'Workspace',h('span',{className:'slash'},'/'),h('span',{className:'crumb'},'Generador de QR')),
     h('div',{className:'actions'},h('button',{className:'circlebtn',title:s.theme==='light'?'Modo oscuro':'Modo claro',onClick:()=>this.setP('theme',s.theme==='light'?'dark':'light')},I(s.theme==='light'?'moon':'sun',18)),h('button',{className:'ghostbtn',onClick:()=>this.setP('tab','advanced')},I('history',16),'Historial'),h('button',{className:'primarybtn',onClick:()=>this.save()},I('bookmark',16),'Guardar'))),
   h('div',{className:'shell'},h('nav',{className:'nav',ariaLabel:'Tipos de código QR'},h('div',{className:'navheading'},'TIPO DE CONTENIDO'),h('div',{className:'navtypes'},TYPES.map(x=>h('button',{key:x[0],className:'navitem '+(s.type===x[0]?'sel':''),onClick:()=>this.setState({type:x[0],tab:'content',scanResult:''})},I(x[2],17),x[1],s.type===x[0]?h('small',null,'●'):null))),h('div',{className:'navseparator'}),h('div',{className:'navaside'},I('sparkles',20),h('strong',null,'Códigos que destacan'),h('p',null,'Diseños orgánicos y exportación profesional. Sin registro y sin depender de servicios externos.'),h('span',{className:'pill'},'100% LOCAL'))),
     h('main',{className:'main'},h('div',{className:'eyebrow'},h('i',null),'QR DESIGN WORKSPACE'),h('div',{className:'mainhero'},h('h1',null,'Convierte enlaces en ',h('em',null,'experiencias.')),h('p',null,'Diseña un QR que represente tu marca. Personaliza hasta el último detalle y exporta en calidad de imprenta.')),
       h('div',{className:'tabs'},[['content','Contenido','link'],['design','Diseño','wand'],['brand','Marca','layers'],['advanced','Avanzado','shield']].map(x=>h('button',{key:x[0],className:'tab '+(s.tab===x[0]?'active':''),onClick:()=>this.setP('tab',x[0])},I(x[2],16),x[1]))),
       s.tab==='content'?this.renderContent(art):s.tab==='design'?this.renderDesign():s.tab==='brand'?this.renderBrand():this.renderAdvanced(art,quality)),
     this.renderPreview(art,quality)),
     s.toast?h('div',{className:'toast',role:'status'},s.toast):null
   );}
}
/* === QR Atelier PRO: vector layout studio, all UI rendered in React === */
const FORMATS=[['qr','Código QR','sparkles'],['card','Tarjeta','user'],['cardv','Tarjeta vertical','user'],['product','Producto','shop'],['table','Mesa','layers'],['poster','Póster','printer'],['sticker','Sticker','star'],['social','Redes','instagram']];
const STYLES=[
  {id:'linen',name:'Editorial',bg:'#f8f5ef',ink:'#202435',accent:'#7864d7',soft:'#e7e0d7',line:'#ded8cf'},
  {id:'noir',name:'Noir',bg:'#171d2e',ink:'#fffaf3',accent:'#dab783',soft:'#293248',line:'#444757'},
  {id:'lavender',name:'Lavanda',bg:'#ebe8fc',ink:'#34296e',accent:'#7163de',soft:'#dad3fb',line:'#c4bbe9'},
  {id:'sage',name:'Botánico',bg:'#e9efea',ink:'#1e4336',accent:'#57866c',soft:'#d0e0d4',line:'#c0d3c5'},
  {id:'peach',name:'Atardecer',bg:'#faede7',ink:'#6e3534',accent:'#d68e6a',soft:'#f6d5c5',line:'#edc8b7'},
  {id:'electric',name:'Eléctrico',bg:'#272043',ink:'#ffffff',accent:'#b8f4ce',soft:'#4e4371',line:'#625984'}
];
function composed(s,qrArt){
  if(qrArt.error||s.mockup==='qr')return qrArt;
  const a=STYLES.find(x=>x.id===s.designStyle)||STYLES[0],
        brand=svgEsc((s.brandName||'ATELIER STUDIO').slice(0,28).toUpperCase()),
        cta=svgEsc((s.cta||'ESCANEA Y DESCUBRE').slice(0,38)),
        sub=svgEsc((s.subtitle||'Cada detalle cuenta.').slice(0,64)),
        detail=svgEsc((s.brandDetail||'WWW.TUMARCA.COM').slice(0,55).toUpperCase()),
        named=svgEsc((s.contactName||'Tu marca, otra dimensión').slice(0,35)),
        font=s.typeface==='serif'?'Georgia,serif':s.typeface==='mono'?'Courier New,monospace':'Arial,Helvetica,sans-serif';
  const dark=['noir','electric'].includes(a.id), white='#ffffff', qrbase=renderQR({...s,frame:'none',transparent:false,background:'#ffffff'},qrArt.data),
        content=qrbase.svg.replace(/^<svg[^>]*>/,'').replace(/<\/svg>\s*$/,'');
  let W=900,H=900,body='';
  const txt=(x,y,v,size=25,weight=500,color=a.ink,letter=0,anchor='start')=>`<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" letter-spacing="${letter}" text-anchor="${anchor}" fill="${color}">${v}</text>`;
  const line=(x1,y1,x2,y2,color=a.line,w=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/>`;
  const rect=(x,y,w,h,fill,r=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
  const tag=(x,y,t)=>`${rect(x,y,175,34,a.soft,17)}${txt(x+87.5,y+23,t,13,700,a.ink,2,'middle')}`;
  const qr=(x,y,z)=>`<g><rect x="${x-8}" y="${y-8}" width="${z+16}" height="${z+16}" rx="${s.roundedArt?24:5}" fill="#ffffff"/><svg x="${x}" y="${y}" width="${z}" height="${z}" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">${content}</svg></g>`;
  const dotgrid=(x,y,cols,rows,step=23)=>{let o='<g fill="'+a.accent+'" opacity=".35">';for(let r=0;r<rows;r++)for(let c=0;c<cols;c++)o+=`<circle cx="${x+c*step}" cy="${y+r*step}" r="1.6"/>`;return o+'</g>';};
  const flourish=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${a.accent}" stroke-width="2" opacity=".45"/><circle cx="${x}" cy="${y}" r="${r*.75}" fill="none" stroke="${a.accent}" stroke-width="1" opacity=".4"/>`;
  const paper=(w,h)=>`${rect(0,0,w,h,a.bg)}<rect x="16" y="16" width="${w-32}" height="${h-32}" fill="none" stroke="${a.line}" stroke-width="1" opacity=".5"/>`;
  if(s.mockup==='card'){
    W=1100;H=640;
    const left=s.layoutMode==='left',center=s.layoutMode==='center',xx=center?405:left?86:700;
    body=paper(W,H)+`${rect(0,0,16,H,a.accent)}`+dotgrid(left?860:40,78,8,7,25)+
      `${txt(left?660:80,106,brand,25,800,a.ink,4)}`+line(left?661:80,129,left?980:480,129,a.line,2)+
      `${txt(left?660:80,253,named,center?37:43,700,a.ink,center?0:-1)}`+
      `${txt(left?660:80,293,sub,19,400,a.ink)}`+
      `${tag(left?660:80,344,'DIGITAL EXPERIENCE')}`+
      `${line(left?661:80,487,left?980:470,487,a.line,2)}`+
      `${txt(left?660:80,532,cta,22,700,a.accent,1)}`+txt(left?660:80,571,detail,15,600,a.ink,1)+
      qr(xx,168,306)+flourish(left?1020:560,576,28);
    if(center){body=paper(W,H)+rect(0,0,1100,10,a.accent)+txt(85,96,brand,22,800,a.ink,4)+txt(86,220,named,43,700,a.ink)+txt(86,265,sub,20,400,a.ink)+txt(86,350,cta,23,700,a.accent,1)+txt(86,545,detail,16,500,a.ink,2)+qr(646,128,340)+dotgrid(72,420,8,4);}
  }else if(s.mockup==='cardv'){
    W=710;H=1050;
    body=paper(W,H)+rect(0,0,W,20,a.accent)+
      txt(355,134,brand,25,800,a.ink,5,'middle')+
      `<path d="M128 177H582" stroke="${a.line}" stroke-width="2"/>`+
      txt(355,265,named,43,700,a.ink,-1,'middle')+
      txt(355,309,sub,20,400,a.ink,0,'middle')+
      flourish(675,375,158)+dotgrid(57,423,4,6)+
      qr(143,397,424)+
      line(130,879,580,879,a.line,2)+
      txt(355,934,cta,27,750,a.accent,1,'middle')+
      txt(355,985,detail,16,700,a.ink,2.5,'middle');
    if(s.layoutMode==='left'){body=paper(W,H)+rect(0,0,W,20,a.accent)+txt(82,130,brand,27,800,a.ink,4)+txt(82,240,named,43,700,a.ink)+txt(82,288,sub,20,400,a.ink)+qr(145,390,420)+txt(82,925,cta,28,750,a.accent)+txt(82,972,detail,17,650,a.ink,2)+dotgrid(540,310,5,6);}
  }else if(s.mockup==='product'){
    W=730;H=1040;
    body=paper(W,H)+rect(0,0,W,19,a.accent)+
      `<circle cx="365" cy="61" r="20" fill="${a.soft}" stroke="${a.line}" stroke-width="3"/>`+
      txt(365,163,brand,27,800,a.ink,5,'middle')+line(105,194,625,194,a.line,2)+
      txt(365,265,named,41,700,a.ink,-1,'middle')+txt(365,307,sub,21,400,a.ink,0,'middle')+
      flourish(-35,365,210)+flourish(750,740,185)+
      qr(150,397,430)+
      txt(365,904,cta,27,700,a.ink,1.5,'middle')+txt(365,956,detail,16,600,a.accent,3,'middle')+
      line(148,986,582,986,a.line,2);
    if(s.layoutMode==='left'){body=paper(W,H)+rect(0,0,W,20,a.accent)+txt(80,156,brand,29,800,a.ink,5)+txt(80,245,named,43,700,a.ink)+line(80,285,650,285,a.line,2)+txt(80,327,sub,21,400,a.ink)+qr(150,405,430)+txt(80,921,cta,28,700,a.accent)+txt(80,967,detail,16,600,a.ink,2)+dotgrid(560,64,5,7);}
  }else if(s.mockup==='table'){
    W=760;H=1010;
    body=paper(W,H)+`<path d="M0 0H760V195Q380 320 0 195Z" fill="${a.soft}"/>`+
      txt(380,100,brand,27,800,a.ink,4,'middle')+txt(380,168,'HOLA, BIENVENIDO',23,700,a.ink,2,'middle')+
      txt(380,312,named,44,700,a.ink,-1,'middle')+txt(380,358,sub,22,400,a.ink,0,'middle')+
      qr(171,422,418)+
      rect(134,892,492,63,a.ink,31)+txt(380,932,cta,23,700,a.bg,1.3,'middle')+
      txt(380,985,detail,15,500,a.ink,3,'middle')+dotgrid(40,720,4,6)+dotgrid(665,235,4,6);
    if(s.layoutMode==='left'){body=paper(W,H)+rect(0,0,W,20,a.accent)+flourish(730,18,180)+txt(92,112,brand,27,800,a.ink,4)+line(92,146,665,146,a.line,2)+txt(92,239,named,44,700,a.ink)+txt(92,289,sub,22,400,a.ink)+qr(166,390,430)+txt(380,905,cta,29,700,a.accent,1,'middle')+txt(380,961,detail,16,500,a.ink,2,'middle');}
  }else if(s.mockup==='poster'){
    W=850;H=1150;
    body=paper(W,H)+rect(0,0,850,22,a.accent)+
      `<path d="M680 -65C910 225 560 270 870 545" fill="none" stroke="${a.accent}" stroke-width="65" opacity=".22"/>`+
      txt(86,129,brand,29,700,a.ink,6)+
      txt(81,298,named,55,700,a.ink,-2)+txt(86,344,sub,24,400,a.ink)+
      line(83,380,765,380,a.line,3)+
      qr(180,467,490)+
      txt(425,1057,cta,36,800,a.ink,1.5,'middle')+txt(425,1106,detail,18,500,a.accent,3,'middle')+dotgrid(84,904,5,6);
  }else if(s.mockup==='sticker'){
    W=850;H=850;
    body=rect(0,0,850,850,a.bg,76)+`<rect x="24" y="24" width="802" height="802" rx="63" fill="none" stroke="${a.line}" stroke-width="3"/>`+
      `<path d="M45 180Q425 -85 805 180" fill="none" stroke="${a.accent}" stroke-width="3"/>`+
      txt(425,114,brand,29,800,a.ink,5,'middle')+txt(425,177,cta,30,700,a.ink,1.5,'middle')+
      qr(178,232,494)+
      txt(425,792,detail,16,600,a.accent,3,'middle');
  }else if(s.mockup==='social'){
    W=850;H=1100;
    body=paper(W,H)+`<circle cx="790" cy="240" r="260" fill="${a.soft}" opacity=".88"/>`+
      `<circle cx="55" cy="950" r="245" fill="${a.accent}" opacity=".13"/>`+
      txt(81,132,brand,27,800,a.ink,5)+tag(82,188,'DISCOVER MORE')+
      txt(83,322,named,58,800,a.ink,-2)+txt(83,375,sub,24,400,a.ink)+
      qr(177,458,496)+
      rect(154,985,545,71,a.ink,35)+txt(426,1032,cta,26,800,a.bg,1.5,'middle');
  }
  if(s.texture){
    const texture=[];for(let y=43;y<H;y+=34)for(let x=42;x<W;x+=34){if((x*y)%7<2)texture.push(`<circle cx="${x}" cy="${y}" r=".9" fill="${a.line}" opacity=".25"/>`);}
    body=body.replace(/^(<rect[^>]*>)/,'$1'+'<g opacity=".45">'+texture.join('')+'</g>');
  }
  const output=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Diseño ${s.mockup} con código QR">${body}</svg>`;
  return {svg:output,width:W,height:H,n:qrArt.n,data:qrArt.data,error:''};
}


/* Studio Lab: all tools operate locally in the browser, without server APIs. */
const BRAND_KEYS=['primary','secondary','tertiary','eyeColor','pupilColor','background','gradient','angle','shape','moduleScale','curve','eyeStroke','eye','pupil','brandName','contactName','brandDetail','cta','subtitle','designStyle','typeface','texture','roundedArt','layoutMode'];
const PROOF_STYLES=[
  {id:'royal',name:'Royal Contour',subtitle:'Cobalto · trazos unidos',shape:'liquid',primary:'#103db8',secondary:'#2775f7',eyeColor:'#103783',pupilColor:'#2072df',gradient:'solid'},
  {id:'cloud',name:'Cloud Motion',subtitle:'Puntillas muy suaves',shape:'cloud',primary:'#153878',secondary:'#45a2d2',eyeColor:'#153878',pupilColor:'#2779a5',gradient:'linear'},
  {id:'silk',name:'Silk Ink',subtitle:'Silhueta delicada',shape:'silk',primary:'#14263a',secondary:'#688399',eyeColor:'#14263a',pupilColor:'#14263a',gradient:'solid'},
  {id:'ocean',name:'Ocean Current',subtitle:'Acento turquesa',shape:'tide',primary:'#05485c',secondary:'#00a0aa',eyeColor:'#073f51',pupilColor:'#05849b',gradient:'linear'},
  {id:'noir',name:'Noir Ribbons',subtitle:'Cinta editorial',shape:'ribbon',primary:'#14213d',secondary:'#40516a',eyeColor:'#14213d',pupilColor:'#263c5d',gradient:'solid'},
  {id:'pixel',name:'Minimal Dot',subtitle:'Puntos limpios',shape:'dots',primary:'#173f85',secondary:'#1a75d7',eyeColor:'#173f85',pupilColor:'#173f85',gradient:'solid'}
];
function getKits(){try{const x=JSON.parse(localStorage.getItem('qrAtelierBrandKitsV7')||'[]');return Array.isArray(x)?x.slice(0,12):[];}catch{return [];}}
function saveKits(kits){localStorage.setItem('qrAtelierBrandKitsV7',JSON.stringify(kits.slice(0,12)));}
function cleanName(s){return (String(s||'diseño').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'-').replace(/^-|-$/g,'').slice(0,55)||'codigo').toLowerCase();}
function csvValue(s){return '"'+String(s||'').replace(/"/g,'""')+'"';}
function parseBatchInput(src){const entries=String(src||'').split(/\r?\n/).map((line,i)=>({line:line.trim(),index:i+1})).filter(x=>x.line);
  if(entries.length>40)throw Error('Máximo 40 enlaces por lote para mantener la descarga ligera.');
  const result=[],errors=[],seen=new Set();
  for(const e of entries){const at=e.line.indexOf('|');const label=at>=0?e.line.slice(0,at).trim():'';const raw=at>=0?e.line.slice(at+1).trim():e.line;const url=normalizeUrl(raw);
    if(!url){errors.push('Línea '+e.index+': URL inválida');continue;}
    if(seen.has(url)){errors.push('Línea '+e.index+': URL repetida');continue;}seen.add(url);
    result.push({title:label||new URL(url).hostname,url,index:e.index});
  }
  return {entries:result,errors};
}
function zipArchive(files){
  const chunks=[],center=[];let offset=0;
  const encode=t=>new TextEncoder().encode(t);
  const write16=(dv,i,v)=>dv.setUint16(i,v,true),write32=(dv,i,v)=>dv.setUint32(i,v,true);
  for(const f of files){const name=encode(f.name),data=typeof f.data==='string'?encode(f.data):f.data;const sum=crc(data);
    const local=new Uint8Array(30+name.length),l=new DataView(local.buffer);
    write32(l,0,0x04034b50);write16(l,4,20);write16(l,6,0x0800);write16(l,8,0);write16(l,10,0);write16(l,12,33);
    write32(l,14,sum);write32(l,18,data.length);write32(l,22,data.length);write16(l,26,name.length);write16(l,28,0);local.set(name,30);
    const c=new Uint8Array(46+name.length),v=new DataView(c.buffer);
    write32(v,0,0x02014b50);write16(v,4,20);write16(v,6,20);write16(v,8,0x0800);write16(v,10,0);write16(v,12,0);write16(v,14,33);
    write32(v,16,sum);write32(v,20,data.length);write32(v,24,data.length);write16(v,28,name.length);
    write16(v,30,0);write16(v,32,0);write16(v,34,0);write16(v,36,0);write32(v,38,0);write32(v,42,offset);c.set(name,46);
    chunks.push(local,data);center.push(c);offset+=local.length+data.length;
  }
  const cSize=center.reduce((a,b)=>a+b.length,0),end=new Uint8Array(22),d=new DataView(end.buffer);
  write32(d,0,0x06054b50);write16(d,4,0);write16(d,6,0);write16(d,8,files.length);write16(d,10,files.length);
  write32(d,12,cSize);write32(d,16,offset);write16(d,20,0);
  return new Blob([...chunks,...center,end],{type:'application/zip'});
}

const PRO_DEFAULTS={tab:'design',mockup:'qr',exportTarget:'qr',brandName:'LUMEN STUDIO',contactName:'Ideas que conectan',brandDetail:'WWW.TUMARCA.COM',designStyle:'linen',layoutMode:'right',typeface:'sans',texture:false,roundedArt:true,animation:true,labView:'compare',labPrintMm:50,batchInput:'',batchBusy:false,batchIncludeLogo:false,kitName:'Mi kit azul',kits:[]};
class StudioPro extends Studio {
  constructor(props){super(props);this.state={...this.state,...PRO_DEFAULTS,kits:getKits()};}
  reset(){this.setState(s=>({...DEF,...PRO_DEFAULTS,fields:{...DF},theme:s.theme,history:s.history,toast:'',busy:false}));this.tell('Diseño restablecido.');}
  load(entry){this.setState({...DEF,...PRO_DEFAULTS,...entry.config,fields:{...DF,...entry.config.fields},historyVisible:false,history:readHistory(),toast:''});this.tell('Diseño recuperado.');}
  fieldText(label,key,placeholder,maxLength=70){const v=this.state[key];return h('label',{className:'field'},h('span',{className:'label'},label),h('input',{value:v,placeholder,maxLength,onChange:e=>this.setP(key,e.target.value)}));}
  buttonGrid(values,current,onChange,cl='optiongrid'){return h('div',{className:cl},values.map(v=>h('button',{key:v[0],type:'button',className:'optiontile '+(current===v[0]?'selected':''),onClick:()=>onChange(v[0])},v[2]?I(v[2],21):null,h('span',null,v[1]),current===v[0]?h('i',{className:'selectcheck'},I('check',11)):null)));}
  async exportBatch(){const s=this.state;this.setState({batchBusy:true});try{
    const batch=parseBatchInput(s.batchInput);
    if(batch.errors.length)throw Error(batch.errors.slice(0,2).join(' · ')+(batch.errors.length>2?' · Más errores…':''));
    if(!batch.entries.length)throw Error('Agrega al menos una URL válida para exportar.');
    const files=[],manifest=[['Nombre','URL','Archivo'].map(csvValue).join(',')];
    for(let i=0;i<batch.entries.length;i++){
      const it=batch.entries[i],name=String(i+1).padStart(2,'0')+'-'+cleanName(it.title)+'.svg';
      const cfg={...s,frame:'none',transparent:false,logoMode:s.batchIncludeLogo?s.logoMode:'none'};
      const svg=renderQR(cfg,it.url).svg;
      files.push({name:'qr/'+name,data:svg});
      manifest.push([it.title,it.url,'qr/'+name].map(csvValue).join(','));
    }
    files.unshift({name:'manifest.csv',data:'\ufeff'+manifest.join('\r\n')});
    files.push({name:'LEEME.txt',data:'QR ATELIER · PRO LAB\r\n'+batch.entries.length+' códigos QR SVG vectoriales.\r\nCada archivo es un QR estático; el enlace debe mantenerse activo.\r\nComprueba la lectura antes de imprimir.\r\n'});
    saveBlob(zipArchive(files),'QR-Atelier-Lote-'+stamp()+'.zip');this.tell(batch.entries.length+' QR vectoriales exportados en ZIP.');
  }catch(e){this.tell(e.message||'No se pudo generar el ZIP.');}finally{this.setState({batchBusy:false});}}
  saveKit(){const s=this.state,name=String(s.kitName||'Mi identidad').trim().slice(0,40)||'Mi identidad';
    const config={};for(const key of BRAND_KEYS)config[key]=s[key];
    const entry={id:Date.now(),name,created:new Date().toISOString(),config};
    try{const kits=[entry,...getKits()].slice(0,12);saveKits(kits);this.setState({kits});this.tell('Kit de marca guardado localmente.');}catch(e){this.tell('No fue posible guardar el kit de marca.');}
  }
  applyKit(entry){this.setState({...entry.config,preset:'custom',scanResult:''});this.tell('Kit '+entry.name+' aplicado.');}
  deleteKit(id){try{const kits=getKits().filter(x=>x.id!==id);saveKits(kits);this.setState({kits});this.tell('Kit eliminado.');}catch(e){this.tell('No se pudo eliminar el kit.');}}
  exportProject(){const s=this.state;const keys=[...Object.keys(DEF),...Object.keys(PRO_DEFAULTS)];const config={};for(const key of keys){if(key in s&&!['busy','batchBusy','toast','history','kits','historyVisible','scanResult'].includes(key))config[key]=s[key];}
    saveBlob(new Blob([JSON.stringify({format:'qr-atelier-project',version:7,created:new Date().toISOString(),config},null,2)],{type:'application/json'}),'QR-Atelier-Proyecto-'+stamp()+'.json');this.tell('Proyecto editable JSON descargado.');
  }
  async importProject(e){const file=e.target.files?.[0];if(!file)return;try{
    if(file.size>2*1024*1024)throw Error('El proyecto JSON supera 2 MB.');
    const object=JSON.parse(await file.text());if(object.format!=='qr-atelier-project'||typeof object.config!=='object'||!object.config)throw Error('El JSON no es un proyecto de QR Atelier.');
    const allowed=[...Object.keys(DEF),...Object.keys(PRO_DEFAULTS)],config={};
    for(const key of allowed){if(key in object.config&&!['busy','batchBusy','toast','history','kits'].includes(key))config[key]=object.config[key];}
    if(config.fields){config.fields={...DF,...config.fields};}
    if(!SHAPES.some(x=>x[0]===config.shape))config.shape='liquid';
    this.setState({...config,tab:'design',kits:getKits(),history:readHistory(),busy:false,batchBusy:false,scanResult:''});this.tell('Proyecto recuperado y editable.');
  }catch(err){this.tell(err.message||'No se pudo leer el proyecto.');}e.target.value='';}
  renderLabCompare(art){const s=this.state;
    return this.block('Galería de resultados reales','Compara seis alternativas renderizadas con el mismo contenido, no imágenes de muestra. Aplica una en un clic.',
      art.error?h('div',{className:'inlinehelp'},I('alert',17),'Completa el contenido para visualizar las alternativas.'):
      h('div',{className:'lab-compare-grid'},PROOF_STYLES.map(p=>{
        let sample=null;try{sample=renderQR({...s,...p,frame:'none',transparent:false,background:'#ffffff'},art.data);}catch(e){}
        return h('button',{key:p.id,className:'lab-variant',type:'button',disabled:!sample,onClick:()=>this.setState({shape:p.shape,primary:p.primary,secondary:p.secondary,eyeColor:p.eyeColor,pupilColor:p.pupilColor,gradient:p.gradient,frame:'none',preset:'custom',tab:'design'})},
          h('div',{className:'lab-qr',dangerouslySetInnerHTML:{__html:sample?.svg||''}}),h('strong',null,p.name),h('small',null,p.subtitle),h('span',{className:'lab-action'},'Aplicar estilo →'));
      })),'01');}
  renderLabAudit(art,quality){const s=this.state,side=art.side||0,mm=Number(s.labPrintMm||50),moduleMM=side?mm/side:0;
    const problems=[];
    if(quality.ratio<4.5)problems.push('Mejora el contraste de la tinta.');
    if(s.margin<4)problems.push('Usa al menos cuatro módulos de zona silenciosa.');
    if(moduleMM&&moduleMM<.45)problems.push('Los módulos resultan pequeños para una impresión exigente.');
    if(s.logoMode!=='none'&&s.level!=='H')problems.push('Con logotipo, considera corrección H.');
    if(s.logoMode!=='none'&&s.logoSize>20)problems.push('Reduce el tamaño del logotipo.');
    const text=problems.length?problems.join(' '):'Parámetros orientativos favorables. No sustituye la prueba con cámara sobre el soporte final.';
    return h('div',null,
      this.block('Simulador de impresión y riesgo','Evalúa dimensiones reales y densidad antes de enviar el archivo a imprenta.',h('div',null,
        this.range('Tamaño del QR impreso','labPrintMm',20,150,5,' mm'),
        h('div',{className:'lab-stats'},
          h('div',{className:'lab-stat'},h('strong',null,side||'—'),h('span',null,'módulos por lado, con margen')),
          h('div',{className:'lab-stat'},h('strong',null,moduleMM?moduleMM.toFixed(2):'—'),h('span',null,'mm aproximados por módulo')),
          h('div',{className:'lab-stat'},h('strong',null,quality.ratio.toFixed(1)+':1'),h('span',null,'contraste mínimo orientativo'))),
        h('div',{className:'lab-risk '+(problems.length?'warning':'')},h('strong',null,problems.length?'Recomendaciones antes de imprimir':'Parámetros favorables'),text),
        art.error?null:h('div',{className:'lab-preview-size'},h('div',{style:{width:'min(100%,'+Math.min(300,mm*2)+'px)'} ,dangerouslySetInnerHTML:{__html:art.svg}})),
        h('div',{className:'lab-actions'},h('button',{className:'ghostbtn',disabled:!!art.error||s.busy,onClick:()=>this.action('test',art)},I('shield',17),'Intentar lectura automática'),h('button',{className:'lightbtn',disabled:!!art.error,onClick:()=>this.print(art)},I('printer',17),'Ficha de impresión')),
        s.scanResult?h('div',{className:'inlinehelp'},s.scanResult):null),'01'),
      this.block('Buenas prácticas verificables','El QR sigue siendo un símbolo digital: un estilo vistoso no debe comprometer su lectura.',h('div',{className:'editor-tip'},I('shield',20),h('span',null,'Evita fondos con textura justo detrás del QR, impresión demasiado pequeña, acabados reflectantes y ojos muy alterados. Verifica el archivo final con varios teléfonos.')),'02'));
  }
  renderLabBatch(){const s=this.state;let parsed={entries:[],errors:[]};try{parsed=parseBatchInput(s.batchInput);}catch(e){parsed={entries:[],errors:[e.message]};}
    return h('div',null,this.block('Generador por lotes','Crea hasta 40 QR SVG en una sola descarga ZIP. No subimos enlaces ni datos a ningún servidor.',h('div',null,
      h('label',{className:'field'},h('span',{className:'label'},'Una URL por línea, o Etiqueta | URL'),
        h('textarea',{className:'lab-input',rows:7,value:s.batchInput,onChange:e=>this.setP('batchInput',e.target.value),placeholder:'Catálogo | https://ejemplo.com/catalogo\nReserva | https://ejemplo.com/reserva\nhttps://ejemplo.com/contacto'})),
      h('div',{className:'sectionrow'},h('strong',null,parsed.entries.length+' enlaces válidos'),h('span',{className:'smallnote'},parsed.errors.length+' advertencias')),
      parsed.errors.length?h('div',{className:'lab-risk warning'},parsed.errors.slice(0,3).join(' · ')):null,
      h('div',{className:'switchrow'},h('div',null,h('strong',null,'Integrar logotipo actual'),h('p',null,'Desactivado por defecto para mejorar la compatibilidad')),h('input',{className:'toggle',type:'checkbox',checked:s.batchIncludeLogo,onChange:e=>this.setP('batchIncludeLogo',e.target.checked)})),
      h('div',{className:'lab-actions'},h('button',{className:'primarybtn',disabled:s.batchBusy||!parsed.entries.length||!!parsed.errors.length,onClick:()=>this.exportBatch()},I('download',16),s.batchBusy?'Preparando archivos…':'Exportar lote SVG + CSV (.ZIP)')),
      h('div',{className:'inlinehelp'},I('shield',16),'Se incluye un manifest.csv para relacionar cada URL con su SVG, ideal para etiquetas y fichas de productos.')),'01'));
  }
  renderLabKits(){const s=this.state;return h('div',null,
    this.block('Bóveda de identidad visual','Guarda estilos de marca reutilizables. Los kits no contienen tus enlaces ni contraseñas.',h('div',null,
      h('label',{className:'field'},h('span',{className:'label'},'Nombre del kit'),h('input',{value:s.kitName,maxLength:40,onChange:e=>this.setP('kitName',e.target.value),placeholder:'Mi marca · Azul rey'})),
      h('div',{className:'lab-actions'},h('button',{className:'primarybtn',onClick:()=>this.saveKit()},I('bookmark',16),'Guardar identidad actual')),
      h('div',{className:'kit-list'},s.kits.length?s.kits.map(k=>h('div',{className:'kit-row',key:k.id},
        h('div',null,h('strong',null,k.name),h('small',null,'Creado '+new Date(k.created).toLocaleDateString('es-MX'))),
        h('div',{className:'kit-actions'},h('button',{onClick:()=>this.applyKit(k)},'Aplicar'),h('button',{onClick:()=>this.deleteKit(k.id),title:'Eliminar este kit'},I('trash',15))))):h('div',{className:'inlinehelp'},'Tus kits de marca aparecerán aquí.'))),'01'),
    this.block('Transferir proyectos editables','Exporta todo el proyecto en JSON o recupera una versión anterior sin perder los ajustes.',h('div',null,
      h('div',{className:'lab-actions'},h('button',{className:'primarybtn',onClick:()=>this.exportProject()},I('download',16),'Descargar proyecto JSON'),
        h('label',{className:'lightbtn',style:{cursor:'pointer',padding:'11px 15px',borderRadius:10,display:'inline-flex',alignItems:'center',gap:8}},I('upload',16),'Importar proyecto',h('input',{type:'file',accept:'.json,application/json',hidden:true,onChange:e=>this.importProject(e)}))),
      h('div',{className:'inlinehelp'},I('shield',16),'El proyecto JSON puede contener enlaces, datos de contacto y logotipos. Guárdalo donde corresponda.')),'02'));
  }
  renderLab(art,quality){const s=this.state;
    return h('div',{className:'panelpage enter'},
      h('div',{className:'pro-lab-hero'},h('small',null,'QR ATELIER · EXPERIMENTAL TOOLS'),h('strong',null,'PRO LAB · Creative Intelligence'),h('p',null,'Compara, calibra, exporta en lote y guarda identidades visuales. Todo en tu navegador.')),
      h('div',{className:'lab-subtabs'},[['compare','Comparar estilos'],['audit','Auditoría de impresión'],['batch','Lotes SVG + CSV'],['kits','Brand Vault']].map(t=>h('button',{key:t[0],type:'button',className:s.labView===t[0]?'active':'',onClick:()=>this.setP('labView',t[0])},t[1]))),
      s.labView==='compare'?this.renderLabCompare(art):s.labView==='audit'?this.renderLabAudit(art,quality):s.labView==='batch'?this.renderLabBatch():this.renderLabKits());
  }

  renderMockups(){const s=this.state;const picked=STYLES.find(x=>x.id===s.designStyle)||STYLES[0];return h('div',{className:'panelpage enter'},
    this.block('¿Dónde vivirá tu QR?','Elige una pieza real de diseño. Cada escenario se exporta como SVG/PNG completo, sin perder la calidad del QR.',
      h('div',{className:'formatgrid'},FORMATS.map(([id,label,ic])=>h('button',{key:id,type:'button',className:'formatcard '+(s.mockup===id?'selected':''),onClick:()=>this.setState({mockup:id,exportTarget:id==='qr'?'qr':'design'})},h('span',{className:'formaticon'},I(ic,22)),h('span',null,label),s.mockup===id?h('i',{className:'formatcheck'},I('check',12)):null))), '01'),
    s.mockup!=='qr'?this.block('Dirección de arte','Paletas cuidadas que cambian todo el diseño, no solamente el fondo.',h('div',{className:'artstyles'},STYLES.map(p=>h('button',{className:'artstyle '+(s.designStyle===p.id?'selected':''),key:p.id,onClick:()=>this.setP('designStyle',p.id)},h('div',{className:'artstylevisual',style:{background:p.bg}},h('span',{style:{background:p.ink}},h('i',{style:{background:p.accent}}))),h('b',null,p.name),s.designStyle===p.id?h('i',{className:'stylecheck'},I('check',12)):null))), '02'):null,
    s.mockup!=='qr'?this.block('Composición y acabados','Controla la disposición de los elementos y el carácter de tu diseño.',h('div',null,
      h('div',{className:'minilabel'},'Distribución'),this.seg('Distribución',[['right','QR derecha / central'],['left','QR izquierda / editorial'],['center','Impacto visual']],s.layoutMode,x=>this.setP('layoutMode',x)),
      h('div',{className:'inputpair'},h('label',{className:'field'},h('span',{className:'label'},'Tipografía'),h('select',{value:s.typeface,onChange:e=>this.setP('typeface',e.target.value)},[['sans','Sans moderna'],['serif','Serif editorial'],['mono','Monoespaciada']].map(x=>h('option',{key:x[0],value:x[0]},x[1])))),
      h('label',{className:'field'},h('span',{className:'label'},'Color de composición'),h('div',{className:'mini-swatch',style:{background:picked.bg}},h('span',{style:{background:picked.ink}}),picked.name))),
      h('div',{className:'switchrow'},h('div',null,h('strong',null,'Textura de papel'),h('p',null,'Una textura delicada en el fondo')),h('input',{className:'toggle',type:'checkbox',checked:s.texture,onChange:e=>this.setP('texture',e.target.checked)})),
      h('div',{className:'switchrow'},h('div',null,h('strong',null,'Esquinas suaves'),h('p',null,'Redondea la placa del QR')),h('input',{className:'toggle',type:'checkbox',checked:s.roundedArt,onChange:e=>this.setP('roundedArt',e.target.checked)})),
      h('div',{className:'switchrow'},h('div',null,h('strong',null,'Animaciones de vista previa'),h('p',null,'Activar microinteracciones y movimiento suave')),h('input',{className:'toggle',type:'checkbox',checked:s.animation,onChange:e=>this.setP('animation',e.target.checked)}))
    ), '03'):null,
    h('div',{className:'editor-tip'},I('sparkles',19),h('span',null,'Consejo: abre la pestaña ',h('strong',null,'Marca'),' para personalizar los textos, el logotipo y la llamada a la acción.'))
  );}
  renderBrand(){const s=this.state;return h('div',{className:'panelpage enter'},
    this.block('Identidad que se nota','Los siguientes textos se usan en las tarjetas, etiquetas, menús y otras piezas.',h('div',{className:'fieldgrid'},
      this.fieldText('Marca / empresa','brandName','LUMEN STUDIO',28),
      this.fieldText('Título principal','contactName','Ideas que conectan',36),
      this.fieldText('Sitio / @usuario / detalle','brandDetail','WWW.TUMARCA.COM',55),
      h('label',{className:'field'},h('span',{className:'label'},'Llamada a la acción'),h('input',{value:s.cta,maxLength:38,onChange:e=>this.setP('cta',e.target.value)})),
      h('label',{className:'field wide'},h('span',{className:'label'},'Texto secundario'),h('input',{value:s.subtitle,maxLength:64,onChange:e=>this.setP('subtitle',e.target.value)}))
    ), '01'),
    this.block('Logotipo central','Añade un icono o tu marca. Para conservar la lectura, evita logos demasiado grandes.',h('div',null,
      this.seg('Logotipo',[['none','Sin icono'],['icon','Icono de la galería'],['image','Subir logo']],s.logoMode,v=>this.setP('logoMode',v)),
      s.logoMode==='icon'?h('div',{className:'logooptions'},LOGO_ICONS.map(n=>h('button',{key:n,title:n,className:'logooption '+(s.logoIcon===n?'chosen':''),onClick:()=>this.setP('logoIcon',n)},I(n,20),h('span',null,n==='link'?'web':n)))):null,
      s.logoMode==='image'?h('label',{className:'filebox'},I('upload',24),h('strong',null,'Seleccionar archivo de marca'),h('small',null,'PNG · JPEG · WebP · SVG (se normaliza localmente)'),h('input',{type:'file',accept:'image/png,image/jpeg,image/webp,image/svg+xml',style:{display:'none'},onChange:e=>this.upload(e)}),s.logoData?h('small',{className:'formok'},'Logo integrado'):null):null,
      s.logoMode!=='none'?h('div',{className:'rangespace'},this.range('Tamaño del logo','logoSize',10,23,1,'%'),this.range('Espacio de seguridad','logoMargin',.5,3,.5,' módulos'),h('div',{className:'switchrow'},h('span',null,'Placa protectora detrás del logotipo'),h('input',{className:'toggle',type:'checkbox',checked:s.logoPlate,onChange:e=>this.setP('logoPlate',e.target.checked)}))):null
    ), '02'),
    this.block('Marco del QR individual','Se aplica a la exportación del QR suelto. Las composiciones utilizan sus propios marcos de diseño.',h('div',{className:'framegrid'},[['none','Sin marco'],['caption','CTA inferior'],['menu','Menú QR'],['outline','Borde fino']].map(f=>h('button',{key:f[0],className:'frameopt '+(s.frame===f[0]?'on':''),onClick:()=>this.setP('frame',f[0])},h('span',{className:'framesymbol '+f[0]}),f[1]))),'03')
  );}
  renderDesign(){const s=this.state;return h('div',{className:'panelpage enter'},
    this.block('Paletas de autor','Tu QR conserva la misma apariencia que elegiste. Experimenta con más combinaciones.',h('div',{className:'presetgrid'},PRESETS.map(p=>h('button',{key:p.id,className:'preset '+(s.preset===p.id?'selected':''),onClick:()=>this.preset(p.id)},h('span',{className:'presetpreview',style:{background:p.bg,color:p.p}},h('span',null)),h('strong',null,p.name)))),'01'),
    this.block('Formas continuas, sin mosaicos','Fluido une todos los módulos en un solo trazado SVG. El degradado ocupa el QR completo, sin repetirse en cada cuadro.',h('div',{className:'shapes'},SHAPES.map(x=>h('button',{key:x[0],className:'shape '+(s.shape===x[0]?'active':''),onClick:()=>this.setP('shape',x[0])},h('span',{className:'shapeart '+x[0],dangerouslySetInnerHTML:{__html:shapeThumbnail(x[0])}}),h('span',null,x[1]),h('small',null,x[2])))),'02'),
    this.block('Ojos del QR','Los ojos cuadrados son los más compatibles con lectores. Los demás están disponibles para experimentar.',h('div',{className:'fieldgrid'},h('label',{className:'field'},h('span',{className:'label'},'Marco exterior'),h('select',{value:s.eye,onChange:e=>this.setP('eye',e.target.value)},[['square','Cuadrado · recomendado'],['rounded','Redondeado'],['circle','Circular']].map(v=>h('option',{key:v[0],value:v[0]},v[1])))),h('label',{className:'field'},h('span',{className:'label'},'Centro'),h('select',{value:s.pupil,onChange:e=>this.setP('pupil',e.target.value)},[['circle','Circular'],['soft','Redondeado'],['square','Cuadrado']].map(v=>h('option',{key:v[0],value:v[0]},v[1]))))),'03'),
    this.block('Microajustes del trazo','Afina el carácter del QR sin generar mosaicos ni degradados repetidos.',h('div',{className:'rangespace'},this.range('Presencia del módulo','moduleScale',78,104,1,'%'),this.range('Suavidad de curvas','curve',0,100,1,'%'),this.range('Trazo de ojos','eyeStroke',0.8,1.5,0.05,'x'),h('div',{className:'inlinehelp'},I('sparkles',16),'Nube y Fluido aprovechan más la suavidad. Cinta y Píldoras responden mejor a la presencia del módulo.')),'04'),
    this.block('Color y degradados','Personaliza tintas, fondo y ángulo del degradado.',h('div',null,this.seg('Tinta',[['solid','Sólido'],['linear','Lineal'],['radial','Radial'],['tritone','3 tonos']],s.gradient,v=>this.setP('gradient',v)),(s.gradient==='linear'||s.gradient==='tritone')?h('div',{className:'rangespace'},this.range('Rotación','angle',0,360,5,'°')):null,h('div',{className:'subdivider'}),this.colors(s),s.gradient==='tritone'?h('div',{className:'field',style:{marginTop:15}},h('span',{className:'label'},'Tono intermedio'),inputColor(s.tertiary||'#24c4ee','Tono intermedio',v=>this.setP('tertiary',v))):null,h('div',{className:'switchrow'},h('span',null,'Fondo del QR transparente'),h('input',{className:'toggle',type:'checkbox',checked:s.transparent,onChange:e=>this.setP('transparent',e.target.checked)}))),'05')
  );}
  renderExports(qrArt,quality){const s=this.state,full=composed(s,qrArt),target=s.exportTarget==='qr'?qrArt:full;return h('div',{className:'panelpage enter'},
    this.block('Archivos listos para el mundo real','Exporta solamente el QR o la pieza completa con el branding que acabas de diseñar.',h('div',null,
      h('div',{className:'exporttarget'},[['qr','Solo el código','Código limpio para integrar en diseños'],['design','Diseño completo','Incluye tarjeta / menú / producto / pieza gráfica']].map(t=>h('button',{key:t[0],className:'targetcard '+(s.exportTarget===t[0]?'selected':''),onClick:()=>this.setP('exportTarget',t[0])},I(t[0]==='qr'?'sparkles':'layers',21),h('span',null,h('strong',null,t[1]),h('small',null,t[2])),s.exportTarget===t[0]?I('check',18):null))),
      h('div',{className:'inputpair'},h('label',{className:'field'},h('span',{className:'label'},'Resolución PNG'),h('select',{value:s.exportSize,onChange:e=>this.setP('exportSize',Number(e.target.value))},[512,1024,2048,4096].map(v=>h('option',{key:v,value:v},v+' px'+(v>=2048?' · 300 DPI':''))))),h('label',{className:'field'},h('span',{className:'label'},'Tamaño al imprimir'),h('select',{value:s.printSize,onChange:e=>this.setP('printSize',Number(e.target.value))},[5,10,15].map(v=>h('option',{key:v,value:v},v+' cm de ancho'))))),
      h('div',{className:'exportbig'},h('button',{className:'primarybtn',disabled:!!target.error||s.busy,onClick:()=>this.action('png',target)},I('download',18),'Descargar PNG'),h('button',{className:'ghostbtn',disabled:!!target.error||s.busy,onClick:()=>this.action('svg',target)},I('download',18),'Descargar SVG')),
      h('div',{className:'copyrow'},h('button',{disabled:!!target.error||s.busy,onClick:()=>this.action('copyPNG',target)},I('copy',15),'Copiar PNG'),h('button',{disabled:!!target.error||s.busy,onClick:()=>this.action('copySVG',target)},I('copy',15),'Copiar SVG'),h('button',{disabled:!!target.error||s.busy,onClick:()=>this.print(target)},I('printer',15),'Imprimir'))
    ),'01'),
    this.block('Lectura y seguridad','La corrección de errores no sustituye una prueba física con la cámara.',h('div',null,
      h('div',{className:'inputpair'},h('label',{className:'field'},h('span',{className:'label'},'Corrección de errores'),h('select',{value:s.level,onChange:e=>this.setP('level',e.target.value)},[['L','L · 7%'],['M','M · 15%'],['Q','Q · 25%'],['H','H · 30% (logo)']].map(v=>h('option',{key:v[0],value:v[0]},v[1])))),h('label',{className:'field'},h('span',{className:'label'},'Zona silenciosa'),h('select',{value:s.margin,onChange:e=>this.setP('margin',Number(e.target.value))},[2,3,4,5,6,8].map(v=>h('option',{key:v,value:v},v+' módulos'))))),
      h('div',{className:'qualitybig'},I(quality.good?'shield':'alert',23),h('div',null,h('strong',null,'Contraste '+quality.ratio.toFixed(1)+':1'),h('p',null,quality.warns.join(' ')||'Contraste orientativo adecuado; comprueba siempre la lectura del resultado final.'))),
      h('button',{className:'ghostbtn fullwidth',disabled:!!qrArt.error||s.busy,onClick:()=>this.action('test',qrArt)},I('eye',17),'Verificar escaneo en este navegador'),s.scanResult?h('p',{className:'inlinehelp'},s.scanResult):null
    ),'02'),
    this.block('Tu biblioteca','Guarda tus composiciones localmente para editarlas después.',h('div',null,
      h('div',{className:'sectionrow'},h('span',null,s.history.length+' diseños guardados'),h('button',{className:'linkbtn',onClick:()=>this.setP('historyVisible',!s.historyVisible)},I('history',15),s.historyVisible?'Cerrar historial':'Ver historial')),
      s.historyVisible?h('div',{className:'histlist'},s.history.length?s.history.map(entry=>h('div',{className:'histentry',key:entry.id},I('bookmark',16),h('div',{className:'htext'},h('strong',null,entry.title),h('small',null,new Date(entry.date).toLocaleDateString('es-MX'))),h('button',{onClick:()=>this.load(entry)},'Abrir'),h('button',{title:'Eliminar',onClick:()=>this.removeHistory(entry.id)},I('trash',15)))):h('div',{className:'empty'},'Todavía no hay diseños guardados.')):null,
      h('div',{className:'exportbig'},h('button',{className:'primarybtn',onClick:()=>this.save()},I('bookmark',17),'Guardar este diseño'),h('button',{className:'ghostbtn',onClick:()=>this.reset()},I('reset',17),'Restablecer'))
    ),'03')
  );}
  renderProPreview(qrArt,quality){const s=this.state,art=composed(s,qrArt),isQr=s.mockup==='qr',file=s.exportTarget==='qr'?qrArt:art;
    return h('aside',{className:'studio-preview'},
      h('div',{className:'studio-preview-head'},h('div',null,h('small',{className:'eyebrow'},'LIVE DESIGN CANVAS'),h('h2',null,'Tu creación',h('span',{className:'purple-star'},'✦'))),h('div',{className:'livebadge'},h('i',null),'EN VIVO')),
      h('div',{className:'formats-scroll'},FORMATS.map(f=>h('button',{key:f[0],title:f[1],className:'preview-format '+(s.mockup===f[0]?'on':''),onClick:()=>this.setState({mockup:f[0],exportTarget:f[0]==='qr'?'qr':'design'})},I(f[2],15),f[1]))),
      h('div',{className:'preview-stage scene-'+s.mockup+(s.animation?' motion':''),key:s.mockup+'-'+s.designStyle},
        qrArt.error?h('div',{className:'stageerror'},I('alert',25),qrArt.error):h('div',{className:'scene-workarea'},
          s.mockup==='product'?h('div',{className:'product-box-shape'}):null,
          s.mockup==='poster'?h('div',{className:'poster-rail'}):null,
          s.mockup==='social'?h('div',{className:'phone-top'}):null,
          h('div',{key:s.mockup+'-'+s.layoutMode+'-'+s.designStyle,className:'scene-art fadein',dangerouslySetInnerHTML:{__html:art.svg}}),
          s.mockup==='table'?h('div',{className:'tent-fold'}):null,
          s.mockup==='social'?h('div',{className:'phone-bottom'}):null
        )),
      h('div',{className:'preview-status'},h('span',null,I('check',16),qrArt.error?'Revisar contenido':(isQr?'Código listo':'Diseño vectorial listo')),h('small',null,qrArt.n?qrArt.n+' × '+qrArt.n+' módulos':'—')),
      h('div',{className:'preview-tools'},h('div',{className:'exportline'},h('div',null,h('strong',null,'Exportación profesional'),h('span',null,isQr?'Solo código QR':'QR + composición completa')),h('button',{className:'icon-mini',onClick:()=>this.setP('tab','export'),title:'Ajustes de exportación'},I('arrow',19))),
        h('div',{className:'resline'},h('label',null,'Formato'),h('select',{value:s.exportTarget,onChange:e=>this.setP('exportTarget',e.target.value)},[['qr','Solo QR'],['design','Diseño completo']].map(v=>h('option',{key:v[0],value:v[0]},v[1]))),h('select',{value:s.exportSize,onChange:e=>this.setP('exportSize',Number(e.target.value))},[512,1024,2048,4096].map(v=>h('option',{key:v,value:v},v+' px')))),
        h('div',{className:'preview-downloads'},h('button',{className:'primarybtn',disabled:!!file.error||s.busy,onClick:()=>this.action('png',file)},I('download',17),'Descargar PNG'),h('button',{className:'lightbtn',disabled:!!file.error||s.busy,onClick:()=>this.action('svg',file)},I('download',16),'SVG')),
        h('div',{className:'preview-extras'},h('button',{disabled:!!file.error||s.busy,onClick:()=>this.action('copySVG',file)},I('copy',15),'Copiar SVG'),h('button',{disabled:!!file.error||s.busy,onClick:()=>this.print(file)},I('printer',15),'Imprimir'),h('button',{onClick:()=>this.save()},I('bookmark',15),'Guardar'))
      ),
      h('div',{className:'scanfoot'},I(quality.good?'shield':'alert',17),h('span',null,`Contraste ${quality.ratio.toFixed(1)}:1`,quality.good?' · Prueba recomendada antes de imprimir.':' · Revisa colores, logo o márgenes.'))
    );
  }
  render(){const s=this.state,qrArt=getArt(s),quality=contrast(s);const tabs=[['content','Contenido','link'],['design','Código QR','wand'],['brand','Marca','sparkles'],['mockups','Diseños','layers'],['export','Exportar','download'],['lab','PRO LAB','sparkles']];return h('div',{className:'studio-shell'},
    h('header',{className:'studio-header'},
      h('div',{className:'studio-logo'},h('div',{className:'logo-glyph'},h('i'),h('i'),h('i'),h('i')),h('div',null,h('strong',null,'QR',h('em',null,'ATELIER')),h('small',null,'CREATIVE STUDIO'))),
      h('div',{className:'header-path'},'Tu espacio creativo',h('span',null,'/'),h('strong',null,'Nuevo diseño')),h('div',{className:'header-actions'},h('span',{className:'localpill'},I('shield',15),'Privado y local'),h('button',{className:'icon-button',title:s.theme==='light'?'Cambiar a modo oscuro':'Cambiar a modo claro',onClick:()=>this.setP('theme',s.theme==='light'?'dark':'light')},I(s.theme==='light'?'moon':'sun',18)),h('button',{className:'header-save',onClick:()=>this.save()},I('bookmark',16),'Guardar diseño'))),
    h('div',{className:'studio-columns'},
      h('nav',{className:'left-rail'},h('div',{className:'rail-label'},'CREAR CÓDIGO'),h('div',{className:'rail-list'},TYPES.map(x=>h('button',{key:x[0],type:'button',className:'rail-item '+(s.type===x[0]?'active':''),onClick:()=>this.setState({type:x[0],tab:'content',scanResult:''})},I(x[2],18),h('span',null,x[1]),s.type===x[0]?h('i',{className:'raildot'}):null))),h('div',{className:'rail-divider'}),h('div',{className:'rail-promo'},h('div',{className:'promo-star'},I('sparkles',21)),h('strong',null,'Más que un QR.'),h('p',null,'Compara 12 formas, simula impresión, crea lotes y guarda tus kits de marca.'),h('button',{onClick:()=>this.setP('tab','lab')},'Abrir PRO LAB',I('arrow',14)))),
      h('main',{className:'studio-editor'},h('div',{className:'editor-intro'},h('div',{className:'editor-overline'},h('i',null),'ROYAL BLUE STUDIO · V7.0'),h('h1',null,'Diseña algo que ',h('em',null,'se recuerde.')),h('p',null,'Tu QR, tu identidad. Convierte cualquier enlace en una experiencia visual que merece ser escaneada.')),
        h('div',{className:'pro-tabs'},tabs.map(x=>h('button',{key:x[0],className:'pro-tab '+(s.tab===x[0]?'active':''),onClick:()=>this.setP('tab',x[0])},I(x[2],17),h('span',null,x[1])))),
        h('div',{className:'tab-content',key:s.tab},s.tab==='content'?this.renderContent(qrArt):s.tab==='design'?this.renderDesign():s.tab==='brand'?this.renderBrand():s.tab==='mockups'?this.renderMockups():s.tab==='lab'?this.renderLab(qrArt,quality):this.renderExports(qrArt,quality))),
      this.renderProPreview(qrArt,quality)
    ),
    s.toast?h('div',{className:'toast',role:'status'},I('check',17),s.toast):null
  );}
}

export default StudioPro;
