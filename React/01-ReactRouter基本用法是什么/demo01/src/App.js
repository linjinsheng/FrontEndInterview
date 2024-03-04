// App.js

// 导入 NavLink 组件
import { Route, Routes, NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='about' element={<About />} />
        <Route path='setting' element={<Setting />} />
        <Route index element={<List />} />
      </Route>
    </Routes>
  );
}

const Home = (props) => {
  return <>
    <div>
      {/* <NavLink /> 接收一个style 或者 className 属性
          属性值为一个回调函数，可以通过 isActive 的值判断
          链接是否处于活动状态，从而实现给活动链接节点添加样式的效果
          示例效果：点击哪个链接，目标链接字体变红
       */}
      <NavLink
        style={({ isActive }) => navColor(isActive)}
        to='/about'
      >
        About Link
      </NavLink> | {" "}
      <NavLink
        style={({isActive}) => navColor(isActive)}
        to='/setting'
      >
        Setting Link
      </NavLink>
    </div>
    <div style={{ padding: '20px', margin: '10px', borderTop: '1px solid' }}>
      <Outlet />
    </div>
  </>;
}

const About = (props) => {
  return <div>
    About Compontent
  </div>;
}

const Setting = (props) => {
  return <div>
    Setting Compontent
  </div>;
}

const List = (props) => {
  return <div>
    List Compontent
  </div>;
}

const navColor = (isActive) => {
  return {color: isActive ? 'red' : ""}
}

export default App;
