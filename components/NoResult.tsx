interface IProps {
    text: string 
}

const NoResult = ({text}: IProps) => {
  return (
    <div>
        <p>{text}</p>
    </div>
  )
}
export default NoResult