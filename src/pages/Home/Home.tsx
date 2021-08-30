import './Home.css'
import PageContainer from '../../components/PageContainer/PageContainer'
import StoriesWidget from '../../components/StoriesWidget/StoriesWidget'

const Home = () => {
  return (
    <PageContainer>
      <div className="home-container">
        <div className="stories-posts-container">
          <StoriesWidget />
          <div>Posts</div>
        </div>
        <div className="suggestions-container">
          Suggestions
        </div>
      </div>
    </PageContainer>
  )
}

export default Home