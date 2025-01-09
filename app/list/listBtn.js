"use client"

import React, { useState } from "react"
export default function listBtn(){
    let [pizza, pizzaSet] = useState(false)

    return(
        <div className="list-btn">
            <button onClick={(()=>{pizzaSet(!pizza)})}>베이직 피자</button>
            <button>프리미엄 피자</button>
            <button>하프 앤 하프</button>
            <button>사이드</button>
        </div>
    )
}