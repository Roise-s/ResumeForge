import { FaArrowRightFromBracket } from "react-icons/fa6"

const Main = () => {
  return (
    <div className='main-container'>
        <p className='mainTitle'>Built by a developer <br /> For developers</p>
        <p className='subIntro'>Free and open-source resume builder that helps you create professional resumes in minutes.</p>
        <a href="/create">
          <div className="innerbtn">
            <button className='linkPass'>Create your resume <FaArrowRightFromBracket className="icon" /></button>
          </div>
        </a>
        
    </div>
  )
}

export default Main
