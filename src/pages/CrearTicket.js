import React from 'react'
import { Row , Col , Typography , Button} from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const {Title , Text} = Typography;

const CrearTicket = () => {
  
  useHideMenu(true);


  const nuevoTicket = () => {

  }
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>
            Presione el boton para un nuevo Ticket
          </Title>
          <Button 
            type="primary"
            shape="round"
            icon={<DownloadOutlined></DownloadOutlined>}
            size="large"
            onClick={nuevoTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
        <Row style={{marginTop: 100}}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>
              Su numero
            </Text>
            <br />
            <Text type="success" style={{fontSize: 55}}>
              55
            </Text>
          </Col>
        </Row>
    </>
  )
}

export default CrearTicket