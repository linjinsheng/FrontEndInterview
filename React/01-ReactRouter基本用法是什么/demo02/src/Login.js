import { useNavigate} from 'react-router-dom'

const Login=()=>{
  const navigate = useNavigate();
  return (
      <div>
        <p>登录页面</p>
        <button onClick={()=> navigate('/home')}>登录</button>
      </div>
  )
}

export default Login;