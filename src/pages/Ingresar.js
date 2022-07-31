import React from 'react'
import { Button, Form, Input , InputNumber , Typography , Divider} from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Ingresar = () => {

  const onFinish = (values) => {
    history('/escritorio');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const {Title , Text} = Typography;

  const history = useNavigate ();

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su nombre',
            },
          ]}
          wrapperCol={{
            span: 10,
          }}
        >
          <Input style={{textAlign: 'center'}}/>
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: 'Ingrese el numero de escritorio',
            },
          ]}
        >
         <InputNumber style={{textAlign: 'center'}} className='center' min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button shape="round" type="primary" htmlType="submit">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>

    </>
  )
}

export default Ingresar