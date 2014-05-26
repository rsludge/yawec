defmodule Yawec.Channels.Chat do
  use Phoenix.Channel

  def join(socket, topic, message) do
    {:ok, socket}
  end

  def event(socket, "message", message) do
    broadcast socket, "message", content: message["content"], username: message["username"]
    socket
  end
end
