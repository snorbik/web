import styled from 'styled-components'
import { Circle } from '../../../images'

export const Container = styled.div`
  margin: 96px auto;
  position: relative;
  z-index: 0;
`

export const CircleCover = styled(Circle)`
  z-index: -1;
  position: absolute;
  left: 30%;
  top: -50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 40%;
  }
`

export const Card = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius.base}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  flex: 1;
  padding: ${({ theme }) => theme.space.lg}px 0 ${({ theme }) =>
  theme.space.small}px;
    0;
  max-width: ${({ theme }) => theme.contentSize}px;
  box-sizing: content-box;
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.space.none}px;
  }
`

export const Cover = styled.div<{ url: string }>`
  width: 100%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  height: 287px;
  padding: ${({ theme }) => theme.space.lg}px;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.pebble};
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.md}px;
    margin-bottom: 24px;
  }
`
