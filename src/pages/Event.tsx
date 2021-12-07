import { Button, Layout, Modal, Row } from 'antd';
import { FC, useState } from 'react';
import EventCalendar from '../components/EventCalendar';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      ></Modal>
    </Layout>
  );
};

export default Event;
