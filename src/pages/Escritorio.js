import React, { useState, useEffect, useContext } from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsusarioStorage';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

const Escritorio = () => {

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);
  useHideMenu(false);
  const salir = () => {
    localStorage.clear();
    history('/ingresar');
  }

  const siguienteTicket = () => {
    socket.emit('siguiente-ticket-trabajar', { usuario }, (ticket) => {
      // console.log(ticket);
      setTicket(ticket);
    });
  }

  const [usuario] = useState(getUsuarioStorage)
  const history = useNavigate();

  useEffect(() => {


    if (!usuario.agente || !usuario.escritorio) {

      history('/ingresar');
    }

  }, [])


  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success" >{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button
            shaped="round"
            type="danger"
            onClick={salir}
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider></Divider>
      {
        ticket && (
          <>
            <Row>
              <Col>
                <Text> Está atendiendo el ticket numero :</Text>
                <Text
                  style={{ fontSize: 30 }}
                  type="danger"
                >
                  {ticket.numero}
                </Text>
              </Col>
            </Row>
          </>
        )
      }
      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={siguienteTicket}
            type="primary"
            shape="round"
          >
            <RightOutlined></RightOutlined>
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Escritorio