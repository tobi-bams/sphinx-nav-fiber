// useSocket.ts

import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { API_URL } from '~/constants'

const useSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const isMounted = useRef<boolean>(true)

  useEffect(() => {
    console.log('We are trying to connect here')

    const socketInstance = io(API_URL)

    if (isMounted.current) {
      setSocket(socketInstance)
    }

    return () => {
      console.log('I want to see what happens here')
      isMounted.current = false
      // socketInstance.disconnect()
    }
  }, [])

  return socket
}

export default useSocket
