import { message } from 'antd';

const messageService = (type = 'success', text = null) => {
  switch (type) {
    case 'success':
      return message.success(text || 'The request is successful');
    default:
      return message.error(text || 'The request failed, please try again');
  }
};

export default messageService;
