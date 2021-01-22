import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import store from '../../store'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import '../styles/index.css'
import Content from '../components/Content'
import SearchBox from '../components/Searchbox'
import Jobtype from '../components/JobType'
import Departaments from '../components/Department'
import WorkSchedule from '../components/WorkSchedule'
import Experience from '../components/Experience'
import RemoveFilters from '../components/RemoveFilter'
const Page = () => {
  return (
    <Provider store={store}>
      <Layout>
        <main className="mainSection">
          <SearchBox />  
          <div className="row row-nomargin">
            <div className="col-md-3 col-custom-left">
              <RemoveFilters />
              <div className="whiteContainer show-on-desktop"><Jobtype /></div>
              <div className="whiteContainer show-on-desktop"><Departaments /></div>
              <div className="whiteContainer show-on-desktop"><WorkSchedule /></div>
              <div className="whiteContainer show-on-desktop"><Experience /></div>
            </div>
            <div className="col-md-9 col-custom-right">
              <div className="whiteContainer">
                <Content />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </Provider>
  )
}

export default Page
