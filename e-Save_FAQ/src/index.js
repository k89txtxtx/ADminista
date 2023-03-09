

    const question = document.querySelectorAll('.questions');
    const requierdList = document.querySelectorAll(".requiredItem");
    const p_checkBox = document.querySelectorAll('.pcb');
    const require = document.querySelectorAll('.require');
    const c_checkBox = document.querySelectorAll('.ccb');
    const answers =document.querySelectorAll('.answer') ;
    const frame = document.querySelectorAll('.frame');
    const taskBar = document.getElementById('taskBar');
    const taskList = document.getElementById('taskList');
    const main = document.getElementById('main');
    const article = document.getElementById('article');
    const formal = document.querySelectorAll('.formal');
    const benefit = document.querySelectorAll('.benefit');
    const covered = document.querySelectorAll('.covered');
    const notcovered = document.querySelectorAll('.notcovered');
    const wrongdepartment = document.querySelectorAll('.wrongdepartment');
    const suspicious = document.querySelectorAll('.suspicious');
    const publicrelations = document.querySelectorAll('.publicrelations');
    const A1 = document.getElementById('answer01');
    const A2 = document.getElementById('answer02');
    const A3 = document.getElementById('answer03');
    const A4 = document.getElementById('answer04');
    const A5 = document.getElementById('answer05');
    const A6 = document.getElementById('answer06');
    const A7 = document.getElementById('answer07');
    const A8 = document.getElementById('answer08');
    const A9 = document.getElementById('answer09');
    const A10 = document.getElementById('answer10');
    const A11 = document.getElementById('answer11');
    const A12 = document.getElementById('answer12');
    const A13 = document.getElementById('answer13');
    const A14 = document.getElementById('answer14');
    const A15 = document.getElementById('answer15');
    const A16 = document.getElementById('answer16');
    const A17 = document.getElementById('answer17');
    const A18 = document.getElementById('answer18');
    const A19 = document.getElementById('answer19');
    const A20 = document.getElementById('answer20');
    const A21 = document.getElementById('answer21');
    const A22 = document.getElementById('answer22');
    const A23 = document.getElementById('answer23');
    const A24 = document.getElementById('answer24');
    const A25 = document.getElementById('answer25');

    const TYPE = [formal,formal,formal,formal,benefit,benefit,covered,covered,notcovered,notcovered,wrongdepartment,wrongdepartment,wrongdepartment,publicrelations,suspicious]


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
    const removehidden = (el)=>{
        //初期化
        frame.forEach(f => f.style.display = '');
        //再表示
        el.forEach(el => el.style.display = 'block');
    }

    const removeHidden2 = (el) =>{
        frame.forEach(f => f.style.display = '');
        el.style.display = "block";
    }


    //親チェック入力と表示・非表示
    for (let i = 0; i < question.length; i++){
    question[i].addEventListener('click',(e)=>{
        openElement(requierdList[i]);
        checkSwitcher(p_checkBox[i]);
        removehidden(TYPE[i]);
        // answerAllClose();
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

    // const textBox = document.getElementById('textbox');
    // const answer01 = document.getElementById('answer01');
    // const body = answer01.contentWindow.document.querySelector('body');
    // const button01 = document.getElementById('button01');

    // button01.addEventListener('click',()=>{
    //     let answer = body.textContent;
    //     textBox.value = answer;
    // },false);