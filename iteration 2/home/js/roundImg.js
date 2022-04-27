
        var haha = document.querySelector(".haha");
        var but1 = document.querySelector(".but1");
        var but2 = document.querySelector(".but2");
        /* 旋转角度 */
        var zhuan = 0;
        checkImg(zhuan);
        /* 设置轮播定时器 */
        var  lunbo =  setInterval(rig,10000);
    
        but1.addEventListener('click',rig);
        function rig(){
            zhuan = zhuan - 45;
            haha.style.cssText = ` transform: rotateY(${zhuan}deg); `;
            checkImg(zhuan);
        }


        but1.addEventListener('mouseover',function(){
            clearInterval(lunbo);
        });
        but1.addEventListener('mouseout',function(){
            lunbo =  setInterval(rig,10000);
        });
        
        but2.addEventListener('click', left);
        but2.addEventListener('mouseover',function(){
            clearInterval(lunbo);
        });
        but2.addEventListener('mouseout',function(){
            lunbo =  setInterval(rig,10000);
        });

        function left(){
            zhuan = zhuan + 45;
            haha.style.cssText = ` transform: rotateY(${zhuan}deg); `;
            checkImg(zhuan);
        }

       haha.addEventListener('mouseover',function(){
            clearInterval(lunbo);
        });
       haha.addEventListener('mouseout',function(){
            lunbo =  setInterval(rig,10000);
        });




        function checkImg(zhuan){

            if(zhuan/45%8==0){
                document.getElementById("angle").innerHTML="1";
                document.getElementById("intro-detail").innerHTML="This is the 1st picture     This is the 1st picture     This is the 1st picture     ";
            }else if((zhuan/45+1)%8==0){
                document.getElementById("angle").innerHTML="2";
                document.getElementById("intro-detail").innerHTML="This is the 2ed picture     This is the 2ed picture     This is the 2ed picture     ";
            }else if((zhuan/45+2)%8==0){
                document.getElementById("angle").innerHTML="3";
                document.getElementById("intro-detail").innerHTML="This is the 3rd picture     This is the 3rd picture     This is the 3rd picture     ";
            }else if((zhuan/45+3)%8==0){
                document.getElementById("angle").innerHTML="4";
                document.getElementById("intro-detail").innerHTML="This is the 4th picture     This is the 4th picture     This is the 4th picture     ";
            }else if((zhuan/45+4)%8==0){
                document.getElementById("angle").innerHTML="5";
                document.getElementById("intro-detail").innerHTML="This is the 5th picture     This is the 5th picture     This is the 5th picture     ";
            }else if((zhuan/45+5)%8==0){
                document.getElementById("angle").innerHTML="6";
                document.getElementById("intro-detail").innerHTML="This is the 6th picture     This is the 6th picture     This is the 6th picture     ";
            }else if((zhuan/45+6)%8==0){
                document.getElementById("angle").innerHTML="7";
                document.getElementById("intro-detail").innerHTML="This is the 7th picture     This is the 7th picture     This is the 7th picture     ";
            }else if((zhuan/45+7)%8==0){
                document.getElementById("angle").innerHTML="8";
                document.getElementById("intro-detail").innerHTML="This is the 8th picture     This is the 8th picture     This is the 8th picture     ";
            }

        }

