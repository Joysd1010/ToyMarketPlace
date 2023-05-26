import { useEffect } from "react"

const useTitle =(title)=>{
    useEffect(()=>{
        document.title=`${title} - PlayTime`
    },[title])
}
export default useTitle