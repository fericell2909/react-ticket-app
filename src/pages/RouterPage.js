import React , {Redirect} from 'react'
import {BrowserRouter,
    Routes,
    Route,
    Link} from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Ingresar from './Ingresar';
import Cola from './Cola';
import CrearTicket from './CrearTicket';
import Escritorio from './Escritorio';

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem(<Link to="/ingresar">Ingresar</Link>, '1', <UserOutlined />),
    getItem(<Link to="/cola">Cola de tickets</Link>, '2', <UserOutlined />),
    getItem(<Link to="/crear">Crear Tickets</Link>, '3', <UploadOutlined />),
  ];

export const RouterPage = () => {
    return (
        <>
            <BrowserRouter>
            <Layout style={{height: '100vh'}}>
                <Sider>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Routes>
                            <Route path="/ingresar" element={<Ingresar />} />
                            <Route path="/cola" element={<Cola />} />
                            <Route path="/crear" element={<CrearTicket />} />
                            
                            <Route path="/escritorio" element={<Escritorio />} />

                            <Route path="*" element={<>Contenido no Encontrado</>}  />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
            </BrowserRouter>
        </>
    )
}
