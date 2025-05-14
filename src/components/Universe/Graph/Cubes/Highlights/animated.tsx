import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Color, Material, Mesh, Vector3 } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../constants'
import { getHighlighter, highlightMaterial } from './constants'

const materials: Record<string, Material> = {}

export const AnimatedHighlights = () => {
  const data = useGraphData()

  const { selectionGraphData, showSelectionGraph } = useGraphStore((s) => s)

  const selectedNode = useSelectedNode()
  const searchTerm = useAppStore((s) => s.currentSearch)

  const nodeData = showSelectionGraph ? selectionGraphData.nodes : data?.nodes

  return (
    <>
      {(nodeData || []).map((node: NodeExtended, i: number) => {
        const { highlight, highlightColor } = getHighlighter({ node, selectedNode, searchTerm })

        if (!highlight) {
          return null
        }

        if (!materials[highlightColor]) {
          const hMaterial = highlightMaterial.clone()

          hMaterial.emissive = new Color(highlightColor)
          materials[highlightColor] = hMaterial
        }

        return (
          <HighlightMesh
            // eslint-disable-next-line react/no-array-index-key
            key={`animated-highlight-${node.ref_id}-${i}`}
            color={highlightColor}
            node={node}
            scale={node.scale || 1}
          />
        )
      })}
    </>
  )
}

type HMesh = {
  color: string
  scale: number
  node: NodeExtended
}

const reuseableVector3 = new Vector3()

const HighlightMesh = ({ color, scale, node }: HMesh) => {
  const ref = useRef<Mesh | null>(null)
  const [geometry] = useState(boxGeometry)

  useFrame(() => {
    if (ref.current) {
      const newPosition = reuseableVector3.set(node?.x || 0, node?.y || 0, node?.z || 0)

      ref.current.position.copy(newPosition)
    }
  })

  useEffect(
    () =>
      function cleanup() {
        geometry.dispose()
      },
    [geometry],
  )

  return <mesh ref={ref} geometry={geometry} material={materials[color]} scale={scale} userData={node} />
}
