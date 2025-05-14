/* eslint-disable no-console */
import * as sphinx from 'sphinx-bridge'
import { Node } from '~/types/index'
import { executeIfProd } from '../tests'

export const saveConsumedContent = async (selectedNode: Node | null) => {
  // skipping this for end to end test because it requires a sphinx-relay to be connected
  await executeIfProd(async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await sphinx.saveGraphData({
        metaData: {
          date: Math.floor(new Date().getTime() / 1000),
          ...selectedNode,
        },
        type: 'second_brain_consumed_content',
      })
    } catch (error) {
      console.warn(error)
    }
  })
}

export const saveSearchTerm = async () => {
  // skipping this for end to end test because it requires a sphinx-relay to be connected
  await executeIfProd(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await sphinx.enable(true)
  })
}
