import './PageContainer.css'

interface IPageContainerProps {
  children: React.ReactChild
}

const PageContainer = (props: IPageContainerProps) => {
  return (
    <div className='page-container'>
      <div className='center-page-content'>
        {props.children}
      </div>
    </div>
  )
}

export default PageContainer