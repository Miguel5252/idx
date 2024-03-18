import { useDispatch } from "react-redux"
import { setIsLoading } from "../store/uiSlice"
import { useEffect } from "react"

const useLoadingData = (data: unknown, isFetching: boolean) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    if (isFetching) dispatch(setIsLoading(true))
    if (data) dispatch(setIsLoading(false))

  },[data,isFetching])

} 
export default useLoadingData