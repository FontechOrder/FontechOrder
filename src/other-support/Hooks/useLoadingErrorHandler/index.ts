import useLoadingHandler from '@other-support/Hooks/useLoadingHandler'
import useErrorHandler from '@other-support/Hooks/useErrorHandler'

const useLoadingErrorHandler = () => {
  const LoadingHandlerState = useLoadingHandler()
  const errorHandlerState = useErrorHandler()

  return {
    ...LoadingHandlerState,
    ...errorHandlerState,
  }
}

export default useLoadingErrorHandler
