import{readFileSync as R,mkdirSync as K,writeFileSync as W}from"node:fs";
function V(P,I){
let S=new Int32Array(256),C=new Int32Array(64),Y=new Int32Array(256),O=[],pc=0,sp=0,cp=0,ip=0,st=0;
for(;;){
if(st>=1e6)return[O,10];
if(pc<0||pc>=P.length)return[O,9];
let o=P[pc],a,b;
if(o==1||o==2||o>=48&&o<=51){let l=o==2?4:o==1?1:2;if(pc+l>=P.length)return[O,9]}
st++;
switch(o){
case 0:return[O,0];
case 1:if(sp>255)return[O,3];S[sp++]=(P[pc+1]<<24)>>24;pc+=2;break;
case 2:if(sp>255)return[O,3];S[sp++]=P[pc+1]|P[pc+2]<<8|P[pc+3]<<16|P[pc+4]<<24;pc+=5;break;
case 3:if(sp<1)return[O,2];sp--;pc++;break;
case 4:if(sp<1)return[O,2];if(sp>255)return[O,3];S[sp]=S[sp-1];sp++;pc++;break;
case 5:if(sp<2)return[O,2];a=S[sp-1];S[sp-1]=S[sp-2];S[sp-2]=a;pc++;break;
case 6:if(sp<2)return[O,2];if(sp>255)return[O,3];S[sp]=S[sp-2];sp++;pc++;break;
case 7:if(sp<3)return[O,2];a=S[sp-3];S[sp-3]=S[sp-2];S[sp-2]=S[sp-1];S[sp-1]=a;pc++;break;
case 16:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a+b|0;pc++;break;
case 17:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a-b|0;pc++;break;
case 18:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=Math.imul(a,b);pc++;break;
case 19:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];if(!b)return[O,4];S[sp++]=Math.trunc(a/b)|0;pc++;break;
case 20:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];if(!b)return[O,4];S[sp++]=a%b;pc++;break;
case 21:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];if(!b)return[O,4];S[sp++]=Math.trunc((a>>>0)/(b>>>0))|0;pc++;break;
case 22:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];if(!b)return[O,4];S[sp++]=(a>>>0)%(b>>>0)|0;pc++;break;
case 23:if(sp<1)return[O,2];S[sp-1]=-S[sp-1]|0;pc++;break;
case 24:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a&b;pc++;break;
case 25:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a|b;pc++;break;
case 26:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a^b;pc++;break;
case 27:if(sp<1)return[O,2];S[sp-1]=~S[sp-1];pc++;break;
case 28:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a<<(b&31);pc++;break;
case 29:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a>>(b&31);pc++;break;
case 30:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a>>>(b&31)|0;pc++;break;
case 32:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a==b?1:0;pc++;break;
case 33:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=a<b?1:0;pc++;break;
case 34:if(sp<2)return[O,2];b=S[--sp];a=S[--sp];S[sp++]=((a>>>0)<(b>>>0))?1:0;pc++;break;
case 48:pc+=3+((P[pc+1]|P[pc+2]<<8)<<16>>16);break;
case 49:if(sp<1)return[O,2];a=S[--sp];pc+=a==0?3+((P[pc+1]|P[pc+2]<<8)<<16>>16):3;break;
case 50:if(sp<1)return[O,2];a=S[--sp];pc+=a!=0?3+((P[pc+1]|P[pc+2]<<8)<<16>>16):3;break;
case 51:if(cp>63)return[O,7];C[cp++]=pc+3;pc=P[pc+1]|P[pc+2]<<8;break;
case 52:if(cp<1)return[O,8];pc=C[--cp];break;
case 64:if(sp<1)return[O,2];a=S[sp-1];if(a<0||a>255)return[O,6];S[sp-1]=Y[a];pc++;break;
case 65:if(sp<2)return[O,2];a=S[sp-1];if(a<0||a>255)return[O,6];Y[a]=S[sp-2];sp-=2;pc++;break;
case 80:if(sp<1)return[O,2];a=S[--sp];b=String(a);if(O.length+b.length>65536)return[O,11];for(let j=0;j<b.length;j++)O.push(b.charCodeAt(j));pc++;break;
case 81:if(sp<1)return[O,2];a=S[--sp];if(O.length>65535)return[O,11];O.push(a&255);pc++;break;
case 82:if(sp>255)return[O,3];S[sp++]=ip<I.length?I[ip++]:-1;pc++;break;
case 83:if(sp<1)return[O,2];a=S[--sp];return[O,a&255];
default:return[O,5];
}
}
}
let A=process.env.MAKEFUN_INPUT_DIR||"/input",B=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let k=1;k<41;k++){
let d="i"+String(k).padStart(3,"0"),I;try{I=R(A+"/"+d+"/input.bin")}catch{I=Buffer.alloc(0)}
let[O,e]=V(R(A+"/"+d+"/program.bin"),I);
K(B+"/"+d,{recursive:true});
W(B+"/"+d+"/stdout.bin",Buffer.from(O));
W(B+"/"+d+"/exit.txt",String(e));
}
