class WebsocketChatController < WebsocketRails::BaseController

  def message_recieve

    # broadcast_message(:websocket_chat, message)

    WebSocketRails[:websocket_with_channel].trigger(:websocket_chat, message)

  end

end