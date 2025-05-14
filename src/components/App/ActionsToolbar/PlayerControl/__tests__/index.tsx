import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { PlayerControl } from '../index'

jest.mock('~/stores/usePlayerStore')
jest.mock('~/stores/useAppStore')
jest.mock('~/stores/useDataStore')

const mockUsePlayerStore = usePlayerStore as unknown as jest.Mock
const mockUseAppStore = useAppStore as unknown as jest.Mock
const mockUseDataStore = useDataStore as unknown as jest.Mock

describe('PlayerControl', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    mockUseAppStore.mockReturnValue([{ sidebarIsOpen: false }, jest.fn()])
    mockUseDataStore.mockReturnValue([{}, jest.fn()])

    mockUsePlayerStore.mockReturnValue([
      false,
      jest.fn(),
      0,
      {
        ref_id: '123',
        node_type: '',
        properties: {
          episode_title: 'Test Episode',
          show_title: 'Test Show',
          image_url: '',
          timestamp: '0-60',
        },
      },
      true,
      jest.fn(),
    ])
  })

  test('renders play button when not playing', () => {
    render(
      <MemoryRouter>
        <PlayerControl />
      </MemoryRouter>,
    )

    waitFor(() => {
      expect(screen.queryByTestId('play-icon')).toBeInTheDocument()
      expect(screen.queryByTestId('pause-icon')).not.toBeInTheDocument()
    })
  })

  test('renders pause button when playing', () => {
    mockUsePlayerStore.mockReturnValueOnce([
      true,
      jest.fn(),
      0,
      {
        ref_id: '123',
        node_type: '',
        properties: {
          episode_title: 'Test Episode',
          show_title: 'Test Show',
          image_url: '',
          timestamp: '0-60',
        },
      },
      true,
      jest.fn(),
    ])

    render(
      <MemoryRouter>
        <PlayerControl />
      </MemoryRouter>,
    )

    waitFor(() => {
      expect(screen.queryByTestId('pause-icon')).toBeInTheDocument()
      expect(screen.queryByTestId('play-icon')).not.toBeInTheDocument()
    })
  })

  test('toggles play/pause on click', () => {
    const setIsPlayingMock = jest.fn()

    mockUsePlayerStore.mockReturnValueOnce([
      false,
      setIsPlayingMock,
      0,
      {
        ref_id: '123',
        node_type: '',
        properties: {
          episode_title: 'Test Episode',
          show_title: 'Test Show',
          image_url: '',
          timestamp: '0-60',
        },
      },
      true,
      jest.fn(),
    ])

    render(
      <MemoryRouter>
        <PlayerControl />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByTestId('play-pause-button'))
    expect(setIsPlayingMock).toHaveBeenCalledWith(true)
  })
})
