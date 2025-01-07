import {인사} from '../component/nav'

export default function Cart() {
    return (
      <div className="wrap">
          <div className="cart-box">
          <h4 className="title">Cart</h4>
          <인사></인사>
          <Redbtn 색깔={"black"}></Redbtn>
          <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
          </div>
          <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
          </div>
        </div>
      </div>
    )
  } 


  export function Redbtn(props){
    return(
      <button style={{backgroundColor:props.색깔, color:"white"}}>
        빨강 버튼
      </button>
    )
  }
