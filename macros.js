// Macros for Xaringan

remark.macros.centerPic = function (percentage) {
  const url = this;
  return `<div style="text-align:center;"> <img src='${url}' width = ${percentage}%/> </div>`;
};

remark.macros.colorText = function(color) {
  const text = this;
  return `<span style="color:${color}">${text}</span>`;
};

remark.macros.space = function(percentage) {
  return `<div style="height: ${percentage}%"></div>`;
};