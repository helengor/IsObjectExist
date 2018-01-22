var isObjExist = function(selector, ParentObj){
    if(typeof ParentObj === 'undefined'){ParentObj = document;}
    var result = false;
    var obj = ParentObj.querySelector(selector);
    if(obj){result = true;}
    return result;
};
