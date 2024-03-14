import { useDispatch } from "react-redux"
import { setIsLoading } from "../store/uiSlice"

const useLoadingData = (data: unknown, isFetching: boolean) => {
  const dispatch = useDispatch()
  if (isFetching) dispatch(setIsLoading(true))
  if (data) dispatch(setIsLoading(false))
} 
export default useLoadingData