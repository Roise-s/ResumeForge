import "./styles/int.css";
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className="header">
      <div className="innerName">
        <a href="/">
            <p className="projectName">Resume Forge AI</p>
        </a>
      </div>
      <div className="innerBtns">
        <Button className="but">Donate</Button>
      </div>
    </div>
  )
}

export default Header
