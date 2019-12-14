import React from "react";
let changePath = false
let newArrayPositin = 0
let positionSet = false
let playerClass = 'character'

const changeCharDireciton = () =>{
  playerClass = 'characterDirection2'
}

const changeCourse = () => {
changePath = true

}




const Player = props => {
 

if(props.location > 94) playerClass = 'character'
if(changePath && positionSet == false) {
  newArrayPositin = props.location
  positionSet = true
}


const positionFromTop = ['625px','593px', '561px','529px','497px','465px', //6
'465px', '465px','465px','465px','465px','465px','465px',//7
'433px','401px','369px','337px',//4
'337px','337px','337px','337px','337px','337px', //6
'305px', //1
'305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px','305px', //18
'273px', //1
'273px','273px','273px','273px','273px','273px', //6
'241px','209px','177px','145px', //4
'145px', '145px', '145px', '145px', '145px', //5
//map2
'145px','145px','145px','145px','145px','145px','145px','145px','145px','145px','145px','145px','145px','145px','145px', //15
'113px', //1
'113px','113px','113px','113px','113px', '113px',

//happy path
'113px','113px', //8
'113px', //1
'145px', //1
'145px','145px','145px','145px','145px','145px','145px','145px', //8
'177px','209px','241px', //3
'241px', //1
'273px', //1
'309px', //1
'341px', //1
'341px','341px','341px','341px', //4
'309px', //1 
'277px', '245px', '213px', '181px', '149px', '117px', '85px', //diag 7
'85px', //1
'53px',//1
'21px'//1
]

const positionFromLeft= ['135px','135px', '135px','135px','135px','135px', //6
'167px','199px','231px','264px','296px','328px','360px', //7
'360px','360px','360px','370px', //4
'392px','424px','456px','488px','520px','554px', //6
'554px', //1
'586px','619px','650px','682px','716px','748px','780px','812px','844px','876px','908px','940px','972px','1004px','1036px','1078px','1110px','1142px',//18
'1174px',//1
'1174px','1206px','1238px','1270px','1302px','1334px', //6
'1398px','1398px','1398px','1398px', //4
'1430px','1462px','1494px','1526px', '1558px', //5    total 57   totalRollCounter = normal counting
// map 2
'0px', '32px','64px','96px','128px','160px','192px', '224px', '256px','288px', '320px', '352px', '384px','416px','448px', //15
'448px', //1
'480px', '512px', '544px', '576px', '608px', '640px', 
// happy path
'672px', '704px', //8   /81 total 
'734px', //1
'736px', //1
'768px','808px','832px','864px','896px','928px','960px','992px', //8
'992px','992px','960px', //3
'928px', //1
'928px', //1
'960px', //1
'992px', //1
'1024px','1056px','1088px','1120px', //4
'1120px',
'1152px','1184px','1216px','1248px','1280px','1312px','1344px',//diag 7
'1376px', //1
'1408px', //1
'1450px' //1
]


const positionFromTopCourse2= [
  // alt path
'113px','113px','113px','113px','113px',
'113px', 
'145px','145px','145px','145px','145px','145px','145px','145px', '145px', '145px',
'177px', '209px', '241px','273px', '305px', '337px', '337px', '369px','369px','401px', '433px', 

//3 right
'433px', '433px', '433px', 
// 2 down
'465px', '497px',
//3 right
'497px','497px','497px',
// 1 down - frist run end
'529px',
//3 right
'529px','529px','529px',
//3 up
'498px', '466px', '434px',
//4 right
'434px','434px','434px','434px',
//2 down - end second run
'466px', '498px',
//3 left
'498px','498px','498px',
//3 down
'530px', '562px', '594px',
//6 right
'594px','594px','594px','594px','594px','594px',
// 9 right
'594px','594px','594px','594px','594px','594px','594px','594px','594px',
// up 2
'562px', '530px',
//right 5
'530px','530px','530px','530px','530px',
]

const positionFromLeftCourse2= [
// alt path
'608px', '576px', '544px', '512px', '480px',
'448px',
'448px', '416px', '384px', '352px', '320px', '288px', '256px', '224px', '192px', '192px',
'192px', '160px', '128px', '160px', '160px', '160px', '192px', '192px', '224px', '256px', '224px',

//3 right
'256px', '288px', '320px',
// 2 down
'320px','320px',
//3 right
'352px', '384px', '416px',
// 1 down
'416px',
// 1 down - frist run end
'416px',
//3 right
'448px', '480px', '512px',
//3 up
'512px','512px','512px',
//4 right
'544px', '576px', '608px', '640px',
//2 down end second run
'640px','640px',

//3 left
'608px', '576px', '544px',
//3 down
'544px','544px','544px',
//6 right
'576px', '608px', '640px', '672px', '704px', '736px',
//9 right
'768px', '800px', '832px','864px', '896px', '928px', '960px', '992px', '1024px',
//up 2
'1024px', '1024px',
//right 5
'1056px', '1088px', '1120px', '1152px', '1184px',

]





if(changePath === false)
{
  return (
    <div
      className= {playerClass}
      style={{
        top: positionFromTop[props.location],
        left: positionFromLeft[props.location]
      }}
    ></div>
  )
}

if(changePath === true)
{
 
  return (
    <div
      className= {playerClass}
      style={{
        top: positionFromTopCourse2[props.location - newArrayPositin],
        left: positionFromLeftCourse2[props.location - newArrayPositin]
      }}
    ></div>
  )
} 


};

export {Player, changeCharDireciton, changeCourse}



