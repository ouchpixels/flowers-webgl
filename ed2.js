function draw2(){
  ctx.fillStyle = "#ddffdd"
  ctx.fillRect(0,0, w, h)
//  ctx.clearRect(0,0, w, h)
  ctx.lineWidth = d
  if (radio == "r"){
    ctx.strokeStyle = "#ff0000"
    for (let i = 0; i < 3*n; i += 3)
      ctx.strokeRect(CP[aCP][i]*h - d, h - CP[aCP][i + 1]*h - d, d2,d2)}
  else{
    ctx.strokeStyle = "#0000ff"
    for (let i = 0; i < 3*n; i += 3)
      ctx.strokeRect(CP[aCP][i + 2]*h - d, h - CP[aCP][i + 1]*h - d, d2,d2)}
  bezier1D(CP[0], pi[0])
  bezier1D(CP[1], pi[1])
  let sm3 = 3*sm
 for (let k = 0; k < 2; k++){
  if(aCP == k) ctx.strokeStyle = "#ff0000"
  else ctx.strokeStyle = "#ffa0a0"
  ctx.beginPath();  ctx.moveTo(pi[k][0]*h, h - pi[k][1]*h)
  for (let i = 0; i < sm3; i += 3)
    ctx.lineTo(pi[k][i]*h, h - pi[k][i+1]*h)
  ctx.stroke()
  if(aCP == k) ctx.strokeStyle = "#0000ff"
  else ctx.strokeStyle = "#a0a0ff"
  ctx.beginPath();  ctx.moveTo(pi[k][2]*h, h - pi[k][1]*h)
  for (let i = 0; i < sm3; i += 3)
    ctx.lineTo(pi[k][i+2]*h, h - pi[k][i+1]*h)
  ctx.stroke()
 }
   bud()
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ind, gl.STATIC_DRAW)
   gl.bufferData(gl.ARRAY_BUFFER, dt, gl.STATIC_DRAW)
   drawScene()
}
function print(){
   let s  = "[" + CP[aCP][0].toFixed(2)
   for(let i = 1; i < 3*n; i++ ) s += "," + CP[aCP][i].toFixed(2)
   document.getElementById("output").innerHTML = s + "]"
}
