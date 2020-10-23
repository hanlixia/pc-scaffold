export const getPathByObj = data => {
  if (
    Object.prototype.toString
      .call(data)
      .slice(8, -1)
      .toLowerCase() !== "object"
  )
    return "";
  let pathArr = [];
  Object.values(data).forEach(value => {
    pathArr.push(value);
  });
  return pathArr.join("/");
};

export const trimSpace = txt => {
  return (txt || "").replace(/^\s+|\s+$/g, "");
};

export const getWorkNameById = appId => {
  switch(appId) {
    case 1:
      return "事务";
    case 4:
      return "公文";
    case 6:
      return "会议";
    default:
      return appId||''
  }
}

export const getSourceType = type => {
  switch(type) {
    case 1:
      return "事务";
    case 2:
      return "公文";
    default:
      return type||''
  }
}

// 时间处理
export function handleDate(date) {
  if(!date) return '';
  date = date.replace(/-/g,'/');
  let time = new Date(date).getTime();
  let now = new Date().getTime();
  let diff = (now - time)/1000/60; //单位：min
  if(diff<1) {
    return '刚刚';
  }else if(diff<30) {
    return parseInt(diff)+'分钟前';
  }else if(diff<60) {
    return '半小时前';
  }else if(diff<60*24) {
    return parseInt(diff/60)+'小时前'
  }else if(diff<60*24*7){
    return parseInt(diff/60/24)+'天前'
  }else if(diff<60*24*15){
    return parseInt(diff/60/24/7)+'周前'
  }else{
    return (date.split(/\s+/)[0]||'').replace(/\//g,'-');
  }
}
