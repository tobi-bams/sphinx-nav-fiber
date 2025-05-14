import styled from 'styled-components'
import { ActionsToolbar } from '~/components/App/ActionsToolbar'

export const Overlay = () => (
  <OverlayWrap>
    <ActionsToolbar />
  </OverlayWrap>
)

const OverlayWrap = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  userSelect: 'none',
  pointerEvents: 'none',
  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  height: '100%',
  width: '100%',
  padding: '16px',
  paddingRight: '0',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    top: 50,
  },
}))
