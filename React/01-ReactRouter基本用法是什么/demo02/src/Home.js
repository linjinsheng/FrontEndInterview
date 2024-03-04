import { useNavigate} from 'react-router-dom'
const Home=()=>{
    const navigate = useNavigate();
    const handleBack =()=>{
      navigate(-1)
    }
    return (
        <div>
          <p>我是主页</p>
          <button onClick={handleBack}>返回登录页面按钮</button>
        </div>
    )
  }
export default Home