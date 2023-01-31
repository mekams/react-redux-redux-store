import { useSelector,useDispatch } from "react-redux";
import { incNum,decNum } from "../Actions/DefActions";

const CompA = () => {
  const myState = useSelector((state)=>state.changeNum)   //passing the action using UseSelector hook
  const dispatch =useDispatch()

  return (
    <div className="Container">
    <h1>Increment & Decrement counter</h1>
     <h4 style={{textAlign:"center"}}>Using React & Redux store</h4>

      <div className="Sub-Container">

        <button onClick={()=>dispatch(decNum())} className="btn">Dec - </button>

        <input type="text" readOnly={true} value = {myState} />

        <button onClick={()=>dispatch(incNum(2))} className="btn">Inc + </button>
      </div>
    </div>
  );
};

export default CompA;
