interface IButton {
  title: string
  className: string
}
export const Button = ({ title, className }: IButton) => {
  return <button className={className}>{title}</button>
}
