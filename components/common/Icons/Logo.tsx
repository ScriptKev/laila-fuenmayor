import { TIconProps } from './types'

export const Logo = ({ classes = null, height = 59, width = 400, fill = 'none', stroke = 'none', handleClick, isActive = false }: TIconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 400.333 59' fill={fill} stroke={stroke} className={classes}>
      <g transform='translate(-248 703.571)'>
        <text fill='#fff' fontSize='17px' fontFamily='multi' fontWeight={700} letterSpacing='0.7em' transform='translate(281 -686.571)'>
          <tspan x='0' y='0'>
            LAILA
          </tspan>
          <tspan y='0'>FUENMAYOR</tspan>
        </text>

        <text fill='#fff' fontSize='17px' fontFamily='multi' fontWeight={600} letterSpacing='0.03em' transform='translate(360 -648.571)'>
          <tspan x='0' y='0'>
            Coach de Fortalezas
          </tspan>
        </text>

        <path className='c' fill='#c93742' d='M0,0H400.333V4.393H0Z' transform='translate(248 -674.355)' />
      </g>
    </svg>
  )
}
