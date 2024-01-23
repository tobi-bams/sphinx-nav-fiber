// useSocket.ts

import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { API_URL } from '~/constants'

const useSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    let socketInstance: Socket | null = socket

    if (!socket) {
      console.log('We are trying to connect here')

      socketInstance = io(API_URL)

      setSocket(socketInstance)
    }

    return () => {
      console.log('I want to see what happens here')

      if (socketInstance) {
        socketInstance.disconnect()
        setSocket(null)
      }
    }
  }, [socket])

  return socket
}

export default useSocket
