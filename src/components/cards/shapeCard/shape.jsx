import React, { useEffect, useRef, useState } from "react";

function Shape({title,content}) {
    const titleRef = useRef(null)
    const[list,setList] = useState([])
    const[titleHeight,setTitleHeight] = useState("")
    useEffect(()=>{
        setTitleHeight(titleRef?.current?.clientHeight)
        console.log(titleRef?.current?.clientHeight);
        console.log(titleRef);
    },[titleRef])

    const textContainer = useRef(null)
    const titleData = {
        text:"Hello World",
        size:48,
        family:"Kanit"
    }
    useEffect(()=>{
        console.log(textContainer.current.clientWidth);
        // console.log(content.slice(0,37));
        const splitedData = content.split(" ");
        // console.log(splitedData);
        let max = 0;
        const newData = splitedData.map((item,index)=>{
            const newObj = {
                content:item,
                index:index,
                length:item.length
            }
            return splitedData[index] = newObj;
        })
        // console.log(newData);
        splitedData.map((item)=>{
            max = item?.content?.length + max;
            // return max;
        })
        // console.log(max);
        const element = document.createElement('canvas');
        const context = element.getContext("2d");
        const size = 30;
        context.font = `${size}px Kanit`;
        console.log(context.measureText(content).width);
        console.log(max);
        const widthCal = Math.ceil((context.measureText(content).width)/(max*2))
        const cal = 12*size / widthCal;
        // console.log(context.measureText(content).width)
        // console.log(widthCal);
        const spliceData = []
        // console.log(cal);
        let start = 0;
        let end = cal;
        let first = 0;
        let last = 0;
        console.log(widthCal);
        {new Array(widthCal).fill(0).map((item,index)=>{
            // console.log(index);
            // if(cal<index){
                // console.log(start,end,"ends and start");
                const spliceString = content.slice(start,end);
                // console.log(spliceString);
                const spliceData = spliceString.split(" ");
                if(last===0){
                    last = spliceData.length-1 + first;
                }
                // console.log(spliceData.length);
                // console.log(first,last,"first,last");
                const spliceString2 = splitedData.slice(first,last)
                // console.log(spliceData,"---------spliceData");
                // console.log(spliceString,"---------spliceString");
                // console.log(spliceString2,"---------spliceString");
                
                first = last;
                last = last + spliceData.length-1
                start = end;
                end = end + cal;
                const texts = spliceString2.map((item)=>item.content).join(" ");
                console.log(spliceString);
                setList((list)=>[...list,spliceString])
            // }
        })}
        console.log(list);

    },[])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="706"
      height="506"
      fill="none"
      viewBox="0 0 706 506"
    >
      <g>
        <text
          fill="#1B2351"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Kanit"
          fontSize="26"
          letterSpacing="0em"
          ref = {textContainer}
        >
          {/* <tspan x="47" y="232.665">
            In a competitive landscape,, we stand{" "}
          </tspan> */}
         {list.map((listContent,index)=>{
            index = index+1;
            return(
                <tspan x="68" y={(titleHeight+100)+ (37*index)} key={index}>
            {listContent}{" "}
          </tspan>
            )
         })}
        </text>
        <path
          fill="url(#paint0_linear_85_18)"
          d="M0 180V0h461.5l243 427.5L470 180H0z"
        ></path>
        <g>
        <text   fill="#fff"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Kanit"
            fontSize="48"
            letterSpacing="0em"
            ref={titleRef}
            >
            <tspan
            fill="#fff"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Kanit"
            fontSize="48"
            letterSpacing="0em"
            >
            <tspan x="68" y="75.92">
                What makes
            </tspan>
            </tspan>
            {/* <tspan x="68" y="100.92" > */}
            <tspan
            fill="#fff"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Kanit"
            fontSize="48"
            letterSpacing="0em" 
            >
                <tspan x="63" y="136.92">
                us{" "}
                </tspan>
            {/* </text>
            <text style={{ whiteSpace: "pre" }} fontWeight="600"> */}
                <tspan x="124.078" y="136.92">
                Different
                </tspan>
            </tspan>

        </text>
        {/* </tspan> */}

        </g>
        
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_85_18"
          x1="0"
          x2="514"
          y1="90.5"
          y2="88.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BACC1"></stop>
          <stop offset="0.425" stopColor="#46ACA5"></stop>
          <stop offset="1" stopColor="#56AD7E"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Shape;