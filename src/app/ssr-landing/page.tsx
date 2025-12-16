//main: #03363e
//secondary: #17494c
//terciary: #e4f0d3

import HeaderLanding from "../../components/landing/HeaderLanding"
import PrincipalContent from "../../components/landing/PrincipalContent"
import QuickTour from "../../components/landing/QuickTour"
import SmallMenu from "../../components/landing/SmallMenu"
import TopBanner from "../../components/landing/TopBanner"

const LandingPage = () => {
  return (
    <div>
      <TopBanner />
      <SmallMenu />
      <HeaderLanding />
      <PrincipalContent />
      <QuickTour />
    </div>
  )
}

export default LandingPage