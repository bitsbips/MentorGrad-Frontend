import { gql } from '@apollo/client';
import { MESSAGE_DETAILS, MESSAGE_SEEN } from './fragments';

export const NEW_MESSAGE = gql`
  subscription {
    newMessage {
      message {
        ...MessageDetails
      }
      type
      participants
    }
  }
  ${MESSAGE_DETAILS}
`;




export const NEW_MESSAGE_NOTIFICATION = gql`
  subscription {
    newMessageNotification {
      message
      receiverId
      conversationId
      senderName
      seenBy
    }
  }
`;



export const USER_ONLINE_STATUS_CHANGE = gql`
  subscription {
    userOnlineStatusChange {
      status
      userId
      username
    }
  }
`;
