import {React,useState,useEffect} from 'react'

const Memo = ({state}) => {
    const [memo,setmemo]=useState([]);
    const {contract}=state;

    useEffect(()=>{
        const memosmessage=async ()=>{
            const memos=await contract.getMemo();
            setmemo(memos);
        }
        contract&&memosmessage()
    },[contract])
  return (
    <div>
      <p>Messages</p>
      {memo.map((item)=>{
        return (
            <table key={item.timestamp}>
                <tbody>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.message}</td>
                        <td>{String(item.timestamp)}</td>
                        <td>{item.from}</td>
                    </tr>
                
                </tbody>
            </table>
        )
      })}
    </div>
  )
}

export default Memo
