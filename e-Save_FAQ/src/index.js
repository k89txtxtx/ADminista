

    const question = document.querySelectorAll('.questions');
    const requierdList = document.querySelectorAll(".requiredItem");
    const p_checkBox = document.querySelectorAll('.pcb');
    const require = document.querySelectorAll('.require');
    const c_checkBox = document.querySelectorAll('.ccb');
    const taskBar = document.getElementById('taskBar');
    const taskList = document.getElementById('taskList');
    const main = document.getElementById('main');
    const article = document.getElementById('article');



    const openElement = (el)=> {
        //el.classList.toggle('active');
        if(el.style.display==''){
        el.style.display='initial';
        }else{
        el.style.display='';
        }
    }
    const closeElement = (el)=> {
        //el.classList.toggle('active');
        if(el.style.display==''){
        el.style.display='none';
        }else{
        el.style.display='';
        }
    }
    const checkSwitcher = (el)=>{
        if(el.checked===false){el.checked=true;}else{el.checked=false;}
    }




     
    //親チェック入力と表示・非表示
    for (let i = 0; i < question.length; i++){
    question[i].addEventListener('click',(e)=>{
        openElement(requierdList[i]);
        checkSwitcher(p_checkBox[i]);

        },false);
    }
    //子チェックの入力
    for (let j = 0; j < require.length; j++){
    require[j].addEventListener('click',(e)=>{
        checkSwitcher(c_checkBox[j]);
        },false);          
    }

    //タスクバーを表示・非表示にする
    taskBar.addEventListener('click',()=>{
        closeElement(taskList);
        if(taskList.style.display=='none'){
            main.style.cssFloat='left';
            main.style.width='100%';
            article.style.width='70%';
            }else{
            main.style.cssFloat='right';
            main.style.width='75%'
            article.style.width='60%';
            }
      },false);

    //varsionを表示・非表示にする。
    const info = document.getElementById('info');
    const varsion = document.getElementById('varsion');
    info.addEventListener('click',()=>{
        openElement(varsion);
    },false);