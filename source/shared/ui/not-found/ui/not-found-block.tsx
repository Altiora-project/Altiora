import { NotFound } from './not-found'

export const NotFoundBlock: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={className} {...otherProps}>
      <NotFound />
    </div>
  )
}
