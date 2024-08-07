import BestIslands from './BodyItems/BestIslands/BestIslands'
import BestPackages from './BodyItems/BestPackages/BestPackages'
import Attractions from './BodyItems/TopAttractions/Attractions'
import FooterCard from './BodyItems/FooterCard/FooterCard'
import ReviewsSection from './BodyItems/ReviewComponent/ReviewsSection'
import TrendingActivities from './BodyItems/TrendingActivities/TrendingActivities'
import Trekking from './BodyItems/Trekking/Trekking'
import BestCruises from './BodyItems/BestCruises/BestCruises'
import GetInTouch from './BodyItems/GetInTouch/GetInTouch'
import FAQs from './BodyItems/FAQs/FAQs'

const BodyArea = () => {
  return (
    <div className='bg-slate-100'>
      <BestPackages />
      <BestIslands />
      <Attractions />
      <BestCruises/>
      <TrendingActivities/>
      <Trekking/>
      <ReviewsSection />
      <FAQs/>
      <GetInTouch />
      <FooterCard />
    </div>
  )
}

export default BodyArea
