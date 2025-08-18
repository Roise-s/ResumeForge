import FQA from '@/components/cnFile/FQA'
import './styles/style.css'
import Liner from '@/components/cnFile/Liner'
import Footer from '@/components/cnFile/Footer'

const LearnMore = () => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 z-50 border-b-0 border-gray-200 bg-white shadow-sm">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Resume Forge AI</span>
            </a>
          </div>
        </nav>
      </header>

        <div className="divSeven">
            <Liner />
            <FQA />
        </div>

        <Footer />
    </>
  )
}

export default LearnMore
