let myFormatTime = (originVal, type = 1) => {
  let dt = null;
  if(typeof originVal == 'object'){
    dt = originVal
  }else if((originVal??'')==''){
    return ''
  }else {
    dt = new Date(originVal)
  }
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  if (type == 1) return `${y}-${m}-${d}`
  else if(type == 3)  return `${y}-${m}`
  else return `${y}-${m}-${d} ${hh}:${mm}`
}

export {
	myFormatTime
}