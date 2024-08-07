import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError();
  if(error.status === 404) {
    return <Wrapper>
      <div>
        <img src={img} alt="sorry not found" />
        <h3>Oops!</h3>
        <p>Please verify the URL</p>
        <Link to={'/'}>Go to Home Page</Link>
      </div>
    </Wrapper>
  }
  return (
    <Wrapper>
      <div>
        Something went wrong
      </div>
    </Wrapper>
  )
}

export default Error