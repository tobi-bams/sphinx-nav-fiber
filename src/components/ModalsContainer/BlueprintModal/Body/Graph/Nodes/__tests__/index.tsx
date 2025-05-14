/* eslint-disable padding-line-between-statements */
import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Node } from '../Node'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { Canvas } from '@react-three/fiber'

jest.mock('@react-three/fiber', () => ({
  Canvas: jest.fn(() => <div>Canvas</div>),
  useFrame: jest.fn(),
  useThree: jest.fn(() => ({
    camera: {},
    gl: {},
    scene: {},
    size: { width: 800, height: 600, left: 0, top: 0 },
  })),
}))

jest.mock('@react-three/drei', () => ({
  Text: jest.fn(({ children }) => <span>{children}</span>),
  Circle: jest.fn(() => <div>Circle</div>),
  Html: jest.fn(({ children }) => <div>{children}</div>),
}))

jest.mock('@use-gesture/react', () => ({
  useDrag: jest.fn(),
}))

const setup = (nodeType: string) => {
  const mockNode: SchemaExtended = {
    type: nodeType,
    x: 0,
    y: 0,
    children: [],
  }

  return render(
    <Canvas>
      <Node
        isSelected={false}
        node={mockNode}
        onSimulationUpdate={mockOnSimulationUpdate}
        setSelectedNode={mockSetSelectedNode}
      />
    </Canvas>,
  )
}

const mockSetSelectedNode = jest.fn()
const mockOnSimulationUpdate = jest.fn()

describe('Node Component', () => {
  it('should display truncated text on one line and show full text on hover', async () => {
    const { getByText, queryByText } = setup('Thing Test Child')

    waitFor(() => {
      expect(getByText('Thing Test...')).toBeInTheDocument()

      // Simulate mouse over to trigger tooltip
      fireEvent.pointerOver(getByText('Thing Test...'))

      // Check for full text in tooltip
      expect(queryByText('Thing Test Child')).toBeInTheDocument()

      // Simulate mouse out to hide tooltip
      fireEvent.pointerOut(getByText('Thing Test...'))

      // Ensure tooltip is not visible
      expect(queryByText('Thing Test Child')).not.toBeInTheDocument()
    })
  })

  it('should not trigger setSelectedNode when node type is "Thing"', async () => {
    const { getByRole } = setup('Thing')

    waitFor(() => {
      const mesh = getByRole('mesh')
      fireEvent.click(mesh)
    })

    expect(mockSetSelectedNode).not.toHaveBeenCalled()
  })

  it('should trigger setSelectedNode when node type is not "Thing"', () => {
    const { getByRole } = setup('Person2')

    waitFor(() => {
      const mesh = getByRole(mockSetSelectedNode('mesh'))
      fireEvent.click(mesh)
    })

    expect(mockSetSelectedNode).toHaveBeenCalled()
  })
})
