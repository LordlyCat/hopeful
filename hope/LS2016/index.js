var result=" ";var cat;//定义两个变量
function cat(){    //自定义一个函数

	if (event.srcElement.innerText=="=") {
            return;
        }//如果输入"="，那么显示器不会获取输入内容

    if (event.srcElement.innerText=="delete") {
            result=" ";
            display.innerText="0";
            return;
        }/*如果输入"delete",先把之前的内容清除，
           然后显示"0"*/

        if (event.srcElement.innerText=="LS的计算器") {
            return;
        }//如果输入"LS的计算器"，那么显示器不会获取输入内容
       result= result+event.srcElement.innerText;
       //把输入的内容赋给result,而且可以累加
       display.innerText=result;//把result里的内容显示出来
           
   }
    function dog(cats){
      cats=eval(result);
      display.innerText=cats;
    }/*定义一个函数，作用为利用eval()把括号里的语句算出来，
    并且显示出来*/
    